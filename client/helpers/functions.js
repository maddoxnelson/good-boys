import { s3Bucket } from './../apis';

export const pathFormatter = (path, breed) => {
    const categoryId = path.split('_')[0];
    return `${categoryId}-${breed}/${path}`;
}

export const formatBreedName = breed => {
    const regex = /(-|_|,)/gi
    return breed.replace(regex, ' ');
}