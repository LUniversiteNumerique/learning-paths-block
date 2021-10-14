import * as React from 'react';
import strings from '../utils/strings.utils';
import { createRow, createHeader } from '../utils/table.utils';
import type { Resource } from '../types/Resource';
import type { Diploma } from '../types/Diploma';

const DataView = (data : Diploma) => {
    return (
        <article className="lpb-diploma">
            <h4 className="lpb-diploma-name">{data.name}</h4>
            <div className="lpb-diploma-description" dangerouslySetInnerHTML={{ __html: data.description }} />
            <section className="lpb-diploma-body">
            { data.years && data.years.map((year : any) => {
                return (
                    <>
                        <h5>{year.name}</h5>
                        <div className="flex-table">
                            { year.ue && year.ue.map((ue : any) => {
                                return ue.resources && ue.name
                                    ?   <div className="column-wrapper">
                                            <h6 className="lpb-ue-name">{ ue.name }</h6>
                                            <div className="column header">
                                                { createHeader(strings.thead) }
                                            </div>
                                            { ue.resources 
                                                && ue.resources.map((resource: Resource): JSX.Element => {
                                                return createRow(resource, "resource")
                                            }) }
                                        </div> 
                                    :   null
                            }) }
                        </div>
                    </>
                )
            }) }
            </section>
        </article>
    )
};

export default DataView;
