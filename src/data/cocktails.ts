export interface Cocktail {
    id: string;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string;
}

export const cocktails: Cocktail[] = [
    {
        id: "1",
        name: "Margarita",
        image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        ingredients: ["4,5 cl tequila", "1,5 cl triple sec", "3 cl limejuice", "Salt"],
        instructions: "Gnid glasets kant med lime och doppa i salt. Skaka resten med is och sila upp i glaset.",

    },
    {
        id: "2",
        name: "Mojito",
        image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
        ingredients: ["5 cl ljus rom", "Saft från 1 lime", "2 tsk socker", "Färsk mynta", "Sodavatten"],
        instructions: "Mosa mynta med socker och limesaft. Fyll med is, häll i rom och toppa med sodavatten.",
    },
];