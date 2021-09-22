import * as React from 'react';

type SaveProps = {
    content: {
        type: string,
        source: string,
        selector: string
    },
    data: any
};

const Save = ({ attributes }: any) => {
    console.log(attributes);
    return (
        <div>Saved</div>
    );
};

export default Save;