import * as React from 'react';
import Year from './Year';
import type { Data } from '../../types/Data';

const FrontendView = (data: Data): JSX.Element => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
                { data.years && data.years.map((data: any) => {
                    return (<Year {...data} />);
                }) }
            </section>
        </article>
    )
};

export default FrontendView;
