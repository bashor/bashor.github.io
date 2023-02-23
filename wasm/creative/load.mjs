import { instantiate } from './myapp.uninstantiated.mjs';

instantiate(wasmSetup, { skia: {} });

console.log("Ready " +  performance.now());