
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
        'kotlin.captureStackTrace_-1184016640' : () => new Error().stack.replace(/^Error\n/, ''),
        'kotlin.wasm.internal.throwJsError_1448703665' : (message, wasmTypeName, stack) => { 
                const error = new Error();
                error.message = message;
                error.name = wasmTypeName;
                error.stack = stack;
                throw error;
           },
        'kotlin.wasm.internal.getJsTrue_1712003900' : () => true,
        'kotlin.wasm.internal.getJsFalse_373122533' : () => false,
        'kotlin.wasm.internal.externrefToString_125404752' : ref => String(ref),
        'kotlin.wasm.internal.externrefHashCode_-632857373' : 
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
        'kotlin.wasm.internal.isNullish_-624332205' : (ref) => ref == null,
        'kotlin.wasm.internal.tryGetOrSetExternrefBox_$external_fun_1165741853' : (p0, p1) => tryGetOrSetExternrefBox(p0, p1),
        'kotlin.js.__callJsClosure_vfzzha_-1100871880' : (f, p0) => f(p0),
        'kotlin.js.__callJsClosure_t7gc12_-1121339847' : (f, p0) => f(p0),
        'kotlin.js.__convertKotlinClosureToJsClosure_p8crfk_545426996' : (f) => () => wasmExports.__callFunction_p8crfk(f, ),
        'kotlin.random.initialSeed_-976875678' : () => ((Math.random() * Math.pow(2, 32)) | 0),
        'kotlinx.browser.document_$external_prop_getter_-1018836840' : () => document,
        'org.w3c.dom.clipboard.__convertKotlinClosureToJsClosure_ejboh7_-1801431061' : (f) => (p0) => wasmExports.__callFunction_ejboh7(f, p0),
        'org.w3c.dom.css.cssText_$external_prop_setter_-1053774906' : (_this, v) => _this.cssText = v,
        'org.w3c.dom.css.style_$external_prop_getter_408586073' : (_this) => _this.style,
        'org.w3c.dom.events.target_$external_prop_getter_198065000' : (_this) => _this.target,
        'org.w3c.dom.events.Event_$external_class_instanceof_-956883542' : (x) => x instanceof Event,
        'org.w3c.dom.events.addEventListener_$external_fun_2015568699' : (_this, p0, p1, p2, isDefault0) => _this.addEventListener(p0, p1, isDefault0 ? undefined : p2, ),
        'org.w3c.dom.id_$external_prop_setter_-1521867925' : (_this, v) => _this.id = v,
        'org.w3c.dom.className_$external_prop_setter_305655651' : (_this, v) => _this.className = v,
        'org.w3c.dom.innerHTML_$external_prop_setter_358972869' : (_this, v) => _this.innerHTML = v,
        'org.w3c.dom.setAttribute_$external_fun_2110673120' : (_this, p0, p1) => _this.setAttribute(p0, p1),
        'org.w3c.dom.createElement_$external_fun_-1187697972' : (_this, p0, p1, isDefault0) => _this.createElement(p0, isDefault0 ? undefined : p1, ),
        'org.w3c.dom.createTextNode_$external_fun_-1101443131' : (_this, p0) => _this.createTextNode(p0),
        'org.w3c.dom.querySelector_$external_fun_796652393' : (_this, p0) => _this.querySelector(p0),
        'org.w3c.dom.firstChild_$external_prop_getter_752267289' : (_this) => _this.firstChild,
        'org.w3c.dom.textContent_$external_prop_setter_1589903700' : (_this, v) => _this.textContent = v,
        'org.w3c.dom.insertBefore_$external_fun_-1080994723' : (_this, p0, p1) => _this.insertBefore(p0, p1),
        'org.w3c.dom.appendChild_$external_fun_-1374545720' : (_this, p0) => _this.appendChild(p0),
        'org.w3c.dom.HTMLElement_$external_class_instanceof_-1221573760' : (x) => x instanceof HTMLElement,
        'org.w3c.dom.value_$external_prop_getter_1585038805' : (_this) => _this.value,
        'org.w3c.dom.HTMLInputElement_$external_class_instanceof_920147404' : (x) => x instanceof HTMLInputElement,
        'org.w3c.dom.Text_$external_class_instanceof_-1304347652' : (x) => x instanceof Text,
        'org.w3c.dom.data_$external_prop_setter_1099218981' : (_this, v) => _this.data = v,
        'takeCellObjectFromArray_-486204928' : (array, index) => array[index],
        'setTimeout_$external_fun_-796096826' : (p0, p1) => setTimeout(p0, p1),
        'startFPSMonitor_$external_fun_1705004158' : (_this, ) => _this.startFPSMonitor(),
        'startMemMonitor_$external_fun_439409258' : (_this, ) => _this.startMemMonitor(),
        'initProfiler_$external_fun_-441267948' : (_this, p0) => _this.initProfiler(p0),
        'startProfile_$external_fun_-357661562' : (_this, p0) => _this.startProfile(p0),
        'endProfile_$external_fun_-2067188801' : (_this, p0) => _this.endProfile(p0),
        'perfMonitor_$external_prop_getter_673960578' : () => perfMonitor,
        'createEmptyRowObject_-252898529' : () => ({}),
        'createEmptyRowDomObject_-369710737' : () => ({}),
        'createEmptyCellObject_-2038048619' : () => ({}),
        'createEmptyCellDomObject_-1490982855' : () => ({}),
        'createEmptyArrayObject_918791424' : () => ([]),
        'pushCellObjectToArray_1256799472' : (array, cell) => array.push(cell),
        'el_$external_prop_getter_1471926210' : (_this) => _this.el,
        'el_$external_prop_setter_-475102849' : (_this, v) => _this.el = v,
        'name_$external_prop_getter_1240912734' : (_this) => _this.name,
        'name_$external_prop_setter_-706116325' : (_this, v) => _this.name = v,
        'count_$external_prop_getter_1553271386' : (_this) => _this.count,
        'count_$external_prop_setter_-393757673' : (_this, v) => _this.count = v,
        'countSpan_$external_prop_getter_-341533648' : (_this) => _this.countSpan,
        'countSpan_$external_prop_setter_2006404589' : (_this, v) => _this.countSpan = v,
        'dom_$external_prop_getter_-1046011559' : (_this) => _this.dom,
        'dom_$external_prop_setter_1276170874' : (_this, v) => _this.dom = v,
        'cells_$external_prop_getter_-628968982' : (_this) => _this.cells,
        'cells_$external_prop_setter_-487044436' : (_this, v) => _this.cells = v,
        'dbname_$external_prop_getter_2014697336' : (_this) => _this.dbname,
        'dbname_$external_prop_setter_234052411' : (_this, v) => _this.dbname = v,
        'countClassName_$external_prop_getter_-37536563' : (_this) => _this.countClassName,
        'countClassName_$external_prop_setter_-1818181488' : (_this, v) => _this.countClassName = v,
        'nbQueries_$external_prop_getter_1884814769' : (_this) => _this.nbQueries,
        'nbQueries_$external_prop_setter_-361109520' : (_this, v) => _this.nbQueries = v,
        'el_$external_prop_getter_408933626' : (_this) => _this.el,
        'el_$external_prop_setter_931865415' : (_this, v) => _this.el = v,
        'elapsed_$external_prop_getter_-736873723' : (_this) => _this.elapsed,
        'elapsed_$external_prop_setter_401087694' : (_this, v) => _this.elapsed = v,
        'popover_$external_prop_getter_22557756' : (_this) => _this.popover,
        'popover_$external_prop_setter_545489545' : (_this, v) => _this.popover = v,
        'popoverContent_$external_prop_getter_218516333' : (_this) => _this.popoverContent,
        'popoverContent_$external_prop_setter_741448122' : (_this, v) => _this.popoverContent = v,
        'popoverArrow_$external_prop_getter_-220303587' : (_this) => _this.popoverArrow,
        'popoverArrow_$external_prop_setter_302628202' : (_this, v) => _this.popoverArrow = v,
        'dom_$external_prop_getter_879486753' : (_this) => _this.dom,
        'dom_$external_prop_setter_-225916182' : (_this, v) => _this.dom = v,
        'className_$external_prop_getter_965138662' : (_this) => _this.className,
        'className_$external_prop_setter_1114868249' : (_this, v) => _this.className = v,
        'elapsed_$external_prop_getter_1771443181' : (_this) => _this.elapsed,
        'elapsed_$external_prop_setter_1921172768' : (_this, v) => _this.elapsed = v,
        'query_$external_prop_getter_-245555935' : (_this) => _this.query,
        'query_$external_prop_setter_-95826348' : (_this, v) => _this.query = v
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
    
    const wasmFilePath = './DOMMonsterKt-wasm.wasm';
    const importObject = {
        js_code,

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
