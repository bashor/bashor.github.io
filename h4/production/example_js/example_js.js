(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    arcanoid: function () {
      Kotlin.modules['example_shared_js'].arcanoid_98h5cc$(new Kotlin.modules['js'].com.jetbrains.kui.js.JsToolKit('kui'));
    },
    gameot: function () {
      Kotlin.modules['example_shared_js'].gameot_98h5cc$(new Kotlin.modules['js'].com.jetbrains.kui.js.JsToolKit('kui2', '../example_shared_js'));
    },
    gradient: function () {
      Kotlin.modules['example_shared_js'].showGradientScene_mr05rm$(new Kotlin.modules['js'].com.jetbrains.kui.js.JsToolKit('kui'), 1111, 600);
    },
    logo: function () {
      Kotlin.modules['example_shared_js'].renderLogo_26bdom$(new Kotlin.modules['js'].com.jetbrains.kui.js.JsToolKit('kui'));
    }
  });
  Kotlin.defineModule('example_js', _);
}(Kotlin));
