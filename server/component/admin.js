const { firebaseReadAsync } = require("../util/firebaseutil");

async function getIsUserAdminAsync({siloKey, userEmail}) {
    const adminEmails = await firebaseReadAsync(['silo', siloKey, 'module-public', 'admin', 'adminEmails']);
    const emailDomain = userEmail?.split('@')[1];
    const isTest = process.env.NODE_ENV == 'test';
    if (adminEmails?.includes(userEmail) || (isTest && emailDomain == 'admin.org')) {
        return true;
    } else {
        return false;
    }
}

exports.getIsUserAdminAsync = getIsUserAdminAsync;
