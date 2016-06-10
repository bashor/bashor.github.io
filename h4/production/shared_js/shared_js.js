(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      jetbrains: Kotlin.definePackage(null, /** @lends _.com.jetbrains */ {
        kui: Kotlin.definePackage(null, /** @lends _.com.jetbrains.kui */ {
          KToolKit: Kotlin.createTrait(null),
          KParent: Kotlin.createTrait(null),
          KScene: Kotlin.createTrait(function () {
            return [_.com.jetbrains.kui.KParent];
          }),
          KNode: Kotlin.createClass(null, function () {
            this.$parent_4rpnk1$ = null;
          }, /** @lends _.com.jetbrains.kui.KNode.prototype */ {
            parent: {
              get: function () {
                return this.$parent_4rpnk1$;
              },
              set: function (value) {
                this.$parent_4rpnk1$ = value;
                var tmp$0;
                if (value != null) {
                  var tmp$2, tmp$1;
                  var current = {v: value};
                  while (current.v != null && !Kotlin.isType(current.v, _.com.jetbrains.kui.KScene)) {
                    current.v = (Kotlin.isType(tmp$2 = current.v, _.com.jetbrains.kui.KNode) ? tmp$2 : Kotlin.throwCCE()).parent;
                  }
                  if ((tmp$1 = current.v) != null) {
                    var f$result;
                    var tmp$3;
                    (Kotlin.isType(tmp$3 = current.v, _.com.jetbrains.kui.KScene) ? tmp$3 : Kotlin.throwCCE()).update();
                    tmp$0 = f$result;
                  }
                   else {
                    tmp$0 = null;
                  }
                }
                 else
                  tmp$0 = null;
                tmp$0;
              }
            }
          }, /** @lends _.com.jetbrains.kui.KNode */ {
          }),
          KImage: Kotlin.createTrait(null),
          KuiKeyEvent: Kotlin.createClass(null, function (type, code) {
            this.type = type;
            this.code = code;
          }, /** @lends _.com.jetbrains.kui.KuiKeyEvent.prototype */ {
            component1: function () {
              return this.type;
            },
            component2: function () {
              return this.code;
            },
            copy_d4imb8$: function (type, code) {
              return new _.com.jetbrains.kui.KuiKeyEvent(type === void 0 ? this.type : type, code === void 0 ? this.code : code);
            },
            toString: function () {
              return 'KuiKeyEvent(type=' + Kotlin.toString(this.type) + (', code=' + Kotlin.toString(this.code)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.type) | 0;
              result = result * 31 + Kotlin.hashCode(this.code) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.code, other.code)))));
            }
          }, /** @lends _.com.jetbrains.kui.KuiKeyEvent */ {
            Type: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                KEY_UP: function () {
                  return new _.com.jetbrains.kui.KuiKeyEvent.Type();
                },
                KEY_DOWN: function () {
                  return new _.com.jetbrains.kui.KuiKeyEvent.Type();
                },
                KEY_PRESSED: function () {
                  return new _.com.jetbrains.kui.KuiKeyEvent.Type();
                }
              };
            })
          }),
          KuiMouseEvent: Kotlin.createClass(null, function (type, x, y, count) {
            this.type = type;
            this.x = x;
            this.y = y;
            this.count = count;
          }, /** @lends _.com.jetbrains.kui.KuiMouseEvent.prototype */ {
            component1: function () {
              return this.type;
            },
            component2: function () {
              return this.x;
            },
            component3: function () {
              return this.y;
            },
            component4: function () {
              return this.count;
            },
            copy_655fra$: function (type, x, y, count) {
              return new _.com.jetbrains.kui.KuiMouseEvent(type === void 0 ? this.type : type, x === void 0 ? this.x : x, y === void 0 ? this.y : y, count === void 0 ? this.count : count);
            },
            toString: function () {
              return 'KuiMouseEvent(type=' + Kotlin.toString(this.type) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', count=' + Kotlin.toString(this.count)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.type) | 0;
              result = result * 31 + Kotlin.hashCode(this.x) | 0;
              result = result * 31 + Kotlin.hashCode(this.y) | 0;
              result = result * 31 + Kotlin.hashCode(this.count) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.count, other.count)))));
            }
          }, /** @lends _.com.jetbrains.kui.KuiMouseEvent */ {
            Type: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                MOUSE_PRESSED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_RELEASED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_CLICKED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_MOVED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_ENTERED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_EXITED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                },
                MOUSE_DRAGGED: function () {
                  return new _.com.jetbrains.kui.KuiMouseEvent.Type();
                }
              };
            })
          }),
          KuiSceneEvent: Kotlin.createClass(null, function (type) {
            this.type = type;
          }, /** @lends _.com.jetbrains.kui.KuiSceneEvent.prototype */ {
            component1: function () {
              return this.type;
            },
            copy_g8zm9b$: function (type) {
              return new _.com.jetbrains.kui.KuiSceneEvent(type === void 0 ? this.type : type);
            },
            toString: function () {
              return 'KuiSceneEvent(type=' + Kotlin.toString(this.type) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.type) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
            }
          }, /** @lends _.com.jetbrains.kui.KuiSceneEvent */ {
            Type: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                WINDOW_DEICONIFIED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_ACTIVATED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_DEACTIVATED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_ICONIFIED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_CLOSING: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_CLOSED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                },
                WINDOW_OPENED: function () {
                  return new _.com.jetbrains.kui.KuiSceneEvent.Type();
                }
              };
            })
          }),
          KPoint: Kotlin.createClass(null, function (x, y) {
            this.x = x;
            this.y = y;
          }, /** @lends _.com.jetbrains.kui.KPoint.prototype */ {
            plus_zcz2k9$: function (p) {
              return new _.com.jetbrains.kui.KPoint(p.x + this.x, p.y + this.y);
            },
            minus_zcz2k9$: function (p) {
              return new _.com.jetbrains.kui.KPoint(-p.x + this.x, -p.y + this.y);
            },
            times_14dthe$: function (d) {
              return new _.com.jetbrains.kui.KPoint(this.x * d, this.y * d);
            },
            component1: function () {
              return this.x;
            },
            component2: function () {
              return this.y;
            },
            copy_lu1900$: function (x, y) {
              return new _.com.jetbrains.kui.KPoint_init_vux9f0$(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
            },
            toString: function () {
              return 'KPoint(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.x) | 0;
              result = result * 31 + Kotlin.hashCode(this.y) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
            }
          }),
          KPoint_init_vux9f0$: function (_x, _y, $this) {
            $this = $this || Object.create(_.com.jetbrains.kui.KPoint.prototype);
            _.com.jetbrains.kui.KPoint.call($this, _x, _y);
            return $this;
          },
          KSize: Kotlin.createClass(null, function (width, height) {
            this.width = width;
            this.height = height;
          }, /** @lends _.com.jetbrains.kui.KSize.prototype */ {
            component1: function () {
              return this.width;
            },
            component2: function () {
              return this.height;
            },
            copy_lu1900$: function (width, height) {
              return new _.com.jetbrains.kui.KSize_init_vux9f0$(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
            },
            toString: function () {
              return 'KSize(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.width) | 0;
              result = result * 31 + Kotlin.hashCode(this.height) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
            }
          }),
          KSize_init_vux9f0$: function (_w, _h, $this) {
            $this = $this || Object.create(_.com.jetbrains.kui.KSize.prototype);
            _.com.jetbrains.kui.KSize.call($this, _w, _h);
            return $this;
          },
          KRect: Kotlin.createClass(null, function (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
          }, /** @lends _.com.jetbrains.kui.KRect.prototype */ {
            intersects_lu1900$: function (px, py) {
              return px >= this.x && px < this.x + this.width && py >= this.y && py < this.y + this.height;
            },
            intersects_sn8sit$: function (other) {
              return _.com.jetbrains.kui.KRect.companion.intersectsSymmetrical_8kmop6$(this, other);
            },
            component1: function () {
              return this.x;
            },
            component2: function () {
              return this.y;
            },
            component3: function () {
              return this.width;
            },
            component4: function () {
              return this.height;
            },
            copy_6y0v78$: function (x, y, width, height) {
              return new _.com.jetbrains.kui.KRect_init_tjonv8$(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
            },
            toString: function () {
              return 'KRect(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.x) | 0;
              result = result * 31 + Kotlin.hashCode(this.y) | 0;
              result = result * 31 + Kotlin.hashCode(this.width) | 0;
              result = result * 31 + Kotlin.hashCode(this.height) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
            }
          }, /** @lends _.com.jetbrains.kui.KRect */ {
            companion: Kotlin.createObject(null, null, /** @lends _.com.jetbrains.kui.KRect.companion.prototype */ {
              doesFirstIntersectsSecond_8kmop6$: function (r1, r2) {
                return r1.intersects_lu1900$(r2.x, r2.y) || r1.intersects_lu1900$(r2.x + r2.width, r2.y) || r1.intersects_lu1900$(r2.x, r2.y + r2.height) || r1.intersects_lu1900$(r2.x + r2.width, r2.y + r2.height);
              },
              intersectsSymmetrical_8kmop6$: function (r1, r2) {
                return this.doesFirstIntersectsSecond_8kmop6$(r1, r2) || this.doesFirstIntersectsSecond_8kmop6$(r2, r1);
              }
            })
          }),
          KRect_init_tjonv8$: function (_x, _y, _w, _h, $this) {
            $this = $this || Object.create(_.com.jetbrains.kui.KRect.prototype);
            _.com.jetbrains.kui.KRect.call($this, _x, _y, _w, _h);
            return $this;
          },
          KAnimation: Kotlin.createTrait(null),
          createScene_nu0d4f$: function ($receiver, width, height, f) {
            var $receiver_0 = $receiver.createScene_vux9f0$(width, height);
            f.call(new _.com.jetbrains.kui.KSceneBuilder($receiver_0));
            return $receiver_0;
          },
          KSceneBuilder: Kotlin.createClass(null, function (scene) {
            this.scene_49uev8$ = scene;
          }, /** @lends _.com.jetbrains.kui.KSceneBuilder.prototype */ {
            sceneWidth: {
              get: function () {
                return this.scene_49uev8$.width;
              }
            },
            sceneHeight: {
              get: function () {
                return this.scene_49uev8$.height;
              }
            },
            animation_401a2l$: function (f) {
              return this.scene_49uev8$.animation_401a2l$(f);
            },
            animation_yojf0a$: Kotlin.defineInlineFunction('shared_js.com.jetbrains.kui.KSceneBuilder.animation_yojf0a$', function ($receiver, f) {
              var ff = _.com.jetbrains.kui.KSceneBuilder.animation_yojf0a$f($receiver, f);
              return this.animation_401a2l$(ff);
            }),
            update: function () {
              this.scene_49uev8$.update();
            },
            unaryPlus: function ($receiver) {
              this.scene_49uev8$.root.add_snb51j$($receiver);
              return $receiver;
            },
            rectangle_llzupj$: function (x, y, width, height, arcWidth, arcHeight, fill, stroke, strokeWidth, transform) {
              if (arcWidth === void 0)
                arcWidth = 0.0;
              if (arcHeight === void 0)
                arcHeight = 0.0;
              if (fill === void 0)
                fill = null;
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.unaryPlus(new _.com.jetbrains.kui.KRectangle(new _.com.jetbrains.kui.KPoint(x, y), new _.com.jetbrains.kui.KSize(width, height), new _.com.jetbrains.kui.KSize(arcWidth, arcHeight), fill, this.toStroke(strokeWidth), stroke, transform));
            },
            rectangle_y4f9xb$: function (x, y, width, height, arcWidth, arcHeight, fill, stroke, strokeWidth, transform) {
              if (arcWidth === void 0)
                arcWidth = 0.0;
              if (arcHeight === void 0)
                arcHeight = 0.0;
              if (fill === void 0)
                fill = null;
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.rectangle_llzupj$(x, y, width, height, arcWidth, arcHeight, fill, stroke, strokeWidth, transform);
            },
            square_y3fe47$: function (x, y, widthAndHeight, arcWidth, arcHeight, fill, stroke, strokeWidth, transform) {
              if (arcWidth === void 0)
                arcWidth = 0.0;
              if (arcHeight === void 0)
                arcHeight = 0.0;
              if (fill === void 0)
                fill = null;
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.rectangle_y4f9xb$(x, y, widthAndHeight, widthAndHeight, arcWidth, arcHeight, fill, stroke, strokeWidth, transform);
            },
            text_m6hqy6$: function (text, x, y, font, fill, stroke, strokeWidth, transform) {
              if (fill === void 0)
                fill = null;
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.text_vndkry$(text, x, y, font, fill, stroke, strokeWidth, transform);
            },
            text_vndkry$: function (text, x, y, font, fill, stroke, strokeWidth, transform) {
              if (fill === void 0)
                fill = null;
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.unaryPlus(new _.com.jetbrains.kui.KText(text, new _.com.jetbrains.kui.KPoint(x, y), font, fill, this.toStroke(strokeWidth), stroke, transform));
            },
            font_d0x3tp$: function (name, size, bold, italic) {
              if (bold === void 0)
                bold = false;
              if (italic === void 0)
                italic = false;
              return new _.com.jetbrains.kui.KFont(name, size, bold, italic);
            },
            line_lb5p1s$: function (startX, startY, endX, endY, stroke, strokeWidth, transform) {
              if (stroke === void 0)
                stroke = null;
              if (strokeWidth === void 0)
                strokeWidth = null;
              if (transform === void 0)
                transform = null;
              return this.unaryPlus(new _.com.jetbrains.kui.KLine(new _.com.jetbrains.kui.KPoint(startX, startY), new _.com.jetbrains.kui.KPoint(endX, endY), this.toStroke(strokeWidth), stroke, transform));
            },
            line_hi6u81$: function (startX, startY, endX, endY, strokePaint, stroke, transform) {
              if (strokePaint === void 0)
                strokePaint = null;
              if (stroke === void 0)
                stroke = null;
              if (transform === void 0)
                transform = null;
              return this.unaryPlus(new _.com.jetbrains.kui.KLine(new _.com.jetbrains.kui.KPoint(startX, startY), new _.com.jetbrains.kui.KPoint(endX, endY), stroke, strokePaint, transform));
            },
            image_mk1sz9$: function (img, x, y, w, h, transform) {
              if (transform === void 0)
                transform = null;
              var node = new _.com.jetbrains.kui.KImageNode(img, new _.com.jetbrains.kui.KSize(w, h));
              node.location = new _.com.jetbrains.kui.KPoint(x, y);
              this.unaryPlus(node);
            },
            toStroke: function (width) {
              return width == null ? null : new _.com.jetbrains.kui.KStroke(width);
            }
          }, /** @lends _.com.jetbrains.kui.KSceneBuilder */ {
            animation_yojf0a$f: function (this$animation, closure$f) {
              return function (m) {
                return closure$f.call(this$animation, m);
              };
            }
          }),
          KGroup: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KParent, _.com.jetbrains.kui.KNode];
          }, function $fun(location) {
            $fun.baseInitializer.call(this);
            this.$location_odm1iz$ = location;
            this._children_n4g5ug$ = Kotlin.modules['stdlib'].kotlin.collections.mutableListOf_9mqe4v$([]);
            this.$transform_bl8xpi$ = null;
          }, /** @lends _.com.jetbrains.kui.KGroup.prototype */ {
            location: {
              get: function () {
                return this.$location_odm1iz$;
              },
              set: function (location) {
                this.$location_odm1iz$ = location;
              }
            },
            bbox: {
              get: function () {
                throw new Kotlin.UnsupportedOperationException();
              }
            },
            clear: function () {
              this._children_n4g5ug$.clear();
              this.updateRoot();
            },
            getChildren: function () {
              return Kotlin.modules['stdlib'].kotlin.collections.toList_q5oq31$(this._children_n4g5ug$);
            },
            add_snb51j$: function (node) {
              this._children_n4g5ug$.add_za3rmp$(node);
              node.parent = this;
            },
            remove_snb51j$: function (node) {
              this._children_n4g5ug$.remove_za3rmp$(node);
              this.updateRoot();
            },
            updateRoot: function () {
              var tmp$0;
              var tmp$1;
              if ((tmp$0 = this.parent) != null) {
                var updateRoot$f$result;
                var tmp$4, tmp$3, tmp$2;
                do {
                  tmp$4 = this.parent;
                  if (Kotlin.isType(tmp$4, _.com.jetbrains.kui.KScene))
                    (Kotlin.isType(tmp$3 = this.parent, _.com.jetbrains.kui.KScene) ? tmp$3 : Kotlin.throwCCE()).update();
                  else if (Kotlin.isType(tmp$4, _.com.jetbrains.kui.KGroup))
                    this.parent = (Kotlin.isType(tmp$2 = this.parent, _.com.jetbrains.kui.KGroup) ? tmp$2 : Kotlin.throwCCE()).parent;
                }
                 while (this.parent != null);
                tmp$1 = updateRoot$f$result;
              }
               else
                tmp$1 = null;
              tmp$1;
            },
            transform: {
              get: function () {
                throw new Kotlin.UnsupportedOperationException();
              },
              set: function (transform) {
                this.$transform_bl8xpi$ = transform;
              }
            }
          }, /** @lends _.com.jetbrains.kui.KGroup */ {
          }),
          KTransform: Kotlin.createClass(null, function () {
            this.m00 = 1.0;
            this.m01 = 0.0;
            this.m02 = 0.0;
            this.m10 = 0.0;
            this.m11 = 1.0;
            this.m12 = 0.0;
            this.m20 = 0.0;
            this.m21 = 0.0;
            this.m22 = 0.0;
          }),
          KPaint: Kotlin.createTrait(null),
          KStroke: Kotlin.createClass(null, function (width, cap, join, miterLimit, dash) {
            if (width === void 0)
              width = 1.0;
            if (cap === void 0)
              cap = _.com.jetbrains.kui.KStroke.Cap.SQUARE;
            if (join === void 0)
              join = _.com.jetbrains.kui.KStroke.Join.MITER;
            if (miterLimit === void 0)
              miterLimit = 10.0;
            if (dash === void 0)
              dash = null;
            this.width = width;
            this.cap = cap;
            this.join = join;
            this.miterLimit = miterLimit;
            this.dash = dash;
            if (this.width < 0.0)
              throw new Kotlin.AssertionError('negative width');
            if (this.join === _.com.jetbrains.kui.KStroke.Join.MITER && this.miterLimit < 1.0)
              throw new Kotlin.AssertionError('miter limit < 1');
          }, /** @lends _.com.jetbrains.kui.KStroke.prototype */ {
            component1: function () {
              return this.width;
            },
            component2: function () {
              return this.cap;
            },
            component3: function () {
              return this.join;
            },
            component4: function () {
              return this.miterLimit;
            },
            component5: function () {
              return this.dash;
            },
            copy_kuxwhn$: function (width, cap, join, miterLimit, dash) {
              return new _.com.jetbrains.kui.KStroke(width === void 0 ? this.width : width, cap === void 0 ? this.cap : cap, join === void 0 ? this.join : join, miterLimit === void 0 ? this.miterLimit : miterLimit, dash === void 0 ? this.dash : dash);
            },
            toString: function () {
              return 'KStroke(width=' + Kotlin.toString(this.width) + (', cap=' + Kotlin.toString(this.cap)) + (', join=' + Kotlin.toString(this.join)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + (', dash=' + Kotlin.toString(this.dash)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.width) | 0;
              result = result * 31 + Kotlin.hashCode(this.cap) | 0;
              result = result * 31 + Kotlin.hashCode(this.join) | 0;
              result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
              result = result * 31 + Kotlin.hashCode(this.dash) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.cap, other.cap) && Kotlin.equals(this.join, other.join) && Kotlin.equals(this.miterLimit, other.miterLimit) && Kotlin.equals(this.dash, other.dash)))));
            }
          }, /** @lends _.com.jetbrains.kui.KStroke */ {
            Cap: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                BUTT: function () {
                  return new _.com.jetbrains.kui.KStroke.Cap();
                },
                ROUND: function () {
                  return new _.com.jetbrains.kui.KStroke.Cap();
                },
                SQUARE: function () {
                  return new _.com.jetbrains.kui.KStroke.Cap();
                }
              };
            }),
            Join: Kotlin.createEnumClass(function () {
              return [Kotlin.Enum];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }, function () {
              return {
                MITER: function () {
                  return new _.com.jetbrains.kui.KStroke.Join();
                },
                ROUND: function () {
                  return new _.com.jetbrains.kui.KStroke.Join();
                },
                BEVEL: function () {
                  return new _.com.jetbrains.kui.KStroke.Join();
                }
              };
            }),
            Dash: Kotlin.createClass(null, function (phase, dashes) {
              if (phase === void 0)
                phase = 0.0;
              var tmp$0;
              this.phase = phase;
              this.dashes = dashes;
              if (this.phase < 0.0)
                throw new Kotlin.AssertionError('negative dash phase');
              var zero = true;
              tmp$0 = Kotlin.arrayIterator(this.dashes);
              while (tmp$0.hasNext()) {
                var dash = tmp$0.next();
                if (dash < 0.0)
                  throw new Kotlin.AssertionError('negative dash length');
                if (dash > 0.0)
                  zero = false;
              }
              if (zero)
                throw new Kotlin.AssertionError('dash lengths all zero');
            })
          }),
          KLinearGradient: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KPaint];
          }, function (start, end, stops) {
            this.start = start;
            this.end = end;
            this.stops = stops;
          }),
          KRadialGradient: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KPaint];
          }, function (focus, center, radius, stops) {
            this.focus = focus;
            this.center = center;
            this.radius = radius;
            this.stops = stops;
          }),
          KColor: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KPaint];
          }, function (red, green, blue, alpha) {
            if (alpha === void 0)
              alpha = 255;
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
            _.com.jetbrains.kui.checkRange_1(this.red);
            _.com.jetbrains.kui.checkRange_1(this.green);
            _.com.jetbrains.kui.checkRange_1(this.blue);
            _.com.jetbrains.kui.checkRange_1(this.alpha);
          }, /** @lends _.com.jetbrains.kui.KColor.prototype */ {
            withAlpha_za3lpa$: function (alpha) {
              return _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(this.red, this.green, this.blue, alpha);
            },
            withAlpha_14dthe$: function (alpha) {
              return _.com.jetbrains.kui.KColor.Companion.rgb_gb4hak$(this.red, this.green, this.blue, alpha);
            },
            component1: function () {
              return this.red;
            },
            component2: function () {
              return this.green;
            },
            component3: function () {
              return this.blue;
            },
            component4: function () {
              return this.alpha;
            },
            copy_tjonv8$: function (red, green, blue, alpha) {
              return new _.com.jetbrains.kui.KColor(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
            },
            toString: function () {
              return 'KColor(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
            },
            hashCode: function () {
              var result = 0;
              result = result * 31 + Kotlin.hashCode(this.red) | 0;
              result = result * 31 + Kotlin.hashCode(this.green) | 0;
              result = result * 31 + Kotlin.hashCode(this.blue) | 0;
              result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
              return result;
            },
            equals_za3rmp$: function (other) {
              return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
            }
          }, /** @lends _.com.jetbrains.kui.KColor */ {
            Companion: Kotlin.createObject(null, function () {
              _.com.jetbrains.kui.KColor.Companion.WHITE = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255, 255, 255);
              _.com.jetbrains.kui.KColor.Companion.BLACK = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 0, 0);
              _.com.jetbrains.kui.KColor.Companion.RED = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255, 0, 0);
              _.com.jetbrains.kui.KColor.Companion.GREEN = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 255, 0);
              _.com.jetbrains.kui.KColor.Companion.BLUE = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 0, 255);
              _.com.jetbrains.kui.KColor.Companion.CYAN = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(0, 255, 255);
              _.com.jetbrains.kui.KColor.Companion.MAGENTA = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255, 0, 255);
              _.com.jetbrains.kui.KColor.Companion.YELLOW = _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255, 255, 0);
            }, /** @lends _.com.jetbrains.kui.KColor.Companion.prototype */ {
              rgb_vux9f0$: function (rgb, alpha) {
                if (alpha === void 0)
                  alpha = 255;
                return _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(255 & rgb >> 16, 255 & rgb >> 8, 255 & rgb, alpha);
              },
              rgb_5wr77w$: function (rgb, alpha) {
                return _.com.jetbrains.kui.KColor.Companion.rgb_vux9f0$(rgb, _.com.jetbrains.kui.toInt(alpha));
              },
              rgb_tjonv8$: function (red, green, blue, alpha) {
                if (alpha === void 0)
                  alpha = 255;
                return new _.com.jetbrains.kui.KColor(red, green, blue, alpha);
              },
              rgb_gb4hak$: function (red, green, blue, alpha) {
                return _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(red, green, blue, _.com.jetbrains.kui.toInt(alpha));
              },
              rgb_6y0v78$: function (red, green, blue, alpha) {
                return _.com.jetbrains.kui.KColor.Companion.rgb_gb4hak$(_.com.jetbrains.kui.toInt(red), _.com.jetbrains.kui.toInt(green), _.com.jetbrains.kui.toInt(blue), alpha);
              },
              rgba_za3lpa$: function (rgba) {
                return _.com.jetbrains.kui.KColor.Companion.rgb_vux9f0$(rgba, 255 & rgba >> 24);
              },
              gray_vux9f0$: function (value, alpha) {
                if (alpha === void 0)
                  alpha = 255;
                return _.com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(value, value, value, alpha);
              },
              gray_5wr77w$: function (value, alpha) {
                return _.com.jetbrains.kui.KColor.Companion.gray_vux9f0$(value, _.com.jetbrains.kui.toInt(alpha));
              },
              gray_lu1900$: function (value, alpha) {
                return _.com.jetbrains.kui.KColor.Companion.gray_5wr77w$(_.com.jetbrains.kui.toInt(value), alpha);
              },
              hsb_6y0v78$: function (hue, saturation, brightness, alpha) {
                var tmp$0;
                if (alpha === void 0)
                  alpha = 1.0;
                if (saturation === 0.0)
                  return _.com.jetbrains.kui.KColor.Companion.gray_lu1900$(brightness, alpha);
                _.com.jetbrains.kui.checkRange(saturation);
                _.com.jetbrains.kui.checkRange(brightness);
                var n = (hue % 360 + 360) % 360;
                var h = _.com.jetbrains.kui.frac(n / 360.0) * 6.0;
                var f = _.com.jetbrains.kui.frac(h);
                var min = brightness * (1.0 - saturation);
                var dec = brightness * (1.0 - saturation * f);
                var inc = brightness * (1.0 - saturation * (1.0 - f));
                tmp$0 = h | 0;
                if (tmp$0 === 0)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(brightness, inc, min, alpha);
                else if (tmp$0 === 1)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(dec, brightness, min, alpha);
                else if (tmp$0 === 2)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(min, brightness, inc, alpha);
                else if (tmp$0 === 3)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(min, dec, brightness, alpha);
                else if (tmp$0 === 4)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(inc, min, brightness, alpha);
                else if (tmp$0 === 5)
                  return _.com.jetbrains.kui.KColor.Companion.rgb_6y0v78$(brightness, min, dec, alpha);
                throw new Kotlin.AssertionError('unexpected');
              }
            }),
            object_initializer$: function () {
              _.com.jetbrains.kui.KColor.Companion;
            }
          }),
          toInt: function (value) {
            _.com.jetbrains.kui.checkRange(value);
            return Math.round(255 * value);
          },
          frac: function (value) {
            return value - Math.floor(value);
          },
          checkRange_1: function (value) {
            if (value < 0 || 255 < value)
              throw new Kotlin.AssertionError('{' + value + '} not in [0..255]');
          },
          checkRange: function (value) {
            if (Kotlin.modules['stdlib'].kotlin.isNaN_yrwdxs$(value) || value < 0.0 || 1.0 < value)
              throw new Kotlin.AssertionError('{' + value + '} not in [0..1]');
          },
          KShape: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KNode];
          }, function $fun() {
            $fun.baseInitializer.call(this);
          }),
          KImageNode: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KNode];
          }, function $fun(image, size) {
            if (size === void 0)
              size = _.com.jetbrains.kui.KSize_init_vux9f0$(image.width, image.height);
            $fun.baseInitializer.call(this);
            this.image = image;
            this.size = size;
            this.$location_ibxhbx$ = _.com.jetbrains.kui.KPoint_init_vux9f0$(0, 0);
            this.$transform_xsocf0$ = null;
            this.$bbox_9abqfj$ = new _.com.jetbrains.kui.KRect(this.location.x, this.location.y, this.size.width, this.size.height);
          }, /** @lends _.com.jetbrains.kui.KImageNode.prototype */ {
            location: {
              get: function () {
                return this.$location_ibxhbx$;
              },
              set: function (location) {
                this.$location_ibxhbx$ = location;
              }
            },
            transform: {
              get: function () {
                return this.$transform_xsocf0$;
              },
              set: function (transform) {
                this.$transform_xsocf0$ = transform;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_9abqfj$;
              }
            }
          }),
          KRectangle: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, size, arcSize, fill, stroke, strokePaint, transform, bbox) {
            if (arcSize === void 0)
              arcSize = new _.com.jetbrains.kui.KSize(0.0, 0.0);
            if (fill === void 0)
              fill = null;
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (bbox === void 0)
              bbox = new _.com.jetbrains.kui.KRect(location.x, location.y, size.width, size.height);
            $fun.baseInitializer.call(this);
            this.$location_ne9rn9$ = location;
            this.size = size;
            this.arcSize = arcSize;
            this.$fill_75rnvd$ = fill;
            this.$stroke_2oqb02$ = stroke;
            this.$strokePaint_p3akeo$ = strokePaint;
            this.$transform_m87yty$ = transform;
            this.$bbox_75oytb$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KRectangle.prototype */ {
            location: {
              get: function () {
                return this.$location_ne9rn9$;
              },
              set: function (location) {
                this.$location_ne9rn9$ = location;
              }
            },
            fill: {
              get: function () {
                return this.$fill_75rnvd$;
              },
              set: function (fill) {
                this.$fill_75rnvd$ = fill;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_2oqb02$;
              },
              set: function (stroke) {
                this.$stroke_2oqb02$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_p3akeo$;
              },
              set: function (strokePaint) {
                this.$strokePaint_p3akeo$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_m87yty$;
              },
              set: function (transform) {
                this.$transform_m87yty$ = transform;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_75oytb$;
              }
            }
          }),
          KCircle: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, radius, fill, stroke, strokePaint, transform, bbox) {
            if (fill === void 0)
              fill = null;
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (bbox === void 0)
              bbox = new _.com.jetbrains.kui.KRect(location.x - radius, location.y - radius, radius * 2, radius * 2);
            $fun.baseInitializer.call(this);
            this.$location_4wegak$ = location;
            this.radius = radius;
            this.$fill_bth3g6$ = fill;
            this.$stroke_dgehxb$ = stroke;
            this.$strokePaint_v682n3$ = strokePaint;
            this.$transform_nzdwqj$ = transform;
            this.$bbox_btjsi8$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KCircle.prototype */ {
            location: {
              get: function () {
                return this.$location_4wegak$;
              },
              set: function (location) {
                this.$location_4wegak$ = location;
              }
            },
            fill: {
              get: function () {
                return this.$fill_bth3g6$;
              },
              set: function (fill) {
                this.$fill_bth3g6$ = fill;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_dgehxb$;
              },
              set: function (stroke) {
                this.$stroke_dgehxb$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_v682n3$;
              },
              set: function (strokePaint) {
                this.$strokePaint_v682n3$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_nzdwqj$;
              },
              set: function (transform) {
                this.$transform_nzdwqj$ = transform;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_btjsi8$;
              }
            }
          }),
          KEllipse: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, radius, fill, stroke, strokePaint, transform, bbox) {
            if (fill === void 0)
              fill = null;
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (bbox === void 0)
              bbox = new _.com.jetbrains.kui.KRect(location.x - radius.width, location.y - radius.height, radius.width * 2, radius.height * 2);
            $fun.baseInitializer.call(this);
            this.$location_pjoq9o$ = location;
            this.radius = radius;
            this.$fill_iyv7t6$ = fill;
            this.$stroke_juvtmp$ = stroke;
            this.$strokePaint_73m941$ = strokePaint;
            this.$transform_n7jta3$ = transform;
            this.$bbox_iysir4$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KEllipse.prototype */ {
            location: {
              get: function () {
                return this.$location_pjoq9o$;
              },
              set: function (location) {
                this.$location_pjoq9o$ = location;
              }
            },
            fill: {
              get: function () {
                return this.$fill_iyv7t6$;
              },
              set: function (fill) {
                this.$fill_iyv7t6$ = fill;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_juvtmp$;
              },
              set: function (stroke) {
                this.$stroke_juvtmp$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_73m941$;
              },
              set: function (strokePaint) {
                this.$strokePaint_73m941$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_n7jta3$;
              },
              set: function (transform) {
                this.$transform_n7jta3$ = transform;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_iysir4$;
              }
            }
          }),
          KLine: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, end, stroke, strokePaint, transform, fill, bbox) {
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (fill === void 0)
              fill = null;
            if (bbox === void 0)
              bbox = new _.com.jetbrains.kui.KRect(Math.min(location.x, end.x), Math.min(location.y, end.y), Math.max(location.x, end.x) - Math.min(location.x, end.x), Math.max(location.y, end.y) - Math.min(location.y, end.y));
            $fun.baseInitializer.call(this);
            this.$location_t2s9lk$ = location;
            this.end = end;
            this.$stroke_9y6xwl$ = stroke;
            this.$strokePaint_qji75p$ = strokePaint;
            this.$transform_f7drzd$ = transform;
            this.$fill_mk6hp6$ = fill;
            this.$bbox_mk96r8$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KLine.prototype */ {
            location: {
              get: function () {
                return this.$location_t2s9lk$;
              },
              set: function (location) {
                this.$location_t2s9lk$ = location;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_9y6xwl$;
              },
              set: function (stroke) {
                this.$stroke_9y6xwl$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_qji75p$;
              },
              set: function (strokePaint) {
                this.$strokePaint_qji75p$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_f7drzd$;
              },
              set: function (transform) {
                this.$transform_f7drzd$ = transform;
              }
            },
            fill: {
              get: function () {
                return this.$fill_mk6hp6$;
              },
              set: function (fill) {
                this.$fill_mk6hp6$ = fill;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_mk96r8$;
              }
            }
          }),
          KText: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(text, location, font, fill, stroke, strokePaint, transform, bbox) {
            if (fill === void 0)
              fill = null;
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (bbox === void 0)
              bbox = _.com.jetbrains.kui.KRect_init_tjonv8$(0, 0, 0, 0);
            $fun.baseInitializer.call(this);
            this.text = text;
            this.$location_923wxt$ = location;
            this.font = font;
            this.$fill_a0l86r$ = fill;
            this.$stroke_u8pd32$ = stroke;
            this.$strokePaint_4xx81o$ = strokePaint;
            this.$transform_uiiz32$ = transform;
            this.$bbox_a0nx8t$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KText.prototype */ {
            location: {
              get: function () {
                return this.$location_923wxt$;
              },
              set: function (location) {
                this.$location_923wxt$ = location;
              }
            },
            fill: {
              get: function () {
                return this.$fill_a0l86r$;
              },
              set: function (fill) {
                this.$fill_a0l86r$ = fill;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_u8pd32$;
              },
              set: function (stroke) {
                this.$stroke_u8pd32$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_4xx81o$;
              },
              set: function (strokePaint) {
                this.$strokePaint_4xx81o$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_uiiz32$;
              },
              set: function (transform) {
                this.$transform_uiiz32$ = transform;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_a0nx8t$;
              }
            }
          }),
          KFont: Kotlin.createClass(null, function (name, size, bold, italic) {
            if (bold === void 0)
              bold = false;
            if (italic === void 0)
              italic = false;
            this.name = name;
            this.size = size;
            this.bold = bold;
            this.italic = italic;
          }),
          KFontName: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun() {
            $fun.baseInitializer.call(this);
          }, function () {
            return {
              SANS_SERIF: function () {
                return new _.com.jetbrains.kui.KFontName();
              },
              SERIF: function () {
                return new _.com.jetbrains.kui.KFontName();
              },
              MONOSPACED: function () {
                return new _.com.jetbrains.kui.KFontName();
              }
            };
          }),
          KArc: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, length, radius, startAngle, stroke, strokePaint, transform, fill, bbox) {
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (bbox === void 0)
              bbox = new _.com.jetbrains.kui.KRect(location.x - radius.width, location.y - radius.height, radius.width * 2, radius.height * 2);
            $fun.baseInitializer.call(this);
            this.$location_u7r3ig$ = location;
            this.length = length;
            this.radius = radius;
            this.startAngle = startAngle;
            this.$stroke_z86911$ = stroke;
            this.$strokePaint_6io1wt$ = strokePaint;
            this.$transform_kjqio7$ = transform;
            this.$fill_3t9fe2$ = fill;
            this.$bbox_3tc4g4$ = bbox;
          }, /** @lends _.com.jetbrains.kui.KArc.prototype */ {
            location: {
              get: function () {
                return this.$location_u7r3ig$;
              },
              set: function (location) {
                this.$location_u7r3ig$ = location;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_z86911$;
              },
              set: function (stroke) {
                this.$stroke_z86911$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_6io1wt$;
              },
              set: function (strokePaint) {
                this.$strokePaint_6io1wt$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_kjqio7$;
              },
              set: function (transform) {
                this.$transform_kjqio7$ = transform;
              }
            },
            fill: {
              get: function () {
                return this.$fill_3t9fe2$;
              },
              set: function (fill) {
                this.$fill_3t9fe2$ = fill;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_3tc4g4$;
              }
            }
          }),
          KPathValue: Kotlin.createTrait(null, null, /** @lends _.com.jetbrains.kui.KPathValue */ {
            LineTo: Kotlin.createClass(function () {
              return [_.com.jetbrains.kui.KPathValue];
            }, function (point) {
              this.point = point;
            })
          }),
          KPath: Kotlin.createClass(function () {
            return [_.com.jetbrains.kui.KShape];
          }, function $fun(location, stroke, strokePaint, transform, fill, closed, values) {
            if (stroke === void 0)
              stroke = null;
            if (strokePaint === void 0)
              strokePaint = null;
            if (transform === void 0)
              transform = null;
            if (closed === void 0)
              closed = true;
            $fun.baseInitializer.call(this);
            this.$location_hmf05j$ = location;
            this.$stroke_hdwmmi$ = stroke;
            this.$strokePaint_unq9ro$ = strokePaint;
            this.$transform_f9ix22$ = transform;
            this.$fill_wcf2t$ = fill;
            this.closed = closed;
            this.values = values;
            this.$bbox_w9q0r$ = new _.com.jetbrains.kui.KRect(this.location.x, this.location.y, 0.0, 0.0);
          }, /** @lends _.com.jetbrains.kui.KPath.prototype */ {
            location: {
              get: function () {
                return this.$location_hmf05j$;
              },
              set: function (location) {
                this.$location_hmf05j$ = location;
              }
            },
            stroke: {
              get: function () {
                return this.$stroke_hdwmmi$;
              },
              set: function (stroke) {
                this.$stroke_hdwmmi$ = stroke;
              }
            },
            strokePaint: {
              get: function () {
                return this.$strokePaint_unq9ro$;
              },
              set: function (strokePaint) {
                this.$strokePaint_unq9ro$ = strokePaint;
              }
            },
            transform: {
              get: function () {
                return this.$transform_f9ix22$;
              },
              set: function (transform) {
                this.$transform_f9ix22$ = transform;
              }
            },
            fill: {
              get: function () {
                return this.$fill_wcf2t$;
              },
              set: function (fill) {
                this.$fill_wcf2t$ = fill;
              }
            },
            bbox: {
              get: function () {
                return this.$bbox_w9q0r$;
              }
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('shared_js', _);
}(Kotlin));
