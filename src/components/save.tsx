import * as React from 'react';

const Save = ({ ...props }: any) => {
    const content = props.attributes.content;
    
    return (
        <div className="lpb-container">
            <ul className="lpb-diploma-list">
                { content && content.map((row : any) => {
                    return (
                        <article className="diploma">
                            <h3 className="diploma-name">{row.name}</h3>
                            { row.years && row.years.map((year : any) => {
                                return (
                                    <>
                                        <h4 className="year-name">{year.name}</h4>
                                        { row.ue && row.ue.map((ue : any) => {
                                            return (
                                                <h5 className="ue-name">{ue.name}</h5>
                                            )
                                        }) }
                                    </>
                                )
                            }) }
                            <section className="lpb-body-data">
                                Ce parcours d’informatique générale permet d’hybrider les enseignements des domaines suivants : concepts informatiques, algorithmique et programmation, systèmes d’exploitation, outils et technologies Internet, bases de données. Il propose également une composante mathématique importante.
                            </section>
                        </article>
                    )
                }) }
            </ul>
            <section className="lpb-body"></section>
        </div>
    )
};

export default Save;