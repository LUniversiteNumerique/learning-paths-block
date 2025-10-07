import { createContext } from "react";


type IContext = {
  apiUrl: string;
  setUrl: (data: string) => void;
  currentData: any;
  setCurrentData: (data: any) => void;
  loader: boolean;
  setLoader: (data: boolean) => void;
}

const defaultState = {
  apiUrl: '',
  setUrl: () => '',
  currentData: null,
  setCurrentData: () => ({}),
  loader: false,
  setLoader: () => false
};

const AppContext = createContext<IContext>(defaultState);
export default AppContext;
