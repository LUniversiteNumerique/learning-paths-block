import * as React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './src/components/edit';
import Save from './src/components/save';

registerBlockType('learningpathsblock/learningpathsblock-esnext', {
    title: 'Learning Paths Block',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        content: {
            type: "string",
            default: "hello world"
        },
        data: {
            type: "string",
        }
    },
    edit: (props) => <Edit {...props} />,
    save: (props) => <Save {...props} />
});
