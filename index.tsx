import * as React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './src/components/edit';
import save from './src/components/save';

registerBlockType('learningpathsblock/learningpathsblock-esnext', {
    title: 'Learning Paths Block',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        content: {
            type: "string",
            source: "html",
            selector: "h2",
        }
    },
    edit: _ => (
        <Edit />
    ),
    save
});
