import React, { useState } from "react";
import AppContext from "../context";


type IChildren = {
  children: string | JSX.Element | JSX.Element[]
}


const AppProvider = ({ children }: IChildren) => {
  const [apiUrl, setApiUrl] = useState<string>('');
  const setUrl = (newUrl: any) => setApiUrl((_: any) => newUrl);

  const [currentData, setData] = useState<any>(null);
  const setCurrentData = (newData: any) => setData((_: any) => newData);

  const [loader, setLoaderState] = useState<boolean>(false);
  const setLoader = (newState: boolean) => setLoaderState((_: boolean) => newState);

  return (
    <AppContext.Provider
      value={{
        apiUrl,
        setUrl,
        currentData,
        setCurrentData,
        loader,
        setLoader
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
