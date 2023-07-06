import React, { useEffect, useState, FunctionComponent } from 'react';
import apiFetch from '@wordpress/api-fetch';
import DataView from './view/DataView';
import Loading from '../frontend/components/Loader';
import { baseURI } from '../utils/utils';


export type EditProps = {
    attributes: Attributes;
    setAttributes: (attributes: Attributes) => void;
};

type Attributes = {
    content: string | any;
};

const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
    const endpoint: string = baseURI;
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        apiFetch({ url: `${endpoint}/fields/all` }).then(
            (result: any) => {
                setIsLoaded(true);
                setData(result);
            },
            (error: string) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <p>Error : {error.message}</p>;
    } else if (!isLoaded) {
        return <Loading />;
    } else if (data && data.fields[0]) {
        props.setAttributes({
            content: data.fields,
        } as any);
        const content = data.fields as Array<any>;
        return (<DataView content={content} />);
    }

    return <div />;
}

export default Edit;