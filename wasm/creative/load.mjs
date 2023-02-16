import { instantiate } from './myapp.uninstantiated.mjs';

instantiate(wasmSetup);

console.log("Ready " +  performance.now());