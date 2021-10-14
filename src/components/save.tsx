import * as React from 'react';
import DataView from './view/DataView';

const Save = (props : any) => {
    const content = props.attributes.content;
    return (<DataView content={content} />);
};

export default Save;
