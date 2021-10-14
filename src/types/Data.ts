export type Data =
  | {
      id: number;
      name: string;
      description: string;
      years: Array<{
        name: string;
        ue: Array<{
          name: string;
          resources: Array<{
            name: string;
            type?: string;
            volume?: string;
            url: string;
          }>
        }>
      }>;
    };
