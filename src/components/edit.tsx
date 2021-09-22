import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { RichText  } from '@wordpress/block-editor';

interface Attributes {
    content: string | any;
	data: string | any;
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
    
    const selectDiploma = (id: string | number) => {
        console.log(id);
    }

    if (error) {
        return <p>Error : { error.message }</p>;
    } else if (! isLoaded) {
        return <p>Loading data...</p>;
    } else if (data) {
        props.setAttributes({ content: data } as any);

        return (
            <div>
                { data?.diplomas.map((row : any) => {
                    return (
                        <>
                            <h3 onClick={ () => selectDiploma(row.id) }>{row.name}</h3>
                            { row.years && row.years.map((year : any) => {
                                return (
                                    <>
                                        <h4>{year.name}</h4>
                                        { row.ue && row.ue.map((ue : any) => {
                                            return (
                                                <h5>{ue.name}</h5>
                                            )
                                        }) }
                                    </>
                                )
                            }) }
                        </>
                    )
                }) }
            </div>
        )
    }
	return <div>...</div>;
}

export default Edit;