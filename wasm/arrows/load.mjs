import { instantiate } from './kotlin-wasm-browser-example-wasm-js.uninstantiated.mjs';

await wasmSetup;

instantiate({ skia: Module['asm'] });
