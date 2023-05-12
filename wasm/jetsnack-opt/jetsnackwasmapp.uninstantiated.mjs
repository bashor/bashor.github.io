
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
        'kotlin.captureStackTrace_1991666313' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_-2133136283' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-1132809799' : () => '',
        'kotlin.wasm.internal.getJsTrue_1848441867' : () => true,
        'kotlin.wasm.internal.getJsFalse_509560500' : () => false,
        'kotlin.wasm.internal.stringLength_1527691770' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_-862317556' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.newJsArray_1262238344' : () => [],
        'kotlin.wasm.internal.jsArrayPush_-9104433' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_-1447138291' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_-65860996' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_857452579' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_1710570627' : 
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
        'kotlin.wasm.internal.isNullish_725686881' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_934003788' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.js.unsafeCastJs_-666024052' : (x) => x,
        'kotlin.io.printError_1607334675' : (error) => console.error(error),
        'kotlin.io.printlnImpl_-2043817153' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_34ruur_915308267' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_m1p02x_1619074284' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_f8atpi_-1878028974' : (f) => () => wasmExports.__callFunction_f8atpi(f, ),
        'kotlin.random.initialSeed_438533727' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlin.js.js_847693986' : (s) => eval(s),
        'kotlinx.browser.window_$external_prop_getter_-1601339022' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-882398873' : () => document,
        'org.khronos.webgl.byteLength_$external_prop_getter_1986035398' : (_this) => _this.byteLength,
        'org.khronos.webgl.ArrayBuffer_$external_class_instanceof_1222517358' : (x) => x instanceof ArrayBuffer,
        'org.khronos.webgl.Int8Array_$external_fun_-528582698' : (p0, p1, p2, isDefault0, isDefault1) => new Int8Array(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
        'org.khronos.webgl.length_$external_prop_getter_754627429' : (_this) => _this.length,
        'org.w3c.dom.clipboard.writeText_$external_fun_-487369044' : (_this, p0) => _this.writeText(p0),
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_7dkcj2_1587247647' : (f) => (p0) => wasmExports.__callFunction_7dkcj2(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_1499934304' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_1897113185' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.style_$external_prop_getter_1473042635' : (_this) => _this.style,
        'org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_m6pyui_403605032' : (f) => (p0) => wasmExports.__callFunction_m6pyui(f, p0),
        'org.w3c.dom.events.timeStamp_$external_prop_getter_-1647533623' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_-1072430933' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_393135544' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_806466279' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-1284039505' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_-181255034' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_793777005' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-512710967' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_809848650' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_-2002844267' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_2037386484' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_-871868333' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_500792549' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_-1152046043' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_-2018989075' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_-916204604' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_58827435' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_-1247660537' : (_this) => _this.metaKey,
        'org.w3c.dom.events.charCode_$external_prop_getter_1192391863' : (_this) => _this.charCode,
        'org.w3c.dom.events.keyCode_$external_prop_getter_-380614514' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_947697321' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_293166396' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_-17353199' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_1381185220' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_1126448675' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_1995502429' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.navigator_$external_prop_getter_-1562885106' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_-268726466' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_-1469131290' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_gqn7nm_-236386718' : (f) => (p0) => wasmExports.__callFunction_gqn7nm(f, p0),
        'org.w3c.dom.clipboard_$external_prop_getter_1077840470' : (_this) => _this.clipboard,
        'org.w3c.dom.setTimeout_$external_fun_313540480' : (_this, p0, p1, p2, isDefault0, isDefault1) => _this.setTimeout(p0, isDefault0 ? undefined : p1, ...p2, ),
        'org.w3c.dom.clearTimeout_$external_fun_1332137226' : (_this, p0, isDefault0) => _this.clearTimeout(isDefault0 ? undefined : p0, ),
        'org.w3c.dom.documentElement_$external_prop_getter_-1699842129' : (_this) => _this.documentElement,
        'org.w3c.dom.getElementById_$external_fun_1214887675' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.clientWidth_$external_prop_getter_-823911604' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_607586517' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_-229751136' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.language_$external_prop_getter_-1997741620' : (_this) => _this.language,
        'org.w3c.dom.width_$external_prop_getter_1611768670' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_206651454' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_1214589789' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_-190527427' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_-621459626' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.performance.performance_$external_prop_getter_-1775386154' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_905985071' : (_this, ) => _this.now(),
        'org.w3c.xhr.XMLHttpRequest_$external_fun_-677228055' : () => new XMLHttpRequest(),
        'org.w3c.xhr.responseType_$external_prop_setter_765931166' : (_this, v) => _this.responseType = v,
        'org.w3c.xhr.response_$external_prop_getter_-421756988' : (_this) => _this.response,
        'org.w3c.xhr.open_$external_fun_-1891328033' : (_this, p0, p1, p2, p3, p4, isDefault0, isDefault1) => _this.open(p0, p1, p2, isDefault0 ? undefined : p3, isDefault1 ? undefined : p4, ),
        'org.w3c.xhr.send_$external_fun_146054357' : (_this, p0, isDefault0) => _this.send(isDefault0 ? undefined : p0, ),
        'org.w3c.xhr.onload_$external_prop_setter_-536951021' : (_this, v) => _this.onload = v,
        'kotlinx.coroutines.tryGetProcess_-2019837262' : () => (typeof(process) !== 'undefined' && typeof(process.nextTick) === 'function') ? process : null,
        'kotlinx.coroutines.tryGetWindow_-663389189' : () => (typeof(window) !== 'undefined' && window != null && typeof(window.addEventListener) === 'function') ? window : null,
        'kotlinx.coroutines.nextTick_$external_fun_1165047361' : (_this, p0) => _this.nextTick(p0),
        'kotlinx.coroutines.toDynamicHandle_-1242203612' : (handle) => handle,
        'kotlinx.coroutines.createScheduleMessagePoster_-1179272049' : (process) => () => Promise.resolve(0).then(process),
        'kotlinx.coroutines.__callJsClosure_f8atpi_1449134824' : (f, ) => f(),
        'kotlinx.coroutines.createRescheduleMessagePoster_-1627443245' : (window) => () => window.postMessage('dispatchCoroutine', '*'),
        'kotlinx.coroutines.subscribeToWindowMessages_-1055027780' : (window, process) => {
            const handler = (event) => {
                if (event.source == window && event.data == 'dispatchCoroutine') {
                    event.stopPropagation();
                    process();
                }
            }
            window.addEventListener('message', handler, true)
        },
        'kotlinx.coroutines.clearTimeout_1143151965' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_-134721580' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_-1832221901' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skiko.wasm.createContext_$external_fun_1937946503' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_1127400343' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_1402446117' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_-1947904342' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_etlewy_-1235652765' : (f) => (p0) => wasmExports.__callFunction_etlewy(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_-1706612812' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_1737404023' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_494598626' : () => {
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
                majorVersion: 2,
            }
        }
        ,
        'com.example.jetsnack.ui.components.jsExportInt8ArrayToWasm_1618061897' :  (src, size, dstAddr) => {
                const mem8 = new Int8Array(wasmExports.memory.buffer, dstAddr, size);
                mem8.set(src);
            }
        ,
        'com.example.jetsnack.ui.utils.NumberFormat_$external_fun_1621333016' : (p0, p1) => new Intl.NumberFormat(p0, p1),
        'com.example.jetsnack.ui.utils.format_$external_fun_1112335893' : (_this, p0) => _this.format(p0),
        'jsExportInt8ArrayToWasm_-1470236719' :  (src, size, dstAddr) => {
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
    
    const wasmFilePath = './jetsnackwasmapp.wasm';
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
