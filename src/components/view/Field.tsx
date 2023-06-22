import * as React from 'react';
import { Field as FieldProps } from '../../types/Field';
import Diploma from './Diploma';

const Field = (field: FieldProps): JSX.Element => {
    return (
        <section className="lpb-field">
            <h3 className="lpb-field-name">{field.name}</h3>
            <div className="lpb-field-content">
                {field.diplomas && field.diplomas.map((diploma: any) => {
                    return (<Diploma {...diploma} />);
                })}
            </div>
        </section>
    );
};

export default Field;