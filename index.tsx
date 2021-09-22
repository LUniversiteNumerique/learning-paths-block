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
            default: "hello world"
        }
    },
    edit: (props) => <Edit {...props} />,
    save: (props) => {
        let { attributes: { content } } = props;
        // @ts-expect-error The type given is more strict than the definition
        let ct: string = content;
        return (
          <div>
            <p>{ ct }</p>
          </div>
        )
      }
});
