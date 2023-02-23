
export async function instantiate(imports={}, runInitializer=true) {
    const externrefBoxes = new WeakMap();
    // ref must be non-null
    function tryGetOrSetExternrefBox(ref, ifNotCached) {
        if (typeof ref !== 'object') return ifNotCached;
        const cachedBox = externrefBoxes.get(ref);
        if (cachedBox !== void 0) return cachedBox;
        externrefBoxes.set(ref, ifNotCached);
        return ifNotCached;
    }
    
    async function _importModule(x) { 
        return imports[x] ?? await import(x);
    }


    
    const js_code = {
        'kotlin.captureStackTrace_1494733985' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_-902529229' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-1629742127' : () => '',
        'kotlin.wasm.internal.getJsTrue_1351509539' : () => true,
        'kotlin.wasm.internal.getJsFalse_12628172' : () => false,
        'kotlin.wasm.internal.stringLength_-1883924806' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_1013379442' :  (src, srcOffset, srcLength, dstAddr) => {
                const mem16 = new Uint16Array(wasmExports.memory.buffer, dstAddr, srcLength);
                let arrayIndex = 0;
                let srcIndex = srcOffset;
                while (arrayIndex < srcLength) {
                    mem16.set([src.charCodeAt(srcIndex)], arrayIndex);
                    srcIndex++;
                    arrayIndex++;
                }
            }
        ,
        'kotlin.wasm.internal.newJsArray_765306016' : () => [],
        'kotlin.wasm.internal.jsArrayPush_1229915637' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_-1672586291' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_695605870' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_2096472649' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_-1701045949' : 
        (() => {
        const dataView = new DataView(new ArrayBuffer(8));
        function numberHashCode(obj) {
            if ((obj | 0) === obj) {
                return obj | 0;
            } else {
                dataView.setFloat64(0, obj, true);
                return (dataView.getInt32(0, true) * 31 | 0) + dataView.getInt32(4, true) | 0;
            }
        }
        
        const hashCodes = new WeakMap();
        function getObjectHashCode(obj) {
            const res = hashCodes.get(obj);
            if (res === undefined) {
                const POW_2_32 = 4294967296;
                const hash = (Math.random() * POW_2_32) | 0;
                hashCodes.set(obj, hash);
                return hash;
            }
            return res;
        }
        
        function getStringHashCode(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                var code  = str.charCodeAt(i);
                hash  = (hash * 31 + code) | 0;
            }
            return hash;
        }
        
        return (obj) => {
            if (obj == null) {
                return 0;
            }
            switch (typeof obj) {
                case "object":
                case "function":
                    return getObjectHashCode(obj);
                case "number":
                    return numberHashCode(obj);
                case "boolean":
                    return obj;
                default:
                    return getStringHashCode(String(obj)); 
            }
        }
        })(),
        'kotlin.wasm.internal.isNullish_2125605423' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_2051140004' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.io.printlnImpl_-643898611' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_a2gugx_1047327152' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_av0oxv_2051471498' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_a8x3tm_-1465593787' : (f) => () => wasmExports.__callFunction_a8x3tm(f, ),
        'kotlin.random.initialSeed_63485253' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.window_$external_prop_getter_-2098271350' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-1379331201' : () => document,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_3t3ym0_-1645137598' : (f) => (p0) => wasmExports.__callFunction_3t3ym0(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_-1039445100' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_-642266219' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.setProperty_$external_fun_543334149' : (_this, p0, p1, p2, isDefault0) => _this.setProperty(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.css.style_$external_prop_getter_-2060457795' : (_this) => _this.style,
        'org.w3c.dom.events.timeStamp_$external_prop_getter_-764182903' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_-189080213' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_1793054086' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_-13182567' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-400688785' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_702095686' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_1677127725' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_370639753' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_1693199370' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_-1119493547' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_-1374230092' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_528050209' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_1262259415' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_-268695323' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-1135638355' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_-32853884' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_942178155' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-364309817' : (_this) => _this.metaKey,
        'org.w3c.dom.events.keyCode_$external_prop_getter_502736206' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_1831048041' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_-203765932' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_1382565343' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_-2030431356' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_2009799395' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_-899546325' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.document_$external_prop_getter_-1905290564' : (_this) => _this.document,
        'org.w3c.dom.location_$external_prop_getter_988443618' : (_this) => _this.location,
        'org.w3c.dom.navigator_$external_prop_getter_-801418240' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_614624254' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_-230111220' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_5jywik_-1355414305' : (f) => (p0) => wasmExports.__callFunction_5jywik(f, p0),
        'org.w3c.dom.id_$external_prop_setter_14858480' : (_this, v) => _this.id = v,
        'org.w3c.dom.classList_$external_prop_getter_2130632333' : (_this) => _this.classList,
        'org.w3c.dom.clientWidth_$external_prop_getter_59439116' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_1490937237' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_-1499581984' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.scrollIntoView_$external_fun_755577480' : (_this, ) => _this.scrollIntoView(),
        'org.w3c.dom.Element_$external_class_instanceof_1248589159' : (x) => x instanceof Element,
        'org.w3c.dom.HTMLDivElement_$external_class_instanceof_-1380649535' : (x) => x instanceof HTMLDivElement,
        'org.w3c.dom.createElement_$external_fun_-36449163' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
        'org.w3c.dom.getElementById_$external_fun_-1446375583' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.text_$external_prop_setter_1849890782' : (_this, v) => _this.text = v,
        'org.w3c.dom.HTMLAnchorElement_$external_class_instanceof_-143529177' : (x) => x instanceof HTMLAnchorElement,
        'org.w3c.dom.hash_$external_prop_getter_47503086' : (_this) => _this.hash,
        'org.w3c.dom.add_$external_fun_292155913' : (_this, p0) => _this.add(...p0),
        'org.w3c.dom.remove_$external_fun_408627526' : (_this, p0) => _this.remove(...p0),
        'org.w3c.dom.width_$external_prop_getter_-1799847906' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_1445671524' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_2097940509' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_1048492643' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_778458916' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.dom.language_$external_prop_getter_-1236274754' : (_this) => _this.language,
        'org.w3c.dom.ownerDocument_$external_prop_getter_928765851' : (_this) => _this.ownerDocument,
        'org.w3c.dom.appendChild_$external_fun_-489147569' : (_this, p0) => _this.appendChild(p0),
        'org.w3c.dom.href_$external_prop_getter_1607349836' : (_this) => _this.href,
        'org.w3c.dom.href_$external_prop_setter_-2045623924' : (_this, v) => _this.href = v,
        'org.w3c.performance.performance_$external_prop_getter_-1013919288' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_1789335791' : (_this, ) => _this.now(),
        'kotlinx.coroutines.clearTimeout_2026502685' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_1104298490' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl.stringToUTF8_$external_fun_-2097732791' : (p0, p1, p2) => stringToUTF8(p0, p1, p2),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_2087696921' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skia.impl.HEAPU8_$external_object_getInstance_402607963' : () => HEAPU8,
        'org.jetbrains.skia.impl.HEAPU32_$external_object_getInstance_-1202582604' : () => HEAPU32,
        'org.jetbrains.skia.impl.HEAPF32_$external_object_getInstance_-1854101723' : () => HEAPF32,
        'org.jetbrains.skia.impl.HEAPF64_$external_object_getInstance_-1142173756' : () => HEAPF64,
        'org.jetbrains.skiko.wasm.createContext_$external_fun_1317814535' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_-1928546883' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_905513789' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_-1186437476' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_q09q20_-1736253352' : (f) => (p0) => wasmExports.__callFunction_q09q20(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_1968222516' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_-1318543203' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skia.impl.set_-137021092' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_287140409' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_-632837437' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_634180588' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_1535473520' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.set_-1415523995' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_287140409' : (dest, index) => dest[index],
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_-2333702' : () => {
            return {
                alpha: 1,
                depth: 1,
                stencil: 8,
                antialias: 0,
                premultipliedAlpha: 1,
                preserveDrawingBuffer: 0,
                preferLowPowerToHighPerformance: 0,
                failIfMajorPerformanceCaveat: 0,
                enableExtensionsByDefault: 1,
                explicitSwapControl: 0,
                renderViaOffscreenBackBuffer: 0,
                majorVersion: 1,
            }
        }
        
    }
    
    // Placed here to give access to it from externals (js_code)
    let wasmInstance;
    let require; 
    let wasmExports;

    const isNodeJs = (typeof process !== 'undefined') && (process.release.name === 'node');
    const isStandaloneJsVM =
        !isNodeJs && (
            typeof d8 !== 'undefined' // V8
            || typeof inIon !== 'undefined' // SpiderMonkey
            || typeof jscOptions !== 'undefined' // JavaScriptCore
        );
    const isBrowser = !isNodeJs && !isStandaloneJsVM && (typeof window !== 'undefined');
    
    if (!isNodeJs && !isStandaloneJsVM && !isBrowser) {
      throw "Supported JS engine not detected";
    }
    
    const wasmFilePath = './myapp.wasm';
    const importObject = {
        js_code,
        'skia': await _importModule('skia'),

    };
    
    try {
      if (isNodeJs) {
        const module = await import(/* webpackIgnore: true */'node:module');
        require = module.default.createRequire(import.meta.url);
        const fs = require('fs');
        const path = require('path');
        const url = require('url');
        const filepath = url.fileURLToPath(import.meta.url);
        const dirpath = path.dirname(filepath);
        const wasmBuffer = fs.readFileSync(path.resolve(dirpath, wasmFilePath));
        const wasmModule = new WebAssembly.Module(wasmBuffer);
        wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
      }
      
      if (isStandaloneJsVM) {
        const wasmBuffer = read(wasmFilePath, 'binary');
        const wasmModule = new WebAssembly.Module(wasmBuffer);
        wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
      }
      
      if (isBrowser) {
        wasmInstance = (await WebAssembly.instantiateStreaming(fetch(wasmFilePath), importObject)).instance;
      }
    } catch (e) {
      if (e instanceof WebAssembly.CompileError) {
        const styles = [];
        const styled = (t, css, escSeq) => isBrowser ? (styles.push(css, /* reset */""), `%c${t}%c`) : `\x1b[${escSeq}m${t}\x1b[m`;
        const name = t => styled(t, "font-weight:bold", 1);
        const uri = t => styled(t, "text-decoration:underline", 4);
        const cli = t => styled(t, "font-family:monospace", 2);
        
        let text = `Using experimental Kotlin/Wasm may require enabling experimental features in the target environment.

- ${name("Chrome")}: enable ${name("WebAssembly Garbage Collection")} at ${uri("chrome://flags/#enable-webassembly-garbage-collection")} or run the program with the ${cli("--js-flags=--experimental-wasm-gc")} command line argument.
- ${name("Firefox")}: enable ${name("javascript.options.wasm_function_references")} and ${name("javascript.options.wasm_gc")} at ${uri("about:config")}.
- ${name("Edge")}: run the program with the ${cli("--js-flags=--experimental-wasm-gc")} command line argument.
- ${name("Node.js")}: run the program with the ${cli("--experimental-wasm-gc")} command line argument.

For more information see ${uri("https://kotl.in/wasm_help/")}.
`;
        if (isBrowser) {
          console.error(text, ...styles);
        } else {
          const t = "\n" + text;
          if (typeof console !== "undefined" && console.log !== void 0) 
            console.log(t);
          else 
            print(t);
        }
      }
      throw e;
    }
    
    wasmExports = wasmInstance.exports;
    if (runInitializer) {
        wasmExports.__init();
    }

    return { instance: wasmInstance,  exports: wasmExports };
}
