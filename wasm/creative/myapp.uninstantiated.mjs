
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
        'kotlin.captureStackTrace_-1796314917' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_1078305493' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-625823733' : () => '',
        'kotlin.wasm.internal.getJsTrue_-1939539363' : () => true,
        'kotlin.wasm.internal.getJsFalse_1016546566' : () => false,
        'kotlin.wasm.internal.stringLength_1755628090' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_-2003053618' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.newJsArray_1769224410' : () => [],
        'kotlin.wasm.internal.jsArrayPush_-1257454639' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_1894985357' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_393502924' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_-390897627' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_1938506947' : 
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
        'kotlin.wasm.internal.isNullish_-462055791' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_-82918818' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.io.printlnImpl_1063407471' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_fon8an_1404559550' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_lidqx_763292896' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_byyqe6_1653846384' : (f) => () => wasmExports.__callFunction_byyqe6(f, ),
        'kotlin.random.initialSeed_714092193' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.window_$external_prop_getter_-1094352956' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-375412807' : () => document,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_f9n1as_-1082275804' : (f) => (p0) => wasmExports.__callFunction_f9n1as(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_-1164094894' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_-766916013' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.setProperty_$external_fun_-1472763613' : (_this, p0, p1, p2, isDefault0) => _this.setProperty(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.css.style_$external_prop_getter_1932406555' : (_this) => _this.style,
        'org.w3c.dom.events.timeStamp_$external_prop_getter_-1419597303' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_-844494613' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_-794607128' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_-2029280329' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-1056103185' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_46681286' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_1021713325' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-284774647' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_1037784970' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_-1774907947' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_-2029644492' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_-2059611005' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_960156469' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_-924109723' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-1791052755' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_-688268284' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_286763755' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-1019724217' : (_this) => _this.metaKey,
        'org.w3c.dom.events.keyCode_$external_prop_getter_-152678194' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_1175633641' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_800152462' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_-1205095871' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_1609121540' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_1354384995' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_807759757' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.document_$external_prop_getter_2087573786' : (_this) => _this.document,
        'org.w3c.dom.location_$external_prop_getter_686340672' : (_this) => _this.location,
        'org.w3c.dom.navigator_$external_prop_getter_-1103521186' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_-40790146' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_1577485800' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_5wk668_-1827634523' : (f) => (p0) => wasmExports.__callFunction_5wk668(f, p0),
        'org.w3c.dom.id_$external_prop_setter_-109791314' : (_this, v) => _this.id = v,
        'org.w3c.dom.classList_$external_prop_getter_1828529387' : (_this) => _this.classList,
        'org.w3c.dom.clientWidth_$external_prop_getter_-595975284' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_835522837' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_1944569120' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.scrollIntoView_$external_fun_100163080' : (_this, ) => _this.scrollIntoView(),
        'org.w3c.dom.Element_$external_class_instanceof_-1339072055' : (x) => x instanceof Element,
        'org.w3c.dom.createElement_$external_fun_132080145' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
        'org.w3c.dom.getElementById_$external_fun_-1217713923' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.text_$external_prop_setter_1725240988' : (_this, v) => _this.text = v,
        'org.w3c.dom.HTMLAnchorElement_$external_class_instanceof_1563776905' : (x) => x instanceof HTMLAnchorElement,
        'org.w3c.dom.hash_$external_prop_getter_-254599860' : (_this) => _this.hash,
        'org.w3c.dom.add_$external_fun_2099752933' : (_this, p0) => _this.add(...p0),
        'org.w3c.dom.remove_$external_fun_-2078742750' : (_this, p0) => _this.remove(...p0),
        'org.w3c.dom.width_$external_prop_getter_1839704990' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_-1041698752' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_1442526109' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_-1438877633' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_-1809202298' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.dom.HTMLDivElement_$external_class_instanceof_326656547' : (x) => x instanceof HTMLDivElement,
        'org.w3c.dom.language_$external_prop_getter_-1538377700' : (_this) => _this.language,
        'org.w3c.dom.ownerDocument_$external_prop_getter_626662905' : (_this) => _this.ownerDocument,
        'org.w3c.dom.appendChild_$external_fun_1671760905' : (_this, p0) => _this.appendChild(p0),
        'org.w3c.dom.href_$external_prop_getter_1305246890' : (_this) => _this.href,
        'org.w3c.dom.href_$external_prop_setter_2124693578' : (_this, v) => _this.href = v,
        'org.w3c.performance.performance_$external_prop_getter_-1316022234' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_1133921391' : (_this, ) => _this.now(),
        'kotlinx.coroutines.clearTimeout_1371088285' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_-1383071786' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl.stringToUTF8_$external_fun_1585457835' : (p0, p1, p2) => stringToUTF8(p0, p1, p2),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_-1556663435' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skia.impl.HEAPU8_$external_object_getInstance_1406526357' : () => HEAPU8,
        'org.jetbrains.skia.impl.HEAPU32_$external_object_getInstance_-198664210' : () => HEAPU32,
        'org.jetbrains.skia.impl.HEAPF32_$external_object_getInstance_-850183329' : () => HEAPF32,
        'org.jetbrains.skia.impl.HEAPF64_$external_object_getInstance_-138255362' : () => HEAPF64,
        'org.jetbrains.skiko.wasm.createContext_$external_fun_-2125613049' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_-120949863' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_1909432183' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_-1488540422' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_xkb98c_1791001304' : (f) => (p0) => wasmExports.__callFunction_xkb98c(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_-1475205068' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_489053817' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skia.impl.set_-1886867815' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_348253752' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_1912283136' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_695293931' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_-214373203' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.set_1129596578' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_348253752' : (dest, index) => dest[index],
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_1001584692' : () => {
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
    const isD8 = !isNodeJs && (typeof d8 !== 'undefined');
    const isBrowser = !isNodeJs && !isD8 && (typeof window !== 'undefined');
    
    if (!isNodeJs && !isD8 && !isBrowser) {
      throw "Supported JS engine not detected";
    }
    
    const wasmFilePath = './myapp.wasm';
    const importObject = {
        js_code,
        'skia': await _importModule('skia'),

    };
    
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
    
    if (isD8) {
      const wasmBuffer = read(wasmFilePath, 'binary');
      const wasmModule = new WebAssembly.Module(wasmBuffer);
      wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
    }
    
    if (isBrowser) {
      wasmInstance = (await WebAssembly.instantiateStreaming(fetch(wasmFilePath), importObject)).instance;
    }
    
    wasmExports = wasmInstance.exports;
    if (runInitializer) {
        wasmExports.__init();
    }

    return { instance: wasmInstance,  exports: wasmExports };
}
