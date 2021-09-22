import * as React from 'react';
import { RichText } from '@wordpress/block-editor';

type SaveProps = {
    attributes: { 
        content: any
    }
};

const Save = ({ ...props }: any) => {
    return (
        <RichText.Content tagName="p" value={ props.attributes.content } />
    );
};

export default Save;