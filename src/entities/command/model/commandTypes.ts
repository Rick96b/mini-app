export type Command = {
    name: string;
    members: string[];
    imageLink: string;
    raiting: number;
    raiting_history: {
        raiting: number,
        message: string
    }[]
    buildings: string[]
    achievements: string[]
    items: string[]
}