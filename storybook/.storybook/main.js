/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-docs"
	],
	framework: "@storybook/react-vite"
};

export default config;
