import * as React from 'react';
import strings from '../utils/strings.utils';
import { Resource } from '../types/Resource';
import { Diploma } from '../types/Diploma';
import { createRow, createHeader } from '../utils/table.utils';

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
                        <table>
                            <thead>
                                <tr>{createHeader(strings.thead)}</tr>
                            </thead>
                            { year.ue && year.ue.map((ue : any) => {
                                return ue.resources 
                                    ? <tbody>
                                        { ue.resources 
                                            && ue.resources.map((resource: Resource, i: number): JSX.Element => {
                                            return createRow(resource, ue, "resource", ue.resources.length, i)
                                        }) }
                                    </tbody> 
                                    : null
                            }) }
                        </table>
                    </>
                )
            }) }
            </section>
        </article>
    )
};

export default DataView;