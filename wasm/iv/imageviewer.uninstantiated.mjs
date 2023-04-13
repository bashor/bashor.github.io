
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
        'kotlin.captureStackTrace_1652240542' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_-69285460' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-1472235570' : () => '',
        'kotlin.wasm.internal.getJsTrue_1509016096' : () => true,
        'kotlin.wasm.internal.getJsFalse_170134729' : () => false,
        'kotlin.wasm.internal.stringLength_1924627834' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_587043624' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.newJsArray_922812573' : () => [],
        'kotlin.wasm.internal.jsArrayPush_362940011' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_-220392915' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_-960279051' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_1229497023' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_2107506691' : 
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
        'kotlin.wasm.internal.isNullish_-254649080' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_14694113' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.js.unsafeCastJs_1357253164' : (x) => x,
        'kotlin.io.printError_626998714' : (error) => console.error(error),
        'kotlin.io.printlnImpl_1270814182' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_3r8fn4_-1700628068' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_yil56b_1171890957' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_dydlta_-934628794' : (f) => () => wasmExports.__callFunction_dydlta(f, ),
        'kotlin.random.initialSeed_1390462075' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.window_$external_prop_getter_-1940764793' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-1221824644' : () => document,
        'org.khronos.webgl.byteLength_$external_prop_getter_-1911995834' : (_this) => _this.byteLength,
        'org.khronos.webgl.ArrayBuffer_$external_class_instanceof_242181397' : (x) => x instanceof ArrayBuffer,
        'org.khronos.webgl.Int8Array_$external_fun_1112515151' : (p0, p1, p2, isDefault0, isDefault1) => new Int8Array(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
        'org.khronos.webgl.length_$external_prop_getter_1151563493' : (_this) => _this.length,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_lue98y_572673390' : (f) => (p0) => wasmExports.__callFunction_lue98y(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_494706723' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_891885604' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.style_$external_prop_getter_578624580' : (_this) => _this.style,
        'org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_qsstx1_-1386953550' : (f) => (p0) => wasmExports.__callFunction_qsstx1(f, p0),
        'org.w3c.dom.events.timeStamp_$external_prop_getter_-1250597559' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_-675494869' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_-587200417' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_-1498615808' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-887103441' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_215681030' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_1190713069' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-115774903' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_1206784714' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_-1605908203' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_-1860644748' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_-1852204294' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_-393625506' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_-755109979' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-1622053011' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_-519268540' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_455763499' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-850724473' : (_this) => _this.metaKey,
        'org.w3c.dom.events.keyCode_$external_prop_getter_16321550' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_1344633385' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_-46259375' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_-997689160' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_1778121284' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_1523384739' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_1015166468' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.navigator_$external_prop_getter_1837664135' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_128209598' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_-1097086846' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_v7h4di_-1589326206' : (f) => (p0) => wasmExports.__callFunction_v7h4di(f, p0),
        'org.w3c.dom.setTimeout_$external_fun_-275792189' : (_this, p0, p1, p2, isDefault0, isDefault1) => _this.setTimeout(p0, isDefault0 ? undefined : p1, ...p2, ),
        'org.w3c.dom.clearTimeout_$external_fun_932541450' : (_this, p0, isDefault0) => _this.clearTimeout(isDefault0 ? undefined : p0, ),
        'org.w3c.dom.documentElement_$external_prop_getter_1700707112' : (_this) => _this.documentElement,
        'org.w3c.dom.getElementById_$external_fun_-1081694025' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.clientWidth_$external_prop_getter_-426975540' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_1004522581' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_-1752378752' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.language_$external_prop_getter_1402807621' : (_this) => _this.language,
        'org.w3c.dom.width_$external_prop_getter_2008704734' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_578695898' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_1611525853' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_181517017' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_-1601795587' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.performance.performance_$external_prop_getter_1625163087' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_1302921135' : (_this, ) => _this.now(),
        'org.w3c.xhr.XMLHttpRequest_$external_fun_-1016653826' : () => new XMLHttpRequest(),
        'org.w3c.xhr.responseType_$external_prop_setter_1137975610' : (_this, v) => _this.responseType = v,
        'org.w3c.xhr.response_$external_prop_getter_-1316175043' : (_this) => _this.response,
        'org.w3c.xhr.open_$external_fun_1068510203' : (_this, p0, p1, p2, p3, p4, isDefault0, isDefault1) => _this.open(p0, p1, p2, isDefault0 ? undefined : p3, isDefault1 ? undefined : p4, ),
        'org.w3c.xhr.send_$external_fun_698766' : (_this, p0, isDefault0) => _this.send(isDefault0 ? undefined : p0, ),
        'org.w3c.xhr.onload_$external_prop_setter_-1542178602' : (_this, v) => _this.onload = v,
        'kotlinx.coroutines.tryGetProcess_1935704263' : () => (typeof(process) !== 'undefined' && typeof(process.nextTick) === 'function') ? process : null,
        'kotlinx.coroutines.tryGetWindow_-1002814960' : () => (typeof(window) !== 'undefined' && window != null && typeof(window.addEventListener) === 'function') ? window : null,
        'kotlinx.coroutines.nextTick_$external_fun_1537091805' : (_this, p0) => _this.nextTick(p0),
        'kotlinx.coroutines.toDynamicHandle_-2136621667' : (handle) => handle,
        'kotlinx.coroutines.createScheduleMessagePoster_-2073690104' : (process) => () => Promise.resolve(0).then(process),
        'kotlinx.coroutines.__callJsClosure_dydlta_-1902432292' : (f, ) => f(),
        'kotlinx.coroutines.createRescheduleMessagePoster_1773105996' : (window) => () => window.postMessage('dispatchCoroutine', '*'),
        'kotlinx.coroutines.subscribeToWindowMessages_-682983336' : (window, process) => {
            const handler = (event) => {
                if (event.source == window && event.data == 'dispatchCoroutine') {
                    event.stopPropagation();
                    process();
                }
            }
            window.addEventListener('message', handler, true)
        },
        'kotlinx.coroutines.clearTimeout_1540088029' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_237322864' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_-880293553' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skiko.wasm.createContext_$external_fun_1538350727' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_1499444787' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_1063020346' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_1452644899' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_cri72_-1013007850' : (f) => (p0) => wasmExports.__callFunction_cri72(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_-2106208588' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_2109448467' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_155172855' : () => {
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
        ,
        'org.jetbrains.compose.resources.jsExportInt8ArrayToWasm_-360184662' :  (src, size, dstAddr) => {
                const mem8 = new Int8Array(wasmExports.memory.buffer, dstAddr, size);
                mem8.set(src);
            }
        ,
        'jsExportInt8ArrayToWasm_-1072177223' :  (src, size, dstAddr) => {
                const mem8 = new Int8Array(wasmExports.memory.buffer, dstAddr, size);
                mem8.set(src);
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
    
    const wasmFilePath = './imageviewer.wasm';
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
