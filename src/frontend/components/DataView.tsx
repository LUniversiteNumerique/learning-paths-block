import * as React from 'react';
import Year from './Year';
import type { Data as DataProps } from '../../types/Data';
import type { ResourceData } from '../../types/Data';
import { createRow } from '../../utils/table.utils';

const DataView = (data: DataProps): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
                { data.years && data.years.map((data: any) => {
                    return (<Year {...data} />);
                }) }
                { data.resources && data.resources.map((resource: ResourceData): JSX.Element => {
                    return createRow(resource, "resource")
                }) }
            </section>
        </article>
    )
};

export default DataView;
