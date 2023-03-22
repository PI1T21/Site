import { sveltekit } from '@sveltejs/kit/vite';
import type { defineConfig, UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;
