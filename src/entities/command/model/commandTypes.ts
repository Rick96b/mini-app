export type Command = {
    name: string;
    members: string[];
    raiting: number;
    raiting_history: {
        raiting: number,
        message: string
    }[]
    buildings: string[]
}