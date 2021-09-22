import React, { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';
import axios, { Method } from 'axios';

type EditProps = {

};

type FetchProps = {
    url: string,
    path: string,
    data: any,
    method: string
};

const Edit = ({}: EditProps) => {
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
        console.log("my data : ", data);
        console.log("my data name : ", data?.name);
        return <h3>Data : <i>{ data?.name }</i> loaded!</h3>;
    }

	return (
		<p>
			Hi from the editor
		</p>
	);
}

export default Edit;