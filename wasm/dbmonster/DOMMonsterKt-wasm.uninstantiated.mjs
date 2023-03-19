
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
        'kotlin.captureStackTrace_-1752130064' : () => new Error().stack,
        'kotlin.wasm.internal.throwJsError_1967372323' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsEmptyString_-581638880' : () => '',
        'kotlin.wasm.internal.getJsTrue_-1895354510' : () => true,
        'kotlin.wasm.internal.getJsFalse_1060731419' : () => false,
        'kotlin.wasm.internal.stringLength_785016474' : x => x.length,
        'kotlin.wasm.internal.jsExportStringToWasm_-1546688463' :  (src, srcOffset, srcLength, dstAddr) => {
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
        'kotlin.wasm.internal.importStringFromWasm_-1735926387' : (address, length, prefix) => {
            const mem16 = new Uint16Array(wasmExports.memory.buffer, address, length);
            const str = String.fromCharCode.apply(null, mem16);
            return (prefix == null) ? str : prefix + str;
        }
        ,
        'kotlin.wasm.internal.externrefToString_1510673694' : ref => String(ref),
        'kotlin.wasm.internal.externrefHashCode_967895331' : 
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
        'kotlin.wasm.internal.isNullish_-1135922881' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_-62922989' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.js.__callJsClosure_eucjhs_1960425517' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_ya8458_-983601708' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_buz2uc_-157565577' : (f) => () => wasmExports.__callFunction_buz2uc(f, ),
        'kotlin.random.initialSeed_-1329505340' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.document_$external_prop_getter_-331227954' : () => document,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_m2raa1_1150059720' : (f) => (p0) => wasmExports.__callFunction_m2raa1(f, p0),
        'org.w3c.dom.css.cssText_$external_prop_setter_-1412740326' : (_this, v) => _this.cssText = v,
        'org.w3c.dom.css.style_$external_prop_getter_-1245389971' : (_this) => _this.style,
        'org.w3c.dom.events.target_$external_prop_getter_-1455911044' : (_this) => _this.target,
        'org.w3c.dom.events.Event_$external_class_instanceof_-1468474218' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_775812617' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.id_$external_prop_setter_-1880833345' : (_this, v) => _this.id = v,
        'org.w3c.dom.className_$external_prop_setter_-53309769' : (_this, v) => _this.className = v,
        'org.w3c.dom.innerHTML_$external_prop_setter_7449' : (_this, v) => _this.innerHTML = v,
        'org.w3c.dom.setAttribute_$external_fun_1129988000' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.createElement_$external_fun_84908340' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
        'org.w3c.dom.createTextNode_$external_fun_-420170003' : (_this, p0) => _this.createTextNode(p0),
        'org.w3c.dom.querySelector_$external_fun_1477925521' : (_this, p0) => _this.querySelector(p0),
        'org.w3c.dom.firstChild_$external_prop_getter_-901708755' : (_this) => _this.firstChild,
        'org.w3c.dom.textContent_$external_prop_setter_1230938280' : (_this, v) => _this.textContent = v,
        'org.w3c.dom.insertBefore_$external_fun_172709725' : (_this, p0, p1) => _this.insertBefore(p0, p1),
        'org.w3c.dom.appendChild_$external_fun_1691756734' : (_this, p0) => _this.appendChild(p0),
        'org.w3c.dom.HTMLElement_$external_class_instanceof_-1733164436' : (x) => x instanceof HTMLElement,
        'org.w3c.dom.value_$external_prop_getter_-1324659549' : (_this) => _this.value,
        'org.w3c.dom.HTMLInputElement_$external_class_instanceof_408556728' : (x) => x instanceof HTMLInputElement,
        'org.w3c.dom.Text_$external_class_instanceof_-1815938328' : (x) => x instanceof Text,
        'org.w3c.dom.data_$external_prop_setter_740253561' : (_this, v) => _this.data = v,
        'takeCellObjectFromArray_-1714869770' : (array, index) => array[index],
        'setTimeout_$external_fun_1229967080' : (p0, p1) => setTimeout(p0, p1),
        'startFPSMonitor_$external_fun_-989210434' : (_this, ) => _this.startFPSMonitor(),
        'startMemMonitor_$external_fun_2040161962' : (_this, ) => _this.startMemMonitor(),
        'initProfiler_$external_fun_-800233368' : (_this, p0) => _this.initProfiler(p0),
        'startProfile_$external_fun_-716626982' : (_this, p0) => _this.startProfile(p0),
        'endProfile_$external_fun_1868813075' : (_this, p0) => _this.endProfile(p0),
        'perfMonitor_$external_prop_getter_1361569464' : () => perfMonitor,
        'createEmptyRowObject_434710357' : () => ({}),
        'createEmptyRowDomObject_317898149' : () => ({}),
        'createEmptyCellObject_-1350439733' : () => ({}),
        'createEmptyCellDomObject_-803373969' : () => ({}),
        'createEmptyArrayObject_1606400310' : () => ([]),
        'pushCellObjectToArray_-1012103918' : (array, cell) => array.push(cell),
        'el_$external_prop_getter_-182049834' : (_this) => _this.el,
        'el_$external_prop_setter_1550961057' : (_this, v) => _this.el = v,
        'name_$external_prop_getter_-413063310' : (_this) => _this.name,
        'name_$external_prop_setter_1319947581' : (_this, v) => _this.name = v,
        'count_$external_prop_getter_-100704658' : (_this) => _this.count,
        'count_$external_prop_setter_1632306233' : (_this, v) => _this.count = v,
        'countSpan_$external_prop_getter_-1995509692' : (_this) => _this.countSpan,
        'countSpan_$external_prop_setter_-262498801' : (_this, v) => _this.countSpan = v,
        'dom_$external_prop_getter_1594979693' : (_this) => _this.dom,
        'dom_$external_prop_setter_-992732516' : (_this, v) => _this.dom = v,
        'cells_$external_prop_getter_2012022270' : (_this) => _this.cells,
        'cells_$external_prop_setter_1539019470' : (_this, v) => _this.cells = v,
        'dbname_$external_prop_getter_-895001018' : (_this) => _this.dbname,
        'dbname_$external_prop_setter_-124913009' : (_this, v) => _this.dbname = v,
        'countClassName_$external_prop_getter_1347732379' : (_this) => _this.countClassName,
        'countClassName_$external_prop_setter_2117820388' : (_this, v) => _this.countClassName = v,
        'nbQueries_$external_prop_getter_-809399823' : (_this) => _this.nbQueries,
        'nbQueries_$external_prop_setter_1664954386' : (_this, v) => _this.nbQueries = v,
        'el_$external_prop_getter_-1245042418' : (_this) => _this.el,
        'el_$external_prop_setter_-1337037975' : (_this, v) => _this.el = v,
        'elapsed_$external_prop_getter_1904117529' : (_this) => _this.elapsed,
        'elapsed_$external_prop_setter_-1867815696' : (_this, v) => _this.elapsed = v,
        'popover_$external_prop_getter_-1631418288' : (_this) => _this.popover,
        'popover_$external_prop_setter_-1723413845' : (_this, v) => _this.popover = v,
        'popoverContent_$external_prop_getter_-1435459711' : (_this) => _this.popoverContent,
        'popoverContent_$external_prop_setter_-1527455268' : (_this, v) => _this.popoverContent = v,
        'popoverArrow_$external_prop_getter_-1874279631' : (_this) => _this.popoverArrow,
        'popoverArrow_$external_prop_setter_-1966275188' : (_this, v) => _this.popoverArrow = v,
        'dom_$external_prop_getter_-774489291' : (_this) => _this.dom,
        'dom_$external_prop_setter_1800147724' : (_this, v) => _this.dom = v,
        'className_$external_prop_getter_-1944559692' : (_this) => _this.className,
        'className_$external_prop_setter_755902829' : (_this, v) => _this.className = v,
        'elapsed_$external_prop_getter_-1138255173' : (_this) => _this.elapsed,
        'elapsed_$external_prop_setter_1562207348' : (_this, v) => _this.elapsed = v,
        'query_$external_prop_getter_1139713007' : (_this) => _this.query,
        'query_$external_prop_setter_-454791768' : (_this, v) => _this.query = v
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
    
    const wasmFilePath = './DOMMonsterKt-wasm.wasm';
    const importObject = {
        js_code,

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
