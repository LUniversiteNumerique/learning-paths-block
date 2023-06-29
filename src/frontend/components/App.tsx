import React, { useContext, useEffect } from 'react';
import View from './View';
import Modal from './Modal';
import AppContext from '../context';


export type AppProps = {
    apiUrl: string;
};

const App = (params: AppProps): JSX.Element => {
    const { setUrl } = useContext(AppContext);

    useEffect(() => {
        setUrl(params.apiUrl);
    }, []);

    return (
        <>
            <View {...params} />
            <Modal />
        </>
    );
}

export default App;
