export type IContext = {
  apiUrl: string;
  setUrl: (data: string) => void;
  currentData: any;
  setCurrentData: (data: any) => void;
  loader: boolean;
  setLoader: (data: boolean) => void;
};

export type IChildren = {
  children: string | JSX.Element | JSX.Element[]
};
