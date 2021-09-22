import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {

};

const App = ({}: Props) => {
    const endpoint: string = '/wordpress-5.6/wp-content/plugins/learning-paths-api/api.php';
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${endpoint}/diploma/1`)
            .then(data => {
                return data.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [data]);

    console.log(data);

    return (
        <div>Hello from saved</div>
    );
};

export default App;