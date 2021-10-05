import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';
import DataView from './DataView';
import { baseURI } from '../utils/utils';

interface Attributes {
    content: string | any;
}

interface EditProps {
	attributes: Attributes;
	setAttributes: (attributes: Attributes) => void;
}

const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
    const endpoint: string          = baseURI;
    const [error, setError]         = useState<any>(null);
    const [data, setData]           = useState<any>(null);
    const [isLoaded, setIsLoaded]   = useState(false);

    useEffect(() => {
        apiFetch({ url: `${endpoint}/fields/all` }).then(
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
    } else if (data && data.fields[0]) {
        props.setAttributes({ 
            content: data.fields,
        } as any);
        const content = data.fields as Array<{}>;
        return ( <DataView content={content} /> );
    }

	return <div />;
}

export default Edit;