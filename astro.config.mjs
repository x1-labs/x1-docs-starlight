// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'fs';
import * as yaml from 'js-yaml';

const loadSidebar = () => {
	const yamlString = fs.readFileSync("sidebar.yml", "utf8");
	return yaml.load(yamlString)
};


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'X1 Documentation',
			logo: {
				dark: './src/assets/img/x1-logo.svg',
				light: './src/assets/img/x1-logo-light.svg',
				replacesTitle: true,
			},
			// plugins: [starlightThemeRapide()],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			// @ts-ignore
			sidebar: loadSidebar(),
		}),
	],
});
