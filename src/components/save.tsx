import * as React from 'react';
import DataView from './DataView';

const Save = ({ ...props }: any) => {
    const content = props.attributes.content;
    return <DataView {...content} />;
};

export default Save;