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
    {
        id: "3",
        name: "Espresso Martini",
        image: "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
        ingredients: ["5 cl vodka", "2 cl kaffelikör", "3 cl espresso", "1 skvätt sockerlag"],
        instructions: "Fyll en shaker med is, häll i allt och skaka kraftigt. Sila upp i ett kylt martiniglas.",
    },
    {
        id: "4",
        name: "Piña Colada",
        image: "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg",
        ingredients: ["6 cl ljus rom", "4 cl kokosgrädde", "8 cl ananasjuice", "Krossad is"],
        instructions: "Mixa allt med krossad is tills det är slätt. Häll upp i ett kylt glas och garnera med ananas.",
    },
    {
        id: "5",
        name: "Cosmopolitan",
        image: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
        ingredients: ["4 cl vodka", "1,5 cl Cointreau", "1 cl limejuice", "3 cl tranbärsjuice"],
        instructions: "Skaka allt med is och sila upp i ett cocktailglas. Garnera med en limeskiva.",
    },
];