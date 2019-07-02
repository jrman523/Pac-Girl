// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/levels/level1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var level1 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(level1, _Phaser$Scene);

  function level1() {
    _classCallCheck(this, level1);

    return _possibleConstructorReturn(this, _getPrototypeOf(level1).call(this, {
      key: "level1"
    }));
  }

  _createClass(level1, [{
    key: "preload",
    value: function preload() {
      this.load.image('pacman', './assets/img/pacman.png');
      this.load.image('wallVert', './assets/img/wallVert.png');
      this.load.image('wallHoe', './assets/img/wallHoe.png');
      this.load.image('pink_ghost', './assets/img/pacman2.png');
      this.load.image('blue_ghost', './assets/img/pacman3.png');
      this.load.image('yellow_ghost', './assets/img/pacman4.png');
      this.load.image('green_ghost', './assets/img/pacman5.png');
      this.load.image('question', './assets/img/question.png');
      this.load.image('intro', './assets/img/intro.png');
    }
  }, {
    key: "create",
    value: function create() {
      var index = 0;
      var questions = [{
        title: "introduction to Pac-Girl",
        description: "use the arrow keys to move pac-girl around collect the question to win. Good Luck"
      }, {
        title: "what is HTML?",
        description: "Hypertext Markup Language (HTML), is used to create the structure of a Web page and consists of a series of elements to ell the browser how to display the content. HTML elements are represented by tags"
      }, {
        title: "What are HTML tags?",
        description: 'HTML tags label pieces of content such as "heading", "paragraph", "table", and so on. Browsers do not display the HTML tags, but use them to render the content of the page'
      }, {
        title: "How to Write an HTML document",
        description: "All HTML documents must start with a document type declaration: <!DOCTYPE html>. The HTML document itself begins with <html> and ends with </html>.The visible part of the HTML document is between <body> and </body>."
      }, {
        title: "HTML Headings",
        description: "HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading."
      }, {
        title: "HTML Paragraphs and Links",
        description: 'HTML paragraphs are defined with the <p> tag. example: <p>This is my first paragraph</p>. HTML links are defined with the <a> tag and they look like this <a href="https://www.google.com">This is a link</a>'
      }, {
        title: "HTML Images and Buttons",
        description: "HTML images are defined with the <img> tag. The source file (src), alternative text (alt), width, and height are provided as attributes. HTML buttons are defined with the <button> tag"
      }]; //walls and static

      var platforms = this.physics.add.staticGroup();
      platforms.create(600, 400, 'wallVert');
      platforms.create(543, 335, 'wallHoe');
      platforms.create(700, 400, 'wallVert');
      platforms.create(756, 335, 'wallHoe');
      platforms.create(540, 235, 'wallHoe');
      platforms.create(640, 235, 'wallHoe');
      platforms.create(800, 180, 'wallVert');
      platforms.create(856, 120, 'wallHoe');
      platforms.create(737, 120, 'wallHoe');
      platforms.create(850, 60, 'wallVert');
      platforms.create(530, 120, 'wallHoe');
      platforms.create(530, -40, 'wallVert');
      platforms.create(430, 120, 'wallHoe');
      platforms.create(370, 180, 'wallVert');
      platforms.create(970, 235, 'wallHoe');
      platforms.create(970, 335, 'wallHoe');
      platforms.create(935, 465, 'wallHoe');
      platforms.create(818, 585, 'wallHoe');
      platforms.create(860, 585, 'wallHoe');
      platforms.create(1020, 690, 'wallHoe');
      platforms.create(875, 525, 'wallVert');
      platforms.create(875, 600, 'wallVert');
      platforms.create(875, 820, 'wallVert');
      platforms.create(850, 465, 'wallHoe');
      platforms.create(760, 610, 'wallVert');
      platforms.create(760, 650, 'wallVert');
      platforms.create(703, 676, 'wallHoe');
      platforms.create(703, 550, 'wallHoe');
      platforms.create(50, 700, 'wallHoe');
      platforms.create(110, 640, 'wallVert');
      platforms.create(172, 580, 'wallHoe');
      platforms.create(172, 480, 'wallHoe');
      platforms.create(110, 420, 'wallVert');
      platforms.create(50, 360, 'wallHoe');
      platforms.create(330, 335, 'wallHoe');
      platforms.create(260, 320, 'wallVert');
      platforms.create(200, 260, 'wallHoe');
      platforms.create(20, 120, 'wallHoe');
      platforms.create(130, -40, 'wallVert');
      platforms.create(225, 120, 'wallHoe');
      platforms.create(-10, 260, 'wallHoe');
      platforms.create(380, 480, 'wallHoe');
      platforms.create(380, 580, 'wallHoe');
      platforms.create(380, 640, 'wallVert');
      platforms.create(323, 700, 'wallHoe');
      platforms.create(550, 640, 'wallVert');
      platforms.create(465, 820, 'wallVert');
      platforms.create(330, -40, 'wallVert'); //AI

      this.ghost1 = this.physics.add.image(50, 750, 'pink_ghost');
      this.ghost2 = this.physics.add.image(50, 50, 'blue_ghost');
      this.ghost3 = this.physics.add.image(950, 750, 'yellow_ghost');
      this.ghost4 = this.physics.add.image(950, 50, 'green_ghost');
      var ghost1 = this.ghost1,
          ghost2 = this.ghost2,
          ghost3 = this.ghost3,
          ghost4 = this.ghost4;
      ghost1.setCollideWorldBounds(true);
      ghost2.setCollideWorldBounds(true);
      ghost3.setCollideWorldBounds(true);
      ghost4.setCollideWorldBounds(true); //questions

      var quest = this.physics.add.staticGroup();
      quest.create(20, 310, 'question');
      quest.create(975, 285, 'question');
      quest.create(910, 525, 'question');
      quest.create(340, 640, 'question');
      quest.create(410, 170, 'question');
      quest.create(560, 380, 'question');
      quest.create(170, 530, 'intro'); //player 

      this.pacman = this.physics.add.image(50, 530, 'pacman');
      var pacman = this.pacman;
      pacman.flipX = true;
      pacman.setCollideWorldBounds(true);
      pacman.body.setGravityY(0);
      pacman.body.setGravityX(0);
      this.physics.add.collider(this.pacman, platforms);
      this.physics.add.overlap(this.pacman, quest, question, null, this);
      this.cursors = this.input.keyboard.createCursorKeys();

      function question(pacman, quest) {
        quest.disableBody(true, true);
        this.scene.pause('level1');
        $(document).ready(function () {
          $('.modal').modal();
          $('#modal').modal('open');
          $('#title').text(questions[index].title);
          $('#description').text(questions[index].description);
          index++;
        });
      }

      ;
      this.physics.add.collider(pacman, ghost1, gameOver, null, this);
      this.physics.add.collider(pacman, ghost2, gameOver, null, this);
      this.physics.add.collider(pacman, ghost3, gameOver, null, this);
      this.physics.add.collider(pacman, ghost4, gameOver, null, this);

      function gameOver(pacman, ghost) {
        console.log('test');
        this.physics.pause();
        pacman.setTint(0xff0000);
        gameOver = true;
        this.scene.pause('level1');
        $(document).ready(function () {
          $('.modal').modal();
          $('#gameOver').modal('open');
        });
      }

      this.physics.add.collider(ghost1, platforms, moveGhost, null, this);
      this.physics.add.collider(ghost2, platforms, moveGhost, null, this);
      this.physics.add.collider(ghost3, platforms, moveGhost, null, this);
      this.physics.add.collider(ghost4, platforms, moveGhost, null, this);
      var xMove = 20,
          yMove = 0;

      function moveGhost(ghost1, ghost2, ghost3, ghost4) {
        if (xMove > 0) {
          yMove = 20;
          xMove = 0;
        } else if (yMove > 0) {
          xMove = 20;
          yMove - 0;
        }
      }

      ghost1.setVelocity(xMove, yMove);
      ghost2.setVelocity(xMove, yMove);
      ghost3.setVelocity(xMove, yMove);
      ghost4.setVelocity(xMove, yMove);
    }
  }, {
    key: "update",
    value: function update() {
      var moveObj = 150;
      var pacman = this.pacman;
      pacman.setDrag(1500);

      if (this.cursors.right.isDown) {
        pacman.setVelocityX(moveObj);
        pacman.angle = 0;
        pacman.flipX = true;
      } else if (this.cursors.left.isDown) {
        pacman.setVelocityX(-moveObj);
        pacman.angle = 0;
        pacman.flipX = false;
      } else if (this.cursors.up.isDown) {
        pacman.setVelocityY(-moveObj);
        pacman.angle = -90;
        pacman.flipX = true;
      } else if (this.cursors.down.isDown) {
        pacman.setVelocityY(moveObj);
        pacman.angle = 90;
        pacman.flipX = true;
      }
    }
  }]);

  return level1;
}(Phaser.Scene);

exports.default = level1;
},{}],"js/GameMenue.js":[function(require,module,exports) {
"use strict";

var _level = _interopRequireDefault(require("./levels/level1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scene: [_level.default]
};
var game = new Phaser.Game(config);
$(document).on('click', '#resume', function () {
  resume();
});

function resume() {
  game.scene.resume('level1');
}
},{"./levels/level1":"js/levels/level1.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50020" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/GameMenue.js"], null)
//# sourceMappingURL=/GameMenue.41a16ff8.js.map