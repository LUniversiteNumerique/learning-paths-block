import { registerBlockType } from '@wordpress/blocks';
import App from './src/components/App';

const wrapper = document.createElement('div');
wrapper.classList.add('learning-paths-block');

registerBlockType('learningpathsblock/learningpathsblock-esnext', {
    title: 'Learning Paths Block',
    icon: 'universal-access-alt',
    category: 'design',
    save() { 
        return (
            <div>
                Hello World !
                <App />
            </div>
        );
    },
    attributes: {}
});
