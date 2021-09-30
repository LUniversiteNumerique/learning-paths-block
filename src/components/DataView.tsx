import * as React from 'react';
import strings from '../utils/strings.utils';
import { Resource } from '../types/Resource';
import { createRow, createHeader } from '../utils/table.utils';

const DataView = (props : any) => {
    const content = props.content;
    return (
        <div className="lpb-container">
            <ul className="lpb-diploma-list">
                { content && content.map((row : any) => {
                    return (
                        <section className="lpb-field">
                            <h3 className="lpb-field-name">{row.name}</h3>
                            { row.diplomas && row.diplomas.map((diploma : any) => {
                                return (
                                    <article className="lpb-diploma">
                                        <h4 className="lpb-diploma-name">{diploma.name}</h4>
                                        <section className="lpb-diploma-body">
                                            <div className="lpb-diploma-description"
                                                dangerouslySetInnerHTML={{__html: diploma.description}} />
                                            { diploma.years && diploma.years.map((year : any) => {
                                                return (
                                                    <>
                                                        <h4>{year.name}</h4>
                                                        <table>
                                                            <thead>
                                                                
                                                                <tr>
                                                                    {createHeader(strings.thead)}
                                                                </tr>
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
                            }) }
                        </section>
                    )
                }) }
            </ul>
            <section className="lpb-body"></section>
        </div>
    )
};

export default DataView;