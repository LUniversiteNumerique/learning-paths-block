import React from 'react';
const WPElement = require('@wordpress/element');
import AppProvider from './components/Context';
import App from './components/App';
import { baseURI } from '../utils/utils';


WPElement.render(
    <AppProvider>
        <App apiUrl={baseURI} />
    </AppProvider>,
    document.getElementById('learningpaths-block-root')
);
