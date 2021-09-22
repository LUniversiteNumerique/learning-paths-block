import * as React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './src/components/edit';
import save from './src/components/save';

interface Attributes {
    content: string | unknown,
	//data: { type: string; default: ''; }
}

interface EditProps {
	[key: string]: unknown;
	className: string;
	attributes: Attributes;
	setAttributes: (attributes: any) => void;
}

registerBlockType('learningpathsblock/learningpathsblock-esnext', {
    title: 'Learning Paths Block',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        content: "string",
        /*data: {
            type: "string",
            default: ""
        }*/
    },
    edit: ({ attributes, setAttributes }) => <Edit attributes={attributes} setAttributes={setAttributes} />,
    save: (props) => {
        let { attributes: { content } } = props;
        console.log("saved :::: ", content);
        return (
          <div>
            <p>"test"</p>
          </div>
        )
      }
});
