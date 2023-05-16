
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
        'kotlin.captureStackTrace_1220676118' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_-798473641' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-1903799994' : () => '',
        'kotlin.wasm.internal.getJsTrue_1077451672' : () => true,
        'kotlin.wasm.internal.getJsFalse_-261429695' : () => false,
        'kotlin.wasm.internal.stringLength_-672267814' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_-1695027573' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.newJsArray_491248149' : () => [],
        'kotlin.wasm.internal.jsArrayPush_1248182830' : (array, element) => { array.push(element); },
        'kotlin.wasm.internal.importStringFromWasm_-1386271347' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_521598890' : ref => String(ref),
        'kotlin.wasm.internal.externrefEquals_2114739842' : (lhs, rhs) => lhs === rhs,
        'kotlin.wasm.internal.externrefHashCode_-489388957' : 
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
        'kotlin.wasm.internal.isNullish_-963615053' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_683743225' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.js.unsafeCastJs_432093484' : (x) => x,
        'kotlin.io.printError_-81967259' : (error) => console.error(error),
        'kotlin.io.printlnImpl_561848209' : (message) => console.log(message),
        'kotlin.js.__callJsClosure_tgckou_562889340' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_ee4jvu_1949993280' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_4lslzs_-419163226' : (f) => () => wasmExports.__callFunction_4lslzs(f, ),
        'kotlin.random.initialSeed_1175091358' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlin.js.js_1945811522' : (s) => eval(s),
        'kotlinx.browser.window_$external_prop_getter_1922638079' : () => window,
        'kotlinx.browser.document_$external_prop_getter_-1653389068' : () => document,
        'org.khronos.webgl.byteLength_$external_prop_getter_-213924186' : (_this) => _this.byteLength,
        'org.khronos.webgl.ArrayBuffer_$external_class_instanceof_-466784576' : (x) => x instanceof ArrayBuffer,
        'org.khronos.webgl.Int8Array_$external_fun_-1343779644' : (p0, p1, p2, isDefault0, isDefault1) => new Int8Array(p0, isDefault0 ? undefined : p1, isDefault1 ? undefined : p2, ),
        'org.khronos.webgl.length_$external_prop_getter_-1445332155' : (_this) => _this.length,
        'org.w3c.dom.clipboard.writeText_$external_fun_-226971957' : (_this, p0) => _this.writeText(p0),
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_a03o1_-392724732' : (f) => (p0) => wasmExports.__callFunction_a03o1(f, p0),
        'org.w3c.dom.css.height_$external_prop_setter_-1027088079' : (_this, v) => _this.height = v,
        'org.w3c.dom.css.width_$external_prop_setter_-629909198' : (_this, v) => _this.width = v,
        'org.w3c.dom.css.style_$external_prop_getter_2060502521' : (_this) => _this.style,
        'org.w3c.dom.encryptedmedia.__convertKotlinClosureToJsClosure_w23li5_645038894' : (f) => (p0) => wasmExports.__callFunction_w23li5(f, p0),
        'org.w3c.dom.events.timeStamp_$external_prop_getter_447474089' : (_this) => _this.timeStamp,
        'org.w3c.dom.events.preventDefault_$external_fun_1022576779' : (_this, ) => _this.preventDefault(),
        'org.w3c.dom.events.Event_$external_class_instanceof_-1296166390' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_1492953749' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_810968207' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_1913752678' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_-1406182579' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_1582296745' : (_this) => _this.metaKey,
        'org.w3c.dom.events.button_$external_prop_getter_-1390110934' : (_this) => _this.button,
        'org.w3c.dom.events.offsetX_$external_prop_getter_92163445' : (_this) => _this.offsetX,
        'org.w3c.dom.events.offsetY_$external_prop_getter_-162573100' : (_this) => _this.offsetY,
        'org.w3c.dom.events.MouseEvent_$external_class_instanceof_1733797029' : (x) => x instanceof MouseEvent,
        'org.w3c.dom.events.key_$external_prop_getter_1088252435' : (_this) => _this.key,
        'org.w3c.dom.events.location_$external_prop_getter_942961669' : (_this) => _this.location,
        'org.w3c.dom.events.ctrlKey_$external_prop_getter_76018637' : (_this) => _this.ctrlKey,
        'org.w3c.dom.events.shiftKey_$external_prop_getter_1178803108' : (_this) => _this.shiftKey,
        'org.w3c.dom.events.altKey_$external_prop_getter_-2141132149' : (_this) => _this.altKey,
        'org.w3c.dom.events.metaKey_$external_prop_getter_847347175' : (_this) => _this.metaKey,
        'org.w3c.dom.events.charCode_$external_prop_getter_-1007567721' : (_this) => _this.charCode,
        'org.w3c.dom.events.keyCode_$external_prop_getter_1714393198' : (_this) => _this.keyCode,
        'org.w3c.dom.events.DOM_KEY_LOCATION_RIGHT_$external_prop_getter_-1252262263' : (_this) => _this.DOM_KEY_LOCATION_RIGHT,
        'org.w3c.dom.events.Companion_$external_object_getInstance_-477823799' : () => KeyboardEvent,
        'org.w3c.dom.events.KeyboardEvent_$external_class_instanceof_-1706655133' : (x) => x instanceof KeyboardEvent,
        'org.w3c.dom.events.deltaX_$external_prop_getter_-818774364' : (_this) => _this.deltaX,
        'org.w3c.dom.events.deltaY_$external_prop_getter_-1073510909' : (_this) => _this.deltaY,
        'org.w3c.dom.events.WheelEvent_$external_class_instanceof_306200495' : (x) => x instanceof WheelEvent,
        'org.w3c.dom.navigator_$external_prop_getter_-975425220' : (_this) => _this.navigator,
        'org.w3c.dom.devicePixelRatio_$external_prop_getter_1826281246' : (_this) => _this.devicePixelRatio,
        'org.w3c.dom.requestAnimationFrame_$external_fun_-211844027' : (_this, p0) => _this.requestAnimationFrame(p0),
        'org.w3c.dom.__convertKotlinClosureToJsClosure_932rgj_1029174423' : (f) => (p0) => wasmExports.__callFunction_932rgj(f, p0),
        'org.w3c.dom.clipboard_$external_prop_getter_1665300356' : (_this) => _this.clipboard,
        'org.w3c.dom.setTimeout_$external_fun_-487245423' : (_this, p0, p1, p2, isDefault0, isDefault1) => _this.setTimeout(p0, isDefault0 ? undefined : p1, ...p2, ),
        'org.w3c.dom.clearTimeout_$external_fun_-1905072950' : (_this, p0, isDefault0) => _this.clearTimeout(isDefault0 ? undefined : p0, ),
        'org.w3c.dom.documentElement_$external_prop_getter_-1112382243' : (_this) => _this.documentElement,
        'org.w3c.dom.getElementById_$external_fun_1475284762' : (_this, p0) => _this.getElementById(p0),
        'org.w3c.dom.clientWidth_$external_prop_getter_1271096108' : (_this) => _this.clientWidth,
        'org.w3c.dom.clientHeight_$external_prop_getter_-1592373067' : (_this) => _this.clientHeight,
        'org.w3c.dom.setAttribute_$external_fun_-10818400' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.language_$external_prop_getter_-1410281734' : (_this) => _this.language,
        'org.w3c.dom.width_$external_prop_getter_-588190914' : (_this) => _this.width,
        'org.w3c.dom.width_$external_prop_setter_1463938717' : (_this, v) => _this.width = v,
        'org.w3c.dom.height_$external_prop_getter_-985369795' : (_this) => _this.height,
        'org.w3c.dom.height_$external_prop_setter_1066759836' : (_this, v) => _this.height = v,
        'org.w3c.dom.HTMLCanvasElement_$external_class_instanceof_1984205736' : (x) => x instanceof HTMLCanvasElement,
        'org.w3c.performance.performance_$external_prop_getter_-1187926268' : (_this) => _this.performance,
        'org.w3c.performance.now_$external_fun_-1293974513' : (_this, ) => _this.now(),
        'org.w3c.xhr.XMLHttpRequest_$external_fun_-1448218250' : () => new XMLHttpRequest(),
        'org.w3c.xhr.responseType_$external_prop_setter_2023218429' : (_this, v) => _this.responseType = v,
        'org.w3c.xhr.response_$external_prop_getter_165702898' : (_this) => _this.response,
        'org.w3c.xhr.open_$external_fun_748917406' : (_this, p0, p1, p2, p3, p4, isDefault0, isDefault1) => _this.open(p0, p1, p2, isDefault0 ? undefined : p3, isDefault1 ? undefined : p4, ),
        'org.w3c.xhr.send_$external_fun_-145670557' : (_this, p0, isDefault0) => _this.send(isDefault0 ? undefined : p0, ),
        'org.w3c.xhr.onload_$external_prop_setter_1230993892' : (_this, v) => _this.onload = v,
        'kotlinx.coroutines.tryGetProcess_1504139839' : () => (typeof(process) !== 'undefined' && typeof(process.nextTick) === 'function') ? process : null,
        'kotlinx.coroutines.tryGetWindow_-1434379384' : () => (typeof(window) !== 'undefined' && window != null && typeof(window.addEventListener) === 'function') ? window : null,
        'kotlinx.coroutines.nextTick_$external_fun_-1872632672' : (_this, p0) => _this.nextTick(p0),
        'kotlinx.coroutines.toDynamicHandle_-654743726' : (handle) => handle,
        'kotlinx.coroutines.createScheduleMessagePoster_-591812163' : (process) => () => Promise.resolve(0).then(process),
        'kotlinx.coroutines.__callJsClosure_4lslzs_-1386966724' : (f, ) => f(),
        'kotlinx.coroutines.createRescheduleMessagePoster_-1039983359' : (window) => () => window.postMessage('dispatchCoroutine', '*'),
        'kotlinx.coroutines.subscribeToWindowMessages_202259483' : (window, process) => {
            const handler = (event) => {
                if (event.source == window && event.data == 'dispatchCoroutine') {
                    event.stopPropagation();
                    process();
                }
            }
            window.addEventListener('message', handler, true)
        },
        'kotlinx.coroutines.clearTimeout_-1056807619' : typeof clearTimeout === 'undefined' ? (handle) => {} : clearTimeout,
        'kotlinx.coroutines.setTimeout_$external_fun_1122565683' : (p0, p1) => setTimeout(p0, p1),
        'org.jetbrains.skia.impl._releaseLocalCallbackScope_$external_fun_-1095664270' : () => _releaseLocalCallbackScope(),
        'org.jetbrains.skiko.wasm.createContext_$external_fun_-1299263673' : (_this, p0, p1) => _this.createContext(p0, p1),
        'org.jetbrains.skiko.wasm.makeContextCurrent_$external_fun_-1910279690' : (_this, p0) => _this.makeContextCurrent(p0),
        'org.jetbrains.skiko.wasm.GL_$external_object_getInstance_631455922' : () => GL,
        'org.jetbrains.skia.impl.FinalizationRegistry_$external_fun_-1360444456' : (p0) => new FinalizationRegistry(p0),
        'org.jetbrains.skia.impl.__convertKotlinClosureToJsClosure_mh5v41_521056948' : (f) => (p0) => wasmExports.__callFunction_mh5v41(f, p0),
        'org.jetbrains.skia.impl.register_$external_fun_-648855692' : (_this, p0, p1) => _this.register(p0, p1),
        'org.jetbrains.skia.impl.unregister_$external_fun_-1300276010' : (_this, p0) => _this.unregister(p0),
        'org.jetbrains.skiko.wasm.createDefaultContextAttributes_-276391569' : () => {
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
        'com.example.jetsnack.ui.components.jsExportInt8ArrayToWasm_-1619148279' :  (src, size, dstAddr) => {
                const mem8 = new Int8Array(wasmExports.memory.buffer, dstAddr, size);
                mem8.set(src);
            }
        ,
        'com.example.jetsnack.ui.utils.NumberFormat_$external_fun_21590419' : (p0, p1) => new Intl.NumberFormat(p0, p1),
        'com.example.jetsnack.ui.utils.format_$external_fun_-1274471875' : (_this, p0) => _this.format(p0),
        'jsExportInt8ArrayToWasm_-412479599' :  (src, size, dstAddr) => {
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
