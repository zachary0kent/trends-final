export enum DietaryRestrictions {
    VEGAN = 'vegan',
    VEGETARIAN = 'vegetarian',
    GF = 'gf'
};

export enum Cuisine {
    ITALIAN = 'italian',
    MEXICAN = 'mexican',
    KOREAN = 'korean',
    AMERICAN = 'american'
};

export type Recipe = {
    name: string;
    prepTime: string;
    cuisine: string;
    restrictions: string[];
    ingredients: string[];
    id?: string;
};