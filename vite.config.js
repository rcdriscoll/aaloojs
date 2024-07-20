import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Aaloo',
            fileName: (format) => `aaloo.${format}.js`
        },
        rollupOptions: {
            // Ensure to externalize deps that shouldn't be bundled
            // into your library
            external: [],
            output: {
                // Provide global variables to use in the UMD build
                // Add globals here if you have external dependencies
                globals: {}
            }
        }
    }
});
