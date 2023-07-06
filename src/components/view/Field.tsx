import * as React from 'react';
import Diploma from './Diploma';
import type { Props as DiplomaProps } from './Diploma';


export type Props = {
    name: string;
    diplomas: DiplomaProps[];
};

const Field = (field: Props): JSX.Element => {
    return (
        <section className="lpb-field">
            <h3 className="lpb-field-name">{field.name}</h3>
            <div className="lpb-field-content">
                {field.diplomas && field.diplomas.map((diploma: any) => {
                    return (<Diploma {...diploma} key={diploma.id} />);
                })}
            </div>
        </section>
    );
};

export default Field;