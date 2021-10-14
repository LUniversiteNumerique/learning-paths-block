import type { Resource } from './Resource';

export type Diploma = {
    id: number;
    name: string;
    description: string;
    years: Year[];
};

type Year = {
    name: string;
    ue: UE[];
}

type UE = {
    name: string;
    resources: Resource[];
};