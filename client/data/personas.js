import { deepClone } from "../util/util";

function faceUrl(face) {
    return 'https://psi.newpublic.org/faces/' + face;
}

export function demoPersonaToFbUser(persona) {
    return {uid: persona.key, displayName: persona.name, photoURL: persona.photoUrl};
}

export const personaA = {
    key: 'a',
    name: 'Alice Adams',
    photoUrl: faceUrl('face9.jpeg'),
    tag: "journalist",
    badge: "https://images.radio-canada.ca/q_auto,w_1200/v1/ici-info/perso/logo-papillon-radio-canada.jpg",
    organization: "CBC/RADIO-CANADA"
};

export const personaB = {
    key: 'b',
    name: 'Bob Bauer',
    photoUrl: faceUrl('face10.jpeg')
};

export const personaC = {
    key: 'c',
    name: 'Camila Costa',
    photoUrl: faceUrl('face7.jpeg')
};

export const personaD = {
    key: 'd',
    name: 'Daniel Dubois',
    photoUrl: faceUrl('face2.jpeg')
};

export const personaE = {
    key: 'e',
    name: 'Emeka Eze',
    photoUrl: faceUrl('face4.jpeg')
};

export const personaF = {
    key: 'f',
    name: 'Finn Fischer',
    photoUrl: faceUrl('face3.jpeg')
};

export const personaG = {
    key: 'g',
    name: 'Grace Gomes',
    photoUrl: faceUrl('face8.jpeg')
};

export const personaH = {
    key: 'h',
    name: 'Hiroshi Hasegawa',
    photoUrl: faceUrl('face6.jpeg')
};

export const personaI = {
    key: 'i',
    name: 'Ingrid Ishida',
    photoUrl: faceUrl('face5.jpeg')
};

export const personaJ = {
    key: 'j',
    name: 'Jamal Joubert',
    photoUrl: faceUrl('face1.jpeg'),
};

export const personaK = {
    key: 'k',
    name: 'Keita Khan',
    photoUrl: faceUrl('face3.jpeg'),
};

export const personaL = {
    key: 'l',
    name: 'Larry Leclerc',
    photoUrl: faceUrl('face4.jpeg'),
}

export const personaX = {
    key: 'x',
    name: 'Xavier Xerxes',
    hue: 183
}

export const personaY = {
    key: 'y',
    name: 'yoghurt',
    hue: 50
}

export const personaZ = {
    key: 'z',
    name: 'zipedeedoodah',
    hue: 250
}

export const personaJournalistA = {
    key: 'journalistA',
    name: 'Emeka Eze',
    hue: 250,
    tag: "journalist",
    photoUrl: faceUrl('face4.jpeg'),
    badge: "https://images.radio-canada.ca/q_auto,w_1200/v1/ici-info/perso/logo-papillon-radio-canada.jpg",
    organization: "CBC/RADIO-CANADA"
}

export const defaultPersona = 'a';

export const defaultPersonaList = [personaA, personaB, personaC, personaD, personaE, personaF,
    personaG, personaH, personaI, personaJ, personaK, personaL,
    personaX, personaY, personaZ, personaJournalistA
];

export function personaListToMap(personas) {
    const result = {};
    personas.forEach(persona => result[persona.key] = deepClone(persona));
    return result;
}

