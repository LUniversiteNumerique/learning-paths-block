import * as React from 'react';


export interface Props {
    id: number;
    name: string;
}

const Diploma = (diploma: Props): JSX.Element => {
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