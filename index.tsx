import * as React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './src/components/edit';
import Save from './src/components/save';
import apiFetch from '@wordpress/api-fetch';

const endpoint: string = '/wordpress-5.6/wp-content/plugins/learning-paths-api/api.php';

apiFetch({ url: `${endpoint}/diploma/1` }).then(
    (result) => {
        hookRegister(result);
    },
    (_) => {
        hookRegister({});
    }
);

function hookRegister(attrDefault: any) {
    registerBlockType('learningpathsblock/learningpathsblock-esnext', {
        title: 'Learning Paths Block',
        icon: 'universal-access-alt',
        category: 'design',
        attributes: {
            content: {
                type: "string",
                default: attrDefault
            }
        },
        edit: (props) => <Edit {...props} />,
        save: (props) => <Save {...props} />
    });
}