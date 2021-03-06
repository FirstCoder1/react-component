import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';
import { action } from '@storybook/addon-actions'

//ð This default export determines where your story goes in the story list
export default {
  title: 'Component/Button',
	component: Button,
	argTypes: {
		
		//button
		btnType: {
			description: 'ç±»å',
			defaultValue: 'default',
			control: {
				type: 'select',
				options: ['default', 'primary', 'success', 'warning', 'danger'],
			},
			table: {
				category: 'Button',
				type: { summary: 'default | primary  | success | warning | danger | text' },
			},
		},
		size: {
			description: 'å°ºå¯¸',
			defaultValue: 'medium',
			control: {
				type: 'select',
				options: ['sm','md','lg'],
			},
			table: {
				category: 'Button',
				type: { summary: 'sm | md | lg' },
			},
		},
		label: {
			description: 'æé®æå­',
			control: {
				type: 'text',
			},
			table: {
				category: 'Button',
			},
		},
		color: {
			description: 'é¢è²',
			control: {
				type: 'color',
			},
			table: {
				category: 'Button',
			},
		},
		textColor: {
			description: 'ææ¬é¢è²',
			control: {
				type: 'color',
			},
			table: {
				category: 'Button',
			},
		},
		nativeType: {
			description: 'æé®åçç±»å,å¯åè<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type">HTMLæ å</a>',
			defaultValue: 'button',
			control: {
				type: 'select',
				options: ['submit', 'button', 'reset'],
			},
			table: {
				category: 'Button',
				type: { summary: "submit | button | reset" },
			},
		},
		block: {
			description: 'æ¯å¦ä¸ºååç´ ',
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Button',
			},
		},
		disabled: {
			description: 'æ¯å¦ç¦ç¨',
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Button',
			},
		},
		
		round: {
			description: 'æ¯å¦å¼å¯åè§',
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Button',
			},
		},
		
		href: {
			description: 'è·³è½¬å°å,ä»å¨btnType=linkæ¶ææ',
			control: {
				type: 'text',
			},
			table: {
				category: 'Button',
			},
		},
		onClick: {
			description: 'ç¹å»äºä»¶',
			control: {
				type: null,
			},
			table: {
				category: 'Button',
			},
		},
		//ButtonGroup
		
		className: {
			description: 'æ·»å ç±»å',
			control: {
				type: 'text',
			},
			table: {
				category: 'Button',
			}
		},
	}
} as ComponentMeta<typeof Button>;;

//ð We create a âtemplateâ of how args map to rendering
const Template: ComponentStory<typeof Button>  = (args) => <Button onClick={action('12222')} {...args} />;

// Template.parameters = {
//   docs: { previewSource: 'open' },
// }

export const button = Template.bind({});
button.args = {
  /*ð The args you need here will depend on your component */
  btnType: 'primary',
  size:'md',
  label:'button'
};


