parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    q5Rn: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.galleryItems = void 0);
        const p = [
          {
            preview:
              'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
            original:
              'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
            description: 'Hokkaido Flower',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
            description: 'Container Haulage Freight',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
            description: 'Aerial Beach View',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
            description: 'Flower Blooms',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
            description: 'Alpine Mountains',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
            description: 'Mountain Lake Sailing',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
            description: 'Alpine Spring Meadows',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
            description: 'Nature Landscape',
          },
          {
            preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
            original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
            description: 'Lighthouse Coast Sea',
          },
        ];
        exports.galleryItems = p;
      },
      {},
    ],
    yx6k: [
      function (require, module, exports) {
        var global = arguments[3];
        var t = arguments[3];
        function e(t) {
          return (e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        function o(t, e) {
          var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
          if (!o) {
            if (Array.isArray(t) || (o = i(t)) || (e && t && 'number' == typeof t.length)) {
              o && (t = o);
              var n = 0,
                s = function () {};
              return {
                s: s,
                n: function () {
                  return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                },
                e: function (t) {
                  throw t;
                },
                f: s,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          }
          var a,
            r = !0,
            l = !1;
          return {
            s: function () {
              o = o.call(t);
            },
            n: function () {
              var t = o.next();
              return (r = t.done), t;
            },
            e: function (t) {
              (l = !0), (a = t);
            },
            f: function () {
              try {
                r || null == o.return || o.return();
              } finally {
                if (l) throw a;
              }
            },
          };
        }
        function i(t, e) {
          if (t) {
            if ('string' == typeof t) return n(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            return (
              'Object' === o && t.constructor && (o = t.constructor.name),
              'Map' === o || 'Set' === o
                ? Array.from(t)
                : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? n(t, e)
                : void 0
            );
          }
        }
        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
          return i;
        }
        function s(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        }
        function a(t, e) {
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function r(t, e, o) {
          return e && a(t.prototype, e), o && a(t, o), t;
        }
        function l(t, e, o) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = o),
            t
          );
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var d = (function () {
            function t(e, o) {
              var i = this;
              if (
                (s(this, t),
                l(this, 'defaultOptions', {
                  sourceAttr: 'href',
                  overlay: !0,
                  overlayOpacity: 0.7,
                  spinner: !0,
                  nav: !0,
                  navText: ['&lsaquo;', '&rsaquo;'],
                  captions: !0,
                  captionDelay: 0,
                  captionSelector: 'img',
                  captionType: 'attr',
                  captionsData: 'title',
                  captionPosition: 'bottom',
                  captionClass: '',
                  close: !0,
                  closeText: '&times;',
                  swipeClose: !0,
                  showCounter: !0,
                  fileExt: 'png|jpg|jpeg|gif|webp',
                  animationSlide: !0,
                  animationSpeed: 250,
                  preloading: !0,
                  enableKeyboard: !0,
                  loop: !0,
                  rel: !1,
                  docClose: !0,
                  swipeTolerance: 50,
                  className: 'simple-lightbox',
                  widthRatio: 0.8,
                  heightRatio: 0.9,
                  scaleImageToRatio: !1,
                  disableRightClick: !1,
                  disableScroll: !0,
                  alertError: !0,
                  alertErrorMessage: 'Image not found, next image will be loaded',
                  additionalHtml: !1,
                  history: !0,
                  throttleInterval: 0,
                  doubleTapZoom: 2,
                  maxZoom: 10,
                  htmlClass: 'has-lightbox',
                  rtl: !1,
                  fixedClass: 'sl-fixed',
                  fadeSpeed: 300,
                  uniqueImages: !0,
                  focus: !0,
                  scrollZoom: !0,
                  scrollZoomFactor: 0.5,
                }),
                l(this, 'transitionPrefix', void 0),
                l(this, 'isPassiveEventsSupported', void 0),
                l(this, 'transitionCapable', !1),
                l(this, 'isTouchDevice', 'ontouchstart' in window),
                l(this, 'isAppleDevice', /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),
                l(this, 'initialLocationHash', void 0),
                l(this, 'pushStateSupport', 'pushState' in history),
                l(this, 'isOpen', !1),
                l(this, 'isAnimating', !1),
                l(this, 'isClosing', !1),
                l(this, 'isFadeIn', !1),
                l(this, 'urlChangedOnce', !1),
                l(this, 'hashReseted', !1),
                l(this, 'historyHasChanges', !1),
                l(this, 'historyUpdateTimeout', null),
                l(this, 'currentImage', void 0),
                l(this, 'eventNamespace', 'simplelightbox'),
                l(this, 'domNodes', {}),
                l(this, 'loadedImages', []),
                l(this, 'initialImageIndex', 0),
                l(this, 'currentImageIndex', 0),
                l(this, 'initialSelector', null),
                l(this, 'globalScrollbarWidth', 0),
                l(this, 'controlCoordinates', {
                  swipeDiff: 0,
                  swipeYDiff: 0,
                  swipeStart: 0,
                  swipeEnd: 0,
                  swipeYStart: 0,
                  swipeYEnd: 0,
                  mousedown: !1,
                  imageLeft: 0,
                  zoomed: !1,
                  containerHeight: 0,
                  containerWidth: 0,
                  containerOffsetX: 0,
                  containerOffsetY: 0,
                  imgHeight: 0,
                  imgWidth: 0,
                  capture: !1,
                  initialOffsetX: 0,
                  initialOffsetY: 0,
                  initialPointerOffsetX: 0,
                  initialPointerOffsetY: 0,
                  initialPointerOffsetX2: 0,
                  initialPointerOffsetY2: 0,
                  initialScale: 1,
                  initialPinchDistance: 0,
                  pointerOffsetX: 0,
                  pointerOffsetY: 0,
                  pointerOffsetX2: 0,
                  pointerOffsetY2: 0,
                  targetOffsetX: 0,
                  targetOffsetY: 0,
                  targetScale: 0,
                  pinchOffsetX: 0,
                  pinchOffsetY: 0,
                  limitOffsetX: 0,
                  limitOffsetY: 0,
                  scaleDifference: 0,
                  targetPinchDistance: 0,
                  touchCount: 0,
                  doubleTapped: !1,
                  touchmoveCount: 0,
                }),
                (this.options = Object.assign(this.defaultOptions, o)),
                (this.isPassiveEventsSupported = this.checkPassiveEventsSupport()),
                'string' == typeof e
                  ? ((this.initialSelector = e),
                    (this.elements = Array.from(document.querySelectorAll(e))))
                  : (this.elements = void 0 !== e.length && e.length > 0 ? Array.from(e) : [e]),
                (this.relatedElements = []),
                (this.transitionPrefix = this.calculateTransitionPrefix()),
                (this.transitionCapable = !1 !== this.transitionPrefix),
                (this.initialLocationHash = this.hash),
                this.options.rel && (this.elements = this.getRelated(this.options.rel)),
                this.options.uniqueImages)
              ) {
                var n = [];
                this.elements = Array.from(this.elements).filter(function (t) {
                  var e = t.getAttribute(i.options.sourceAttr);
                  return -1 === n.indexOf(e) && (n.push(e), !0);
                });
              }
              this.createDomNodes(),
                this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
                this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation),
                this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner),
                this.addEventListener(this.elements, 'click.' + this.eventNamespace, function (t) {
                  if (i.isValidLink(t.currentTarget)) {
                    if ((t.preventDefault(), i.isAnimating)) return !1;
                    (i.initialImageIndex = i.elements.indexOf(t.currentTarget)),
                      i.openImage(t.currentTarget);
                  }
                }),
                this.options.docClose &&
                  this.addEventListener(
                    this.domNodes.wrapper,
                    ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace],
                    function (t) {
                      i.isOpen && t.target === t.currentTarget && i.close();
                    },
                  ),
                this.options.disableRightClick &&
                  this.addEventListener(
                    document.body,
                    'contextmenu.' + this.eventNamespace,
                    function (t) {
                      t.target.parentElement.classList.contains('sl-image') && t.preventDefault();
                    },
                  ),
                this.options.enableKeyboard &&
                  this.addEventListener(
                    document.body,
                    'keyup.' + this.eventNamespace,
                    this.throttle(function (t) {
                      if (
                        ((i.controlCoordinates.swipeDiff = 0), i.isAnimating && 'Escape' === t.key)
                      )
                        return (
                          i.currentImage.setAttribute('src', ''), (i.isAnimating = !1), i.close()
                        );
                      i.isOpen &&
                        (t.preventDefault(),
                        'Escape' === t.key && i.close(),
                        !i.isAnimating &&
                          ['ArrowLeft', 'ArrowRight'].indexOf(t.key) > -1 &&
                          i.loadImage('ArrowRight' === t.key ? 1 : -1));
                    }, this.options.throttleInterval),
                  ),
                this.addEvents();
            }
            return (
              r(t, [
                {
                  key: 'checkPassiveEventsSupport',
                  value: function () {
                    var t = !1;
                    try {
                      var e = Object.defineProperty({}, 'passive', {
                        get: function () {
                          t = !0;
                        },
                      });
                      window.addEventListener('testPassive', null, e),
                        window.removeEventListener('testPassive', null, e);
                    } catch (o) {}
                    return t;
                  },
                },
                {
                  key: 'createDomNodes',
                  value: function () {
                    (this.domNodes.overlay = document.createElement('div')),
                      this.domNodes.overlay.classList.add('sl-overlay'),
                      (this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity),
                      (this.domNodes.closeButton = document.createElement('button')),
                      this.domNodes.closeButton.classList.add('sl-close'),
                      (this.domNodes.closeButton.innerHTML = this.options.closeText),
                      (this.domNodes.spinner = document.createElement('div')),
                      this.domNodes.spinner.classList.add('sl-spinner'),
                      (this.domNodes.spinner.innerHTML = '<div></div>'),
                      (this.domNodes.navigation = document.createElement('div')),
                      this.domNodes.navigation.classList.add('sl-navigation'),
                      (this.domNodes.navigation.innerHTML = '<button class="sl-prev">'
                        .concat(this.options.navText[0], '</button><button class="sl-next">')
                        .concat(this.options.navText[1], '</button>')),
                      (this.domNodes.counter = document.createElement('div')),
                      this.domNodes.counter.classList.add('sl-counter'),
                      (this.domNodes.counter.innerHTML =
                        '<span class="sl-current"></span>/<span class="sl-total"></span>'),
                      (this.domNodes.caption = document.createElement('div')),
                      this.domNodes.caption.classList.add(
                        'sl-caption',
                        'pos-' + this.options.captionPosition,
                      ),
                      this.options.captionClass &&
                        this.domNodes.caption.classList.add(this.options.captionClass),
                      (this.domNodes.image = document.createElement('div')),
                      this.domNodes.image.classList.add('sl-image'),
                      (this.domNodes.wrapper = document.createElement('div')),
                      this.domNodes.wrapper.classList.add('sl-wrapper'),
                      this.domNodes.wrapper.setAttribute('tabindex', -1),
                      this.domNodes.wrapper.setAttribute('role', 'dialog'),
                      this.domNodes.wrapper.setAttribute('aria-hidden', !1),
                      this.options.className &&
                        this.domNodes.wrapper.classList.add(this.options.className),
                      this.options.rtl && this.domNodes.wrapper.classList.add('sl-dir-rtl');
                  },
                },
                {
                  key: 'throttle',
                  value: function (t, e) {
                    var o;
                    return function () {
                      o ||
                        (t.apply(this, arguments),
                        (o = !0),
                        setTimeout(function () {
                          return (o = !1);
                        }, e));
                    };
                  },
                },
                {
                  key: 'isValidLink',
                  value: function (t) {
                    return (
                      !this.options.fileExt ||
                      (t.getAttribute(this.options.sourceAttr) &&
                        new RegExp('(' + this.options.fileExt + ')$', 'i').test(
                          t.getAttribute(this.options.sourceAttr),
                        ))
                    );
                  },
                },
                {
                  key: 'calculateTransitionPrefix',
                  value: function () {
                    var t = (document.body || document.documentElement).style;
                    return 'transition' in t
                      ? ''
                      : 'WebkitTransition' in t
                      ? '-webkit-'
                      : 'MozTransition' in t
                      ? '-moz-'
                      : 'OTransition' in t && '-o';
                  },
                },
                {
                  key: 'toggleScrollbar',
                  value: function (t) {
                    var e = 0,
                      o = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));
                    if ('hide' === t) {
                      var i = window.innerWidth;
                      if (!i) {
                        var n = document.documentElement.getBoundingClientRect();
                        i = n.right - Math.abs(n.left);
                      }
                      if (document.body.clientWidth < i || this.isAppleDevice) {
                        var s = document.createElement('div'),
                          a = parseInt(document.body.style.paddingRight || 0, 10);
                        s.classList.add('sl-scrollbar-measure'),
                          document.body.appendChild(s),
                          (e = s.offsetWidth - s.clientWidth),
                          document.body.removeChild(s),
                          (document.body.dataset.originalPaddingRight = a),
                          (e > 0 || (0 == e && this.isAppleDevice)) &&
                            (document.body.classList.add('hidden-scroll'),
                            (document.body.style.paddingRight = a + e + 'px'),
                            o.forEach(function (t) {
                              var o = t.style.paddingRight,
                                i = window.getComputedStyle(t)['padding-right'];
                              (t.dataset.originalPaddingRight = o),
                                (t.style.paddingRight = ''.concat(parseFloat(i) + e, 'px'));
                            }));
                      }
                    } else
                      document.body.classList.remove('hidden-scroll'),
                        (document.body.style.paddingRight =
                          document.body.dataset.originalPaddingRight),
                        o.forEach(function (t) {
                          var e = t.dataset.originalPaddingRight;
                          void 0 !== e && (t.style.paddingRight = e);
                        });
                    return e;
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    var t = this;
                    if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
                    this.isClosing = !0;
                    var e = this.relatedElements[this.currentImageIndex];
                    for (var o in (e.dispatchEvent(new Event('close.simplelightbox')),
                    this.options.history &&
                      ((this.historyHasChanges = !1), this.hashReseted || this.resetHash()),
                    this.removeEventListener(document, 'focusin.' + this.eventNamespace),
                    this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
                    this.fadeOut(
                      document.querySelectorAll(
                        '.sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter',
                      ),
                      this.options.fadeSpeed,
                      function () {
                        t.options.disableScroll && t.toggleScrollbar('show'),
                          t.options.htmlClass &&
                            '' !== t.options.htmlClass &&
                            document.querySelector('html').classList.remove(t.options.htmlClass),
                          document.body.removeChild(t.domNodes.wrapper),
                          document.body.removeChild(t.domNodes.overlay),
                          (t.domNodes.additionalHtml = null),
                          e.dispatchEvent(new Event('closed.simplelightbox')),
                          (t.isClosing = !1);
                      },
                    ),
                    (this.currentImage = null),
                    (this.isOpen = !1),
                    (this.isAnimating = !1),
                    this.controlCoordinates))
                      this.controlCoordinates[o] = 0;
                    (this.controlCoordinates.mousedown = !1),
                      (this.controlCoordinates.zoomed = !1),
                      (this.controlCoordinates.capture = !1),
                      (this.controlCoordinates.initialScale = this.minMax(
                        1,
                        1,
                        this.options.maxZoom,
                      )),
                      (this.controlCoordinates.doubleTapped = !1);
                  },
                },
                {
                  key: 'hash',
                  get: function () {
                    return window.location.hash.substring(1);
                  },
                },
                {
                  key: 'preload',
                  value: function () {
                    var t = this,
                      e = this.currentImageIndex,
                      o = this.relatedElements.length,
                      i = e + 1 < 0 ? o - 1 : e + 1 >= o - 1 ? 0 : e + 1,
                      n = e - 1 < 0 ? o - 1 : e - 1 >= o - 1 ? 0 : e - 1,
                      s = new Image(),
                      a = new Image();
                    s.addEventListener('load', function (o) {
                      var i = o.target.getAttribute('src');
                      -1 === t.loadedImages.indexOf(i) && t.loadedImages.push(i),
                        t.relatedElements[e].dispatchEvent(
                          new Event('nextImageLoaded.' + t.eventNamespace),
                        );
                    }),
                      s.setAttribute(
                        'src',
                        this.relatedElements[i].getAttribute(this.options.sourceAttr),
                      ),
                      a.addEventListener('load', function (o) {
                        var i = o.target.getAttribute('src');
                        -1 === t.loadedImages.indexOf(i) && t.loadedImages.push(i),
                          t.relatedElements[e].dispatchEvent(
                            new Event('prevImageLoaded.' + t.eventNamespace),
                          );
                      }),
                      a.setAttribute(
                        'src',
                        this.relatedElements[n].getAttribute(this.options.sourceAttr),
                      );
                  },
                },
                {
                  key: 'loadImage',
                  value: function (t) {
                    var e = this,
                      o = t;
                    this.options.rtl && (t = -t),
                      this.relatedElements[this.currentImageIndex].dispatchEvent(
                        new Event('change.' + this.eventNamespace),
                      ),
                      this.relatedElements[this.currentImageIndex].dispatchEvent(
                        new Event((1 === t ? 'next' : 'prev') + '.' + this.eventNamespace),
                      );
                    var i = this.currentImageIndex + t;
                    if (
                      this.isAnimating ||
                      ((i < 0 || i >= this.relatedElements.length) && !1 === this.options.loop)
                    )
                      return !1;
                    (this.currentImageIndex =
                      i < 0
                        ? this.relatedElements.length - 1
                        : i > this.relatedElements.length - 1
                        ? 0
                        : i),
                      (this.domNodes.counter.querySelector('.sl-current').innerHTML =
                        this.currentImageIndex + 1),
                      this.options.animationSlide &&
                        this.slide(
                          this.options.animationSpeed / 1e3,
                          -100 * o - this.controlCoordinates.swipeDiff + 'px',
                        ),
                      this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function () {
                        (e.isAnimating = !0),
                          e.isClosing
                            ? (e.isAnimating = !1)
                            : setTimeout(function () {
                                var t = e.relatedElements[e.currentImageIndex];
                                e.currentImage.setAttribute(
                                  'src',
                                  t.getAttribute(e.options.sourceAttr),
                                ),
                                  -1 ===
                                    e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr)) &&
                                    e.show(e.domNodes.spinner),
                                  e.domNodes.image.contains(e.domNodes.caption) &&
                                    e.domNodes.image.removeChild(e.domNodes.caption),
                                  e.adjustImage(o),
                                  e.options.preloading && e.preload();
                              }, 100);
                      });
                  },
                },
                {
                  key: 'adjustImage',
                  value: function (t) {
                    var e = this;
                    if (!this.currentImage) return !1;
                    var o = new Image(),
                      i = window.innerWidth * this.options.widthRatio,
                      n = window.innerHeight * this.options.heightRatio;
                    o.setAttribute('src', this.currentImage.getAttribute('src')),
                      (this.currentImage.dataset.scale = 1),
                      (this.currentImage.dataset.translateX = 0),
                      (this.currentImage.dataset.translateY = 0),
                      this.zoomPanElement(0, 0, 1),
                      o.addEventListener('error', function (o) {
                        e.relatedElements[e.currentImageIndex].dispatchEvent(
                          new Event('error.' + e.eventNamespace),
                        ),
                          (e.isAnimating = !1),
                          (e.isOpen = !0),
                          (e.domNodes.spinner.style.display = 'none');
                        var i = 1 === t || -1 === t;
                        if (e.initialImageIndex === e.currentImageIndex && i) return e.close();
                        e.options.alertError && alert(e.options.alertErrorMessage),
                          e.loadImage(i ? t : 1);
                      }),
                      o.addEventListener('load', function (o) {
                        void 0 !== t &&
                          (e.relatedElements[e.currentImageIndex].dispatchEvent(
                            new Event('changed.' + e.eventNamespace),
                          ),
                          e.relatedElements[e.currentImageIndex].dispatchEvent(
                            new Event((1 === t ? 'nextDone' : 'prevDone') + '.' + e.eventNamespace),
                          )),
                          e.options.history && e.updateURL(),
                          -1 === e.loadedImages.indexOf(e.currentImage.getAttribute('src')) &&
                            e.loadedImages.push(e.currentImage.getAttribute('src'));
                        var s,
                          a,
                          r = o.target.width,
                          l = o.target.height;
                        if (e.options.scaleImageToRatio || r > i || l > n) {
                          var d = r / l > i / n ? r / i : l / n;
                          (r /= d), (l /= d);
                        }
                        (e.domNodes.image.style.top = (window.innerHeight - l) / 2 + 'px'),
                          (e.domNodes.image.style.left =
                            (window.innerWidth - r - e.globalScrollbarWidth) / 2 + 'px'),
                          (e.domNodes.image.style.width = r + 'px'),
                          (e.domNodes.image.style.height = l + 'px'),
                          (e.domNodes.spinner.style.display = 'none'),
                          e.options.focus && e.forceFocus(),
                          e.fadeIn(e.currentImage, e.options.fadeSpeed, function () {
                            e.options.focus && e.domNodes.wrapper.focus();
                          }),
                          (e.isOpen = !0),
                          'string' == typeof e.options.captionSelector
                            ? (s =
                                'self' === e.options.captionSelector
                                  ? e.relatedElements[e.currentImageIndex]
                                  : e.relatedElements[e.currentImageIndex].querySelector(
                                      e.options.captionSelector,
                                    ))
                            : 'function' == typeof e.options.captionSelector &&
                              (s = e.options.captionSelector(
                                e.relatedElements[e.currentImageIndex],
                              )),
                          e.options.captions &&
                            s &&
                            (a =
                              'data' === e.options.captionType
                                ? s.dataset[e.options.captionsData]
                                : 'text' === e.options.captionType
                                ? s.innerHTML
                                : s.getAttribute(e.options.captionsData)),
                          e.options.loop
                            ? 1 === e.relatedElements.length
                              ? e.hide(e.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'))
                              : e.show(e.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'))
                            : (0 === e.currentImageIndex &&
                                e.hide(e.domNodes.navigation.querySelector('.sl-prev')),
                              e.currentImageIndex >= e.relatedElements.length - 1 &&
                                e.hide(e.domNodes.navigation.querySelector('.sl-next')),
                              e.currentImageIndex > 0 &&
                                e.show(e.domNodes.navigation.querySelector('.sl-prev')),
                              e.currentImageIndex < e.relatedElements.length - 1 &&
                                e.show(e.domNodes.navigation.querySelector('.sl-next'))),
                          1 === t || -1 === t
                            ? (e.options.animationSlide &&
                                (e.slide(0, 100 * t + 'px'),
                                setTimeout(function () {
                                  e.slide(e.options.animationSpeed / 1e3, '0px');
                                }, 50)),
                              e.fadeIn(e.domNodes.image, e.options.fadeSpeed, function () {
                                (e.isAnimating = !1), e.setCaption(a, r);
                              }))
                            : ((e.isAnimating = !1), e.setCaption(a, r)),
                          e.options.additionalHtml &&
                            !e.domNodes.additionalHtml &&
                            ((e.domNodes.additionalHtml = document.createElement('div')),
                            e.domNodes.additionalHtml.classList.add('sl-additional-html'),
                            (e.domNodes.additionalHtml.innerHTML = e.options.additionalHtml),
                            e.domNodes.image.appendChild(e.domNodes.additionalHtml));
                      });
                  },
                },
                {
                  key: 'zoomPanElement',
                  value: function (t, e, o) {
                    this.currentImage.style[this.transitionPrefix + 'transform'] =
                      'translate(' + t + ',' + e + ') scale(' + o + ')';
                  },
                },
                {
                  key: 'minMax',
                  value: function (t, e, o) {
                    return t < e ? e : t > o ? o : t;
                  },
                },
                {
                  key: 'setZoomData',
                  value: function (t, e, o) {
                    (this.currentImage.dataset.scale = t),
                      (this.currentImage.dataset.translateX = e),
                      (this.currentImage.dataset.translateY = o);
                  },
                },
                {
                  key: 'hashchangeHandler',
                  value: function () {
                    this.isOpen &&
                      this.hash === this.initialLocationHash &&
                      ((this.hashReseted = !0), this.close());
                  },
                },
                {
                  key: 'addEvents',
                  value: function () {
                    var t = this;
                    if (
                      (this.addEventListener(window, 'resize.' + this.eventNamespace, function (e) {
                        t.isOpen && t.adjustImage();
                      }),
                      this.addEventListener(
                        this.domNodes.closeButton,
                        ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace],
                        this.close.bind(this),
                      ),
                      this.options.history &&
                        setTimeout(function () {
                          t.addEventListener(
                            window,
                            'hashchange.' + t.eventNamespace,
                            function (e) {
                              t.isOpen && t.hashchangeHandler();
                            },
                          );
                        }, 40),
                      this.addEventListener(
                        this.domNodes.navigation.getElementsByTagName('button'),
                        'click.' + this.eventNamespace,
                        function (e) {
                          if (!e.currentTarget.tagName.match(/button/i)) return !0;
                          e.preventDefault(),
                            (t.controlCoordinates.swipeDiff = 0),
                            t.loadImage(e.currentTarget.classList.contains('sl-next') ? 1 : -1);
                        },
                      ),
                      this.options.scrollZoom)
                    ) {
                      var e = 1;
                      this.addEventListener(
                        this.domNodes.image,
                        ['mousewheel', 'DOMMouseScroll'],
                        function (o) {
                          if (
                            t.controlCoordinates.mousedown ||
                            t.isAnimating ||
                            t.isClosing ||
                            !t.isOpen
                          )
                            return !0;
                          0 == t.controlCoordinates.containerHeight &&
                            ((t.controlCoordinates.containerHeight = t.getDimensions(
                              t.domNodes.image,
                            ).height),
                            (t.controlCoordinates.containerWidth = t.getDimensions(
                              t.domNodes.image,
                            ).width),
                            (t.controlCoordinates.imgHeight = t.getDimensions(
                              t.currentImage,
                            ).height),
                            (t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width),
                            (t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft),
                            (t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop),
                            (t.controlCoordinates.initialOffsetX = parseFloat(
                              t.currentImage.dataset.translateX,
                            )),
                            (t.controlCoordinates.initialOffsetY = parseFloat(
                              t.currentImage.dataset.translateY,
                            ))),
                            o.preventDefault();
                          var i = o.delta || o.wheelDelta;
                          void 0 === i && (i = o.detail),
                            (i = Math.max(-1, Math.min(1, i))),
                            (e += i * t.options.scrollZoomFactor * e),
                            (e = Math.max(1, Math.min(t.options.maxZoom, e))),
                            (t.controlCoordinates.targetScale = e);
                          var n = document.documentElement.scrollTop || document.body.scrollTop;
                          (t.controlCoordinates.pinchOffsetX = o.pageX),
                            (t.controlCoordinates.pinchOffsetY = o.pageY - n || 0),
                            (t.controlCoordinates.limitOffsetX =
                              (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerWidth) /
                              2),
                            (t.controlCoordinates.limitOffsetY =
                              (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerHeight) /
                              2),
                            (t.controlCoordinates.scaleDifference =
                              t.controlCoordinates.targetScale - t.controlCoordinates.initialScale),
                            (t.controlCoordinates.targetOffsetX =
                              t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerWidth
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.initialOffsetX -
                                      ((t.controlCoordinates.pinchOffsetX -
                                        t.controlCoordinates.containerOffsetX -
                                        t.controlCoordinates.containerWidth / 2 -
                                        t.controlCoordinates.initialOffsetX) /
                                        (t.controlCoordinates.targetScale -
                                          t.controlCoordinates.scaleDifference)) *
                                        t.controlCoordinates.scaleDifference,
                                    -1 * t.controlCoordinates.limitOffsetX,
                                    t.controlCoordinates.limitOffsetX,
                                  )),
                            (t.controlCoordinates.targetOffsetY =
                              t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerHeight
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.initialOffsetY -
                                      ((t.controlCoordinates.pinchOffsetY -
                                        t.controlCoordinates.containerOffsetY -
                                        t.controlCoordinates.containerHeight / 2 -
                                        t.controlCoordinates.initialOffsetY) /
                                        (t.controlCoordinates.targetScale -
                                          t.controlCoordinates.scaleDifference)) *
                                        t.controlCoordinates.scaleDifference,
                                    -1 * t.controlCoordinates.limitOffsetY,
                                    t.controlCoordinates.limitOffsetY,
                                  )),
                            t.zoomPanElement(
                              t.controlCoordinates.targetOffsetX + 'px',
                              t.controlCoordinates.targetOffsetY + 'px',
                              t.controlCoordinates.targetScale,
                            ),
                            t.controlCoordinates.targetScale > 1
                              ? ((t.controlCoordinates.zoomed = !0),
                                (!t.domNodes.caption.style.opacity ||
                                  t.domNodes.caption.style.opacity > 0) &&
                                  'none' !== t.domNodes.caption.style.display &&
                                  t.fadeOut(t.domNodes.caption, t.options.fadeSpeed))
                              : (1 === t.controlCoordinates.initialScale &&
                                  ((t.controlCoordinates.zoomed = !1),
                                  'none' === t.domNodes.caption.style.display &&
                                    t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                                (t.controlCoordinates.initialPinchDistance = null),
                                (t.controlCoordinates.capture = !1)),
                            (t.controlCoordinates.initialPinchDistance =
                              t.controlCoordinates.targetPinchDistance),
                            (t.controlCoordinates.initialScale = t.controlCoordinates.targetScale),
                            (t.controlCoordinates.initialOffsetX =
                              t.controlCoordinates.targetOffsetX),
                            (t.controlCoordinates.initialOffsetY =
                              t.controlCoordinates.targetOffsetY),
                            t.setZoomData(
                              t.controlCoordinates.targetScale,
                              t.controlCoordinates.targetOffsetX,
                              t.controlCoordinates.targetOffsetY,
                            ),
                            t.zoomPanElement(
                              t.controlCoordinates.targetOffsetX + 'px',
                              t.controlCoordinates.targetOffsetY + 'px',
                              t.controlCoordinates.targetScale,
                            );
                        },
                      );
                    }
                    this.addEventListener(
                      this.domNodes.image,
                      ['touchstart.' + this.eventNamespace, 'mousedown.' + this.eventNamespace],
                      function (e) {
                        if ('A' === e.target.tagName && 'touchstart' === e.type) return !0;
                        if ('mousedown' === e.type)
                          e.preventDefault(),
                            (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                            (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                            (t.controlCoordinates.containerHeight = t.getDimensions(
                              t.domNodes.image,
                            ).height),
                            (t.controlCoordinates.containerWidth = t.getDimensions(
                              t.domNodes.image,
                            ).width),
                            (t.controlCoordinates.imgHeight = t.getDimensions(
                              t.currentImage,
                            ).height),
                            (t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width),
                            (t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft),
                            (t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop),
                            (t.controlCoordinates.initialOffsetX = parseFloat(
                              t.currentImage.dataset.translateX,
                            )),
                            (t.controlCoordinates.initialOffsetY = parseFloat(
                              t.currentImage.dataset.translateY,
                            )),
                            (t.controlCoordinates.capture = !0);
                        else {
                          if (
                            ((t.controlCoordinates.touchCount = e.touches.length),
                            (t.controlCoordinates.initialPointerOffsetX = e.touches[0].clientX),
                            (t.controlCoordinates.initialPointerOffsetY = e.touches[0].clientY),
                            (t.controlCoordinates.containerHeight = t.getDimensions(
                              t.domNodes.image,
                            ).height),
                            (t.controlCoordinates.containerWidth = t.getDimensions(
                              t.domNodes.image,
                            ).width),
                            (t.controlCoordinates.imgHeight = t.getDimensions(
                              t.currentImage,
                            ).height),
                            (t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width),
                            (t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft),
                            (t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop),
                            1 === t.controlCoordinates.touchCount)
                          ) {
                            if (t.controlCoordinates.doubleTapped)
                              return (
                                t.currentImage.classList.add('sl-transition'),
                                t.controlCoordinates.zoomed
                                  ? ((t.controlCoordinates.initialScale = 1),
                                    t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                    t.zoomPanElement(
                                      '0px',
                                      '0px',
                                      t.controlCoordinates.initialScale,
                                    ),
                                    (t.controlCoordinates.zoomed = !1))
                                  : ((t.controlCoordinates.initialScale = t.options.doubleTapZoom),
                                    t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                    t.zoomPanElement(
                                      '0px',
                                      '0px',
                                      t.controlCoordinates.initialScale,
                                    ),
                                    (!t.domNodes.caption.style.opacity ||
                                      t.domNodes.caption.style.opacity > 0) &&
                                      'none' !== t.domNodes.caption.style.display &&
                                      t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                                    (t.controlCoordinates.zoomed = !0)),
                                setTimeout(function () {
                                  t.currentImage &&
                                    t.currentImage.classList.remove('sl-transition');
                                }, 200),
                                !1
                              );
                            (t.controlCoordinates.doubleTapped = !0),
                              setTimeout(function () {
                                t.controlCoordinates.doubleTapped = !1;
                              }, 300),
                              (t.controlCoordinates.initialOffsetX = parseFloat(
                                t.currentImage.dataset.translateX,
                              )),
                              (t.controlCoordinates.initialOffsetY = parseFloat(
                                t.currentImage.dataset.translateY,
                              ));
                          } else
                            2 === t.controlCoordinates.touchCount &&
                              ((t.controlCoordinates.initialPointerOffsetX2 = e.touches[1].clientX),
                              (t.controlCoordinates.initialPointerOffsetY2 = e.touches[1].clientY),
                              (t.controlCoordinates.initialOffsetX = parseFloat(
                                t.currentImage.dataset.translateX,
                              )),
                              (t.controlCoordinates.initialOffsetY = parseFloat(
                                t.currentImage.dataset.translateY,
                              )),
                              (t.controlCoordinates.pinchOffsetX =
                                (t.controlCoordinates.initialPointerOffsetX +
                                  t.controlCoordinates.initialPointerOffsetX2) /
                                2),
                              (t.controlCoordinates.pinchOffsetY =
                                (t.controlCoordinates.initialPointerOffsetY +
                                  t.controlCoordinates.initialPointerOffsetY2) /
                                2),
                              (t.controlCoordinates.initialPinchDistance = Math.sqrt(
                                (t.controlCoordinates.initialPointerOffsetX -
                                  t.controlCoordinates.initialPointerOffsetX2) *
                                  (t.controlCoordinates.initialPointerOffsetX -
                                    t.controlCoordinates.initialPointerOffsetX2) +
                                  (t.controlCoordinates.initialPointerOffsetY -
                                    t.controlCoordinates.initialPointerOffsetY2) *
                                    (t.controlCoordinates.initialPointerOffsetY -
                                      t.controlCoordinates.initialPointerOffsetY2),
                              )));
                          t.controlCoordinates.capture = !0;
                        }
                        return (
                          !!t.controlCoordinates.mousedown ||
                          (t.transitionCapable &&
                            (t.controlCoordinates.imageLeft = parseInt(
                              t.domNodes.image.style.left,
                              10,
                            )),
                          (t.controlCoordinates.mousedown = !0),
                          (t.controlCoordinates.swipeDiff = 0),
                          (t.controlCoordinates.swipeYDiff = 0),
                          (t.controlCoordinates.swipeStart = e.pageX || e.touches[0].pageX),
                          (t.controlCoordinates.swipeYStart = e.pageY || e.touches[0].pageY),
                          !1)
                        );
                      },
                    ),
                      this.addEventListener(
                        this.domNodes.image,
                        [
                          'touchmove.' + this.eventNamespace,
                          'mousemove.' + this.eventNamespace,
                          'MSPointerMove',
                        ],
                        function (e) {
                          if (!t.controlCoordinates.mousedown) return !0;
                          if ('touchmove' === e.type) {
                            if (!1 === t.controlCoordinates.capture) return !1;
                            (t.controlCoordinates.pointerOffsetX = e.touches[0].clientX),
                              (t.controlCoordinates.pointerOffsetY = e.touches[0].clientY),
                              (t.controlCoordinates.touchCount = e.touches.length),
                              t.controlCoordinates.touchmoveCount++,
                              t.controlCoordinates.touchCount > 1
                                ? ((t.controlCoordinates.pointerOffsetX2 = e.touches[1].clientX),
                                  (t.controlCoordinates.pointerOffsetY2 = e.touches[1].clientY),
                                  (t.controlCoordinates.targetPinchDistance = Math.sqrt(
                                    (t.controlCoordinates.pointerOffsetX -
                                      t.controlCoordinates.pointerOffsetX2) *
                                      (t.controlCoordinates.pointerOffsetX -
                                        t.controlCoordinates.pointerOffsetX2) +
                                      (t.controlCoordinates.pointerOffsetY -
                                        t.controlCoordinates.pointerOffsetY2) *
                                        (t.controlCoordinates.pointerOffsetY -
                                          t.controlCoordinates.pointerOffsetY2),
                                  )),
                                  null === t.controlCoordinates.initialPinchDistance &&
                                    (t.controlCoordinates.initialPinchDistance =
                                      t.controlCoordinates.targetPinchDistance),
                                  Math.abs(
                                    t.controlCoordinates.initialPinchDistance -
                                      t.controlCoordinates.targetPinchDistance,
                                  ) >= 1 &&
                                    ((t.controlCoordinates.targetScale = t.minMax(
                                      (t.controlCoordinates.targetPinchDistance /
                                        t.controlCoordinates.initialPinchDistance) *
                                        t.controlCoordinates.initialScale,
                                      1,
                                      t.options.maxZoom,
                                    )),
                                    (t.controlCoordinates.limitOffsetX =
                                      (t.controlCoordinates.imgWidth *
                                        t.controlCoordinates.targetScale -
                                        t.controlCoordinates.containerWidth) /
                                      2),
                                    (t.controlCoordinates.limitOffsetY =
                                      (t.controlCoordinates.imgHeight *
                                        t.controlCoordinates.targetScale -
                                        t.controlCoordinates.containerHeight) /
                                      2),
                                    (t.controlCoordinates.scaleDifference =
                                      t.controlCoordinates.targetScale -
                                      t.controlCoordinates.initialScale),
                                    (t.controlCoordinates.targetOffsetX =
                                      t.controlCoordinates.imgWidth *
                                        t.controlCoordinates.targetScale <=
                                      t.controlCoordinates.containerWidth
                                        ? 0
                                        : t.minMax(
                                            t.controlCoordinates.initialOffsetX -
                                              ((t.controlCoordinates.pinchOffsetX -
                                                t.controlCoordinates.containerOffsetX -
                                                t.controlCoordinates.containerWidth / 2 -
                                                t.controlCoordinates.initialOffsetX) /
                                                (t.controlCoordinates.targetScale -
                                                  t.controlCoordinates.scaleDifference)) *
                                                t.controlCoordinates.scaleDifference,
                                            -1 * t.controlCoordinates.limitOffsetX,
                                            t.controlCoordinates.limitOffsetX,
                                          )),
                                    (t.controlCoordinates.targetOffsetY =
                                      t.controlCoordinates.imgHeight *
                                        t.controlCoordinates.targetScale <=
                                      t.controlCoordinates.containerHeight
                                        ? 0
                                        : t.minMax(
                                            t.controlCoordinates.initialOffsetY -
                                              ((t.controlCoordinates.pinchOffsetY -
                                                t.controlCoordinates.containerOffsetY -
                                                t.controlCoordinates.containerHeight / 2 -
                                                t.controlCoordinates.initialOffsetY) /
                                                (t.controlCoordinates.targetScale -
                                                  t.controlCoordinates.scaleDifference)) *
                                                t.controlCoordinates.scaleDifference,
                                            -1 * t.controlCoordinates.limitOffsetY,
                                            t.controlCoordinates.limitOffsetY,
                                          )),
                                    t.zoomPanElement(
                                      t.controlCoordinates.targetOffsetX + 'px',
                                      t.controlCoordinates.targetOffsetY + 'px',
                                      t.controlCoordinates.targetScale,
                                    ),
                                    t.controlCoordinates.targetScale > 1 &&
                                      ((t.controlCoordinates.zoomed = !0),
                                      (!t.domNodes.caption.style.opacity ||
                                        t.domNodes.caption.style.opacity > 0) &&
                                        'none' !== t.domNodes.caption.style.display &&
                                        t.fadeOut(t.domNodes.caption, t.options.fadeSpeed)),
                                    (t.controlCoordinates.initialPinchDistance =
                                      t.controlCoordinates.targetPinchDistance),
                                    (t.controlCoordinates.initialScale =
                                      t.controlCoordinates.targetScale),
                                    (t.controlCoordinates.initialOffsetX =
                                      t.controlCoordinates.targetOffsetX),
                                    (t.controlCoordinates.initialOffsetY =
                                      t.controlCoordinates.targetOffsetY)))
                                : ((t.controlCoordinates.targetScale =
                                    t.controlCoordinates.initialScale),
                                  (t.controlCoordinates.limitOffsetX =
                                    (t.controlCoordinates.imgWidth *
                                      t.controlCoordinates.targetScale -
                                      t.controlCoordinates.containerWidth) /
                                    2),
                                  (t.controlCoordinates.limitOffsetY =
                                    (t.controlCoordinates.imgHeight *
                                      t.controlCoordinates.targetScale -
                                      t.controlCoordinates.containerHeight) /
                                    2),
                                  (t.controlCoordinates.targetOffsetX =
                                    t.controlCoordinates.imgWidth *
                                      t.controlCoordinates.targetScale <=
                                    t.controlCoordinates.containerWidth
                                      ? 0
                                      : t.minMax(
                                          t.controlCoordinates.pointerOffsetX -
                                            (t.controlCoordinates.initialPointerOffsetX -
                                              t.controlCoordinates.initialOffsetX),
                                          -1 * t.controlCoordinates.limitOffsetX,
                                          t.controlCoordinates.limitOffsetX,
                                        )),
                                  (t.controlCoordinates.targetOffsetY =
                                    t.controlCoordinates.imgHeight *
                                      t.controlCoordinates.targetScale <=
                                    t.controlCoordinates.containerHeight
                                      ? 0
                                      : t.minMax(
                                          t.controlCoordinates.pointerOffsetY -
                                            (t.controlCoordinates.initialPointerOffsetY -
                                              t.controlCoordinates.initialOffsetY),
                                          -1 * t.controlCoordinates.limitOffsetY,
                                          t.controlCoordinates.limitOffsetY,
                                        )),
                                  Math.abs(t.controlCoordinates.targetOffsetX) ===
                                    Math.abs(t.controlCoordinates.limitOffsetX) &&
                                    ((t.controlCoordinates.initialOffsetX =
                                      t.controlCoordinates.targetOffsetX),
                                    (t.controlCoordinates.initialPointerOffsetX =
                                      t.controlCoordinates.pointerOffsetX)),
                                  Math.abs(t.controlCoordinates.targetOffsetY) ===
                                    Math.abs(t.controlCoordinates.limitOffsetY) &&
                                    ((t.controlCoordinates.initialOffsetY =
                                      t.controlCoordinates.targetOffsetY),
                                    (t.controlCoordinates.initialPointerOffsetY =
                                      t.controlCoordinates.pointerOffsetY)),
                                  t.setZoomData(
                                    t.controlCoordinates.initialScale,
                                    t.controlCoordinates.targetOffsetX,
                                    t.controlCoordinates.targetOffsetY,
                                  ),
                                  t.zoomPanElement(
                                    t.controlCoordinates.targetOffsetX + 'px',
                                    t.controlCoordinates.targetOffsetY + 'px',
                                    t.controlCoordinates.targetScale,
                                  ));
                          }
                          if ('mousemove' === e.type && t.controlCoordinates.mousedown) {
                            if ('touchmove' == e.type) return !0;
                            if ((e.preventDefault(), !1 === t.controlCoordinates.capture))
                              return !1;
                            (t.controlCoordinates.pointerOffsetX = e.clientX),
                              (t.controlCoordinates.pointerOffsetY = e.clientY),
                              (t.controlCoordinates.targetScale =
                                t.controlCoordinates.initialScale),
                              (t.controlCoordinates.limitOffsetX =
                                (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerWidth) /
                                2),
                              (t.controlCoordinates.limitOffsetY =
                                (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerHeight) /
                                2),
                              (t.controlCoordinates.targetOffsetX =
                                t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerWidth
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.pointerOffsetX -
                                        (t.controlCoordinates.initialPointerOffsetX -
                                          t.controlCoordinates.initialOffsetX),
                                      -1 * t.controlCoordinates.limitOffsetX,
                                      t.controlCoordinates.limitOffsetX,
                                    )),
                              (t.controlCoordinates.targetOffsetY =
                                t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerHeight
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.pointerOffsetY -
                                        (t.controlCoordinates.initialPointerOffsetY -
                                          t.controlCoordinates.initialOffsetY),
                                      -1 * t.controlCoordinates.limitOffsetY,
                                      t.controlCoordinates.limitOffsetY,
                                    )),
                              Math.abs(t.controlCoordinates.targetOffsetX) ===
                                Math.abs(t.controlCoordinates.limitOffsetX) &&
                                ((t.controlCoordinates.initialOffsetX =
                                  t.controlCoordinates.targetOffsetX),
                                (t.controlCoordinates.initialPointerOffsetX =
                                  t.controlCoordinates.pointerOffsetX)),
                              Math.abs(t.controlCoordinates.targetOffsetY) ===
                                Math.abs(t.controlCoordinates.limitOffsetY) &&
                                ((t.controlCoordinates.initialOffsetY =
                                  t.controlCoordinates.targetOffsetY),
                                (t.controlCoordinates.initialPointerOffsetY =
                                  t.controlCoordinates.pointerOffsetY)),
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                t.controlCoordinates.targetOffsetX,
                                t.controlCoordinates.targetOffsetY,
                              ),
                              t.zoomPanElement(
                                t.controlCoordinates.targetOffsetX + 'px',
                                t.controlCoordinates.targetOffsetY + 'px',
                                t.controlCoordinates.targetScale,
                              );
                          }
                          t.controlCoordinates.zoomed ||
                            ((t.controlCoordinates.swipeEnd = e.pageX || e.touches[0].pageX),
                            (t.controlCoordinates.swipeYEnd = e.pageY || e.touches[0].pageY),
                            (t.controlCoordinates.swipeDiff =
                              t.controlCoordinates.swipeStart - t.controlCoordinates.swipeEnd),
                            (t.controlCoordinates.swipeYDiff =
                              t.controlCoordinates.swipeYStart - t.controlCoordinates.swipeYEnd),
                            t.options.animationSlide &&
                              t.slide(0, -t.controlCoordinates.swipeDiff + 'px'));
                        },
                      ),
                      this.addEventListener(
                        this.domNodes.image,
                        [
                          'touchend.' + this.eventNamespace,
                          'mouseup.' + this.eventNamespace,
                          'touchcancel.' + this.eventNamespace,
                          'mouseleave.' + this.eventNamespace,
                          'pointerup',
                          'pointercancel',
                          'MSPointerUp',
                          'MSPointerCancel',
                        ],
                        function (e) {
                          if (
                            (t.isTouchDevice &&
                              'touchend' === e.type &&
                              ((t.controlCoordinates.touchCount = e.touches.length),
                              0 === t.controlCoordinates.touchCount
                                ? (t.currentImage &&
                                    t.setZoomData(
                                      t.controlCoordinates.initialScale,
                                      t.controlCoordinates.targetOffsetX,
                                      t.controlCoordinates.targetOffsetY,
                                    ),
                                  1 === t.controlCoordinates.initialScale &&
                                    ((t.controlCoordinates.zoomed = !1),
                                    'none' === t.domNodes.caption.style.display &&
                                      t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                                  (t.controlCoordinates.initialPinchDistance = null),
                                  (t.controlCoordinates.capture = !1))
                                : 1 === t.controlCoordinates.touchCount
                                ? ((t.controlCoordinates.initialPointerOffsetX =
                                    e.touches[0].clientX),
                                  (t.controlCoordinates.initialPointerOffsetY =
                                    e.touches[0].clientY))
                                : t.controlCoordinates.touchCount > 1 &&
                                  (t.controlCoordinates.initialPinchDistance = null)),
                            t.controlCoordinates.mousedown)
                          ) {
                            t.controlCoordinates.mousedown = !1;
                            var o = !0;
                            t.options.loop ||
                              (0 === t.currentImageIndex &&
                                t.controlCoordinates.swipeDiff < 0 &&
                                (o = !1),
                              t.currentImageIndex >= t.relatedElements.length - 1 &&
                                t.controlCoordinates.swipeDiff > 0 &&
                                (o = !1)),
                              Math.abs(t.controlCoordinates.swipeDiff) > t.options.swipeTolerance &&
                              o
                                ? t.loadImage(t.controlCoordinates.swipeDiff > 0 ? 1 : -1)
                                : t.options.animationSlide &&
                                  t.slide(t.options.animationSpeed / 1e3, '0px'),
                              t.options.swipeClose &&
                                Math.abs(t.controlCoordinates.swipeYDiff) > 50 &&
                                Math.abs(t.controlCoordinates.swipeDiff) <
                                  t.options.swipeTolerance &&
                                t.close();
                          }
                        },
                      ),
                      this.addEventListener(this.domNodes.image, ['dblclick'], function (e) {
                        if (!t.isTouchDevice)
                          return (
                            (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                            (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                            (t.controlCoordinates.containerHeight = t.getDimensions(
                              t.domNodes.image,
                            ).height),
                            (t.controlCoordinates.containerWidth = t.getDimensions(
                              t.domNodes.image,
                            ).width),
                            (t.controlCoordinates.imgHeight = t.getDimensions(
                              t.currentImage,
                            ).height),
                            (t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width),
                            (t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft),
                            (t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop),
                            t.currentImage.classList.add('sl-transition'),
                            t.controlCoordinates.zoomed
                              ? ((t.controlCoordinates.initialScale = 1),
                                t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                t.zoomPanElement('0px', '0px', t.controlCoordinates.initialScale),
                                (t.controlCoordinates.zoomed = !1),
                                'none' === t.domNodes.caption.style.display &&
                                  t.fadeIn(t.domNodes.caption, t.options.fadeSpeed))
                              : ((t.controlCoordinates.initialScale = t.options.doubleTapZoom),
                                t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                                t.zoomPanElement('0px', '0px', t.controlCoordinates.initialScale),
                                (!t.domNodes.caption.style.opacity ||
                                  t.domNodes.caption.style.opacity > 0) &&
                                  'none' !== t.domNodes.caption.style.display &&
                                  t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                                (t.controlCoordinates.zoomed = !0)),
                            setTimeout(function () {
                              t.currentImage &&
                                (t.currentImage.classList.remove('sl-transition'),
                                (t.currentImage.style[t.transitionPrefix + 'transform-origin'] =
                                  null));
                            }, 200),
                            (t.controlCoordinates.capture = !0),
                            !1
                          );
                      });
                  },
                },
                {
                  key: 'getDimensions',
                  value: function (t) {
                    var e = window.getComputedStyle(t),
                      o = t.offsetHeight,
                      i = t.offsetWidth,
                      n = parseFloat(e.borderTopWidth);
                    return {
                      height:
                        o -
                        parseFloat(e.borderBottomWidth) -
                        n -
                        parseFloat(e.paddingTop) -
                        parseFloat(e.paddingBottom),
                      width:
                        i -
                        parseFloat(e.borderLeftWidth) -
                        parseFloat(e.borderRightWidth) -
                        parseFloat(e.paddingLeft) -
                        parseFloat(e.paddingRight),
                    };
                  },
                },
                {
                  key: 'updateHash',
                  value: function () {
                    var t = 'pid=' + (this.currentImageIndex + 1),
                      e = window.location.href.split('#')[0] + '#' + t;
                    (this.hashReseted = !1),
                      this.pushStateSupport
                        ? window.history[this.historyHasChanges ? 'replaceState' : 'pushState'](
                            '',
                            document.title,
                            e,
                          )
                        : this.historyHasChanges
                        ? window.location.replace(e)
                        : (window.location.hash = t),
                      this.historyHasChanges || (this.urlChangedOnce = !0),
                      (this.historyHasChanges = !0);
                  },
                },
                {
                  key: 'resetHash',
                  value: function () {
                    (this.hashReseted = !0),
                      this.urlChangedOnce
                        ? history.back()
                        : this.pushStateSupport
                        ? history.pushState(
                            '',
                            document.title,
                            window.location.pathname + window.location.search,
                          )
                        : (window.location.hash = ''),
                      clearTimeout(this.historyUpdateTimeout);
                  },
                },
                {
                  key: 'updateURL',
                  value: function () {
                    clearTimeout(this.historyUpdateTimeout),
                      this.historyHasChanges
                        ? (this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800))
                        : this.updateHash();
                  },
                },
                {
                  key: 'setCaption',
                  value: function (t, e) {
                    var o = this;
                    this.options.captions &&
                      t &&
                      '' !== t &&
                      void 0 !== t &&
                      (this.hide(this.domNodes.caption),
                      (this.domNodes.caption.style.width = e + 'px'),
                      (this.domNodes.caption.innerHTML = t),
                      this.domNodes.image.appendChild(this.domNodes.caption),
                      setTimeout(function () {
                        o.fadeIn(o.domNodes.caption, o.options.fadeSpeed);
                      }, this.options.captionDelay));
                  },
                },
                {
                  key: 'slide',
                  value: function (t, e) {
                    if (!this.transitionCapable) return (this.domNodes.image.style.left = e);
                    (this.domNodes.image.style[this.transitionPrefix + 'transform'] =
                      'translateX(' + e + ')'),
                      (this.domNodes.image.style[this.transitionPrefix + 'transition'] =
                        this.transitionPrefix + 'transform ' + t + 's linear');
                  },
                },
                {
                  key: 'getRelated',
                  value: function (t) {
                    return t && !1 !== t && 'nofollow' !== t
                      ? Array.from(this.elements).filter(function (e) {
                          return e.getAttribute('rel') === t;
                        })
                      : this.elements;
                  },
                },
                {
                  key: 'openImage',
                  value: function (t) {
                    var e = this;
                    t.dispatchEvent(new Event('show.' + this.eventNamespace)),
                      this.options.disableScroll &&
                        (this.globalScrollbarWidth = this.toggleScrollbar('hide')),
                      this.options.htmlClass &&
                        '' !== this.options.htmlClass &&
                        document.querySelector('html').classList.add(this.options.htmlClass),
                      document.body.appendChild(this.domNodes.wrapper),
                      this.domNodes.wrapper.appendChild(this.domNodes.image),
                      this.options.overlay && document.body.appendChild(this.domNodes.overlay),
                      (this.relatedElements = this.getRelated(t.rel)),
                      this.options.showCounter &&
                        (1 == this.relatedElements.length &&
                        this.domNodes.wrapper.contains(this.domNodes.counter)
                          ? this.domNodes.wrapper.removeChild(this.domNodes.counter)
                          : this.relatedElements.length > 1 &&
                            !this.domNodes.wrapper.contains(this.domNodes.counter) &&
                            this.domNodes.wrapper.appendChild(this.domNodes.counter)),
                      (this.isAnimating = !0),
                      (this.currentImageIndex = this.relatedElements.indexOf(t));
                    var o = t.getAttribute(this.options.sourceAttr);
                    (this.currentImage = document.createElement('img')),
                      (this.currentImage.style.display = 'none'),
                      this.currentImage.setAttribute('src', o),
                      (this.currentImage.dataset.scale = 1),
                      (this.currentImage.dataset.translateX = 0),
                      (this.currentImage.dataset.translateY = 0),
                      -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o),
                      (this.domNodes.image.innerHTML = ''),
                      this.domNodes.image.setAttribute('style', ''),
                      this.domNodes.image.appendChild(this.currentImage),
                      this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
                      this.fadeIn(
                        [
                          this.domNodes.counter,
                          this.domNodes.navigation,
                          this.domNodes.closeButton,
                        ],
                        this.options.fadeSpeed,
                      ),
                      this.show(this.domNodes.spinner),
                      (this.domNodes.counter.querySelector('.sl-current').innerHTML =
                        this.currentImageIndex + 1),
                      (this.domNodes.counter.querySelector('.sl-total').innerHTML =
                        this.relatedElements.length),
                      this.adjustImage(),
                      this.options.preloading && this.preload(),
                      setTimeout(function () {
                        t.dispatchEvent(new Event('shown.' + e.eventNamespace));
                      }, this.options.animationSpeed);
                  },
                },
                {
                  key: 'forceFocus',
                  value: function () {
                    var t = this;
                    this.removeEventListener(document, 'focusin.' + this.eventNamespace),
                      this.addEventListener(
                        document,
                        'focusin.' + this.eventNamespace,
                        function (e) {
                          document === e.target ||
                            t.domNodes.wrapper === e.target ||
                            t.domNodes.wrapper.contains(e.target) ||
                            t.domNodes.wrapper.focus();
                        },
                      );
                  },
                },
                {
                  key: 'addEventListener',
                  value: function (t, i, n, s) {
                    (t = this.wrap(t)), (i = this.wrap(i));
                    var a,
                      r = o(t);
                    try {
                      for (r.s(); !(a = r.n()).done; ) {
                        var l = a.value;
                        l.namespaces || (l.namespaces = {});
                        var d,
                          c = o(i);
                        try {
                          for (c.s(); !(d = c.n()).done; ) {
                            var h = d.value,
                              m = s || !1;
                            ['touchstart', 'touchmove'].indexOf(h.split('.')[0]) >= 0 &&
                              this.isPassiveEventsSupported &&
                              ('object' === e(m) ? (m.passive = !0) : (m = { passive: !0 })),
                              (l.namespaces[h] = n),
                              l.addEventListener(h.split('.')[0], n, m);
                          }
                        } catch (f) {
                          c.e(f);
                        } finally {
                          c.f();
                        }
                      }
                    } catch (f) {
                      r.e(f);
                    } finally {
                      r.f();
                    }
                  },
                },
                {
                  key: 'removeEventListener',
                  value: function (t, e) {
                    (t = this.wrap(t)), (e = this.wrap(e));
                    var i,
                      n = o(t);
                    try {
                      for (n.s(); !(i = n.n()).done; ) {
                        var s,
                          a = i.value,
                          r = o(e);
                        try {
                          for (r.s(); !(s = r.n()).done; ) {
                            var l = s.value;
                            a.namespaces &&
                              a.namespaces[l] &&
                              (a.removeEventListener(l.split('.')[0], a.namespaces[l]),
                              delete a.namespaces[l]);
                          }
                        } catch (d) {
                          r.e(d);
                        } finally {
                          r.f();
                        }
                      }
                    } catch (d) {
                      n.e(d);
                    } finally {
                      n.f();
                    }
                  },
                },
                {
                  key: 'fadeOut',
                  value: function (t, e, i) {
                    var n,
                      s = this,
                      a = o((t = this.wrap(t)));
                    try {
                      for (a.s(); !(n = a.n()).done; ) {
                        var r = n.value;
                        r.style.opacity =
                          parseFloat(r) || window.getComputedStyle(r).getPropertyValue('opacity');
                      }
                    } catch (d) {
                      a.e(d);
                    } finally {
                      a.f();
                    }
                    this.isFadeIn = !1;
                    var l = 16.66666 / (e || this.options.fadeSpeed);
                    !(function e() {
                      var n = parseFloat(t[0].style.opacity);
                      if ((n -= l) < 0) {
                        var a,
                          r = o(t);
                        try {
                          for (r.s(); !(a = r.n()).done; ) {
                            var c = a.value;
                            (c.style.display = 'none'), (c.style.opacity = 1);
                          }
                        } catch (d) {
                          r.e(d);
                        } finally {
                          r.f();
                        }
                        i && i.call(s, t);
                      } else {
                        var h,
                          m = o(t);
                        try {
                          for (m.s(); !(h = m.n()).done; ) h.value.style.opacity = n;
                        } catch (d) {
                          m.e(d);
                        } finally {
                          m.f();
                        }
                        requestAnimationFrame(e);
                      }
                    })();
                  },
                },
                {
                  key: 'fadeIn',
                  value: function (t, e, i, n) {
                    var s,
                      a = this,
                      r = o((t = this.wrap(t)));
                    try {
                      for (r.s(); !(s = r.n()).done; ) {
                        var l = s.value;
                        (l.style.opacity = 0), (l.style.display = n || 'block');
                      }
                    } catch (h) {
                      r.e(h);
                    } finally {
                      r.f();
                    }
                    this.isFadeIn = !0;
                    var d = parseFloat(t[0].dataset.opacityTarget || 1),
                      c = (16.66666 * d) / (e || this.options.fadeSpeed);
                    !(function e() {
                      var n = parseFloat(t[0].style.opacity);
                      if ((n += c) > d) {
                        var s,
                          r = o(t);
                        try {
                          for (r.s(); !(s = r.n()).done; ) s.value.style.opacity = d;
                        } catch (h) {
                          r.e(h);
                        } finally {
                          r.f();
                        }
                        i && i.call(a, t);
                      } else {
                        var l,
                          m = o(t);
                        try {
                          for (m.s(); !(l = m.n()).done; ) l.value.style.opacity = n;
                        } catch (h) {
                          m.e(h);
                        } finally {
                          m.f();
                        }
                        if (!a.isFadeIn) return;
                        requestAnimationFrame(e);
                      }
                    })();
                  },
                },
                {
                  key: 'hide',
                  value: function (t) {
                    var e,
                      i = o((t = this.wrap(t)));
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var n = e.value;
                        'none' != n.style.display && (n.dataset.initialDisplay = n.style.display),
                          (n.style.display = 'none');
                      }
                    } catch (s) {
                      i.e(s);
                    } finally {
                      i.f();
                    }
                  },
                },
                {
                  key: 'show',
                  value: function (t, e) {
                    var i,
                      n = o((t = this.wrap(t)));
                    try {
                      for (n.s(); !(i = n.n()).done; ) {
                        var s = i.value;
                        s.style.display = s.dataset.initialDisplay || e || 'block';
                      }
                    } catch (a) {
                      n.e(a);
                    } finally {
                      n.f();
                    }
                  },
                },
                {
                  key: 'wrap',
                  value: function (t) {
                    return 'function' == typeof t[Symbol.iterator] && 'string' != typeof t
                      ? t
                      : [t];
                  },
                },
                {
                  key: 'on',
                  value: function (t, e) {
                    t = this.wrap(t);
                    var i,
                      n = o(this.elements);
                    try {
                      for (n.s(); !(i = n.n()).done; ) {
                        var s = i.value;
                        s.fullyNamespacedEvents || (s.fullyNamespacedEvents = {});
                        var a,
                          r = o(t);
                        try {
                          for (r.s(); !(a = r.n()).done; ) {
                            var l = a.value;
                            (s.fullyNamespacedEvents[l] = e), s.addEventListener(l, e);
                          }
                        } catch (d) {
                          r.e(d);
                        } finally {
                          r.f();
                        }
                      }
                    } catch (d) {
                      n.e(d);
                    } finally {
                      n.f();
                    }
                    return this;
                  },
                },
                {
                  key: 'off',
                  value: function (t) {
                    t = this.wrap(t);
                    var e,
                      i = o(this.elements);
                    try {
                      for (i.s(); !(e = i.n()).done; ) {
                        var n,
                          s = e.value,
                          a = o(t);
                        try {
                          for (a.s(); !(n = a.n()).done; ) {
                            var r = n.value;
                            void 0 !== s.fullyNamespacedEvents &&
                              r in s.fullyNamespacedEvents &&
                              s.removeEventListener(r, s.fullyNamespacedEvents[r]);
                          }
                        } catch (l) {
                          a.e(l);
                        } finally {
                          a.f();
                        }
                      }
                    } catch (l) {
                      i.e(l);
                    } finally {
                      i.f();
                    }
                    return this;
                  },
                },
                {
                  key: 'open',
                  value: function (t) {
                    (t = t || this.elements[0]),
                      'undefined' != typeof jQuery && t instanceof jQuery && (t = t.get(0)),
                      (this.initialImageIndex = this.elements.indexOf(t)),
                      this.initialImageIndex > -1 && this.openImage(t);
                  },
                },
                {
                  key: 'next',
                  value: function () {
                    this.loadImage(1);
                  },
                },
                {
                  key: 'prev',
                  value: function () {
                    this.loadImage(-1);
                  },
                },
                {
                  key: 'getLighboxData',
                  value: function () {
                    return {
                      currentImageIndex: this.currentImageIndex,
                      currentImage: this.currentImage,
                      globalScrollbarWidth: this.globalScrollbarWidth,
                    };
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    this.off([
                      'close.' + this.eventNamespace,
                      'closed.' + this.eventNamespace,
                      'nextImageLoaded.' + this.eventNamespace,
                      'prevImageLoaded.' + this.eventNamespace,
                      'change.' + this.eventNamespace,
                      'nextDone.' + this.eventNamespace,
                      'prevDone.' + this.eventNamespace,
                      'error.' + this.eventNamespace,
                      'changed.' + this.eventNamespace,
                      'next.' + this.eventNamespace,
                      'prev.' + this.eventNamespace,
                      'show.' + this.eventNamespace,
                      'shown.' + this.eventNamespace,
                    ]),
                      this.removeEventListener(this.elements, 'click.' + this.eventNamespace),
                      this.removeEventListener(document, 'focusin.' + this.eventNamespace),
                      this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace),
                      this.removeEventListener(document.body, 'keyup.' + this.eventNamespace),
                      this.removeEventListener(
                        this.domNodes.navigation.getElementsByTagName('button'),
                        'click.' + this.eventNamespace,
                      ),
                      this.removeEventListener(
                        this.domNodes.closeButton,
                        'click.' + this.eventNamespace,
                      ),
                      this.removeEventListener(window, 'resize.' + this.eventNamespace),
                      this.removeEventListener(window, 'hashchange.' + this.eventNamespace),
                      this.close(),
                      this.isOpen &&
                        (document.body.removeChild(this.domNodes.wrapper),
                        document.body.removeChild(this.domNodes.overlay)),
                      (this.elements = null);
                  },
                },
                {
                  key: 'refresh',
                  value: function () {
                    if (!this.initialSelector)
                      throw 'refreshing only works when you initialize using a selector!';
                    var t = this.options,
                      e = this.initialSelector;
                    return this.destroy(), this.constructor(e, t), this;
                  },
                },
              ]),
              t
            );
          })(),
          c = d;
        (exports.default = c), (t.SimpleLightbox = d);
      },
      {},
    ],
    kz9M: [function (require, module, exports) {}, {}],
    TfQ5: [
      function (require, module, exports) {
        'use strict';
        var e = require('./gallery-items'),
          l = r(require('simplelightbox'));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        require('simplelightbox/dist/simple-lightbox.min.css'), console.log(e.galleryItems);
        const a = document.querySelector('.gallery'),
          i = t(e.galleryItems);
        function t(e) {
          return e
            .map(
              ({ preview: e, original: l, description: r }) =>
                `<a class="gallery__item" href="${l}">\n  <img class="gallery__image" src="${e}" alt="${r}" />\n</a>\n    `,
            )
            .join('');
        }
        a.insertAdjacentHTML('beforeend', i);
        var s = new l.default('.gallery a', { captionsData: 'alt', captionDelay: 250, close: !1 });
      },
      {
        './gallery-items': 'q5Rn',
        simplelightbox: 'yx6k',
        'simplelightbox/dist/simple-lightbox.min.css': 'kz9M',
      },
    ],
  },
  {},
  ['TfQ5'],
  null,
);
//# sourceMappingURL=/goit-js-hw-08/01-gallery.44fefb7c.js.map
