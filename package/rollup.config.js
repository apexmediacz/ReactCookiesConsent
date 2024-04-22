import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';

const devMode = (process.env.NODE_ENV === 'development');

export default [
	{
		input: "src/index.ts",
		output: {
			file: "dist/index.ts",
			format: "es",
			sourcemap: devMode ? 'inline' : false,
			plugins: [
				typescript(),
				scss({
					outputStyle: 'compressed',
				}),
				terser({
					ecma: 2020,
					mangle: {
						module: true,
						toplevel: true,
					},
					compress: {
						module: true,
						toplevel: true,
						unsafe_arrows: true,
						drop_console: !devMode,
						drop_debugger: !devMode,
					},
					output: {
						quote_style: 1
					}
				})
			]
		}
	}
]