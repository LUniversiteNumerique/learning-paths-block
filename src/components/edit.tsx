import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';

interface Attributes {
    content: string | any;
}

interface EditProps {
	attributes: Attributes;
	setAttributes: (attributes: Attributes) => void;
}

const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
    const endpoint: string = '/wordpress-5.6/wp-content/plugins/learning-paths-api/api.php';
    const [error, setError]         = useState<any>(null);
    const [data, setData]           = useState<any>(null);
    const [isLoaded, setIsLoaded]   = useState(false);

    useEffect(() => {
        apiFetch({ url: `${endpoint}/diploma/1` }).then(
            (result) => {
                setIsLoaded(true);
                setData(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);
    
    if (error) {
        return <p>Error : { error.message }</p>;
    } else if (! isLoaded) {
        return <p>Loading data...</p>;
    } else if (data && data.diplomas[0]) {
        props.setAttributes({ 
            content: data.diplomas, 
        } as any);

        const content = data?.diplomas;

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
    }
	return <div>...</div>;
}

export default Edit;