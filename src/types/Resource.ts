export type Resource = {
    [key: string]: string | number;
    [index: number]: string;

    name: string;
    type: string;
    volume: string;
    url: string;
};
