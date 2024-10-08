const { readFileSync } = require('fs');
const postmark = require('postmark');
const Mustache = require('mustache');
const path = require('path');
const { firebaseGetUserAsync } = require('./firebaseutil');

const domain = "https://psi.newpublic.org/";


var postmark_key = null;
function setPostmarkKey(key) {
    postmark_key = key;
}
exports.setPostmarkKey = setPostmarkKey;

async function sendEmailAsync(emailFields) {
    if (!postmark_key) {
        throw new Error('Postmark key not set');
    }

    const client = new postmark.ServerClient(postmark_key);
    try {
        const result = await client.sendEmail(emailFields)
        return result;
    } catch (error) {
        console.error('Unable to send email via postmark: ' + error);
        return null;
    }
}
exports.sendEmailAsync = sendEmailAsync;

// TODO: Allow for templates to be stored outside np-platform
async function sendTemplatedEmailAsync({toUserId, toPersona, templateId, language, siloKey, structureKey, instanceKey, ...data}) {
    const toUser = await firebaseGetUserAsync(toUserId);
    const templateDir = path.join(path.dirname(__dirname), 'email-template');
    const jsonText = readFileSync(path.join(templateDir, templateId + '.json'), 'utf8').toString();
    const htmlTemplate = readFileSync(path.join(templateDir, templateId + '.html'), 'utf8').toString();
    const textTemplate = readFileSync(path.join(templateDir, templateId + '.txt'), 'utf8').toString();
    const stringMap = JSON.parse(jsonText);
    const stringsForLanguage = stringMap[language.toLowerCase() ?? 'english'];

    const LINK = domain + '/' + siloKey + '/' + structureKey + '/' + instanceKey;

    const HtmlBody = Mustache.render(htmlTemplate, {...stringsForLanguage, ...data, LINK});
    const TextBody = Mustache.render(textTemplate, {...stringsForLanguage, ...data, LINK});
    const Subject = Mustache.render(stringsForLanguage.SUBJECT, data);
    const emailFields = {
        From: Mustache.render(stringsForLanguage.FROM, {...data, siloKey}),
        To: toPersona.name + ' <' + toUser.email + '>',
        Subject, HtmlBody, TextBody
    }

    return await sendEmailAsync(emailFields);
}
exports.sendTemplatedEmailAsync = sendTemplatedEmailAsync;
