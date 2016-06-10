(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(function () {
    this.P1 = new _.JetPoint(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(120.0, 105.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(237, 66, 222), 2.0, 3.0);
    this.P2 = new _.JetPoint(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(40.0, 75.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(239, 60, 123), 3.0, 4.0);
    this.P3 = new _.JetPoint(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(107.0, 25.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(247, 85, 107), 4.0, 5.0);
    this.P4 = new _.JetPoint(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(222.0, 130.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(247, 121, 57), 5.0, 6.0);
    this.P5 = new _.JetPoint(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(75.0, 225.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255, 239, 57), 6.0, 7.0);
  }, /** @lends _ */ {
    showGradientScene_mr05rm$unaryPlus: function (closure$scene) {
      return function () {
        closure$scene.root.add_snb51j$(this);
        return this;
      };
    },
    showGradientScene_mr05rm$f: function (closure$height, closure$width) {
      return function (x, y) {
        var level = 2.0 * y / closure$height;
        var saturation = level > 1.0 ? 1.0 : level;
        var brightness = level > 1.0 ? 2.0 - level : 1.0;
        return Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.hsb_6y0v78$(360.0 * x / closure$width, saturation, brightness);
      };
    },
    showGradientScene_mr05rm$f_0: function (closure$opened) {
      return function (it) {
        if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiSceneEvent.Type.WINDOW_CLOSED)
          closure$opened.v = false;
      };
    },
    calc: function (i, start, end) {
      return start * (1.0 - i) + i * end;
    },
    showGradientScene_mr05rm$f_1: function (closure$width, closure$height, closure$au, closure$ay, closure$db, closure$sm, closure$zb, closure$opened) {
      return function (ms) {
        var i = ms / 5000.0;
        if (i > 1.0)
          i = 1.0;
        var calc = _.calc;
        closure$au.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(calc(i, 400, closure$width - 280), calc(i, -40, closure$height - 200));
        closure$ay.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(calc(i, -90, closure$width - 280), calc(i, 300, closure$height - 160));
        closure$db.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(calc(i, 900, closure$width - 280), calc(i, -40, closure$height - 120));
        closure$sm.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(calc(i, -90, closure$width - 280), calc(i, -40, closure$height - 80));
        closure$zb.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(calc(i, -90, closure$width - 280), calc(i, 600, closure$height - 40));
        return i < 1.0 && closure$opened.v;
      };
    },
    showGradientScene_mr05rm$: function ($receiver, width, height) {
      var scene = $receiver.createScene_vux9f0$(width, height);
      var unaryPlus = _.showGradientScene_mr05rm$unaryPlus(scene);
      unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode($receiver.createImage_kvmus7$(width, height, _.showGradientScene_mr05rm$f(height, width))));
      var font = new Kotlin.modules['shared_js'].com.jetbrains.kui.KFont(Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.SANS_SERIF, 28);
      var au = unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('Alexey Ushakov', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      var ay = unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('Anton Yalyshev ', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      var db = unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('Dmitry Batkovich', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      var sm = unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('Sergey Malenkov', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      var zb = unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('Zalim Bashorov', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      var blue1 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 150, 215);
      var blue2 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(130, 110, 230);
      unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPath(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 100), void 0, void 0, void 0, new Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 200), Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(200, 100), [Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.0, blue1), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.5, blue1), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(1.0, blue2)]), void 0, [new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(200, 100)), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 200))]));
      unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPath(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(200, 100), void 0, void 0, void 0, new Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 300), Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(300, 100), [Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(199, 88, 188)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.5, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(235, 125, 50)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(1.0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(250, 140, 10))]), void 0, [new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(300, 100)), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 300)), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 200))]));
      unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPath(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 300), void 0, void 0, void 0, new Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(100, 300), Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(200, 200), [Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.0, blue1), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(1.0, blue2)]), void 0, [new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(200, 200)), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(300, 300))]));
      unaryPlus.call(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText('UI', Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(300, 300), new Kotlin.modules['shared_js'].com.jetbrains.kui.KFont(Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.SANS_SERIF, 280, true), blue2));
      scene.update();
      var opened = {v: true};
      scene.addSceneEventListener_pfqo16$(_.showGradientScene_mr05rm$f_0(opened));
      scene.animation_401a2l$(_.showGradientScene_mr05rm$f_1(width, height, au, ay, db, sm, zb, opened)).start_za3lpa$(30);
    },
    JetPoint: Kotlin.createClass(null, function (point, color, velX, velY) {
      this.point = point;
      this.color = color;
      this.velX = velX;
      this.velY = velY;
    }, /** @lends _.JetPoint.prototype */ {
      tick: function () {
        if (this.point.x < 7 || this.point.x > 243)
          this.velX *= -1;
        if (this.point.y < 7 || this.point.y > 243)
          this.velY *= -1;
        this.point = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(this.point.x + this.velX, this.point.y + this.velY);
      }
    }),
    drawLine$f: function (closure$p1, closure$p2, closure$line, closure$strokeWidth_) {
      return function (m) {
        closure$p1.tick();
        closure$p2.tick();
        closure$line.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(closure$p1.point.x, closure$p1.point.y);
        closure$line.end = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(closure$p2.point.x, closure$p2.point.y);
        closure$line.strokePaint = new Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(closure$p1.point.x, closure$p1.point.y), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(closure$p2.point.x, closure$p2.point.y), [Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.0, closure$p1.color), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(1.0, closure$p2.color)]);
        closure$line.stroke = new Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke(closure$strokeWidth_, Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke.Cap.ROUND, Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke.Join.ROUND);
      };
    },
    drawLine: function (this$, closure$animations) {
      return function (p1, p2, strokeWidth_) {
        var line = this$.line_hi6u81$(p1.point.x, p1.point.y, p2.point.x, p2.point.y, new Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient(new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(p1.point.x, p1.point.y), new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(p2.point.x, p2.point.y), [Kotlin.modules['stdlib'].kotlin.to_l1ob02$(0.0, p1.color), Kotlin.modules['stdlib'].kotlin.to_l1ob02$(1.0, p2.color)]), new Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke(strokeWidth_, Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke.Cap.ROUND, Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke.Join.ROUND));
        closure$animations.add_za3rmp$(_.drawLine$f(p1, p2, line, strokeWidth_));
      };
    },
    f: function (closure$cursor, closure$opened) {
      return function (it) {
        var tmp$0, tmp$1;
        (tmp$1 = closure$cursor.v) != null ? (tmp$1.fill = Kotlin.equals((tmp$0 = closure$cursor.v) != null ? tmp$0.fill : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE) ? Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 0, 0, 0) : Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE) : null;
        return closure$opened.v;
      };
    },
    f_0: function (closure$animations, closure$opened) {
      return function (it) {
        var tmp$0;
        tmp$0 = closure$animations.iterator();
        while (tmp$0.hasNext()) {
          var animation = tmp$0.next();
          animation(it);
        }
        return closure$opened.v;
      };
    },
    renderLogo_26bdom$f: function (closure$lines, closure$cursor, closure$opened) {
      return function () {
        this.rectangle_y4f9xb$(0, 0, this.sceneWidth, this.sceneHeight, void 0, void 0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.gray_vux9f0$(100));
        var animations = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
        var drawLine = _.drawLine(this, animations);
        drawLine(_.P1, _.P2, 15);
        drawLine(_.P2, _.P3, 20);
        drawLine(_.P3, _.P4, 25);
        drawLine(_.P4, _.P5, 30);
        this.square_y3fe47$(63, 63, 124, void 0, void 0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.BLACK);
        var font = this.font_d0x3tp$(Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.MONOSPACED, 27, true);
        closure$lines.add_za3rmp$(this.text_m6hqy6$('', 73, 93, font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
        closure$lines.add_za3rmp$(this.text_m6hqy6$('', 73, 123, font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
        closure$lines.add_za3rmp$(this.text_m6hqy6$('', 73, 153, font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
        closure$lines.add_za3rmp$(this.text_m6hqy6$('', 73, 183, font, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
        closure$cursor.v = this.rectangle_y4f9xb$(73, 95, 15, 6, void 0, void 0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE);
        this.animation_401a2l$(_.f(closure$cursor, closure$opened)).start_za3lpa$(4);
        this.animation_401a2l$(_.f_0(animations, closure$opened)).start_za3lpa$(10);
      };
    },
    renderLogo_26bdom$f_1: function (closure$codeGroup, closure$opened) {
      return function (ms) {
        closure$codeGroup.location = new Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint(300.0, 800.0 - ms / 50.0);
        return closure$opened.v;
      };
    },
    keyEventListener$line: function (closure$OFFSET_LINE, closure$cursor_pos_column, closure$SYMBOL_WIDTH) {
      return function () {
        return closure$OFFSET_LINE + closure$cursor_pos_column.v * closure$SYMBOL_WIDTH;
      };
    },
    keyEventListener$column: function (closure$OFFSET_COLUMN, closure$cursor_pos_line, closure$SYMBOL_HEIGHT) {
      return function () {
        return closure$OFFSET_COLUMN + closure$cursor_pos_line.v * closure$SYMBOL_HEIGHT;
      };
    },
    renderLogo_26bdom$keyEventListener: function (closure$OFFSET_LINE, closure$cursor_pos_column, closure$SYMBOL_WIDTH, closure$OFFSET_COLUMN, closure$cursor_pos_line, closure$SYMBOL_HEIGHT, closure$lines, closure$scene, closure$cursor) {
      return function (e) {
        var tmp$0, tmp$1;
        if (e.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_UP) {
          var line = _.keyEventListener$line(closure$OFFSET_LINE, closure$cursor_pos_column, closure$SYMBOL_WIDTH);
          var column = _.keyEventListener$column(closure$OFFSET_COLUMN, closure$cursor_pos_line, closure$SYMBOL_HEIGHT);
          tmp$0 = e.code;
          if (tmp$0 === 10 || tmp$0 === 13) {
            if (closure$cursor_pos_line.v < Kotlin.modules['stdlib'].kotlin.collections.get_lastIndex_a7ptmv$(closure$lines)) {
              closure$cursor_pos_line.v++;
              closure$cursor_pos_column.v = 0;
            }
          }
           else if (tmp$0 === 8)
            if (closure$cursor_pos_column.v === 0) {
              if (closure$cursor_pos_line.v > 0) {
                closure$cursor_pos_line.v--;
                closure$cursor_pos_column.v = closure$lines.get_za3lpa$(closure$cursor_pos_line.v).text.length;
              }
            }
             else {
              closure$lines.get_za3lpa$(closure$cursor_pos_line.v).text = Kotlin.modules['stdlib'].kotlin.text.dropLast_n7iutu$(closure$lines.get_za3lpa$(closure$cursor_pos_line.v).text, 1);
              closure$cursor_pos_column.v--;
            }
           else if (tmp$0 === 32 || (tmp$0 >= 41 && tmp$0 <= 128)) {
            var receiver = new Kotlin.modules['shared_js'].com.jetbrains.kui.KSceneBuilder(closure$scene);
            closure$lines.get_za3lpa$(closure$cursor_pos_line.v).text = closure$lines.get_za3lpa$(closure$cursor_pos_line.v).text + Kotlin.toChar(e.code).toString();
            closure$cursor_pos_column.v++;
          }
          (tmp$1 = closure$cursor.v) != null ? (tmp$1.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(line(), column())) : null;
          closure$scene.update();
        }
      };
    },
    type$f: function (closure$text, closure$i, closure$keyEventListener, closure$next, closure$opened) {
      return function (it) {
        closure$keyEventListener(new Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent(Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_UP, closure$text.charAt(closure$i.v++).charCodeAt(0)));
        var $receiver = closure$i.v < closure$text.length;
        if (!$receiver)
          closure$next();
        return $receiver && closure$opened.v;
      };
    },
    renderLogo_26bdom$type: function (closure$scene, closure$keyEventListener, closure$opened) {
      return function (text, fps, next) {
        var i = {v: 0};
        closure$scene.animation_401a2l$(_.type$f(text, i, closure$keyEventListener, next, closure$opened)).start_za3lpa$(fps);
      };
    },
    renderLogo_26bdom$f_2: function (closure$opened) {
      return function (it) {
        if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiSceneEvent.Type.WINDOW_CLOSED)
          closure$opened.v = false;
      };
    },
    f_2: function (closure$scene, closure$keyEventListener) {
      return function () {
        closure$scene.addKeyEventListener_6dloon$(closure$keyEventListener);
      };
    },
    f_3: function (closure$jb, closure$scene, closure$keyEventListener, closure$type) {
      return function () {
        closure$type(closure$jb, 10, _.f_2(closure$scene, closure$keyEventListener));
      };
    },
    f_4: function (closure$wakeUp, closure$hackers, closure$jb, closure$scene, closure$keyEventListener, closure$type, closure$opened) {
      return function (it) {
        var t = 1500;
        if (it > t) {
          closure$type(Kotlin.modules['stdlib'].kotlin.text.repeat_kljjvw$('\b', (closure$wakeUp + closure$hackers).length), 35, _.f_3(closure$jb, closure$scene, closure$keyEventListener, closure$type));
        }
        return it < t && closure$opened.v;
      };
    },
    f_5: function (closure$scene, closure$wakeUp, closure$hackers, closure$jb, closure$keyEventListener, closure$type, closure$opened) {
      return function () {
        closure$scene.animation_401a2l$(_.f_4(closure$wakeUp, closure$hackers, closure$jb, closure$scene, closure$keyEventListener, closure$type, closure$opened)).start_za3lpa$(30);
      };
    },
    f_6: function (closure$hackers, closure$scene, closure$wakeUp, closure$jb, closure$keyEventListener, closure$type, closure$opened) {
      return function () {
        closure$type(closure$hackers, 5, _.f_5(closure$scene, closure$wakeUp, closure$hackers, closure$jb, closure$keyEventListener, closure$type, closure$opened));
      };
    },
    renderLogo_26bdom$f_3: function (closure$hackers, closure$scene, closure$wakeUp, closure$jb, closure$keyEventListener, closure$type, closure$opened) {
      return function () {
        closure$type(Kotlin.modules['stdlib'].kotlin.text.repeat_kljjvw$('\b', 3), 20, _.f_6(closure$hackers, closure$scene, closure$wakeUp, closure$jb, closure$keyEventListener, closure$type, closure$opened));
      };
    },
    renderLogo_26bdom$: function ($receiver) {
      var lines = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
      var cursor = {v: null};
      var opened = {v: true};
      var scene = Kotlin.modules['shared_js'].com.jetbrains.kui.createScene_nu0d4f$($receiver, 1440, 600, _.renderLogo_26bdom$f(lines, cursor, opened));
      var codeFont = new Kotlin.modules['shared_js'].com.jetbrains.kui.KFont(Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.MONOSPACED, 20);
      var codeGroup = new Kotlin.modules['shared_js'].com.jetbrains.kui.KGroup(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(1000, 1000));
      var tmp$0;
      var index = 0;
      tmp$0 = Kotlin.modules['stdlib'].kotlin.text.lineSequence_gw00vq$(Kotlin.modules['stdlib'].kotlin.text.trimIndent_pdl1w0$('\n    interface KToolKit<out TKScene : KScene> {\n        fun createScene(w : Int, h : Int): TKScene\n        fun createImage(w: Int, h: Int, c: (x: Int, y: Int) -> KColor): KImage\n        fun loadImage(url : String) : KImage\n        fun loadResourceImage(path: String) : KImage\n    }\n\n\n\n    GameOfCodesJVM.kt :\n\n    fun main(args: Array<String>) = gameot(J2DToolKit())\n\n\n\n\n    GameOfCodesJS.kt :\n\n    fun gameot() = gameot(JsToolKit("kui2", "../example_shared_js"))\n\n\n\n\n\n\n    KScene {\n        KGroup {\n            KNode -> KImageNode or KShape like KCircle, KRectangle, KPath and others\n            ...\n            KGroup {...}\n            ...\n        }\n    }\n\n\n\n\n\n\n    scene.animation { ms ->\n        codeGroup.location = KPoint(300.0 , 800.0 - ms / 40.0)\n        true\n    }.start(20)\n\n\n\n\n\n\n    +KImageNode(createImage(width, height, { x, y ->\n        val level = 2.0 * y / height\n        val saturation = if (level > 1.0) 1.0 else level\n        val brightness = if (level > 1.0) 2.0 - level else 1.0\n        KColor.hsb(360.0 * x / width, saturation, brightness)\n    }))\n    ')).iterator();
      while (tmp$0.hasNext()) {
        var item = tmp$0.next();
        codeGroup.add_snb51j$(new Kotlin.modules['shared_js'].com.jetbrains.kui.KText(item, Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 30 * index++), codeFont, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.WHITE));
      }
      scene.root.add_snb51j$(codeGroup);
      scene.animation_401a2l$(_.renderLogo_26bdom$f_1(codeGroup, opened)).start_za3lpa$(20);
      var OFFSET_LINE = 73;
      var OFFSET_COLUMN = 95;
      var SYMBOL_WIDTH = 16;
      var SYMBOL_HEIGHT = 29;
      var cursor_pos_column = {v: 0};
      var cursor_pos_line = {v: 0};
      var keyEventListener = _.renderLogo_26bdom$keyEventListener(OFFSET_LINE, cursor_pos_column, SYMBOL_WIDTH, OFFSET_COLUMN, cursor_pos_line, SYMBOL_HEIGHT, lines, scene, cursor);
      var type = _.renderLogo_26bdom$type(scene, keyEventListener, opened);
      var wakeUp = 'WAKE UP\n';
      var neo = 'NEO!';
      var hackers = 'HACKERS\n';
      var jb = 'JIT\n\b\b\bET\nBRAINS\n__';
      scene.addSceneEventListener_pfqo16$(_.renderLogo_26bdom$f_2(opened));
      type(wakeUp + neo, 5, _.renderLogo_26bdom$f_3(hackers, scene, wakeUp, jb, keyEventListener, type, opened));
    },
    arcanoid_98h5cc$: function (toolkit) {
      var game = new _.ArcGame(toolkit);
      game.start();
    },
    ArcGame: Kotlin.createClass(null, function (toolkit) {
      this.toolkit = toolkit;
      this.handler = new _.ArcHandler();
      this.scene_51gl9a$ = this.toolkit.createScene_vux9f0$(_.ArcGame.Companion.WIDTH, _.ArcGame.Companion.HEIGHT);
      this.running = false;
      this.opened = true;
      var KeyEventVK_A = 65;
      var KeyEventVK_D = 68;
      var KeyEventVK_W = 87;
      this.scene_51gl9a$.addKeyEventListener_6dloon$(_.ArcGame.ArcGame$f(this, KeyEventVK_A, KeyEventVK_D, KeyEventVK_W));
      this.scene_51gl9a$.addSceneEventListener_pfqo16$(_.ArcGame.ArcGame$f_0(this));
      this.handler.createLevel();
    }, /** @lends _.ArcGame.prototype */ {
      start: function () {
        this.scene_51gl9a$.animation_401a2l$(_.ArcGame.start$f(this)).start_za3lpa$(50);
      },
      render: function () {
        this.handler.render_zeepit$(this.scene_51gl9a$);
      },
      tick: function () {
        this.handler.tick();
      }
    }, /** @lends _.ArcGame */ {
      start$f: function (this$ArcGame) {
        return function (it) {
          this$ArcGame.tick();
          this$ArcGame.render();
          return this$ArcGame.opened;
        };
      },
      Companion: Kotlin.createObject(null, function () {
        _.ArcGame.Companion.SCALE = 2;
        _.ArcGame.Companion.WIDTH = 448 * _.ArcGame.Companion.SCALE;
        _.ArcGame.Companion.HEIGHT = 252 * _.ArcGame.Companion.SCALE;
        _.ArcGame.Companion.CELLX = 32 * _.ArcGame.Companion.SCALE;
        _.ArcGame.Companion.CELLY = 16 * _.ArcGame.Companion.SCALE;
      }),
      object_initializer$: function () {
        _.ArcGame.Companion;
      },
      ArcGame$f: function (this$ArcGame, closure$KeyEventVK_A, closure$KeyEventVK_D, closure$KeyEventVK_W) {
        return function (e) {
          var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10;
          tmp$0 = e.type;
          if (tmp$0 === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_DOWN) {
            var k = e.code;
            tmp$1 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_mwto7b$(this$ArcGame.handler.entities), tmp$2 = tmp$1.first, tmp$3 = tmp$1.last, tmp$4 = tmp$1.step;
            for (var i = tmp$2; i <= tmp$3; i += tmp$4) {
              var en = this$ArcGame.handler.entities.get_za3lpa$(i);
              if (en.id === _.ArcId.Platform) {
                if (k === closure$KeyEventVK_A)
                  en.velX = -9;
                else if (k === closure$KeyEventVK_D)
                  en.velX = 9;
              }
              if (en.id === _.ArcId.Ball) {
                if (k === closure$KeyEventVK_W)
                  if (en.velX === 0) {
                    en.velX = (Kotlin.isType(tmp$5 = en, _.ArcBall) ? tmp$5 : Kotlin.throwCCE()).step;
                    en.velY = -en.step;
                  }
              }
            }
          }
           else if (tmp$0 === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_UP) {
            var k_0 = e.code;
            tmp$6 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_mwto7b$(this$ArcGame.handler.entities), tmp$7 = tmp$6.first, tmp$8 = tmp$6.last, tmp$9 = tmp$6.step;
            for (var i_0 = tmp$7; i_0 <= tmp$8; i_0 += tmp$9) {
              var en_0 = this$ArcGame.handler.entities.get_za3lpa$(i_0);
              if (en_0.id === _.ArcId.Platform) {
                if (k_0 === closure$KeyEventVK_A)
                  en_0.velX = 0;
                else if (k_0 === closure$KeyEventVK_D)
                  en_0.velX = 0;
              }
              if (en_0.id === _.ArcId.Ball) {
                if (k_0 === closure$KeyEventVK_W)
                  if (en_0.velX === 0) {
                    en_0.velX = (Kotlin.isType(tmp$10 = en_0, _.ArcBall) ? tmp$10 : Kotlin.throwCCE()).step;
                    en_0.velY = -en_0.step;
                  }
              }
            }
          }
        };
      },
      ArcGame$f_0: function (this$ArcGame) {
        return function (it) {
          if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiSceneEvent.Type.WINDOW_CLOSED)
            this$ArcGame.opened = false;
        };
      }
    }),
    ArcHandler: Kotlin.createClass(null, function () {
      this.entities = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
      this.tiles = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
    }, /** @lends _.ArcHandler.prototype */ {
      render_zeepit$: function (scene) {
        scene.root.clear();
        scene.root.add_snb51j$(new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(_.ArcGame.Companion.WIDTH, _.ArcGame.Companion.HEIGHT), void 0, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(153, 255, 153)));
        var i = 0;
        while (i < this.entities.size) {
          var en = this.entities.get_za3lpa$(i);
          en.render_zeepit$(scene);
          i++;
        }
        i = 0;
        while (i < this.tiles.size) {
          var tl = this.tiles.get_za3lpa$(i);
          tl.render_zeepit$(scene);
          i++;
        }
        scene.update();
      },
      tick: function () {
        var i = 0;
        while (i < this.entities.size) {
          var en = this.entities.get_za3lpa$(i);
          en.tick();
          i++;
        }
      },
      addEntity_awlvm3$: function (en) {
        this.entities.add_za3rmp$(en);
      },
      removeEntity_awlvm3$: function (en) {
        this.entities.remove_za3rmp$(en);
      },
      addTile_f5c3y8$: function (tl) {
        this.tiles.add_za3rmp$(tl);
      },
      removeTile_f5c3y8$: function (tl) {
        this.tiles.remove_za3rmp$(tl);
      },
      createLevel: function () {
        var tmp$0, tmp$1;
        var levelData = ['RRRRRRRRRRRRRR', 'RREERREERREERR', 'RRROOOOOOOORRR', 'RRRRROOOORRRRR', 'RRUUUUUUUUUURR', 'RRRRUUUUUURRRR', 'RRRRRRUURRRRRR', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEEEEEEEEE', 'EEEEEEBEEEEEEE', 'EEEEEEPEEEEEEE'];
        var width = levelData[0].length;
        var height = levelData.length;
        var SCALE = 2;
        var CELLX = 32 * SCALE;
        var CELLY = 16 * SCALE;
        tmp$0 = height - 1;
        for (var h = 0; h <= tmp$0; h++) {
          tmp$1 = width - 1;
          for (var w = 0; w <= tmp$1; w++) {
            var ch = levelData[h].charAt(w);
            if (ch === 'R')
              this.addTile_f5c3y8$(new _.ArcBrick(w * CELLX, h * CELLY, 'R', this));
            else if (ch === 'O')
              this.addTile_f5c3y8$(new _.ArcBrick(w * CELLX, h * CELLY, 'O', this));
            else if (ch === 'U')
              this.addTile_f5c3y8$(new _.ArcBrick(w * CELLX, h * CELLY, 'U', this));
            else if (ch === 'B')
              this.addEntity_awlvm3$(new _.ArcBall(w * CELLX, h * CELLY, this));
            else if (ch === 'P')
              this.addEntity_awlvm3$(new _.ArcPlatform(w * CELLX, h * CELLY, this));
          }
        }
      }
    }),
    ArcId: Kotlin.createEnumClass(function () {
      return [Kotlin.Enum];
    }, function $fun() {
      $fun.baseInitializer.call(this);
    }, function () {
      return {
        Platform: function () {
          return new _.ArcId();
        },
        Brick: function () {
          return new _.ArcId();
        },
        Ball: function () {
          return new _.ArcId();
        }
      };
    }),
    Camera: Kotlin.createClass(null, function () {
      this.x = 0;
      this.y = 0;
    }, /** @lends _.Camera.prototype */ {
      tick_yeploj$: function (player) {
        this.x = -player.x + (_.Game.Companion.WIDTH / 2 | 0);
        this.y = -player.y + (_.Game.Companion.HEIGHT / 2 | 0);
        var levelHeight = 21;
        var bottomCamBound = -levelHeight * _.Game.Companion.CELLY + _.Game.Companion.HEIGHT + _.Game.Companion.CELLY;
        if (this.y < bottomCamBound)
          this.y = bottomCamBound;
        if (this.x > 0)
          this.x = 0;
      }
    }),
    gameot_98h5cc$: function (toolkit) {
      var game = new _.Game(toolkit);
      game.start();
    },
    Game: Kotlin.createClass(null, function (tk) {
      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10, tmp$11, tmp$12, tmp$13, tmp$14, tmp$15;
      this.tk = tk;
      this.backgroundImage = this.tk.loadResourceImage_61zpoe$('/bg.png');
      this.sprites = this.tk.loadResourceImage_61zpoe$('/spritesheet.png');
      this.welcomeScreenImage = this.tk.loadResourceImage_61zpoe$('/welcomeScreen.png');
      this.ground = new _.Sprite(1, 1, this.sprites);
      this.grass = new _.Sprite(2, 1, this.sprites);
      this.stone = new _.Sprite(3, 1, this.sprites);
      this.gem = new _.Sprite(4, 1, this.sprites);
      this.lambda = new _.Sprite(5, 1, this.sprites);
      this.handler = new _.Handler(this);
      this.opened = true;
      this.scene_pt3rn4$ = this.tk.createScene_vux9f0$(_.Game.Companion.WIDTH, _.Game.Companion.HEIGHT);
      tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_eg9ybj$(_.Game.Companion.player), tmp$1 = tmp$0.first, tmp$2 = tmp$0.last, tmp$3 = tmp$0.step;
      for (var i = tmp$1; i <= tmp$2; i += tmp$3) {
        _.Game.Companion.player[i] = new _.Sprite(i + 1, 2, this.sprites);
      }
      tmp$4 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_eg9ybj$(_.Game.Companion.lambPlayer), tmp$5 = tmp$4.first, tmp$6 = tmp$4.last, tmp$7 = tmp$4.step;
      for (var i_0 = tmp$5; i_0 <= tmp$6; i_0 += tmp$7) {
        _.Game.Companion.lambPlayer[i_0] = new _.Sprite(i_0 + 1, 3, this.sprites);
      }
      tmp$8 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_eg9ybj$(_.Game.Companion.wolf), tmp$9 = tmp$8.first, tmp$10 = tmp$8.last, tmp$11 = tmp$8.step;
      for (var i_1 = tmp$9; i_1 <= tmp$10; i_1 += tmp$11) {
        _.Game.Companion.wolf[i_1] = new _.Sprite(i_1 + 1, 4, this.sprites);
      }
      tmp$12 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_eg9ybj$(_.Game.Companion.arrow), tmp$13 = tmp$12.first, tmp$14 = tmp$12.last, tmp$15 = tmp$12.step;
      for (var i_2 = tmp$13; i_2 <= tmp$14; i_2 += tmp$15) {
        _.Game.Companion.arrow[i_2] = new _.Sprite(i_2 + 6, 1, this.sprites);
      }
      var KeyEventVK_A = 65;
      var KeyEventVK_D = 68;
      var KeyEventVK_W = 87;
      var KeyEventVK_SP = 32;
      this.scene_pt3rn4$.addKeyEventListener_6dloon$(_.Game.Game$f(this, KeyEventVK_W, KeyEventVK_A, KeyEventVK_D, KeyEventVK_SP));
      this.scene_pt3rn4$.addSceneEventListener_pfqo16$(_.Game.Game$f_0(this));
    }, /** @lends _.Game.prototype */ {
      render_zeepit$: function (g) {
        var tmp$0, tmp$1;
        g.root.clear();
        var bImg = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.backgroundImage, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(_.Game.Companion.WIDTH, _.Game.Companion.HEIGHT));
        g.root.add_snb51j$(bImg);
        var font = new Kotlin.modules['shared_js'].com.jetbrains.kui.KFont(Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.MONOSPACED, 27, true);
        if (!_.Game.Companion.showWelcomScreen) {
          var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.gem.bufferedImage, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(50, 50));
          img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(_.Game.Companion.WIDTH - 180, 20);
        }
        if (_.Game.Companion.showWelcomScreen) {
          var img_0 = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.welcomeScreenImage, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(_.Game.Companion.WIDTH, _.Game.Companion.HEIGHT));
          g.root.add_snb51j$(img_0);
        }
        this.handler.render_2z7yyz$(g, _.Game.Companion.cam.x, _.Game.Companion.cam.y);
        g.update();
      },
      tick: function () {
        this.handler.tick();
        var i = 0;
        while (i < this.handler.entities.size) {
          var en = this.handler.entities.get_za3lpa$(i);
          if (en.id === _.Enums.Id.Player) {
            _.Game.Companion.cam.tick_yeploj$(en);
          }
          i++;
        }
        if (_.Game.Companion.showWelcomScreen)
          _.Game.Companion.welcomeScreenTime++;
        if (_.Game.Companion.welcomeScreenTime > 150) {
          _.Game.Companion.showWelcomScreen = false;
          _.Game.Companion.welcomeScreenTime = 0;
          this.handler.createLevel();
        }
      },
      start: function () {
        this.scene_pt3rn4$.animation_401a2l$(_.Game.start$f(this)).start_za3lpa$(60);
      }
    }, /** @lends _.Game */ {
      Companion: Kotlin.createObject(null, function () {
        _.Game.Companion.SCALE = 3;
        _.Game.Companion.WIDTH = 320 * _.Game.Companion.SCALE;
        _.Game.Companion.HEIGHT = 180 * _.Game.Companion.SCALE;
        _.Game.Companion.CELLX = 16 * _.Game.Companion.SCALE;
        _.Game.Companion.CELLY = 16 * _.Game.Companion.SCALE;
        _.Game.Companion.TITLE = 'Game of Codes';
        _.Game.Companion.cam = new _.Camera();
        _.Game.Companion.arrow = Kotlin.nullArray(2);
        _.Game.Companion.player = Kotlin.nullArray(10);
        _.Game.Companion.lambPlayer = Kotlin.nullArray(10);
        _.Game.Companion.wolf = Kotlin.nullArray(10);
        _.Game.Companion.gems = 0;
        _.Game.Companion.showWelcomScreen = true;
        _.Game.Companion.welcomeScreenTime = 0;
      }),
      object_initializer$: function () {
        _.Game.Companion;
      },
      start$f: function (this$Game) {
        return function (it) {
          this$Game.tick();
          this$Game.render_zeepit$(this$Game.scene_pt3rn4$);
          return this$Game.opened;
        };
      },
      Game$f: function (this$Game, closure$KeyEventVK_W, closure$KeyEventVK_A, closure$KeyEventVK_D, closure$KeyEventVK_SP) {
        return function (it) {
          var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8;
          if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_DOWN) {
            var k = it.code;
            tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_mwto7b$(this$Game.handler.entities), tmp$1 = tmp$0.first, tmp$2 = tmp$0.last, tmp$3 = tmp$0.step;
            for (var i = tmp$1; i <= tmp$2; i += tmp$3) {
              var en = this$Game.handler.entities.get_za3lpa$(i);
              if (en.id === _.Enums.Id.Player) {
                if (k === closure$KeyEventVK_W) {
                  if (en.ableToJump) {
                    en.jumping = true;
                    en.gravity = 9.0;
                  }
                }
                 else if (k === closure$KeyEventVK_A) {
                  en.velX = -5;
                  en.facing = 0;
                }
                 else if (k === closure$KeyEventVK_D) {
                  en.velX = 5;
                  en.facing = 1;
                }
                 else if (k === closure$KeyEventVK_SP)
                  if (en.state === _.Enums.EntityStates.LambPlayer) {
                    tmp$4 = en.facing;
                    if (tmp$4 === 0)
                      this$Game.handler.addEntity_yeploj$(new _.Arrow(en.x - _.Game.Companion.CELLX - 10, en.y, en.facing, en.handler));
                    else if (tmp$4 === 1)
                      this$Game.handler.addEntity_yeploj$(new _.Arrow(en.x + en.width + 10, en.y, en.facing, en.handler));
                  }
              }
            }
          }
           else if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_UP) {
            var k_0 = it.code;
            tmp$5 = Kotlin.modules['stdlib'].kotlin.collections.get_indices_mwto7b$(this$Game.handler.entities), tmp$6 = tmp$5.first, tmp$7 = tmp$5.last, tmp$8 = tmp$5.step;
            for (var i_0 = tmp$6; i_0 <= tmp$7; i_0 += tmp$8) {
              var en_0 = this$Game.handler.entities.get_za3lpa$(i_0);
              if (en_0.id === _.Enums.Id.Player) {
                if (k_0 === closure$KeyEventVK_A)
                  en_0.velX = 0;
                else if (k_0 === closure$KeyEventVK_D)
                  en_0.velX = 0;
              }
            }
          }
        };
      },
      Game$f_0: function (this$Game) {
        return function (it) {
          if (it.type === Kotlin.modules['shared_js'].com.jetbrains.kui.KuiSceneEvent.Type.WINDOW_CLOSED)
            this$Game.opened = false;
        };
      }
    }),
    Handler: Kotlin.createClass(null, function (game) {
      this.game = game;
      this.entities = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
      this.tiles = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
    }, /** @lends _.Handler.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var i = 0;
        while (i < this.entities.size) {
          var en = this.entities.get_za3lpa$(i);
          en.render_2z7yyz$(g, tx, ty);
          i++;
        }
        i = 0;
        while (i < this.tiles.size) {
          var tl = this.tiles.get_za3lpa$(i);
          tl.render_2z7yyz$(g, tx, ty);
          i++;
        }
      },
      tick: function () {
        var i = 0;
        while (i < this.entities.size) {
          var en = this.entities.get_za3lpa$(i);
          en.tick();
          i++;
        }
        i = 0;
        while (i < this.tiles.size) {
          var tl = this.tiles.get_za3lpa$(i);
          tl.tick();
          i++;
        }
      },
      addEntity_yeploj$: function (en) {
        this.entities.add_za3rmp$(en);
      },
      removeEntity_yeploj$: function (en) {
        this.entities.remove_za3rmp$(en);
      },
      addTile_1jvf2$: function (tl) {
        this.tiles.add_za3rmp$(tl);
      },
      removeTile_1jvf2$: function (tl) {
        this.tiles.remove_za3rmp$(tl);
      },
      createLevel: function () {
        var tmp$0, tmp$1;
        var levelData = ['EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES', 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSEGEEEEEEEEEEEEEEES', 'SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESESDSEGEEEEEEEEEEEEEEES', 'SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEWEEEESDSEGEEEEEEEEEEEEEEES', 'SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSEEESDSEGEEEEEEEEEEEEEEES', 'SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSEEESDSEGEEEEEEEEEEEEEGSS', 'SEEEEEEEEEEEEEEEEEEEEEEEEEESSDSEESSSEEESDSEGEEEEEEEEEEEEESSS', 'SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESSSEEESDSEGEEEEEEEEEEEWEGGS', 'SEEEEEEEEEEEEEEEEEEEEESSSEEEEEEEESSSEEESDSEEEEEEEEEEEEEEEGGS', 'SEEEEEEEEEEEEEEEEEGGEESSSEEEEEEESSSSEEESDSSSEEEEEEEEEEESSGGS', 'SEEEEEEAEEEEGGGEEEEWEEWEEEEEEEEESSSSEEESDSSSEGEEEEEEEEEGGGGS', 'SSEEEEEEEEEEEEEEESSSSSSSSEEEEEESSSSSGGGEEEEEEGEEEEEEEEEGGGGS', 'SSEEEEEEEEEEEEEESSSSSSSSSEEEEEESSSSSEEEEEEEEEGEEEEEEEEEGGSSS', 'SSEEPEEEESSEEWEEEEEEEEEEEEEEEEESSSSSEEWEEEEEEGEEEEEEEEEGGSSS', 'SSEEEEEESSSEEEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSEEEEEEWEEEEGGSSS', 'SSRRRRRRSSSRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSRRRRRRRRRRRRRSSS', 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD'];
        var width = levelData[0].length;
        var height = levelData.length;
        tmp$0 = height - 1;
        for (var y = 0; y <= tmp$0; y++) {
          tmp$1 = width - 1;
          for (var x = 0; x <= tmp$1; x++) {
            var ch = levelData[y].charAt(x);
            if (ch === 'D')
              this.addTile_1jvf2$(new _.Ground(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this, this.game.ground.bufferedImage));
            else if (ch === 'R')
              this.addTile_1jvf2$(new _.Grass(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this, this.game.grass.bufferedImage));
            else if (ch === 'S')
              this.addTile_1jvf2$(new _.Stone(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this, this.game.stone.bufferedImage));
            else if (ch === 'G')
              this.addTile_1jvf2$(new _.Gem(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this, this.game.gem.bufferedImage));
            else if (ch === 'A')
              this.addTile_1jvf2$(new _.Lambda(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this, this.game.lambda.bufferedImage));
            else if (ch === 'P')
              this.addEntity_yeploj$(new _.Player(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, this));
            else if (ch === 'W')
              this.addEntity_yeploj$(new _.Wolf(x * _.Game.Companion.CELLX, y * _.Game.Companion.CELLY, 0, this));
          }
        }
      },
      clearLevel: function () {
        this.entities.clear();
        this.tiles.clear();
      }
    }),
    Sprite: Kotlin.createClass(null, function (x, y, image) {
      this.bufferedImage = image.getSubimage_tjonv8$(x * 32 - 32, y * 32 - 32, 32, 32);
    }),
    ArcBall: Kotlin.createClass(function () {
      return [_.ArcEntity];
    }, function $fun(x, y, handler) {
      $fun.baseInitializer.call(this, x + (_.ArcGame.Companion.CELLX / 4 | 0) + (_.ArcGame.Companion.CELLX / 8 | 0), y + (_.ArcGame.Companion.CELLY / 2 | 0), _.ArcGame.Companion.CELLX / 4 | 0, _.ArcGame.Companion.CELLY / 2 | 0, _.ArcId.Ball, handler);
      this.step = 6;
      this.velX = 0;
      this.velY = 0;
    }, /** @lends _.ArcBall.prototype */ {
      render_zeepit$: function (g) {
        g.root.add_snb51j$(new Kotlin.modules['shared_js'].com.jetbrains.kui.KCircle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), this.width, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 204, 255), new Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke(5.0), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 150, 200)));
      },
      tick: function () {
        this.x += this.velX;
        this.y += this.velY;
        if (this.x <= 0)
          this.velX = this.step;
        if (this.x >= _.ArcGame.Companion.WIDTH - this.width)
          this.velX = -this.step;
        if (this.y <= 0)
          this.velY = this.step;
        if (this.y >= _.ArcGame.Companion.HEIGHT - this.heigth)
          this.die();
        var i = 0;
        while (i < this.handler.tiles.size) {
          var tl = this.handler.tiles.get_za3lpa$(i);
          if (tl.id === _.ArcId.Brick) {
            if (this.boundsTop.bbox.intersects_sn8sit$(tl.bounds.bbox)) {
              tl.die();
              this.velY = this.step;
            }
            if (this.boundsBottom.bbox.intersects_sn8sit$(tl.bounds.bbox)) {
              tl.die();
              this.velY = -this.step;
            }
            if (this.boundsLeft.bbox.intersects_sn8sit$(tl.bounds.bbox)) {
              tl.die();
              this.velX = this.step;
            }
            if (this.boundsRight.bbox.intersects_sn8sit$(tl.bounds.bbox)) {
              tl.die();
              this.velX = -this.step;
            }
          }
          i++;
        }
        i = 0;
        while (i < this.handler.entities.size) {
          var en = this.handler.entities.get_za3lpa$(i);
          if (en.id === _.ArcId.Platform) {
            if (this.boundsBottom.bbox.intersects_sn8sit$(en.bounds.bbox) && this.velY !== 0) {
              this.velY = -this.step;
            }
          }
          i++;
        }
      }
    }),
    ArcEntity: Kotlin.createClass(null, function (x, y, width, heigth, id, handler) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.heigth = heigth;
      this.id = id;
      this.handler = handler;
      this.velX = 0;
      this.velY = 0;
    }, /** @lends _.ArcEntity.prototype */ {
      bounds: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
        }
      },
      boundsTop: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, 5));
        }
      },
      boundsBottom: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y + this.heigth - 5), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, 5));
        }
      },
      boundsLeft: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(5, this.heigth));
        }
      },
      boundsRight: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + this.width - 5, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(5, this.heigth));
        }
      },
      die: function () {
        this.handler.removeEntity_awlvm3$(this);
        this.handler.addEntity_awlvm3$(new _.ArcBall((_.ArcGame.Companion.WIDTH / 2 | 0) - (_.ArcGame.Companion.CELLX / 2 | 0), _.ArcGame.Companion.HEIGHT - _.ArcGame.Companion.CELLY * 2 + (_.ArcGame.Companion.CELLY / 4 | 0), this.handler));
      }
    }),
    ArcPlatform: Kotlin.createClass(function () {
      return [_.ArcEntity];
    }, function $fun(x, y, handler) {
      $fun.baseInitializer.call(this, x - _.ArcGame.Companion.CELLX, y, x - _.ArcGame.Companion.CELLX * 3, _.ArcGame.Companion.CELLY * 2 / 3 | 0, _.ArcId.Platform, handler);
    }, /** @lends _.ArcPlatform.prototype */ {
      render_zeepit$: function (g) {
        g.root.add_snb51j$(new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(30, 30), Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 0, 51)));
      },
      tick: function () {
        this.x += this.velX;
        this.y += this.velY;
        if (this.x <= 0)
          this.x = 0;
        if (this.x >= _.ArcGame.Companion.WIDTH - this.width)
          this.x = _.ArcGame.Companion.WIDTH - this.width;
      }
    }),
    ArcBrick: Kotlin.createClass(function () {
      return [_.ArcTile];
    }, function $fun(x, y, col, handler) {
      $fun.baseInitializer.call(this, x, y, _.ArcId.Brick, handler);
      this.col = col;
    }, /** @lends _.ArcBrick.prototype */ {
      render_zeepit$: function (g) {
        var tmp$0, tmp$1;
        tmp$0 = this.col;
        if (tmp$0 === 'R')
          tmp$1 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(254, 118, 0);
        else if (tmp$0 === 'O')
          tmp$1 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(213, 96, 210);
        else if (tmp$0 === 'U')
          tmp$1 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(121, 102, 255);
        else {
          tmp$1 = Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.RED;
        }
        var col = tmp$1;
        g.root.add_snb51j$(new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + 1, this.y + 1), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width - 2, this.heidth - 2), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(8, 8), col));
      }
    }),
    ArcTile: Kotlin.createClass(null, function (x, y, id, handler) {
      this.x = x;
      this.y = y;
      this.id = id;
      this.handler = handler;
      this.width = 32 * 2;
      this.heidth = 16 * 2;
    }, /** @lends _.ArcTile.prototype */ {
      bounds: {
        get: function () {
          return new Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x, this.y), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        }
      },
      die: function () {
        this.handler.removeTile_f5c3y8$(this);
      }
    }),
    Arrow: Kotlin.createClass(function () {
      return [_.Entity];
    }, function $fun(x, y, facing, handler) {
      $fun.baseInitializer.call(this, x, y, _.Game.Companion.CELLX, _.Game.Companion.CELLY - 20, facing, _.Enums.Id.Arrow, handler);
      if (facing === 0) {
        this.velX = -15;
      }
       else if (facing === 1) {
        this.velX = 15;
      }
    }, /** @lends _.Arrow.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var tmp$0, tmp$1;
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$1 = (tmp$0 = _.Game.Companion.arrow[this.facing]) != null ? tmp$0.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$1 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
        this.x += this.velX;
        this.y += this.velY;
        var i = 0;
        while (i < this.handler.tiles.size) {
          var tl = this.handler.tiles.get_za3lpa$(i);
          if (this.bounds.intersects_sn8sit$(tl.bounds)) {
            this.die();
          }
          i++;
        }
        i = 0;
        while (i < this.handler.entities.size) {
          var en = this.handler.entities.get_za3lpa$(i);
          if (en.id === _.Enums.Id.Wolf) {
            if (this.bounds.intersects_sn8sit$(en.bounds)) {
              en.die();
              this.die();
            }
          }
          i++;
        }
      }
    }),
    Entity: Kotlin.createClass(null, function (x, y, width, heigth, facing, id, handler) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.heigth = heigth;
      this.facing = facing;
      this.id = id;
      this.handler = handler;
      this.velX = 0;
      this.velY = 0;
      this.jumping = false;
      this.falling = true;
      this.gravity = 0.0;
      this.ableToJump = false;
      this.state = _.Enums.EntityStates.Original;
    }, /** @lends _.Entity.prototype */ {
      bounds: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x, this.y, this.width, this.heigth);
        }
      },
      boundsTop: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x, this.y, this.width, 5);
        }
      },
      boundsBottom: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x, this.y + this.heigth - 5, this.width, 5);
        }
      },
      boundsLeft: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x, this.y + 10, 5, this.heigth - 20);
        }
      },
      boundsRight: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x + this.width - 5, this.y + 10, 5, this.heigth - 20);
        }
      },
      die: function () {
        this.handler.removeEntity_yeploj$(this);
        if (this.id === _.Enums.Id.Player) {
          this.handler.clearLevel();
          _.Game.Companion.showWelcomScreen = true;
        }
      }
    }),
    Player: Kotlin.createClass(function () {
      return [_.Entity];
    }, function $fun(x, y, handler) {
      $fun.baseInitializer.call(this, x, y - _.Game.Companion.CELLY, _.Game.Companion.CELLX * 1.3 | 0, _.Game.Companion.CELLY * 1.3 | 0, 1, _.Enums.Id.Player, handler);
      this.frame = 0;
      this.frameDelay = 0;
    }, /** @lends _.Player.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7;
        if (this.state === _.Enums.EntityStates.Original) {
          if (this.facing === 0) {
            var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$1 = (tmp$0 = _.Game.Companion.player[this.frame]) != null ? tmp$0.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$1 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
            img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
            g.root.add_snb51j$(img);
          }
           else if (this.facing === 1) {
            var img_0 = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$3 = (tmp$2 = _.Game.Companion.player[this.frame + 5]) != null ? tmp$2.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$3 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
            img_0.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
            g.root.add_snb51j$(img_0);
          }
        }
        if (this.state === _.Enums.EntityStates.LambPlayer) {
          if (this.facing === 0) {
            var img_1 = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$5 = (tmp$4 = _.Game.Companion.lambPlayer[this.frame]) != null ? tmp$4.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$5 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
            img_1.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
            g.root.add_snb51j$(img_1);
          }
           else if (this.facing === 1) {
            var img_2 = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$7 = (tmp$6 = _.Game.Companion.lambPlayer[this.frame + 5]) != null ? tmp$6.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$7 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
            img_2.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
            g.root.add_snb51j$(img_2);
          }
        }
      },
      tick: function () {
        var tmp$0, tmp$1, tmp$2, tmp$3;
        this.x += this.velX;
        this.y += this.velY;
        this.ableToJump = false;
        var i = 0;
        while (i < this.handler.tiles.size) {
          var tl = this.handler.tiles.get_za3lpa$(i);
          if (tl.id !== _.Enums.Id.Lambda) {
            if (this.boundsTop.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
              this.velY = 0;
              if (this.jumping) {
                this.jumping = false;
                this.gravity = 0.8;
                this.falling = true;
              }
            }
            if (this.boundsBottom.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
              this.velY = 0;
              this.ableToJump = true;
              if (this.falling)
                this.falling = false;
            }
             else {
              if (!this.falling && !this.jumping) {
                this.gravity = 0.2;
                this.falling = true;
              }
            }
            if (this.boundsLeft.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
              this.velX = 0;
              this.x += 5;
            }
            if (this.boundsRight.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
              this.velX = 0;
              this.x -= 5;
            }
            if (this.bounds.intersects_sn8sit$(tl.bounds) && tl.id === _.Enums.Id.Gem) {
              tmp$0 = _.Game.Companion, tmp$1 = tmp$0.gems, tmp$2 = tmp$1, tmp$0.gems = tmp$1 + 1, tmp$2;
              tl.die();
            }
          }
           else {
            if (this.bounds.intersects_sn8sit$(tl.bounds)) {
              this.state = _.Enums.EntityStates.LambPlayer;
              tl.die();
            }
          }
          i++;
        }
        i = 0;
        while (i < this.handler.entities.size) {
          var en = this.handler.entities.get_za3lpa$(i);
          if (en.id === _.Enums.Id.Wolf) {
            if (this.boundsBottom.intersects_sn8sit$(en.boundsTop)) {
              en.die();
            }
             else if (this.bounds.intersects_sn8sit$(en.bounds)) {
              this.die();
            }
          }
          i++;
        }
        if (this.jumping) {
          this.gravity -= 0.3;
          this.velY = -(this.gravity * 1.5) | 0;
          if (this.gravity <= 0.0) {
            this.jumping = false;
            this.falling = true;
          }
        }
        if (this.falling) {
          this.gravity += 0.3;
          this.gravity = (tmp$3 = Kotlin.modules['stdlib'].kotlin.collections.min_bvy38t$([this.gravity, 5.0])) != null ? tmp$3 : Kotlin.throwNPE();
          this.velY = this.gravity * 1.5 | 0;
        }
        if (this.velX !== 0) {
          this.frameDelay++;
          if (this.frameDelay >= 3) {
            this.frame++;
            if (this.frame >= 5) {
              this.frame = 0;
            }
            this.frameDelay = 0;
          }
        }
      }
    }),
    Wolf: Kotlin.createClass(function () {
      return [_.Entity];
    }, function $fun(x, y, facing, handler) {
      $fun.baseInitializer.call(this, x, y, _.Game.Companion.CELLX, _.Game.Companion.CELLY, 0, _.Enums.Id.Wolf, handler);
      if (facing === 0) {
        this.velX = -2;
      }
       else if (facing === 1) {
        this.velX = 2;
      }
      this.frame = 0;
      this.frameDelay = 0;
    }, /** @lends _.Wolf.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var tmp$0, tmp$1, tmp$2, tmp$3;
        if (this.facing === 0) {
          var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$1 = (tmp$0 = _.Game.Companion.wolf[this.frame]) != null ? tmp$0.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$1 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
          img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
          g.root.add_snb51j$(img);
        }
         else if (this.facing === 1) {
          var img_0 = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(Kotlin.isType(tmp$3 = (tmp$2 = _.Game.Companion.wolf[this.frame + 5]) != null ? tmp$2.bufferedImage : null, Kotlin.modules['shared_js'].com.jetbrains.kui.KImage) ? tmp$3 : Kotlin.throwCCE(), Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heigth));
          img_0.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
          g.root.add_snb51j$(img_0);
        }
      },
      tick: function () {
        this.x += this.velX;
        this.y += this.velY;
        var i = 0;
        while (i < this.handler.tiles.size) {
          var tl = this.handler.tiles.get_za3lpa$(i);
          if (this.boundsBottom.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
            this.velY = 0;
            this.falling = false;
          }
           else {
            if (!this.falling) {
              this.gravity = 0.0;
              this.falling = true;
            }
          }
          if (this.boundsLeft.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
            this.velX = 2;
            this.facing = 1;
          }
          if (this.boundsRight.intersects_sn8sit$(tl.bounds) && tl.id !== _.Enums.Id.Gem) {
            this.velX = -2;
            this.facing = 0;
          }
          i++;
        }
        if (this.falling) {
          this.gravity += 0.3;
          if (this.gravity < 5)
            this.velY = this.gravity * 1.5 | 0;
        }
        if (this.velX !== 0) {
          this.frameDelay++;
          if (this.frameDelay >= 5) {
            this.frame++;
            if (this.frame >= 5) {
              this.frame = 0;
            }
            this.frameDelay = 0;
          }
        }
      }
    }),
    Gem: Kotlin.createClass(function () {
      return [_.Tile];
    }, function $fun(x, y, handler, image) {
      $fun.baseInitializer.call(this, x, y, _.Enums.Id.Gem, handler);
      this.image = image;
    }, /** @lends _.Gem.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.image, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
      }
    }),
    Grass: Kotlin.createClass(function () {
      return [_.Tile];
    }, function $fun(x, y, handler, image) {
      $fun.baseInitializer.call(this, x, y, _.Enums.Id.Grass, handler);
      this.image = image;
    }, /** @lends _.Grass.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.image, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
      }
    }),
    Ground: Kotlin.createClass(function () {
      return [_.Tile];
    }, function $fun(x, y, handler, image) {
      $fun.baseInitializer.call(this, x, y, _.Enums.Id.Ground, handler);
      this.image = image;
    }, /** @lends _.Ground.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.image, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
      }
    }),
    Lambda: Kotlin.createClass(function () {
      return [_.Tile];
    }, function $fun(x, y, handler, image) {
      $fun.baseInitializer.call(this, x, y, _.Enums.Id.Lambda, handler);
      this.image = image;
    }, /** @lends _.Lambda.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.image, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
      }
    }),
    Stone: Kotlin.createClass(function () {
      return [_.Tile];
    }, function $fun(x, y, handler, image) {
      $fun.baseInitializer.call(this, x, y, _.Enums.Id.Stone, handler);
      this.image = image;
    }, /** @lends _.Stone.prototype */ {
      render_2z7yyz$: function (g, tx, ty) {
        var img = new Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode(this.image, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(this.width, this.heidth));
        img.location = Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(this.x + tx, this.y + ty);
        g.root.add_snb51j$(img);
      },
      tick: function () {
      }
    }),
    Tile: Kotlin.createClass(null, function (x, y, id, handler) {
      this.x = x;
      this.y = y;
      this.id = id;
      this.handler = handler;
      this.width = _.Game.Companion.CELLX;
      this.heidth = _.Game.Companion.CELLY;
    }, /** @lends _.Tile.prototype */ {
      bounds: {
        get: function () {
          return Kotlin.modules['shared_js'].com.jetbrains.kui.KRect_init_tjonv8$(this.x, this.y, this.width, this.heidth);
        }
      },
      die: function () {
        this.handler.removeTile_1jvf2$(this);
      }
    }),
    Enums: Kotlin.definePackage(null, /** @lends _.Enums */ {
      EntityStates: Kotlin.createEnumClass(function () {
        return [Kotlin.Enum];
      }, function $fun() {
        $fun.baseInitializer.call(this);
      }, function () {
        return {
          Original: function () {
            return new _.Enums.EntityStates();
          },
          LambPlayer: function () {
            return new _.Enums.EntityStates();
          }
        };
      }),
      Id: Kotlin.createEnumClass(function () {
        return [Kotlin.Enum];
      }, function $fun() {
        $fun.baseInitializer.call(this);
      }, function () {
        return {
          Ground: function () {
            return new _.Enums.Id();
          },
          Gem: function () {
            return new _.Enums.Id();
          },
          Lambda: function () {
            return new _.Enums.Id();
          },
          Stone: function () {
            return new _.Enums.Id();
          },
          Grass: function () {
            return new _.Enums.Id();
          },
          Player: function () {
            return new _.Enums.Id();
          },
          LambPlayer: function () {
            return new _.Enums.Id();
          },
          Wolf: function () {
            return new _.Enums.Id();
          },
          Arrow: function () {
            return new _.Enums.Id();
          }
        };
      })
    })
  });
  Kotlin.defineModule('example_shared_js', _);
}(Kotlin));
