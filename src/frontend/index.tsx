import React from 'react';
const WPElement = require('@wordpress/element');
import AppProvider from './components/AppProvider';
import App from './components/App';
import { baseURI } from '../utils/utils';

if (document.getElementById("learningpaths-block-root")) {
    console.log('exists');
    WPElement.render(
        <AppProvider>
            <App apiUrl={baseURI}/>
        </AppProvider>,
        document.getElementById('learningpaths-block-root')
    );
}else{
    console.log('nope this time');
}
