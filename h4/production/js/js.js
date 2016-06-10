(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      jetbrains: Kotlin.definePackage(null, /** @lends _.com.jetbrains */ {
        kui: Kotlin.definePackage(null, /** @lends _.com.jetbrains.kui */ {
          js: Kotlin.definePackage(function () {
            this.transparent_y3xmn5$ = 'rgba(0, 0, 0, 0)';
          }, /** @lends _.com.jetbrains.kui.js */ {
            drawEllipse_39j9pt$: function (ctx, x, y, size) {
              _.com.jetbrains.kui.js._drawEllipse_1hylp5$(ctx, x, y, size.width, size.height);
            },
            _drawEllipse_1hylp5$: function (ctx, x, y, w, h) {
              var kappa = 0.5522848;
              var ox = w / 2 * kappa;
              var oy = h / 2 * kappa;
              var xe = x + w;
              var ye = y + h;
              var xm = x + w / 2;
              var ym = y + h / 2;
              var dynamicCtx = ctx;
              dynamicCtx.beginPath();
              dynamicCtx.moveTo(x, ym);
              dynamicCtx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
              dynamicCtx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
              dynamicCtx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
              dynamicCtx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
              dynamicCtx.fill();
              dynamicCtx.stroke();
            },
            JsScene: Kotlin.createClass(function () {
              return [Kotlin.modules['shared_js'].com.jetbrains.kui.KScene];
            }, function (ctx, canvas) {
              this.ctx = ctx;
              this.canvas = canvas;
              this.$root_rxnan2$ = new Kotlin.modules['shared_js'].com.jetbrains.kui.KGroup(Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0));
            }, /** @lends _.com.jetbrains.kui.js.JsScene.prototype */ {
              addSceneEventListener_pfqo16$: function (l) {
              },
              addMouseEventListener_tlok9b$: function (l) {
                var tmp$0;
                tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([new Kotlin.modules['stdlib'].kotlin.Pair('mousedown', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_PRESSED), new Kotlin.modules['stdlib'].kotlin.Pair('mouseup', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_RELEASED), new Kotlin.modules['stdlib'].kotlin.Pair('click', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_CLICKED), new Kotlin.modules['stdlib'].kotlin.Pair('dblclick', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_CLICKED), new Kotlin.modules['stdlib'].kotlin.Pair('mousemove', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_MOVED), new Kotlin.modules['stdlib'].kotlin.Pair('mouseenter', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_ENTERED), new Kotlin.modules['stdlib'].kotlin.Pair('mouseleave', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent.Type.MOUSE_EXITED)]).iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  document.addEventListener(element.first, _.com.jetbrains.kui.js.JsScene.f(element, l));
                }
                throw new Kotlin.UnsupportedOperationException();
              },
              addKeyEventListener_6dloon$: function (l) {
                var tmp$0;
                tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.listOf_9mqe4v$([new Kotlin.modules['stdlib'].kotlin.Pair('keydown', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_DOWN), new Kotlin.modules['stdlib'].kotlin.Pair('keyup', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_UP), new Kotlin.modules['stdlib'].kotlin.Pair('keypress', Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent.Type.KEY_PRESSED)]).iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  document.addEventListener(element.first, _.com.jetbrains.kui.js.JsScene.f_0(l, element), true);
                }
              },
              width: {
                get: function () {
                  return this.canvas.width;
                },
                set: function (value) {
                  throw new Kotlin.UnsupportedOperationException();
                }
              },
              height: {
                get: function () {
                  return this.canvas.height;
                },
                set: function (value) {
                  throw new Kotlin.UnsupportedOperationException();
                }
              },
              root: {
                get: function () {
                  return this.$root_rxnan2$;
                },
                set: function (root) {
                  this.$root_rxnan2$ = root;
                }
              },
              update: function () {
                var tmp$0 = this.canvas.width;
                var asDynamic_s8jyvl$result_0;
                asDynamic_s8jyvl$result_0 = this.canvas;
                this.ctx.clearRect(0.0, 0.0, tmp$0, asDynamic_s8jyvl$result_0.height);
                var drawTheTree = _.com.jetbrains.kui.js.JsScene.update$drawTheTree(this);
                drawTheTree(this.root, Kotlin.modules['shared_js'].com.jetbrains.kui.KPoint_init_vux9f0$(0, 0));
              },
              animation_401a2l$: function (f) {
                return new _.com.jetbrains.kui.js.JsScene.animation$f(f, this);
              }
            }, /** @lends _.com.jetbrains.kui.js.JsScene */ {
              f: function (closure$p, closure$l) {
                return function (event) {
                  var tmp$0, tmp$1;
                  var mouseEvent = Kotlin.isType(tmp$0 = event, MouseEvent) ? tmp$0 : Kotlin.throwCCE();
                  if (Kotlin.equals('click', closure$p.first))
                    tmp$1 = 1;
                  else if (Kotlin.equals('dblclick', closure$p.first))
                    tmp$1 = 2;
                  else
                    tmp$1 = 0;
                  var click = tmp$1;
                  closure$l(new Kotlin.modules['shared_js'].com.jetbrains.kui.KuiMouseEvent(closure$p.second, mouseEvent.clientX, mouseEvent.clientY, click));
                };
              },
              f_0: function (closure$l, closure$p) {
                return function (event) {
                  var tmp$0;
                  closure$l(new Kotlin.modules['shared_js'].com.jetbrains.kui.KuiKeyEvent(closure$p.second, (Kotlin.isType(tmp$0 = event, KeyboardEvent) ? tmp$0 : Kotlin.throwCCE()).keyCode));
                  event.preventDefault();
                };
              },
              update$drawTheTree: function (this$JsScene) {
                return function closure$drawTheTree(node, relativeStartPoint) {
                  var tmp$0, tmp$1, tmp$2;
                  if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KGroup)) {
                    var currentPoint = relativeStartPoint.plus_zcz2k9$(node.location);
                    var tmp$3;
                    tmp$3 = node.getChildren().iterator();
                    while (tmp$3.hasNext()) {
                      var element = tmp$3.next();
                      closure$drawTheTree(element, currentPoint);
                    }
                  }
                   else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KImageNode)) {
                    var image = node.image;
                    if (Kotlin.isType(image, _.com.jetbrains.kui.js.KCreatedImage))
                      this$JsScene.ctx.putImageData(image.image, node.location.x, node.location.y);
                    else if (Kotlin.isType(image, _.com.jetbrains.kui.js.KLoadedImage))
                      if (image.ready) {
                        this$JsScene.ctx.drawImage(image.image, image.x, image.y, image.width, image.height, node.location.x, node.location.y, node.size.width, node.size.height);
                      }
                  }
                   else {
                    if (!Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KShape)) {
                      throw new Kotlin.UnsupportedOperationException();
                    }
                    _.com.jetbrains.kui.js.setupFillStyle_q58w8h$(this$JsScene.ctx, node.fill, relativeStartPoint);
                    _.com.jetbrains.kui.js.setupStrokeStyle_q58w8h$(this$JsScene.ctx, node.strokePaint, relativeStartPoint);
                    var stroke = node.stroke;
                    var tmp$4;
                    if (stroke != null) {
                      var drawTheTree$f_0$result;
                      _.com.jetbrains.kui.js.setupStroke_h27j6m$(this$JsScene.ctx, stroke);
                      tmp$4 = drawTheTree$f_0$result;
                    }
                     else
                      tmp$4 = null;
                    tmp$4;
                    var absoluteX = node.location.x + relativeStartPoint.x;
                    var absoluteY = node.location.y + relativeStartPoint.y;
                    if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KRectangle)) {
                      var s = node.size;
                      if (!Kotlin.equals(node.arcSize, Kotlin.modules['shared_js'].com.jetbrains.kui.KSize_init_vux9f0$(0, 0))) {
                        _.com.jetbrains.kui.js.drawRoundRectangle_u705a3$(this$JsScene.ctx, node);
                      }
                       else {
                        this$JsScene.ctx.fillRect(absoluteX, absoluteY, s.width, s.height);
                        this$JsScene.ctx.strokeRect(absoluteX, absoluteY, s.width, s.height);
                      }
                    }
                     else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KCircle)) {
                      var s_0 = node.radius;
                      this$JsScene.ctx.beginPath();
                      this$JsScene.ctx.arc(absoluteX, absoluteY, s_0, 0.0, Math.PI * 2);
                      this$JsScene.ctx.stroke();
                      this$JsScene.ctx.fill();
                    }
                     else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KLine)) {
                      var end = node.end;
                      this$JsScene.ctx.beginPath();
                      this$JsScene.ctx.moveTo(absoluteX, absoluteY);
                      this$JsScene.ctx.lineTo(relativeStartPoint.x + end.x, relativeStartPoint.y + end.y);
                      this$JsScene.ctx.stroke();
                    }
                     else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KEllipse)) {
                      _.com.jetbrains.kui.js.drawEllipse_39j9pt$(this$JsScene.ctx, absoluteX, absoluteY, node.radius);
                    }
                     else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KText)) {
                      _.com.jetbrains.kui.js.setupFont_mn3qyv$(this$JsScene.ctx, node.font);
                      this$JsScene.ctx.fillText(node.text, absoluteX, absoluteY);
                    }
                     else if (Kotlin.isType(node, Kotlin.modules['shared_js'].com.jetbrains.kui.KPath)) {
                      this$JsScene.ctx.beginPath();
                      this$JsScene.ctx.moveTo(absoluteX, absoluteY);
                      tmp$0 = node.values, tmp$1 = tmp$0.length;
                      for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
                        var value = tmp$0[tmp$2];
                        if (Kotlin.isType(value, Kotlin.modules['shared_js'].com.jetbrains.kui.KPathValue.LineTo))
                          this$JsScene.ctx.lineTo(relativeStartPoint.x + value.point.x, relativeStartPoint.y + value.point.y);
                      }
                      if (node.closed)
                        this$JsScene.ctx.closePath();
                      this$JsScene.ctx.fill();
                      this$JsScene.ctx.stroke();
                    }
                  }
                };
              },
              animation$f: Kotlin.createClass(function () {
                return [Kotlin.modules['shared_js'].com.jetbrains.kui.KAnimation];
              }, function (closure$f_0, this$JsScene_0) {
                this.closure$f_0 = closure$f_0;
                this.this$JsScene_0 = this$JsScene_0;
                this.startTime_wprjw0$ = (new Date()).getTime();
                this.interrupted_sjtplp$ = false;
              }, /** @lends _.com.jetbrains.kui.js.JsScene.animation$f.prototype */ {
                start_za3lpa$: function (fps) {
                  this.execute(fps);
                },
                stop: function () {
                  this.interrupted_sjtplp$ = true;
                },
                execute: function (fps) {
                  if (!this.interrupted_sjtplp$) {
                    window.setTimeout(_.com.jetbrains.kui.js.JsScene.animation$f.execute$f(this.closure$f_0, this, this.this$JsScene_0, fps), 1000.0 / fps | 0);
                  }
                }
              }, /** @lends _.com.jetbrains.kui.js.JsScene.animation$f */ {
                execute$f: function (closure$f, this$, this$JsScene, closure$fps) {
                  return function () {
                    if (closure$f((new Date()).getTime() - this$.startTime_wprjw0$)) {
                      this$JsScene.update();
                      try {
                        this$.execute(closure$fps);
                      }
                       catch (e) {
                        if (Kotlin.isType(e, Kotlin.Exception)) {
                        }
                         else
                          throw e;
                      }
                    }
                  };
                }
              })
            }),
            JsToolKit: Kotlin.createClass(function () {
              return [Kotlin.modules['shared_js'].com.jetbrains.kui.KToolKit];
            }, function (canvasId, resourcesBaseDir) {
              if (resourcesBaseDir === void 0)
                resourcesBaseDir = '';
              this.canvasId = canvasId;
              this.resourcesBaseDir = resourcesBaseDir;
            }, /** @lends _.com.jetbrains.kui.js.JsToolKit.prototype */ {
              loadResourceImage_61zpoe$: function (path) {
                return this.loadImage_61zpoe$(this.resourcesBaseDir + path);
              },
              createScene_vux9f0$: function (w, h) {
                var canvas = document.getElementById(this.canvasId);
                var ctx = canvas.getContext('2d');
                return new _.com.jetbrains.kui.js.JsScene(ctx, canvas != null ? canvas : Kotlin.throwNPE());
              },
              createImage_kvmus7$: function (w, h, c) {
                if (w <= 0 || h <= 0)
                  throw new Kotlin.AssertionError('unexpected size');
                var canvas = document.getElementById(this.canvasId);
                var ctx = canvas.getContext('2d');
                var image = new _.com.jetbrains.kui.js.KCreatedImage(w, h, ctx.createImageData(w, h));
                var data = image.image.data;
                var i = 0;
                var x = 0;
                var y = 0;
                var setByte = _.com.jetbrains.kui.js.JsToolKit.createImage_kvmus7$setByte;
                var setInt = _.com.jetbrains.kui.js.JsToolKit.createImage_kvmus7$setInt;
                while (i < data.length) {
                  var color = c(x, y);
                  setInt.call(data, i++, color.red);
                  setInt.call(data, i++, color.green);
                  setInt.call(data, i++, color.blue);
                  setInt.call(data, i++, color.alpha);
                  x++;
                  if (x === w) {
                    x = 0;
                    y++;
                  }
                }
                return image;
              },
              loadImage_61zpoe$: function (url) {
                return _.com.jetbrains.kui.js.KLoadedImage_61zpoe$(url);
              }
            }, /** @lends _.com.jetbrains.kui.js.JsToolKit */ {
              createImage_kvmus7$setByte: function (i, v) {
              },
              createImage_kvmus7$setInt: function (i, v) {
                this[i] = v & 255;
              }
            }),
            KCreatedImage: Kotlin.createClass(function () {
              return [Kotlin.modules['shared_js'].com.jetbrains.kui.KImage];
            }, function (width, height, image) {
              this.$width_6o023p$ = width;
              this.$height_dl2xnc$ = height;
              this.image = image;
            }, /** @lends _.com.jetbrains.kui.js.KCreatedImage.prototype */ {
              width: {
                get: function () {
                  return this.$width_6o023p$;
                }
              },
              height: {
                get: function () {
                  return this.$height_dl2xnc$;
                }
              },
              getSubimage_tjonv8$: function (x, y, w, h) {
                throw new Kotlin.UnsupportedOperationException();
              },
              getColor_vux9f0$: function (x, y) {
                var i = 4 * (x + y * this.width);
                var r = this.image.data.get(i++);
                var g = this.image.data.get(i++);
                var b = this.image.data.get(i++);
                return Kotlin.modules['shared_js'].com.jetbrains.kui.KColor.Companion.rgb_tjonv8$(r, g, b, this.image.data.get(i));
              }
            }),
            KLoadedImage: Kotlin.createClass(function () {
              return [Kotlin.modules['shared_js'].com.jetbrains.kui.KImage];
            }, function (image, x, y, width, height) {
              if (x === void 0)
                x = 0.0;
              if (y === void 0)
                y = 0.0;
              if (width === void 0)
                width = image.width;
              if (height === void 0)
                height = image.height;
              this.image = image;
              this.x = x;
              this.y = y;
              this.$width_ilusek$ = width;
              this.$height_fqelmv$ = height;
            }, /** @lends _.com.jetbrains.kui.js.KLoadedImage.prototype */ {
              width: {
                get: function () {
                  return this.$width_ilusek$;
                }
              },
              height: {
                get: function () {
                  return this.$height_fqelmv$;
                }
              },
              ready: {
                get: function () {
                  return this.image.complete;
                }
              },
              getColor_vux9f0$: function (x, y) {
                throw new Kotlin.modules['stdlib'].kotlin.NotImplementedError();
              },
              getSubimage_tjonv8$: function (x, y, w, h) {
                return new _.com.jetbrains.kui.js.KLoadedImage(this.image, this.x + x, this.y + y, w, h);
              }
            }),
            KLoadedImage_61zpoe$: function (url) {
              var img = document.createElement('img');
              img.src = url;
              return new _.com.jetbrains.kui.js.KLoadedImage(img);
            },
            drawRoundRectangle_u705a3$: function (context, rect) {
              var ctx = context;
              ctx.beginPath();
              var x = rect.location.x;
              var y = rect.location.y;
              var width = rect.size.width;
              var height = rect.size.height;
              var wArc = rect.arcSize.width / 2;
              var hArc = rect.arcSize.height / 2;
              ctx.moveTo(x + wArc, y);
              ctx.lineTo(x + width - wArc, y);
              ctx.quadraticCurveTo(x + width, y, x + width, y + hArc);
              ctx.lineTo(x + width, y + height - hArc);
              ctx.quadraticCurveTo(x + width, y + height, x + width - hArc, y + height);
              ctx.lineTo(x + wArc, y + height);
              ctx.quadraticCurveTo(x, y + height, x, y + height - hArc);
              ctx.lineTo(x, y + hArc);
              ctx.quadraticCurveTo(x, y, x + wArc, y);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            },
            asText: function ($receiver) {
              return 'rgba(' + $receiver.red + ', ' + $receiver.green + ', ' + $receiver.blue + ', ' + $receiver.alpha + ')';
            },
            setupStroke_h27j6m$: function (ctx, stroke) {
              var tmp$0;
              var context = ctx;
              context.lineWidth = stroke.width;
              context.lineCap = stroke.cap.toString().toLowerCase();
              context.lineJoin = stroke.join.toString().toLowerCase();
              context.miterLimit = stroke.miterLimit;
              var tmp$1;
              if ((tmp$0 = stroke.dash) != null) {
                var tmp$2;
                context.lineDashOffset = stroke.dash;
                tmp$1 = context.setLineDash((Kotlin.isType(tmp$2 = stroke.dash, Kotlin.modules['shared_js'].com.jetbrains.kui.KStroke.Dash) ? tmp$2 : Kotlin.throwCCE()).dashes);
              }
               else
                tmp$1 = null;
              tmp$1;
            },
            setupFont_mn3qyv$: function (ctx, font) {
              var tmp$0, tmp$1;
              tmp$0 = font.name;
              if (tmp$0 === Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.SANS_SERIF)
                tmp$1 = 'sans-serif';
              else if (tmp$0 === Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.SERIF)
                tmp$1 = 'serif';
              else if (tmp$0 === Kotlin.modules['shared_js'].com.jetbrains.kui.KFontName.MONOSPACED)
                tmp$1 = 'monospace';
              var name = tmp$1;
              ctx.font = (font.italic ? 'italic ' : '') + (font.bold ? 'bold ' : '') + (font.size.toString() + 'px ' + name);
            },
            setupFillStyle_q58w8h$: function (ctx, color, startPoint) {
              _.com.jetbrains.kui.js.setupStyle(ctx, color, 'fillStyle', startPoint);
            },
            setupStrokeStyle_q58w8h$: function (ctx, color, startPoint) {
              _.com.jetbrains.kui.js.setupStyle(ctx, color, 'strokeStyle', startPoint);
            },
            setupStyle: function (ctx, paint, styleName, o) {
              var tmp$0;
              if (Kotlin.isType(paint, Kotlin.modules['shared_js'].com.jetbrains.kui.KColor))
                tmp$0 = _.com.jetbrains.kui.js.asText(paint);
              else if (Kotlin.isType(paint, Kotlin.modules['shared_js'].com.jetbrains.kui.KLinearGradient)) {
                var grd = ctx.createLinearGradient(paint.start.x + o.x, paint.start.y + o.y, paint.end.x + o.x, paint.end.y + o.y);
                var tmp$3, tmp$1, tmp$2;
                tmp$3 = paint.stops, tmp$1 = tmp$3.length;
                for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
                  var element = tmp$3[tmp$2];
                  grd.addColorStop(element.first, _.com.jetbrains.kui.js.asText(element.second));
                }
                tmp$0 = grd;
              }
               else if (Kotlin.isType(paint, Kotlin.modules['shared_js'].com.jetbrains.kui.KRadialGradient)) {
                var grd_0 = ctx.createRadialGradient(paint.center.x + o.x, paint.center.y + o.y, paint.radius, paint.focus.x + o.x, paint.focus.y + o.y, 0);
                var tmp$6, tmp$5, tmp$4;
                tmp$6 = paint.stops, tmp$5 = tmp$6.length;
                for (var tmp$4 = 0; tmp$4 !== tmp$5; ++tmp$4) {
                  var element_0 = tmp$6[tmp$4];
                  grd_0.addColorStop(element_0.first, _.com.jetbrains.kui.js.asText(element_0.second));
                }
                tmp$0 = grd_0;
              }
               else {
                tmp$0 = _.com.jetbrains.kui.js.transparent_y3xmn5$;
              }
              ctx[styleName] = tmp$0;
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('js', _);
}(Kotlin));
