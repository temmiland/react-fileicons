/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-docs"
	],
	framework: "@storybook/react-webpack5"
};

export default config;
