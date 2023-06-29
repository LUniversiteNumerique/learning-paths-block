import * as React from 'react';
import strings from '../../utils/strings.utils';


const Loader = (): JSX.Element => {
    return (
        <div className="loader">
            <div className="loader-inner" />
            <h6>{strings.loading}</h6>
        </div>
    );
};

export default Loader;
