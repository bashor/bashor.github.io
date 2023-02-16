
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
        'kotlin.captureStackTrace_-1656384494' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_-64623964' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-485893310' : () => '',
        'kotlin.wasm.internal.getJsTrue_-1799608940' : () => true,
        'kotlin.wasm.internal.getJsFalse_1156476989' : () => false,
        'kotlin.wasm.internal.stringLength_-1375704326' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_106610580' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.newJsArray_1909154833' : () => [],
        'kotlin.wasm.internal.jsArrayPush_-313454505' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_-655552979' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_-1828956291' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_553102507' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_-1192825469' : 
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
        'kotlin.wasm.internal.isNullish_-1188122752' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_1769954517' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.io.printlnImpl_337340510' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_nctj84_919253548' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_naszq7_178838558' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_lyg8bu_-1212536993' : (f) => () => wasmExports.__callFunction_lyg8bu(f, ),
        'kotlin.random.initialSeed_-54850585' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.window_$external_prop_getter_-954422533' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-235482384' : () => document,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_x26ep2_608385057' : (f) => (p0) => wasmExports.__callFunction_x26ep2(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_-2109796601' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_-1712617720' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.setProperty_$external_fun_-921340172' : (_this, p0, p1, p2, isDefault0) => _this.setProperty(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.css.style_$external_prop_getter_-290052660' : (_this) => _this.style,
        'org.w3c.dom.events.timeStamp_$external_prop_getter_-255962423' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_319140267' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_-1520674089' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_-1477856888' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_107531695' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_1210316166' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_-2109619091' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_878860233' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_-2093547446' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_-611273067' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_-866009612' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_1509289330' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_-1262302746' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_239525157' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-627417875' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_475366596' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_1450398635' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_143910663' : (_this) => _this.metaKey,
        'org.w3c.dom.events.keyCode_$external_prop_getter_1010956686' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_-1955698775' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_940082885' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_-1931162832' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_-1522210876' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_-1776947421' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_81692796' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.document_$external_prop_getter_-134885429' : (_this) => _this.document,
        'org.w3c.dom.location_$external_prop_getter_-1536118543' : (_this) => _this.location,
        'org.w3c.dom.navigator_$external_prop_getter_968986895' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_1122844734' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_-1773481362' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_slus5i_313711657' : (f) => (p0) => wasmExports.__callFunction_slus5i(f, p0),
        'org.w3c.dom.id_$external_prop_setter_-1055493021' : (_this, v) => _this.id = v,
        'org.w3c.dom.classList_$external_prop_getter_-393929828' : (_this) => _this.classList,
        'org.w3c.dom.clientWidth_$external_prop_getter_567659596' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_1999157717' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_33942656' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.scrollIntoView_$external_fun_1263797960' : (_this, ) => _this.scrollIntoView(),
        'org.w3c.dom.Element_$external_class_instanceof_-2065139016' : (x) => x instanceof Element,
        'org.w3c.dom.HTMLDivElement_$external_class_instanceof_-399410414' : (x) => x instanceof HTMLDivElement,
        'org.w3c.dom.createElement_$external_fun_-376652745' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
        'org.w3c.dom.getElementById_$external_fun_-1254542429' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.text_$external_prop_setter_779539281' : (_this, v) => _this.text = v,
        'org.w3c.dom.HTMLAnchorElement_$external_class_instanceof_837709944' : (x) => x instanceof HTMLAnchorElement,
        'org.w3c.dom.hash_$external_prop_getter_1817908221' : (_this) => _this.hash,
        'org.w3c.dom.add_$external_fun_-1251214229' : (_this, p0) => _this.add(...p0),
        'org.w3c.dom.remove_$external_fun_-1134742616' : (_this, p0) => _this.remove(...p0),
        'org.w3c.dom.width_$external_prop_getter_-1291627426' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_-97698618' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_-1688806307' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_-494877499' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_1759698037' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.dom.language_$external_prop_getter_534130381' : (_this) => _this.language,
        'org.w3c.dom.ownerDocument_$external_prop_getter_-1595796310' : (_this) => _this.ownerDocument,
        'org.w3c.dom.appendChild_$external_fun_-770333056' : (_this, p0) => _this.appendChild(p0),
        'org.w3c.dom.href_$external_prop_getter_-917212325' : (_this) => _this.href,
        'org.w3c.dom.href_$external_prop_setter_1178991871' : (_this, v) => _this.href = v,
        'org.w3c.performance.performance_$external_prop_getter_756485847' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_-1997411025' : (_this, ) => _this.now(),
        'kotlinx.coroutines.clearTimeout_-1760244131' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_-439071652' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl.stringToUTF8_$external_fun_783445146' : (p0, p1, p2) => stringToUTF8(p0, p1, p2),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_1969361083' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skia.impl.HEAPU8_$external_object_getInstance_1546456780' : () => HEAPU8,
        'org.jetbrains.skia.impl.HEAPU32_$external_object_getInstance_-58733787' : () => HEAPU32,
        'org.jetbrains.skia.impl.HEAPF32_$external_object_getInstance_-710252906' : () => HEAPF32,
        'org.jetbrains.skia.impl.HEAPF64_$external_object_getInstance_1675061' : () => HEAPF64,
        'org.jetbrains.skiko.wasm.createContext_$external_fun_599644551' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_823050271' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_2049362606' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_583967659' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_av0n92_1010915681' : (f) => (p0) => wasmExports.__callFunction_av0n92(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_1250052532' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_1433053951' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skia.impl.set_356415762' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_1415253669' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_-139400583' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_1762293848' : (dest, index) => dest[index],
        'org.jetbrains.skia.impl.set_2028910374' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.set_-922087141' : (dest, index, value) => dest[index] = value,
        'org.jetbrains.skia.impl.get_1415253669' : (dest, index) => dest[index],
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_1141515115' : () => {
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
