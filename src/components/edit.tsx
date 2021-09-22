import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { RichText  } from '@wordpress/block-editor';

interface Attributes {
    content: string | any;
	//data: { type: string; default: ''; }
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
    } else if (data) {
        props.setAttributes({ content: data?.name });
        return (
            <div>
                <RichText 
                    className="example-content"
                    value={data?.name}
                    onChange={(_) => props.setAttributes({ content: data?.name })} />
            </div>
        )
    }
	return <div>...</div>;
}

export default Edit;