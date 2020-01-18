const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, 
quisquam eaque vel nihil officia culpa ducimus voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. 
Nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, quisquam eaque 
vel nihil officia culpa ducimus voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. Nam! Lorem ipsum dolor 
sit amet consectetur adipisicing elit. Laboriosam, aliquid harum asperiores facilis, quisquam eaque vel nihil officia culpa ducimus 
voluptate temporibus in dolorum, error quos repellat voluptatibus cumque. Nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Laboriosam, aliquid harum asperiores facilis, quisquam eaque vel nihil officia culpa ducimus voluptate temporibus in dolorum, 
error quos repellat voluptatibus cumque. Nam!`;

const threads = [
    {
        id: 0,
        title: "Neon Genesis Evangelion Thread",
        image: require('@/assets/anime/Manga_Book_14_Cover.png'),
        shortContent: lorem,
    },
    {
        id: 1,
        title: "K-On Thread",
        image: require('@/assets/anime/k-on.jpg'),
        shortContent: lorem 
    },
    {
        id: 2,
        title: "JoJo Thread",
        image: require('@/assets/anime/jojo.jpg'),
        shortContent: lorem
    },
    {
        id: 3,
        title: "SAO Thread",
        image: require('@/assets/anime/sao.jpg'),
        shortContent: lorem
    },
    {
        id: 4,
        title: "ReZero Thread",
        image: require('@/assets/anime/rezero.png'),
        shortContent: lorem
    },
];

export const animeBoard = {
    title: "Anime",
    threads: threads
};