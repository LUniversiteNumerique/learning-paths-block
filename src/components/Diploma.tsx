import * as React from 'react';
import { Diploma as DiplomaProps } from '../types/Diploma';

const Diploma = (diploma: DiplomaProps): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 
                className="lpb-diploma-name" 
                data-lpb-id={diploma.id}
            >
                {diploma.name}
            </h4>
        </article>
    )
};

export default Diploma;