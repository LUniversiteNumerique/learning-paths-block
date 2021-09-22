import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';
import { RichText  } from '@wordpress/block-editor';

interface Attributes {
    content: string | unknown;
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
    const [content, setContent]     = useState('');

    useEffect(() => {
        apiFetch({ url: `${endpoint}/diploma/1` }).then(
            (result) => {
                setIsLoaded(true);
                setData(result);
                setContent('blockc ontent !');
                console.log("props : ", props);
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
        console.log("my data : ", data);
        console.log("my data name : ", data?.name);
        return (
            <div>
                <RichText 
                    className="example-content"
                    value={content}
                    onChange={(content) => props.setAttributes({ content })} />
            </div>
        )
        //return <h3>Data : <i>{ data?.name }</i> loaded!</h3>;
    }

	return (
        <div>
            <RichText 
                className="example-content"
                value={content}
                onChange={(content) => props.setAttributes({ content })} />
        </div>
    );
}

export default Edit;