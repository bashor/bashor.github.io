(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'DOMMonsterKt'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'DOMMonsterKt'.");
    }
    root.DOMMonsterKt = factory(typeof DOMMonsterKt === 'undefined' ? {} : DOMMonsterKt, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.t;
  var protoOf = kotlin_kotlin.$_$.l;
  var classMeta = kotlin_kotlin.$_$.j;
  var setMetadataFor = kotlin_kotlin.$_$.m;
  var round = kotlin_kotlin.$_$.n;
  var Unit_getInstance = kotlin_kotlin.$_$.e;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c;
  var charArrayOf = kotlin_kotlin.$_$.i;
  var split = kotlin_kotlin.$_$.p;
  var padStart = kotlin_kotlin.$_$.o;
  var Default_getInstance = kotlin_kotlin.$_$.d;
  var numberToInt = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var checkIndexOverflow = kotlin_kotlin.$_$.f;
  var ensureNotNull = kotlin_kotlin.$_$.s;
  var THROW_CCE = kotlin_kotlin.$_$.r;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a;
  var copyToArray = kotlin_kotlin.$_$.h;
  var toDouble = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Row, 'Row', classMeta);
  setMetadataFor(Sample, 'Sample', classMeta);
  setMetadataFor(Query, 'Query', classMeta);
  setMetadataFor(DB, 'DB', classMeta);
  //endregion
  function Row(dbname, lastMutationId, lastSample, nbQueries) {
    dbname = dbname === VOID ? '' : dbname;
    lastMutationId = lastMutationId === VOID ? 0 : lastMutationId;
    lastSample = lastSample === VOID ? null : lastSample;
    nbQueries = nbQueries === VOID ? 0 : nbQueries;
    this.z3_1 = dbname;
    this.a4_1 = lastMutationId;
    this.b4_1 = lastSample;
    this.c4_1 = nbQueries;
  }
  function Sample(countClassName, nbQueries, queries, topFiveQueries) {
    countClassName = countClassName === VOID ? '' : countClassName;
    nbQueries = nbQueries === VOID ? 0 : nbQueries;
    queries = queries === VOID ? null : queries;
    topFiveQueries = topFiveQueries === VOID ? null : topFiveQueries;
    this.d4_1 = countClassName;
    this.e4_1 = nbQueries;
    this.f4_1 = queries;
    this.g4_1 = topFiveQueries;
  }
  function Query(elapsed, formatElapsed, elapsedClassName, query, waiting) {
    elapsed = elapsed === VOID ? null : elapsed;
    formatElapsed = formatElapsed === VOID ? '' : formatElapsed;
    elapsedClassName = elapsedClassName === VOID ? '' : elapsedClassName;
    query = query === VOID ? '' : query;
    waiting = waiting === VOID ? null : waiting;
    this.h4_1 = elapsed;
    this.i4_1 = formatElapsed;
    this.j4_1 = elapsedClassName;
    this.k4_1 = query;
    this.l4_1 = waiting;
  }
  function DB(rows, timeout) {
    this.m4_1 = rows;
    this.n4_1 = timeout;
    this.o4_1 = true;
    this.p4_1 = 0;
    this.q4_1 = null;
    this.r4_1 = 0.5;
  }
  protoOf(DB).s4 = function (_this__u8e3s4, decimals) {
    var multiplier = 1.0;
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < decimals)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'env.DB.round.<anonymous>' call
        multiplier = multiplier * 10;
      }
       while (inductionVariable < decimals);
    return round(_this__u8e3s4 * multiplier) / multiplier;
  };
  protoOf(DB).t4 = function (value) {
    var str = this.s4(value, 2).toString();
    if (value > 60.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = value / 60;
      tmp$ret$0 = Math.floor(tmp0_floor);
      var minutes = tmp$ret$0;
      var comps = split((value % 60).toString(), charArrayOf([_Char___init__impl__6a9atx(46)]));
      var seconds = padStart(comps.r2(0), 2, _Char___init__impl__6a9atx(48));
      var ms = comps.r2(1);
      str = '' + minutes + ':' + seconds + '.' + ms;
    }
    return str;
  };
  protoOf(DB).u4 = function (elapsed) {
    var className = 'Query elapsed';
    if (elapsed >= 10.0) {
      className = className + ' warn_long';
    } else if (elapsed >= 1.0) {
      className = className + ' warn';
    } else {
      className = className + ' short';
    }
    return className;
  };
  protoOf(DB).v4 = function (queries) {
    var countClassName = 'label';
    if (queries >= 20) {
      countClassName = countClassName + ' label-important';
    } else if (queries >= 10) {
      countClassName = countClassName + ' label-warning';
    } else {
      countClassName = countClassName + ' label-success';
    }
    return countClassName;
  };
  protoOf(DB).w4 = function (query) {
    var tmp0_elvis_lhs = query;
    var obj = tmp0_elvis_lhs == null ? new Query() : tmp0_elvis_lhs;
    var elapsed = Default_getInstance().r() * 15.0;
    obj.h4_1 = elapsed;
    obj.i4_1 = this.t4(elapsed);
    obj.j4_1 = this.u4(elapsed);
    obj.k4_1 = 'SELECT blah FROM something';
    obj.l4_1 = Default_getInstance().r() < 0.5;
    if (Default_getInstance().r() < 0.2) {
      obj.k4_1 = '<IDLE> in transaction';
    }
    if (Default_getInstance().r() < 0.1) {
      obj.k4_1 = 'vacuum';
    }
    return obj;
  };
  protoOf(DB).x4 = function (value) {
    if (!(value == null)) {
      value.i4_1 = '';
      value.j4_1 = '';
      value.k4_1 = '';
      value.h4_1 = null;
      value.l4_1 = null;
    } else {
      return new Query(VOID, VOID, VOID, '***');
    }
    return value;
  };
  protoOf(DB).y4 = function (row, keepIdentity, counter) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = Default_getInstance().r() * 10.0 + 1.0;
    tmp$ret$0 = Math.floor(tmp0_floor);
    var nbQueries = numberToInt(tmp$ret$0);
    var tmp0_elvis_lhs = row;
    var obj = tmp0_elvis_lhs == null ? new Row() : tmp0_elvis_lhs;
    obj.a4_1 = counter;
    obj.c4_1 = nbQueries;
    var tmp1_elvis_lhs = obj.b4_1;
    var lastSample = tmp1_elvis_lhs == null ? new Sample() : tmp1_elvis_lhs;
    obj.b4_1 = lastSample;
    var queries;
    if (keepIdentity) {
      var current = lastSample.f4_1;
      if (current == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$1 = ArrayList_init_$Create$();
        var newQueries = tmp$ret$1;
        lastSample.f4_1 = newQueries;
        var inductionVariable = 0;
        if (inductionVariable < 12)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            newQueries.n1(this.x4(null));
          }
           while (inductionVariable < 12);
        queries = newQueries;
      } else {
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = current.b();
        while (tmp0_iterator.c()) {
          var item = tmp0_iterator.d();
          // Inline function 'env.DB.generateRow.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1__anonymous__uwfjfc = checkIndexOverflow(tmp1);
          if (tmp1__anonymous__uwfjfc <= nbQueries) {
            this.w4(item);
          } else {
            this.x4(item);
          }
        }
        queries = current;
      }
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$2 = ArrayList_init_$Create$();
      queries = tmp$ret$2;
      lastSample.f4_1 = queries;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 12)
        do {
          var j = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (j < nbQueries) {
            var value = this.w4(this.x4(null));
            queries.n1(value);
          } else {
            queries.n1(this.x4(null));
          }
        }
         while (inductionVariable_0 < 12);
    }
    var topFiveQueries = lastSample.g4_1;
    if (topFiveQueries == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$3 = ArrayList_init_$Create$();
      var newTopFiveQueries = tmp$ret$3;
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < 5)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          newTopFiveQueries.n1(queries.r2(i_0));
        }
         while (inductionVariable_1 < 5);
      lastSample.g4_1 = newTopFiveQueries;
    } else {
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < 5)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          topFiveQueries.u2(i_1, queries.r2(i_1));
        }
         while (inductionVariable_2 < 5);
    }
    lastSample.e4_1 = nbQueries;
    lastSample.d4_1 = this.v4(nbQueries);
    return obj;
  };
  protoOf(DB).z4 = function (keepIdentity) {
    var oldData = this.q4_1;
    if (!keepIdentity) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var newData = tmp$ret$0;
      this.q4_1 = newData;
      var inductionVariable = 1;
      var last = this.m4_1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newData.n1(new Row('cluster' + i));
          newData.n1(new Row('cluster' + i + ' slave'));
        }
         while (!(i === last));
    }
    if (this.q4_1 == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$1 = ArrayList_init_$Create$();
      var newData_0 = tmp$ret$1;
      this.q4_1 = newData_0;
      var inductionVariable_0 = 1;
      var last_0 = this.m4_1;
      if (inductionVariable_0 <= last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          newData_0.n1(new Row('cluster' + i_0));
          newData_0.n1(new Row('cluster' + i_0 + ' slave'));
        }
         while (!(i_0 === last_0));
      oldData = this.q4_1;
    }
    var data = ensureNotNull(this.q4_1);
    var inductionVariable_1 = 0;
    var last_1 = data.h() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var row = data.r2(i_1);
        if ((!keepIdentity ? !(oldData == null) : false) ? oldData.h() < i_1 : false) {
          row.b4_1 = oldData.r2(i_1).b4_1;
        }
        if (row.b4_1 == null ? true : Default_getInstance().r() < this.a5(null)) {
          var tmp3_this = this;
          var tmp4 = tmp3_this.p4_1;
          tmp3_this.p4_1 = tmp4 + 1 | 0;
          if (!keepIdentity) {
            row.b4_1 = null;
          }
          this.y4(row, keepIdentity, this.p4_1);
        } else {
          data.u2(i_1, ensureNotNull(oldData).r2(i_1));
        }
      }
       while (inductionVariable_1 <= last_1);
    this.o4_1 = false;
    return data;
  };
  protoOf(DB).a5 = function (value) {
    if (!(value == null)) {
      this.r4_1 = value;
      return this.r4_1;
    } else {
      return this.r4_1;
    }
  };
  function takeCellObjectFromArray(array, index) {
    return array[index];
  }
  function createSlider(db) {
    var body = ensureNotNull(document.querySelector('body'));
    var theFirstChild = body.firstChild;
    var tmp = document.createElement('div');
    var sliderContainer = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    sliderContainer.style.cssText = 'display: flex';
    var tmp_0 = document.createElement('input');
    var slider = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    var tmp_1 = document.createElement('label');
    var text = tmp_1 instanceof HTMLElement ? tmp_1 : THROW_CCE();
    var tmp_2 = text;
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    var tmp0_floor = db.a5(null) * 100.0;
    tmp$ret$0 = Math.floor(tmp0_floor);
    tmp_2.innerHTML = 'mutations : ' + numberToInt(tmp$ret$0) + '%';
    text.id = 'ratioval';
    slider.setAttribute('type', 'range');
    slider.style.cssText = 'margin-bottom: 10px; margin-top: 5px';
    var tmp_3 = slider;
    tmp_3.addEventListener('change', createSlider$lambda(db));
    sliderContainer.appendChild(text);
    sliderContainer.appendChild(slider);
    body.insertBefore(sliderContainer, theFirstChild);
  }
  function createTableRows(db) {
    var tmp = document.querySelector('tbody');
    var tbody = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = db.z4(true);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.b();
    while (tmp0_iterator.c()) {
      var item = tmp0_iterator.d();
      var tmp$ret$1;
      // Inline function 'createTableRows.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createRow();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'createTableRows.<anonymous>.<anonymous>' call
      update(tmp0_also, item);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp0_mapTo.n1(tmp$ret$1);
    }
    tmp$ret$2 = tmp0_mapTo;
    tmp$ret$3 = tmp$ret$2;
    var rows = tmp$ret$3;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = rows.b();
    while (tmp0_iterator_0.c()) {
      var element = tmp0_iterator_0.d();
      // Inline function 'createTableRows.<anonymous>' call
      tbody.appendChild(element.dom.el);
    }
    return rows;
  }
  function update(_this__u8e3s4, db) {
    var lastSample = ensureNotNull(db.b4_1);
    if (!(db.z3_1 === _this__u8e3s4.dbname)) {
      _this__u8e3s4.dbname = db.z3_1;
      _this__u8e3s4.dom.name.textContent = _this__u8e3s4.dbname;
    }
    if (!(lastSample.d4_1 === _this__u8e3s4.countClassName)) {
      _this__u8e3s4.countClassName = lastSample.d4_1;
      _this__u8e3s4.dom.countSpan.className = lastSample.d4_1;
    }
    if (!(lastSample.e4_1 === _this__u8e3s4.nbQueries)) {
      _this__u8e3s4.nbQueries = lastSample.e4_1;
      _this__u8e3s4.dom.countSpan.textContent = _this__u8e3s4.nbQueries.toString();
    }
    var cells = _this__u8e3s4.cells;
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var cell = takeCellObjectFromArray(cells, i);
        var query = ensureNotNull(lastSample.g4_1).r2(i);
        if (!(query.j4_1 === cell.className)) {
          cell.className = query.j4_1;
          cell.dom.el.className = query.j4_1;
        }
        if (!(query.i4_1 === cell.elapsed)) {
          cell.elapsed = query.i4_1;
          cell.dom.elapsed.data = query.i4_1;
        }
        if (!(query.k4_1 === cell.query)) {
          cell.query = query.k4_1;
          cell.dom.popoverContent.textContent = cell.query;
        }
      }
       while (inductionVariable < 5);
  }
  function redraw(rows, db, perfMonitor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = db.z4(true);
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    var dbs = tmp$ret$0;
    perfMonitor.startProfile('view update');
    // Inline function 'kotlin.collections.forEachIndexed' call
    var tmp1_forEachIndexed = dbs;
    var index = 0;
    var indexedObject = tmp1_forEachIndexed;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'redraw.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp2__anonymous__z9zvc9 = tmp1;
      update(rows.r2(tmp2__anonymous__z9zvc9), item);
    }
    perfMonitor.endProfile('view update');
    setTimeout(redraw$lambda(rows, db, perfMonitor), db.n4_1);
  }
  function main() {
    var db = new DB(100, 0);
    createSlider(db);
    var monitor = perfMonitor;
    monitor.startFPSMonitor();
    monitor.startMemMonitor();
    monitor.initProfiler('view update');
    var rows = createTableRows(db);
    redraw(rows, db, monitor);
  }
  function createSlider$lambda($db) {
    return function (e) {
      var tmp = e.target;
      $db.a5(toDouble((tmp instanceof HTMLInputElement ? tmp : THROW_CCE()).value) / 100.0);
      var tmp_0 = document.querySelector('#ratioval');
      var tmp_1 = tmp_0 instanceof Element ? tmp_0 : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = $db.a5(null) * 100.0;
      tmp$ret$0 = Math.floor(tmp0_floor);
      tmp_1.innerHTML = 'mutations : ' + numberToInt(tmp$ret$0) + '%';
      return Unit_getInstance();
    };
  }
  function redraw$lambda($rows, $db, $perfMonitor) {
    return function () {
      redraw($rows, $db, $perfMonitor);
      return Unit_getInstance();
    };
  }
  function createEmptyRowObject() {
    return {};
  }
  function createEmptyRowDomObject() {
    return {};
  }
  function createEmptyCellObject() {
    return {};
  }
  function createEmptyCellDomObject() {
    return {};
  }
  function createEmptyArrayObject() {
    return [];
  }
  function pushCellObjectToArray(array, cell) {
    return array.push(cell);
  }
  function createRow() {
    var rowDom = createEmptyRowDomObject();
    var tmp = document.createElement('tr');
    rowDom.el = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp_0 = rowDom.el.appendChild(document.createElement('td'));
    rowDom.name = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    rowDom.name.className = 'dbname';
    var tmp_1 = rowDom.el.appendChild(document.createElement('td'));
    rowDom.count = tmp_1 instanceof HTMLElement ? tmp_1 : THROW_CCE();
    rowDom.count.className = 'query-count';
    var tmp_2 = rowDom.count;
    var tmp_3 = document.createElement('span');
    var tmp_4 = tmp_2.appendChild(tmp_3 instanceof HTMLElement ? tmp_3 : THROW_CCE());
    rowDom.countSpan = tmp_4 instanceof HTMLElement ? tmp_4 : THROW_CCE();
    var rowDomCells = createEmptyArrayObject();
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var cellDom = createEmptyCellDomObject();
        var tmp_5 = rowDom.el.appendChild(document.createElement('td'));
        cellDom.el = tmp_5 instanceof HTMLElement ? tmp_5 : THROW_CCE();
        var tmp_6 = cellDom.el.appendChild(document.createTextNode(''));
        cellDom.elapsed = tmp_6 instanceof Text ? tmp_6 : THROW_CCE();
        var tmp_7 = cellDom.el.appendChild(document.createElement('div'));
        cellDom.popover = tmp_7 instanceof HTMLElement ? tmp_7 : THROW_CCE();
        cellDom.popover.className = 'popover left';
        var tmp_8 = cellDom.popover.appendChild(document.createElement('div'));
        cellDom.popoverContent = tmp_8 instanceof HTMLElement ? tmp_8 : THROW_CCE();
        cellDom.popoverContent.className = 'popover-content';
        var tmp_9 = cellDom.popover.appendChild(document.createElement('div'));
        cellDom.popoverArrow = tmp_9 instanceof HTMLElement ? tmp_9 : THROW_CCE();
        cellDom.popoverArrow.className = 'arrow';
        var cell = createEmptyCellObject();
        cell.dom = cellDom;
        cell.className = '';
        cell.elapsed = '';
        cell.query = '';
        pushCellObjectToArray(rowDomCells, cell);
      }
       while (inductionVariable < 5);
    var row = createEmptyRowObject();
    row.dom = rowDom;
    row.cells = rowDomCells;
    row.dbname = '';
    row.countClassName = '';
    return row;
  }
  main();
  return _;
}));

//# sourceMappingURL=DOMMonsterKt.js.map
