// The features in this file exist purely to demonstrate the structure
// of the admin feature selector UI.

export const DogFeature = {
    key: 'dog',
    name: 'Dog',
    parentFeature: 'pet_sitting',
    config: {
        favoritePet: 'dog'
    }
}

export const CatFeature = {
    key: 'cat',
    name: 'Cat',
    parentFeature: 'pet_sitting',
    config: {
        favoritePet: 'cat'
    }
}

export const KomodoDragonFeature = {
    key: 'komodo_dragon',
    name: 'Komodo Dragon',
    parentFeature: 'pet_sitting',
    config: {
        favoritePet: 'komodo dragon'
    }
}

export const ColorPinkFeature = {
    key: 'color_pink',
    name: 'Pink',
    parentFeature: 'pet_sitting',
    config: {
        furColor: 'pink'
    }
}

export const ColorGreenFeature = {
    key: 'color_green',
    name: 'Green',
    parentFeature: 'pet_sitting',
    config: {
        furColor: 'green'
    }
}

export const PetSittingFeature = {
    key: 'pet_sitting',
    name: 'Pet Sitting',
    defaultConfig: {
        favoritePet: null,
        furColor: null
    }
}

export const GroomingFeature = {
    key: 'grooming',
    name: 'Grooming',
    parentFeature: 'pet_sitting',
}

export const WalkingFeature = {
    key: 'walking',
    name: 'Walking',
    parentFeature: 'pet_sitting',
}
