import * as React from 'react';

const DataView = (props : any) => {
    const content = props.content;
    return (
        <div className="lpb-container">
            <ul className="lpb-diploma-list">
                { content && content.map((row : any) => {
                    return (
                        <section className="lpb-field">
                            <h3 className="diploma-name">{row.name}</h3>
                            { row.diplomas && row.diplomas.map((diploma : any) => {
                                return (
                                    <article className="diploma">
                                        <h4 className="diploma-name">{diploma.name}</h4>
                                        { diploma.years && diploma.years.map((year : any) => {
                                            return (
                                                <>
                                                    <h4>
                                                        {year.name}
                                                    </h4>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Unités d’enseignement </th>
                                                                <th>Ressources</th>
                                                                <th>Types</th>
                                                                <th>Volumes approximatifs</th>
                                                            </tr>
                                                        </thead>
                                                        { year.ue && year.ue.map((ue : any) => {
                                                            return ue.resources 
                                                                ?   <tbody>
                                                                        { ue.resources && ue.resources.map((resource: any, i: number) => {
                                                                            return i > 0 
                                                                                ?   <tr>
                                                                                        <td className="resource-name">
                                                                                            {resource.name}
                                                                                        </td>
                                                                                        <td className="resource-name">
                                                                                            {resource.type}
                                                                                        </td>
                                                                                        <td className="resource-name">
                                                                                            {resource.volume}
                                                                                        </td>
                                                                                    </tr>
                                                                                :   <tr>
                                                                                        <th rowSpan={ue.resources.length+1}>
                                                                                            {ue.name}
                                                                                        </th>
                                                                                        <td className="resource-name">
                                                                                            {resource.name}
                                                                                        </td>
                                                                                        <td className="resource-name">
                                                                                            {resource.type}
                                                                                        </td>
                                                                                        <td className="resource-name">
                                                                                            {resource.volume}
                                                                                        </td>
                                                                                    </tr>
                                                                        }) }
                                                                    </tbody> : null
                                                        }) }
                                                    </table>
                                                </>
                                            )
                                        }) }
                                        <section className="lpb-body-data">{diploma.description}</section>
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