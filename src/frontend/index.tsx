import * as React from 'react';
const WPElement = require('@wordpress/element');
import AppProvider from './components/Context';
import App from './components/App';

const apiUrl = 'https://test.luniversitenumerique.fr/wp-json/learningpathsapi/v1';

WPElement.render(
    <AppProvider>
        <App apiUrl={apiUrl} />
    </AppProvider>,
    document.getElementById('learningpaths-block-root')
);
