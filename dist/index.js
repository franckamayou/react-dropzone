!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t(require('react'), require('prop-types')))
    : typeof define === 'function' && define.amd
      ? define(['react', 'prop-types'], t)
      : typeof exports === 'object'
        ? (exports.Dropzone = t(require('react'), require('prop-types')))
        : (e.Dropzone = t(e.react, e['prop-types']))
})(typeof self !== 'undefined' ? self : this, (e, t) =>
  (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports
      const o = (n[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
    }
    var n = {}
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r })
      }),
      (t.n = function(e) {
        const n =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return t.d(n, 'a', n), n
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (t.p = ''),
      t((t.s = 0))
    )
  })([
    function(e, t, n) {
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function o(e, t) {
        const n = {}
        for (const r in e)
          t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
        return n
      }
      function i(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
          return n
        }
        return Array.from(e)
      }
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
      }
      function c(e, t) {
        if (typeof t !== 'function' && t !== null)
          throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`)
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      let l =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t]
              for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        u = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        p = n(1),
        f = r(p),
        d = n(2),
        h = r(d),
        v = n(3),
        g = n(5),
        m = r(g),
        y = (function(e) {
          function t(e, n) {
            a(this, t)
            const r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
            return (
              (r.renderChildren = function(e, t, n, o) {
                return typeof e === 'function'
                  ? e(l({}, r.state, { isDragActive: t, isDragAccept: n, isDragReject: o }))
                  : e
              }),
              (r.composeHandlers = r.composeHandlers.bind(r)),
              (r.onClick = r.onClick.bind(r)),
              (r.onDocumentDrop = r.onDocumentDrop.bind(r)),
              (r.onDragEnter = r.onDragEnter.bind(r)),
              (r.onDragLeave = r.onDragLeave.bind(r)),
              (r.onDragOver = r.onDragOver.bind(r)),
              (r.onDragStart = r.onDragStart.bind(r)),
              (r.onDrop = r.onDrop.bind(r)),
              (r.onFileDialogCancel = r.onFileDialogCancel.bind(r)),
              (r.onInputElementClick = r.onInputElementClick.bind(r)),
              (r.setRef = r.setRef.bind(r)),
              (r.setRefs = r.setRefs.bind(r)),
              (r.isFileDialogActive = !1),
              (r.state = { draggedFiles: [], acceptedFiles: [], rejectedFiles: [] }),
              r
            )
          }
          return (
            c(t, e),
            u(t, [
              {
                key: 'componentDidMount',
                value() {
                  const e = this.props.preventDropOnDocument
                  ;(this.dragTargets = []),
                    e &&
                      (document.addEventListener('dragover', v.onDocumentDragOver, !1),
                      document.addEventListener('drop', this.onDocumentDrop, !1)),
                    this.fileInputEl.addEventListener('click', this.onInputElementClick, !1),
                    (document.body.onfocus = this.onFileDialogCancel)
                }
              },
              {
                key: 'componentWillUnmount',
                value() {
                  this.props.preventDropOnDocument &&
                    (document.removeEventListener('dragover', v.onDocumentDragOver),
                    document.removeEventListener('drop', this.onDocumentDrop)),
                    this.fileInputEl != null &&
                      this.fileInputEl.removeEventListener('click', this.onInputElementClick, !1),
                    document != null && (document.body.onfocus = null)
                }
              },
              {
                key: 'composeHandlers',
                value(e) {
                  return this.props.disabled ? null : e
                }
              },
              {
                key: 'onDocumentDrop',
                value(e) {
                  ;(this.node && this.node.contains(e.target)) ||
                    (e.preventDefault(), (this.dragTargets = []))
                }
              },
              {
                key: 'onDragStart',
                value(e) {
                  this.props.onDragStart && this.props.onDragStart.call(this, e)
                }
              },
              {
                key: 'onDragEnter',
                value(e) {
                  e.preventDefault(),
                    this.dragTargets.indexOf(e.target) === -1 && this.dragTargets.push(e.target),
                    this.setState({
                      isDragActive: !0,
                      draggedFiles: (0, v.getDataTransferItems)(e)
                    }),
                    this.props.onDragEnter && this.props.onDragEnter.call(this, e)
                }
              },
              {
                key: 'onDragOver',
                value(e) {
                  e.preventDefault(), e.stopPropagation()
                  try {
                    e.dataTransfer.dropEffect = this.isFileDialogActive ? 'none' : 'copy'
                  } catch (e) {}
                  return this.props.onDragOver && this.props.onDragOver.call(this, e), !1
                }
              },
              {
                key: 'onDragLeave',
                value(e) {
                  const t = this
                  e.preventDefault(),
                    (this.dragTargets = this.dragTargets.filter(
                      n => n !== e.target && t.node.contains(n)
                    )),
                    this.dragTargets.length > 0 ||
                      (this.setState({ isDragActive: !1, draggedFiles: [] }),
                      this.props.onDragLeave && this.props.onDragLeave.call(this, e))
                }
              },
              {
                key: 'onDrop',
                value(e) {
                  let t = this,
                    n = this.props,
                    r = n.onDrop,
                    o = n.onDropAccepted,
                    a = n.onDropRejected,
                    s = n.multiple,
                    c = n.disablePreview,
                    l = n.accept,
                    u = (0, v.getDataTransferItems)(e),
                    p = [],
                    f = []
                  e.preventDefault(),
                    (this.dragTargets = []),
                    (this.isFileDialogActive = !1),
                    u.forEach(e => {
                      if (!c)
                        try {
                          e.preview = window.URL.createObjectURL(e)
                        } catch (e) {}
                      ;(0, v.fileAccepted)(e, l) &&
                      (0, v.fileMatchSize)(e, t.props.maxSize, t.props.minSize)
                        ? p.push(e)
                        : f.push(e)
                    }),
                    s || f.push(...i(p.splice(1))),
                    r && r.call(this, p, f, e),
                    f.length > 0 && a && a.call(this, f, e),
                    p.length > 0 && o && o.call(this, p, e),
                    (this.draggedFiles = null),
                    this.setState({
                      isDragActive: !1,
                      draggedFiles: [],
                      acceptedFiles: p,
                      rejectedFiles: f
                    })
                }
              },
              {
                key: 'onClick',
                value(e) {
                  let t = this.props,
                    n = t.onClick
                  t.disableClick ||
                    (e.stopPropagation(), n && n.call(this, e), setTimeout(this.open.bind(this), 0))
                }
              },
              {
                key: 'onInputElementClick',
                value(e) {
                  e.stopPropagation(),
                    this.props.inputProps &&
                      this.props.inputProps.onClick &&
                      this.props.inputProps.onClick()
                }
              },
              {
                key: 'onFileDialogCancel',
                value() {
                  let e = this,
                    t = this.props.onFileDialogCancel
                  this.isFileDialogActive &&
                    setTimeout(() => {
                      e.fileInputEl.files.length || (e.isFileDialogActive = !1),
                        typeof t === 'function' && t()
                    }, 300)
                }
              },
              {
                key: 'setRef',
                value(e) {
                  this.node = e
                }
              },
              {
                key: 'setRefs',
                value(e) {
                  this.fileInputEl = e
                }
              },
              {
                key: 'open',
                value() {
                  ;(this.isFileDialogActive = !0),
                    (this.fileInputEl.value = null),
                    this.fileInputEl.click()
                }
              },
              {
                key: 'render',
                value() {
                  let e = this.props,
                    t = e.accept,
                    n = e.acceptClassName,
                    r = e.activeClassName,
                    i = e.children,
                    a = e.disabled,
                    s = e.disabledClassName,
                    c = e.inputProps,
                    u = e.multiple,
                    p = e.name,
                    d = e.rejectClassName,
                    h = o(e, [
                      'accept',
                      'acceptClassName',
                      'activeClassName',
                      'children',
                      'disabled',
                      'disabledClassName',
                      'inputProps',
                      'multiple',
                      'name',
                      'rejectClassName'
                    ]),
                    g = h.acceptStyle,
                    y = h.activeStyle,
                    D = h.className,
                    b = void 0 === D ? '' : D,
                    x = h.disabledStyle,
                    S = h.rejectStyle,
                    C = h.style,
                    O = o(h, [
                      'acceptStyle',
                      'activeStyle',
                      'className',
                      'disabledStyle',
                      'rejectStyle',
                      'style'
                    ]),
                    j = this.state,
                    k = j.isDragActive,
                    E = j.draggedFiles,
                    w = E.length,
                    P = u || w <= 1,
                    F = w > 0 && (0, v.allFilesAccepted)(E, this.props.accept),
                    _ = w > 0 && (!F || !P),
                    A = !(b || C || y || g || S || x)
                  k && r && (b += ` ${r}`),
                    F && n && (b += ` ${n}`),
                    _ && d && (b += ` ${d}`),
                    a && s && (b += ` ${s}`),
                    A &&
                      ((C = m.default.default),
                      (y = m.default.active),
                      (g = C.active),
                      (S = m.default.rejected),
                      (x = m.default.disabled))
                  let T = l({}, C)
                  y && k && (T = l({}, C, y)),
                    g && F && (T = l({}, T, g)),
                    S && _ && (T = l({}, T, S)),
                    x && a && (T = l({}, C, x))
                  const M = {
                    accept: t,
                    disabled: a,
                    type: 'file',
                    style: { display: 'none' },
                    multiple: v.supportMultiple && u,
                    ref: this.setRefs,
                    onChange: this.onDrop,
                    autoComplete: 'off'
                  }
                  p && p.length && (M.name = p)
                  const N = (O.acceptedFiles,
                  O.preventDropOnDocument,
                  O.disablePreview,
                  O.disableClick,
                  O.onDropAccepted,
                  O.onDropRejected,
                  O.onFileDialogCancel,
                  O.maxSize,
                  O.minSize,
                  o(O, [
                    'acceptedFiles',
                    'preventDropOnDocument',
                    'disablePreview',
                    'disableClick',
                    'onDropAccepted',
                    'onDropRejected',
                    'onFileDialogCancel',
                    'maxSize',
                    'minSize'
                  ]))
                  return f.default.createElement(
                    'div',
                    l({ className: b, style: T }, N, {
                      onClick: this.composeHandlers(this.onClick),
                      onDragStart: this.composeHandlers(this.onDragStart),
                      onDragEnter: this.composeHandlers(this.onDragEnter),
                      onDragOver: this.composeHandlers(this.onDragOver),
                      onDragLeave: this.composeHandlers(this.onDragLeave),
                      onDrop: this.composeHandlers(this.onDrop),
                      ref: this.setRef,
                      'aria-disabled': a
                    }),
                    this.renderChildren(i, k, F, _),
                    f.default.createElement('input', l({}, c, M))
                  )
                }
              }
            ]),
            t
          )
        })(f.default.Component)
      ;(t.default = y),
        (y.propTypes = {
          accept: h.default.string,
          children: h.default.oneOfType([h.default.node, h.default.func]),
          disableClick: h.default.bool,
          disabled: h.default.bool,
          disablePreview: h.default.bool,
          preventDropOnDocument: h.default.bool,
          inputProps: h.default.object,
          multiple: h.default.bool,
          name: h.default.string,
          maxSize: h.default.number,
          minSize: h.default.number,
          className: h.default.string,
          activeClassName: h.default.string,
          acceptClassName: h.default.string,
          rejectClassName: h.default.string,
          disabledClassName: h.default.string,
          style: h.default.object,
          activeStyle: h.default.object,
          acceptStyle: h.default.object,
          rejectStyle: h.default.object,
          disabledStyle: h.default.object,
          onClick: h.default.func,
          onDrop: h.default.func,
          onDropAccepted: h.default.func,
          onDropRejected: h.default.func,
          onDragStart: h.default.func,
          onDragEnter: h.default.func,
          onDragOver: h.default.func,
          onDragLeave: h.default.func,
          onFileDialogCancel: h.default.func
        }),
        (y.defaultProps = {
          preventDropOnDocument: !0,
          disabled: !1,
          disablePreview: !1,
          disableClick: !1,
          multiple: !0,
          maxSize: 1 / 0,
          minSize: 0
        }),
        (e.exports = t.default)
    },
    function(t, n) {
      t.exports = e
    },
    function(e, n) {
      e.exports = t
    },
    function(e, t, n) {
      function r(e) {
        let t = []
        if (e.dataTransfer) {
          const n = e.dataTransfer
          n.files && n.files.length ? (t = n.files) : n.items && n.items.length && (t = n.items)
        } else e.target && e.target.files && (t = e.target.files)
        return Array.prototype.slice.call(t)
      }
      function o(e, t) {
        return e.type === 'application/x-moz-file' || (0, l.default)(e, t)
      }
      function i(e, t, n) {
        return e.size <= t && e.size >= n
      }
      function a(e, t) {
        return e.every(e => o(e, t))
      }
      function s(e) {
        e.preventDefault()
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.supportMultiple = void 0),
        (t.getDataTransferItems = r),
        (t.fileAccepted = o),
        (t.fileMatchSize = i),
        (t.allFilesAccepted = a),
        (t.onDocumentDragOver = s)
      var c = n(4),
        l = (function(e) {
          return e && e.__esModule ? e : { default: e }
        })(c)
      t.supportMultiple =
        typeof document === 'undefined' ||
        !document ||
        !document.createElement ||
        'multiple' in document.createElement('input')
    },
    function(e, t) {
      e.exports = (function(e) {
        function t(r) {
          if (n[r]) return n[r].exports
          const o = (n[r] = { exports: {}, id: r, loaded: !1 })
          return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        }
        var n = {}
        return (t.m = e), (t.c = n), (t.p = ''), t(0)
      })([
        function(e, t, n) {
          ;(t.__esModule = !0),
            n(8),
            n(9),
            (t.default = function(e, t) {
              if (e && t) {
                const n = (function() {
                  let n = Array.isArray(t) ? t : t.split(','),
                    r = e.name || '',
                    o = e.type || '',
                    i = o.replace(/\/.*$/, '')
                  return {
                    v: n.some(e => {
                      const t = e.trim()
                      return t.charAt(0) === '.'
                        ? r.toLowerCase().endsWith(t.toLowerCase())
                        : /\/\*$/.test(t) ? i === t.replace(/\/.*$/, '') : o === t
                    })
                  }
                })()
                if (typeof n === 'object') return n.v
              }
              return !0
            }),
            (e.exports = t.default)
        },
        function(e, t) {
          const n = (e.exports = { version: '1.2.2' })
          typeof __e === 'number' && (__e = n)
        },
        function(e, t) {
          const n = (e.exports =
            typeof window !== 'undefined' && window.Math == Math
              ? window
              : typeof self !== 'undefined' && self.Math == Math ? self : Function('return this')())
          typeof __g === 'number' && (__g = n)
        },
        function(e, t, n) {
          var r = n(2),
            o = n(1),
            i = n(4),
            a = n(19),
            s = 'prototype',
            c = function(e, t) {
              return function() {
                return e.apply(t, arguments)
              }
            },
            l = function(e, t, n) {
              let u,
                p,
                f,
                d,
                h = e & l.G,
                v = e & l.P,
                g = h ? r : e & l.S ? r[t] || (r[t] = {}) : (r[t] || {})[s],
                m = h ? o : o[t] || (o[t] = {})
              h && (n = t)
              for (u in n)
                (p = !(e & l.F) && g && u in g),
                  (f = (p ? g : n)[u]),
                  (d =
                    e & l.B && p
                      ? c(f, r)
                      : v && typeof f === 'function' ? c(Function.call, f) : f),
                  g && !p && a(g, u, f),
                  m[u] != f && i(m, u, d),
                  v && ((m[s] || (m[s] = {}))[u] = f)
            }
          ;(r.core = o),
            (l.F = 1),
            (l.G = 2),
            (l.S = 4),
            (l.P = 8),
            (l.B = 16),
            (l.W = 32),
            (e.exports = l)
        },
        function(e, t, n) {
          let r = n(5),
            o = n(18)
          e.exports = n(22)
            ? function(e, t, n) {
                return r.setDesc(e, t, o(1, n))
              }
            : function(e, t, n) {
                return (e[t] = n), e
              }
        },
        function(e, t) {
          const n = Object
          e.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
          }
        },
        function(e, t) {
          let n = 0,
            r = Math.random()
          e.exports = function(e) {
            return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36))
          }
        },
        function(e, t, n) {
          let r = n(20)('wks'),
            o = n(2).Symbol
          e.exports = function(e) {
            return r[e] || (r[e] = (o && o[e]) || (o || n(6))(`Symbol.${e}`))
          }
        },
        function(e, t, n) {
          n(26), (e.exports = n(1).Array.some)
        },
        function(e, t, n) {
          n(25), (e.exports = n(1).String.endsWith)
        },
        function(e, t) {
          e.exports = function(e) {
            if (typeof e !== 'function') throw TypeError(`${e} is not a function!`)
            return e
          }
        },
        function(e, t) {
          const n = {}.toString
          e.exports = function(e) {
            return n.call(e).slice(8, -1)
          }
        },
        function(e, t, n) {
          const r = n(10)
          e.exports = function(e, t, n) {
            if ((r(e), void 0 === t)) return e
            switch (n) {
              case 1:
                return function(n) {
                  return e.call(t, n)
                }
              case 2:
                return function(n, r) {
                  return e.call(t, n, r)
                }
              case 3:
                return function(n, r, o) {
                  return e.call(t, n, r, o)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          }
        },
        function(e, t) {
          e.exports = function(e) {
            if (void 0 == e) throw TypeError(`Can't call method on  ${e}`)
            return e
          }
        },
        function(e, t, n) {
          e.exports = function(e) {
            const t = /./
            try {
              '/./'[e](t)
            } catch (r) {
              try {
                return (t[n(7)('match')] = !1), !'/./'[e](t)
              } catch (e) {}
            }
            return !0
          }
        },
        function(e, t) {
          e.exports = function(e) {
            try {
              return !!e()
            } catch (e) {
              return !0
            }
          }
        },
        function(e, t) {
          e.exports = function(e) {
            return typeof e === 'object' ? e !== null : typeof e === 'function'
          }
        },
        function(e, t, n) {
          let r = n(16),
            o = n(11),
            i = n(7)('match')
          e.exports = function(e) {
            let t
            return r(e) && (void 0 !== (t = e[i]) ? !!t : o(e) == 'RegExp')
          }
        },
        function(e, t) {
          e.exports = function(e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
          }
        },
        function(e, t, n) {
          let r = n(2),
            o = n(4),
            i = n(6)('src'),
            a = 'toString',
            s = Function[a],
            c = `${s}`.split(a)
          ;(n(1).inspectSource = function(e) {
            return s.call(e)
          }),
            (e.exports = function(e, t, n, a) {
              typeof n === 'function' &&
                (o(n, i, e[t] ? `${e[t]}` : c.join(String(t))), 'name' in n || (n.name = t)),
                e === r ? (e[t] = n) : (a || delete e[t], o(e, t, n))
            })(Function.prototype, a, function() {
              return (typeof this === 'function' && this[i]) || s.call(this)
            })
        },
        function(e, t, n) {
          let r = n(2),
            o = '__core-js_shared__',
            i = r[o] || (r[o] = {})
          e.exports = function(e) {
            return i[e] || (i[e] = {})
          }
        },
        function(e, t, n) {
          let r = n(17),
            o = n(13)
          e.exports = function(e, t, n) {
            if (r(t)) throw TypeError(`String#${n} doesn't accept regex!`)
            return String(o(e))
          }
        },
        function(e, t, n) {
          e.exports = !n(15)(
            () =>
              Object.defineProperty({}, 'a', {
                get() {
                  return 7
                }
              }).a != 7
          )
        },
        function(e, t) {
          let n = Math.ceil,
            r = Math.floor
          e.exports = function(e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e)
          }
        },
        function(e, t, n) {
          let r = n(23),
            o = Math.min
          e.exports = function(e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
          }
        },
        function(e, t, n) {
          let r = n(3),
            o = n(24),
            i = n(21),
            a = 'endsWith',
            s = ''[a]
          r(r.P + r.F * n(14)(a), 'String', {
            endsWith(e) {
              let t = i(this, e, a),
                n = arguments,
                r = n.length > 1 ? n[1] : void 0,
                c = o(t.length),
                l = void 0 === r ? c : Math.min(o(r), c),
                u = String(e)
              return s ? s.call(t, u, l) : t.slice(l - u.length, l) === u
            }
          })
        },
        function(e, t, n) {
          let r = n(5),
            o = n(3),
            i = n(1).Array || Array,
            a = {},
            s = function(e, t) {
              r.each.call(e.split(','), e => {
                void 0 == t && e in i
                  ? (a[e] = i[e])
                  : e in [] && (a[e] = n(12)(Function.call, [][e], t))
              })
            }
          s('pop,reverse,shift,keys,values,entries', 1),
            s('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3),
            s(
              'join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill'
            ),
            o(o.S, 'Array', a)
        }
      ])
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          rejected: { borderStyle: 'solid', borderColor: '#c66', backgroundColor: '#eee' },
          disabled: { opacity: 0.5 },
          active: { borderStyle: 'solid', borderColor: '#6c6', backgroundColor: '#eee' },
          default: {
            width: 200,
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
          }
        }),
        (e.exports = t.default)
    }
  ])
)
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg4ODYwNGRhZjZkNjMxYmE4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXR0ci1hY2NlcHQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwidGhpcyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18iLCJtb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaW5zdGFsbGVkTW9kdWxlcyIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiZGVmYXVsdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImtleXMiLCJ0YXJnZXQiLCJpbmRleE9mIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyMiIsImxlbmd0aCIsImZyb20iLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ3cml0YWJsZSIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3JlYWN0IiwiX3JlYWN0MiIsIl9wcm9wVHlwZXMiLCJfcHJvcFR5cGVzMiIsIl91dGlscyIsIl9zdHlsZXMiLCJfc3R5bGVzMiIsIkRyb3B6b25lIiwiX1JlYWN0JENvbXBvbmVudCIsImNvbnRleHQiLCJfdGhpcyIsImdldFByb3RvdHlwZU9mIiwicmVuZGVyQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImlzRHJhZ0FjdGl2ZSIsImlzRHJhZ0FjY2VwdCIsImlzRHJhZ1JlamVjdCIsInN0YXRlIiwiY29tcG9zZUhhbmRsZXJzIiwiYmluZCIsIm9uQ2xpY2siLCJvbkRvY3VtZW50RHJvcCIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25EcmFnU3RhcnQiLCJvbkRyb3AiLCJvbkZpbGVEaWFsb2dDYW5jZWwiLCJvbklucHV0RWxlbWVudENsaWNrIiwic2V0UmVmIiwic2V0UmVmcyIsImlzRmlsZURpYWxvZ0FjdGl2ZSIsImRyYWdnZWRGaWxlcyIsImFjY2VwdGVkRmlsZXMiLCJyZWplY3RlZEZpbGVzIiwicHJldmVudERyb3BPbkRvY3VtZW50IiwiZHJhZ1RhcmdldHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRvY3VtZW50RHJhZ092ZXIiLCJmaWxlSW5wdXRFbCIsImJvZHkiLCJvbmZvY3VzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJkaXNhYmxlZCIsImV2dCIsIm5vZGUiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInNldFN0YXRlIiwiZ2V0RGF0YVRyYW5zZmVySXRlbXMiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhVHJhbnNmZXIiLCJkcm9wRWZmZWN0IiwiZXJyIiwiX3RoaXMyIiwiZmlsdGVyIiwiZWwiLCJfdGhpczMiLCJfcHJvcHMiLCJvbkRyb3BBY2NlcHRlZCIsIm9uRHJvcFJlamVjdGVkIiwibXVsdGlwbGUiLCJkaXNhYmxlUHJldmlldyIsImFjY2VwdCIsImZpbGVMaXN0IiwiZm9yRWFjaCIsImZpbGUiLCJwcmV2aWV3Iiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZUFjY2VwdGVkIiwiZmlsZU1hdGNoU2l6ZSIsIm1heFNpemUiLCJtaW5TaXplIiwiYXBwbHkiLCJzcGxpY2UiLCJfcHJvcHMyIiwiZGlzYWJsZUNsaWNrIiwic2V0VGltZW91dCIsIm9wZW4iLCJpbnB1dFByb3BzIiwiX3RoaXM0IiwiZmlsZXMiLCJyZWYiLCJjbGljayIsIl9wcm9wczMiLCJhY2NlcHRDbGFzc05hbWUiLCJhY3RpdmVDbGFzc05hbWUiLCJkaXNhYmxlZENsYXNzTmFtZSIsInJlamVjdENsYXNzTmFtZSIsInJlc3QiLCJhY2NlcHRTdHlsZSIsImFjdGl2ZVN0eWxlIiwiX3Jlc3QkY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiZGlzYWJsZWRTdHlsZSIsInJlamVjdFN0eWxlIiwic3R5bGUiLCJfc3RhdGUiLCJmaWxlc0NvdW50IiwiaXNNdWx0aXBsZUFsbG93ZWQiLCJhbGxGaWxlc0FjY2VwdGVkIiwibm9TdHlsZXMiLCJhY3RpdmUiLCJyZWplY3RlZCIsImFwcGxpZWRTdHlsZSIsImlucHV0QXR0cmlidXRlcyIsInR5cGUiLCJkaXNwbGF5Iiwic3VwcG9ydE11bHRpcGxlIiwib25DaGFuZ2UiLCJhdXRvQ29tcGxldGUiLCJkaXZQcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhcmlhLWRpc2FibGVkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZnVuYyIsImJvb2wiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJJbmZpbml0eSIsImV2ZW50IiwiZGF0YVRyYW5zZmVySXRlbXNMaXN0IiwiZHQiLCJpdGVtcyIsInNsaWNlIiwiX2F0dHJBY2NlcHQyIiwic2l6ZSIsImV2ZXJ5IiwiX2F0dHJBY2NlcHQiLCJ0IiwiZSIsInIiLCJpZCIsImxvYWRlZCIsInNwbGl0IiwicmVwbGFjZSIsInYiLCJzb21lIiwidHJpbSIsImNoYXJBdCIsInRvTG93ZXJDYXNlIiwiZW5kc1dpdGgiLCJ0ZXN0IiwidmVyc2lvbiIsIl9fZSIsIk1hdGgiLCJGdW5jdGlvbiIsIl9fZyIsInUiLCJmIiwiYSIsInkiLCJHIiwiaCIsIlAiLCJTIiwieCIsIkYiLCJCIiwiY29yZSIsIlciLCJzZXREZXNjIiwiZ2V0UHJvdG8iLCJpc0VudW0iLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldERlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXREZXNjcyIsImdldEtleXMiLCJnZXROYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZWFjaCIsInJhbmRvbSIsImNvbmNhdCIsInRvU3RyaW5nIiwiU3ltYm9sIiwiU3RyaW5nIiwiaW5zcGVjdFNvdXJjZSIsImpvaW4iLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsIm1pbiIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBQUEsRUFBQUMsR0FD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QUFBakQsRUFBaUgsT0FBQXBNLEtBQUFGLEtBQUFZLEVBQUErTSxFQUFBeE0sR0FBQVAsRUFBQXFMLE1BQUE5SyxFQUFBd00sRUFBQTNMLE9BQUFiLEtBQUF3TSxNQUFvRCxTQUFBckIsRUFBQTFMLEVBQUE0TCxHQUFpQixHQUFBRCxHQUFBQyxFQUFBLEdBQUFsTSxFQUFBa00sRUFBQSxHQUFBMU0sRUFBQTBNLEVBQUEsR0FBQTNLLGFBQUE0TCxLQUEwQ3ZOLEVBQUEsU0FBQW9NLEVBQUExTCxHQUFpQjJMLEVBQUEyQyxLQUFBbFAsS0FBQXNNLEVBQUFLLE1BQUEsY0FBQUwsT0FBcUMsSUFBQTFMLEdBQUEwTCxJQUFBeE0sR0FBQTJOLEVBQUFuQixHQUFBeE0sRUFBQXdNLFlBQUFtQixFQUFBbkIsR0FBQUUsRUFBQSxJQUFBZSxTQUFBdk4sUUFBQXNNLEdBQUExTCxNQUEyRVYsR0FBQSwyQ0FBQUEsRUFBQSxtRUFBQUEsRUFBQSw2RkFBQUksSUFBQTBOLEVBQUEsUUFBQVAsT05xeUI1b0osU0FBVXZPLEVBQVFELEVBQVNVLEdBRWpDLFlBR0FZLFFBQU9DLGVBQWV2QixFQUFTLGNBQzdCNEQsT0FBTyxJQUVUNUQsRUFBUXFDLFNPNXlCTm1KLFVBQ0VxRixZQUFhLFFBQ2JDLFlBQWEsT0FDYkMsZ0JBQWlCLFFBRW5CdkosVUFDRXdKLFFBQVMsSUFFWHpGLFFBQ0VzRixZQUFhLFFBQ2JDLFlBQWEsT0FDYkMsZ0JBQWlCLFFBRW5CMU8sU0FDRTRPLE1BQU8sSUFDUEMsT0FBUSxJQUNSQyxZQUFhLEVBQ2JMLFlBQWEsT0FDYkQsWUFBYSxTQUNiTyxhQUFjLElQZ3pCbEJuUixFQUFPRCxRQUFVQSxFQUFpQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyb3B6b25lXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJwcm9wLXR5cGVzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcm9wem9uZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJvcHpvbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcInByb3AtdHlwZXNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX3N0eWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfc3R5bGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuXG52YXIgRHJvcHpvbmUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcHpvbmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3B6b25lKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3B6b25lKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcm9wem9uZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3B6b25lKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4sIGlzRHJhZ0FjdGl2ZSwgaXNEcmFnQWNjZXB0LCBpc0RyYWdSZWplY3QpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZSwge1xuICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLFxuICAgICAgICAgIGlzRHJhZ0FjY2VwdDogaXNEcmFnQWNjZXB0LFxuICAgICAgICAgIGlzRHJhZ1JlamVjdDogaXNEcmFnUmVqZWN0XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29tcG9zZUhhbmRsZXJzID0gX3RoaXMuY29tcG9zZUhhbmRsZXJzLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRG9jdW1lbnREcm9wID0gX3RoaXMub25Eb2N1bWVudERyb3AuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25EcmFnRW50ZXIgPSBfdGhpcy5vbkRyYWdFbnRlci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkRyYWdMZWF2ZSA9IF90aGlzLm9uRHJhZ0xlYXZlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ092ZXIgPSBfdGhpcy5vbkRyYWdPdmVyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRHJhZ1N0YXJ0ID0gX3RoaXMub25EcmFnU3RhcnQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Ecm9wID0gX3RoaXMub25Ecm9wLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uRmlsZURpYWxvZ0NhbmNlbCA9IF90aGlzLm9uRmlsZURpYWxvZ0NhbmNlbC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbklucHV0RWxlbWVudENsaWNrID0gX3RoaXMub25JbnB1dEVsZW1lbnRDbGljay5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLnNldFJlZiA9IF90aGlzLnNldFJlZi5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5zZXRSZWZzID0gX3RoaXMuc2V0UmVmcy5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkcmFnZ2VkRmlsZXM6IFtdLFxuICAgICAgYWNjZXB0ZWRGaWxlczogW10sXG4gICAgICByZWplY3RlZEZpbGVzOiBbXVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyb3B6b25lLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgcHJldmVudERyb3BPbkRvY3VtZW50ID0gdGhpcy5wcm9wcy5wcmV2ZW50RHJvcE9uRG9jdW1lbnQ7XG5cbiAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcblxuICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIF91dGlscy5vbkRvY3VtZW50RHJhZ092ZXIsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICAgIC8vIFRyaWVkIGltcGxlbWVudGluZyBhZGRFdmVudExpc3RlbmVyLCBidXQgZGlkbid0IHdvcmsgb3V0XG4gICAgICBkb2N1bWVudC5ib2R5Lm9uZm9jdXMgPSB0aGlzLm9uRmlsZURpYWxvZ0NhbmNlbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IHRoaXMucHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50O1xuXG4gICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgX3V0aWxzLm9uRG9jdW1lbnREcmFnT3Zlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRG9jdW1lbnREcm9wKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZpbGVJbnB1dEVsICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5maWxlSW5wdXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25JbnB1dEVsZW1lbnRDbGljaywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy8gQ2FuIGJlIHJlcGxhY2VkIHdpdGggcmVtb3ZlRXZlbnRMaXN0ZW5lciwgaWYgYWRkRXZlbnRMaXN0ZW5lciB3b3Jrc1xuICAgICAgaWYgKGRvY3VtZW50ICE9IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmZvY3VzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb3NlSGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb3NlSGFuZGxlcnMoaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRG9jdW1lbnREcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Eb2N1bWVudERyb3AoZXZ0KSB7XG4gICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5jb250YWlucyhldnQudGFyZ2V0KSkge1xuICAgICAgICAvLyBpZiB3ZSBpbnRlcmNlcHRlZCBhbiBldmVudCBmb3Igb3VyIGluc3RhbmNlLCBsZXQgaXQgcHJvcGFnYXRlIGRvd24gdG8gdGhlIGluc3RhbmNlJ3Mgb25Ecm9wIGhhbmRsZXJcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRyYWdUYXJnZXRzID0gW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EcmFnU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRyYWdTdGFydChldnQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnU3RhcnQuY2FsbCh0aGlzLCBldnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJhZ0VudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnRW50ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gQ291bnQgdGhlIGRyb3B6b25lIGFuZCBhbnkgY2hpbGRyZW4gdGhhdCBhcmUgZW50ZXJlZC5cbiAgICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmluZGV4T2YoZXZ0LnRhcmdldCkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSwgLy8gRG8gbm90IHJlbHkgb24gZmlsZXMgZm9yIHRoZSBkcmFnIHN0YXRlLiBJdCBkb2Vzbid0IHdvcmsgaW4gU2FmYXJpLlxuICAgICAgICBkcmFnZ2VkRmlsZXM6ICgwLCBfdXRpbHMuZ2V0RGF0YVRyYW5zZmVySXRlbXMpKGV2dClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdFbnRlcikge1xuICAgICAgICB0aGlzLnByb3BzLm9uRHJhZ0VudGVyLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdPdmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EcmFnT3ZlcihldnQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGUgZmlsZSBkaWFsb2cgb24gQ2hyb21lIGFsbG93cyB1c2VycyB0byBkcmFnIGZpbGVzIGZyb20gdGhlIGRpYWxvZyBvbnRvXG4gICAgICAgIC8vIHRoZSBkcm9wem9uZSwgY2F1c2luZyB0aGUgYnJvd3NlciB0aGUgY3Jhc2ggd2hlbiB0aGUgZmlsZSBkaWFsb2cgaXMgY2xvc2VkLlxuICAgICAgICAvLyBBIGRyb3AgZWZmZWN0IG9mICdub25lJyBwcmV2ZW50cyB0aGUgZmlsZSBmcm9tIGJlaW5nIGRyb3BwZWRcbiAgICAgICAgZXZ0LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUgPyAnbm9uZScgOiAnY29weSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ092ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRyYWdPdmVyLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRyYWdMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJhZ0xlYXZlKGV2dCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBPbmx5IGRlYWN0aXZhdGUgb25jZSB0aGUgZHJvcHpvbmUgYW5kIGFsbCBjaGlsZHJlbiBoYXZlIGJlZW4gbGVmdC5cbiAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSB0aGlzLmRyYWdUYXJnZXRzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsICE9PSBldnQudGFyZ2V0ICYmIF90aGlzMi5ub2RlLmNvbnRhaW5zKGVsKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZHJhZ1RhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGRyYWdnaW5nIGZpbGVzIHN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dlZEZpbGVzOiBbXVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0xlYXZlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EcmFnTGVhdmUuY2FsbCh0aGlzLCBldnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRHJvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRHJvcChldnQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkRyb3AgPSBfcHJvcHMub25Ecm9wLFxuICAgICAgICAgIG9uRHJvcEFjY2VwdGVkID0gX3Byb3BzLm9uRHJvcEFjY2VwdGVkLFxuICAgICAgICAgIG9uRHJvcFJlamVjdGVkID0gX3Byb3BzLm9uRHJvcFJlamVjdGVkLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzLm11bHRpcGxlLFxuICAgICAgICAgIGRpc2FibGVQcmV2aWV3ID0gX3Byb3BzLmRpc2FibGVQcmV2aWV3LFxuICAgICAgICAgIGFjY2VwdCA9IF9wcm9wcy5hY2NlcHQ7XG5cbiAgICAgIHZhciBmaWxlTGlzdCA9ICgwLCBfdXRpbHMuZ2V0RGF0YVRyYW5zZmVySXRlbXMpKGV2dCk7XG4gICAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IFtdO1xuICAgICAgdmFyIHJlamVjdGVkRmlsZXMgPSBbXTtcblxuICAgICAgLy8gU3RvcCBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3JcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBSZXNldCB0aGUgY291bnRlciBhbG9uZyB3aXRoIHRoZSBkcmFnIG9uIGEgZHJvcC5cbiAgICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXTtcbiAgICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGZpbGVMaXN0LmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlUHJldmlldykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlLnByZXZpZXcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBwcmV2aWV3IGZvciBmaWxlJywgZmlsZSwgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuZmlsZUFjY2VwdGVkKShmaWxlLCBhY2NlcHQpICYmICgwLCBfdXRpbHMuZmlsZU1hdGNoU2l6ZSkoZmlsZSwgX3RoaXMzLnByb3BzLm1heFNpemUsIF90aGlzMy5wcm9wcy5taW5TaXplKSkge1xuICAgICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3RlZEZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIC8vIGlmIG5vdCBpbiBtdWx0aSBtb2RlIGFkZCBhbnkgZXh0cmEgYWNjZXB0ZWQgZmlsZXMgdG8gcmVqZWN0ZWQuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhbGxvdyBlbmQgdXNlcnMgdG8gZWFzaWx5IGlnbm9yZSBhIG11bHRpIGZpbGUgZHJvcCBpbiBcInNpbmdsZVwiIG1vZGUuXG4gICAgICAgIHJlamVjdGVkRmlsZXMucHVzaC5hcHBseShyZWplY3RlZEZpbGVzLCBfdG9Db25zdW1hYmxlQXJyYXkoYWNjZXB0ZWRGaWxlcy5zcGxpY2UoMSkpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uRHJvcCkge1xuICAgICAgICBvbkRyb3AuY2FsbCh0aGlzLCBhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzLCBldnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVqZWN0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG4gICAgICAgIG9uRHJvcFJlamVjdGVkLmNhbGwodGhpcywgcmVqZWN0ZWRGaWxlcywgZXZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjY2VwdGVkRmlsZXMubGVuZ3RoID4gMCAmJiBvbkRyb3BBY2NlcHRlZCkge1xuICAgICAgICBvbkRyb3BBY2NlcHRlZC5jYWxsKHRoaXMsIGFjY2VwdGVkRmlsZXMsIGV2dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIGZpbGVzIHZhbHVlXG4gICAgICB0aGlzLmRyYWdnZWRGaWxlcyA9IG51bGw7XG5cbiAgICAgIC8vIFJlc2V0IGRyYWcgc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2VkRmlsZXM6IFtdLFxuICAgICAgICBhY2NlcHRlZEZpbGVzOiBhY2NlcHRlZEZpbGVzLFxuICAgICAgICByZWplY3RlZEZpbGVzOiByZWplY3RlZEZpbGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhldnQpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMi5vbkNsaWNrLFxuICAgICAgICAgIGRpc2FibGVDbGljayA9IF9wcm9wczIuZGlzYWJsZUNsaWNrO1xuXG4gICAgICBpZiAoIWRpc2FibGVDbGljaykge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluIElFMTEvRWRnZSB0aGUgZmlsZS1icm93c2VyIGRpYWxvZyBpcyBibG9ja2luZywgZW5zdXJlIHRoaXMgaXMgYmVoaW5kIHNldFRpbWVvdXRcbiAgICAgICAgLy8gdGhpcyBpcyBzbyByZWFjdCBjYW4gaGFuZGxlIHN0YXRlIGNoYW5nZXMgaW4gdGhlIG9uQ2xpY2sgcHJvcCBhYm92ZSBhYm92ZVxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvNDUwXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5vcGVuLmJpbmQodGhpcyksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uSW5wdXRFbGVtZW50Q2xpY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0RWxlbWVudENsaWNrKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcyAmJiB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DbGljaygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRmlsZURpYWxvZ0NhbmNlbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRmlsZURpYWxvZ0NhbmNlbCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyB0aW1lb3V0IHdpbGwgbm90IHJlY29nbml6ZSBjb250ZXh0IG9mIHRoaXMgbWV0aG9kXG4gICAgICB2YXIgb25GaWxlRGlhbG9nQ2FuY2VsID0gdGhpcy5wcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWw7XG4gICAgICAvLyBleGVjdXRlIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIEZpbGVEaWFsb2cgaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG5cbiAgICAgIGlmICh0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBSZXR1cm5zIGFuIG9iamVjdCBhcyBGaWxlTGlzdFxuICAgICAgICAgIHZhciBmaWxlcyA9IF90aGlzNC5maWxlSW5wdXRFbC5maWxlcztcblxuXG4gICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzNC5pc0ZpbGVEaWFsb2dBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsZURpYWxvZ0NhbmNlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFJlZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJlZihyZWYpIHtcbiAgICAgIHRoaXMubm9kZSA9IHJlZjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRSZWZzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVmcyhyZWYpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0RWwgPSByZWY7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gc3lzdGVtIGZpbGUgdXBsb2FkIGRpYWxvZy5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb3BlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmZpbGVJbnB1dEVsLnZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuZmlsZUlucHV0RWwuY2xpY2soKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWNjZXB0ID0gX3Byb3BzMy5hY2NlcHQsXG4gICAgICAgICAgYWNjZXB0Q2xhc3NOYW1lID0gX3Byb3BzMy5hY2NlcHRDbGFzc05hbWUsXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3Byb3BzMy5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZENsYXNzTmFtZSA9IF9wcm9wczMuZGlzYWJsZWRDbGFzc05hbWUsXG4gICAgICAgICAgaW5wdXRQcm9wcyA9IF9wcm9wczMuaW5wdXRQcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wczMubXVsdGlwbGUsXG4gICAgICAgICAgbmFtZSA9IF9wcm9wczMubmFtZSxcbiAgICAgICAgICByZWplY3RDbGFzc05hbWUgPSBfcHJvcHMzLnJlamVjdENsYXNzTmFtZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczMsIFsnYWNjZXB0JywgJ2FjY2VwdENsYXNzTmFtZScsICdhY3RpdmVDbGFzc05hbWUnLCAnY2hpbGRyZW4nLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRDbGFzc05hbWUnLCAnaW5wdXRQcm9wcycsICdtdWx0aXBsZScsICduYW1lJywgJ3JlamVjdENsYXNzTmFtZSddKTtcblxuICAgICAgdmFyIGFjY2VwdFN0eWxlID0gcmVzdC5hY2NlcHRTdHlsZSxcbiAgICAgICAgICBhY3RpdmVTdHlsZSA9IHJlc3QuYWN0aXZlU3R5bGUsXG4gICAgICAgICAgX3Jlc3QkY2xhc3NOYW1lID0gcmVzdC5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Jlc3QkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9yZXN0JGNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlID0gcmVzdC5kaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIHJlamVjdFN0eWxlID0gcmVzdC5yZWplY3RTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IHJlc3Quc3R5bGUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocmVzdCwgWydhY2NlcHRTdHlsZScsICdhY3RpdmVTdHlsZScsICdjbGFzc05hbWUnLCAnZGlzYWJsZWRTdHlsZScsICdyZWplY3RTdHlsZScsICdzdHlsZSddKTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNEcmFnQWN0aXZlID0gX3N0YXRlLmlzRHJhZ0FjdGl2ZSxcbiAgICAgICAgICBkcmFnZ2VkRmlsZXMgPSBfc3RhdGUuZHJhZ2dlZEZpbGVzO1xuXG4gICAgICB2YXIgZmlsZXNDb3VudCA9IGRyYWdnZWRGaWxlcy5sZW5ndGg7XG4gICAgICB2YXIgaXNNdWx0aXBsZUFsbG93ZWQgPSBtdWx0aXBsZSB8fCBmaWxlc0NvdW50IDw9IDE7XG4gICAgICB2YXIgaXNEcmFnQWNjZXB0ID0gZmlsZXNDb3VudCA+IDAgJiYgKDAsIF91dGlscy5hbGxGaWxlc0FjY2VwdGVkKShkcmFnZ2VkRmlsZXMsIHRoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgIHZhciBpc0RyYWdSZWplY3QgPSBmaWxlc0NvdW50ID4gMCAmJiAoIWlzRHJhZ0FjY2VwdCB8fCAhaXNNdWx0aXBsZUFsbG93ZWQpO1xuICAgICAgdmFyIG5vU3R5bGVzID0gIWNsYXNzTmFtZSAmJiAhc3R5bGUgJiYgIWFjdGl2ZVN0eWxlICYmICFhY2NlcHRTdHlsZSAmJiAhcmVqZWN0U3R5bGUgJiYgIWRpc2FibGVkU3R5bGU7XG5cbiAgICAgIGlmIChpc0RyYWdBY3RpdmUgJiYgYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY3RpdmVDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNEcmFnQWNjZXB0ICYmIGFjY2VwdENsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgYWNjZXB0Q2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGlzRHJhZ1JlamVjdCAmJiByZWplY3RDbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHJlamVjdENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZCAmJiBkaXNhYmxlZENsYXNzTmFtZSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgZGlzYWJsZWRDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChub1N0eWxlcykge1xuICAgICAgICBzdHlsZSA9IF9zdHlsZXMyLmRlZmF1bHQuZGVmYXVsdDtcbiAgICAgICAgYWN0aXZlU3R5bGUgPSBfc3R5bGVzMi5kZWZhdWx0LmFjdGl2ZTtcbiAgICAgICAgYWNjZXB0U3R5bGUgPSBzdHlsZS5hY3RpdmU7XG4gICAgICAgIHJlamVjdFN0eWxlID0gX3N0eWxlczIuZGVmYXVsdC5yZWplY3RlZDtcbiAgICAgICAgZGlzYWJsZWRTdHlsZSA9IF9zdHlsZXMyLmRlZmF1bHQuZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUpO1xuICAgICAgaWYgKGFjdGl2ZVN0eWxlICYmIGlzRHJhZ0FjdGl2ZSkge1xuICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGlmIChhY2NlcHRTdHlsZSAmJiBpc0RyYWdBY2NlcHQpIHtcbiAgICAgICAgYXBwbGllZFN0eWxlID0gX2V4dGVuZHMoe30sIGFwcGxpZWRTdHlsZSwgYWNjZXB0U3R5bGUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlamVjdFN0eWxlICYmIGlzRHJhZ1JlamVjdCkge1xuICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgYXBwbGllZFN0eWxlLCByZWplY3RTdHlsZSk7XG4gICAgICB9XG4gICAgICBpZiAoZGlzYWJsZWRTdHlsZSAmJiBkaXNhYmxlZCkge1xuICAgICAgICBhcHBsaWVkU3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGRpc2FibGVkU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5wdXRBdHRyaWJ1dGVzID0ge1xuICAgICAgICBhY2NlcHQ6IGFjY2VwdCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICBtdWx0aXBsZTogX3V0aWxzLnN1cHBvcnRNdWx0aXBsZSAmJiBtdWx0aXBsZSxcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZnMsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uRHJvcCxcbiAgICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJ1xuICAgICAgfTtcblxuICAgICAgaWYgKG5hbWUgJiYgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgaW5wdXRBdHRyaWJ1dGVzLm5hbWUgPSBuYW1lO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXN0cnVjdHVyZSBjdXN0b20gcHJvcHMgYXdheSBmcm9tIHByb3BzIHVzZWQgZm9yIHRoZSBkaXYgZWxlbWVudFxuXG4gICAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IHByb3BzLmFjY2VwdGVkRmlsZXMsXG4gICAgICAgICAgcHJldmVudERyb3BPbkRvY3VtZW50ID0gcHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50LFxuICAgICAgICAgIGRpc2FibGVQcmV2aWV3ID0gcHJvcHMuZGlzYWJsZVByZXZpZXcsXG4gICAgICAgICAgZGlzYWJsZUNsaWNrID0gcHJvcHMuZGlzYWJsZUNsaWNrLFxuICAgICAgICAgIG9uRHJvcEFjY2VwdGVkID0gcHJvcHMub25Ecm9wQWNjZXB0ZWQsXG4gICAgICAgICAgb25Ecm9wUmVqZWN0ZWQgPSBwcm9wcy5vbkRyb3BSZWplY3RlZCxcbiAgICAgICAgICBvbkZpbGVEaWFsb2dDYW5jZWwgPSBwcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgICAgICAgbWF4U2l6ZSA9IHByb3BzLm1heFNpemUsXG4gICAgICAgICAgbWluU2l6ZSA9IHByb3BzLm1pblNpemUsXG4gICAgICAgICAgZGl2UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWNjZXB0ZWRGaWxlcycsICdwcmV2ZW50RHJvcE9uRG9jdW1lbnQnLCAnZGlzYWJsZVByZXZpZXcnLCAnZGlzYWJsZUNsaWNrJywgJ29uRHJvcEFjY2VwdGVkJywgJ29uRHJvcFJlamVjdGVkJywgJ29uRmlsZURpYWxvZ0NhbmNlbCcsICdtYXhTaXplJywgJ21pblNpemUnXSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogYXBwbGllZFN0eWxlXG4gICAgICAgIH0sIGRpdlByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIHByb3BzIGZpcnN0IHNvIGV2ZW50IGhhbmRsZXJzIGFyZSBuZXZlciBvdmVycmlkZGVuICovLCB7XG4gICAgICAgICAgb25DbGljazogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkNsaWNrKSxcbiAgICAgICAgICBvbkRyYWdTdGFydDogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyYWdTdGFydCksXG4gICAgICAgICAgb25EcmFnRW50ZXI6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnRW50ZXIpLFxuICAgICAgICAgIG9uRHJhZ092ZXI6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnT3ZlciksXG4gICAgICAgICAgb25EcmFnTGVhdmU6IHRoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnTGVhdmUpLFxuICAgICAgICAgIG9uRHJvcDogdGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyb3ApLFxuICAgICAgICAgIHJlZjogdGhpcy5zZXRSZWYsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjaGlsZHJlbiwgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIGlucHV0UHJvcHMgZmlyc3Qgc28gaW5wdXRBdHRyaWJ1dGVzIG92ZXJyaWRlIHRoZW0gKi8sIGlucHV0QXR0cmlidXRlcykpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wem9uZTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IERyb3B6b25lO1xuXG5cbkRyb3B6b25lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFsbG93IHNwZWNpZmljIHR5cGVzIG9mIGZpbGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9hdHRyLWFjY2VwdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbC5cbiAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NlxuICAgKi9cbiAgYWNjZXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblxuICAvKipcbiAgICogQ29udGVudHMgb2YgdGhlIGRyb3B6b25lXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSwgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSksXG5cbiAgLyoqXG4gICAqIERpc2FsbG93IGNsaWNraW5nIG9uIHRoZSBkcm9wem9uZSBjb250YWluZXIgdG8gb3BlbiBmaWxlIGRpYWxvZ1xuICAgKi9cbiAgZGlzYWJsZUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lIGVudGlyZWx5XG4gICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHByZXZpZXcgZ2VuZXJhdGlvblxuICAgKi9cbiAgZGlzYWJsZVByZXZpZXc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogSWYgZmFsc2UsIGFsbG93IGRyb3BwZWQgaXRlbXMgdG8gdGFrZSBvdmVyIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG4gICAqL1xuICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgdG8gdGhlIGA8aW5wdXQgdHlwZT1cImZpbGVcIi8+YCB0YWdcbiAgICovXG4gIGlucHV0UHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBBbGxvdyBkcm9wcGluZyBtdWx0aXBsZSBmaWxlc1xuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogYG5hbWVgIGF0dHJpYnV0ZSBmb3IgdGhlIGlucHV0IHRhZ1xuICAgKi9cbiAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gZmlsZSBzaXplXG4gICAqL1xuICBtYXhTaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcblxuICAvKipcbiAgICogTWluaW11bSBmaWxlIHNpemVcbiAgICovXG4gIG1pblNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWVcbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBmb3IgYWN0aXZlIHN0YXRlXG4gICAqL1xuICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIGFjY2VwdGVkIHN0YXRlXG4gICAqL1xuICBhY2NlcHRDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIHJlamVjdGVkIHN0YXRlXG4gICAqL1xuICByZWplY3RDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIGRpc2FibGVkIHN0YXRlXG4gICAqL1xuICBkaXNhYmxlZENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHlcbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyYWcgaXMgYWN0aXZlXG4gICAqL1xuICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wIHdpbGwgYmUgYWNjZXB0ZWRcbiAgICovXG4gIGFjY2VwdFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSByZWplY3RlZFxuICAgKi9cbiAgcmVqZWN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcHpvbmUgaXMgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBvbkNsaWNrIGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJvcCBjYWxsYmFja1xuICAgKi9cbiAgb25Ecm9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJvcEFjY2VwdGVkIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyb3BBY2NlcHRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyb3BSZWplY3RlZCBjYWxsYmFja1xuICAgKi9cbiAgb25Ecm9wUmVqZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblxuICAvKipcbiAgICogb25EcmFnU3RhcnQgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJhZ1N0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ0VudGVyIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyYWdPdmVyIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdPdmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ0xlYXZlIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgY2FsbGJhY2sgb24gY2xpY2tpbmcgdGhlIGNhbmNlbCBidXR0b24gb2YgdGhlIGZpbGUgZGlhbG9nXG4gICAqL1xuICBvbkZpbGVEaWFsb2dDYW5jZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuRHJvcHpvbmUuZGVmYXVsdFByb3BzID0ge1xuICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZVByZXZpZXc6IGZhbHNlLFxuICBkaXNhYmxlQ2xpY2s6IGZhbHNlLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4U2l6ZTogSW5maW5pdHksXG4gIG1pblNpemU6IDBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3VwcG9ydE11bHRpcGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5nZXREYXRhVHJhbnNmZXJJdGVtcyA9IGdldERhdGFUcmFuc2Zlckl0ZW1zO1xuZXhwb3J0cy5maWxlQWNjZXB0ZWQgPSBmaWxlQWNjZXB0ZWQ7XG5leHBvcnRzLmZpbGVNYXRjaFNpemUgPSBmaWxlTWF0Y2hTaXplO1xuZXhwb3J0cy5hbGxGaWxlc0FjY2VwdGVkID0gYWxsRmlsZXNBY2NlcHRlZDtcbmV4cG9ydHMub25Eb2N1bWVudERyYWdPdmVyID0gb25Eb2N1bWVudERyYWdPdmVyO1xuXG52YXIgX2F0dHJBY2NlcHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXG52YXIgX2F0dHJBY2NlcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFjY2VwdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdXBwb3J0TXVsdGlwbGUgPSBleHBvcnRzLnN1cHBvcnRNdWx0aXBsZSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA/ICdtdWx0aXBsZScgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSA6IHRydWU7XG5cbmZ1bmN0aW9uIGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2ZW50KSB7XG4gIHZhciBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBbXTtcbiAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgIHZhciBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICBpZiAoZHQuZmlsZXMgJiYgZHQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5maWxlcztcbiAgICB9IGVsc2UgaWYgKGR0Lml0ZW1zICYmIGR0Lml0ZW1zLmxlbmd0aCkge1xuICAgICAgLy8gRHVyaW5nIHRoZSBkcmFnIGV2ZW4gdGhlIGRhdGFUcmFuc2Zlci5maWxlcyBpcyBudWxsXG4gICAgICAvLyBidXQgQ2hyb21lIGltcGxlbWVudHMgc29tZSBkcmFnIHN0b3JlLCB3aGljaCBpcyBhY2Nlc2libGUgdmlhIGRhdGFUcmFuc2Zlci5pdGVtc1xuICAgICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZHQuaXRlbXM7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZmlsZXMpIHtcbiAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gIH1cbiAgLy8gQ29udmVydCBmcm9tIERhdGFUcmFuc2Zlckl0ZW1zTGlzdCB0byB0aGUgbmF0aXZlIEFycmF5XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhVHJhbnNmZXJJdGVtc0xpc3QpO1xufVxuXG4vLyBGaXJlZm94IHZlcnNpb25zIHByaW9yIHRvIDUzIHJldHVybiBhIGJvZ3VzIE1JTUUgdHlwZSBmb3IgZXZlcnkgZmlsZSBkcmFnLCBzbyBkcmFnb3ZlcnMgd2l0aFxuLy8gdGhhdCBNSU1FIHR5cGUgd2lsbCBhbHdheXMgYmUgYWNjZXB0ZWRcbmZ1bmN0aW9uIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpIHtcbiAgcmV0dXJuIGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtbW96LWZpbGUnIHx8ICgwLCBfYXR0ckFjY2VwdDIuZGVmYXVsdCkoZmlsZSwgYWNjZXB0KTtcbn1cblxuZnVuY3Rpb24gZmlsZU1hdGNoU2l6ZShmaWxlLCBtYXhTaXplLCBtaW5TaXplKSB7XG4gIHJldHVybiBmaWxlLnNpemUgPD0gbWF4U2l6ZSAmJiBmaWxlLnNpemUgPj0gbWluU2l6ZTtcbn1cblxuZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChmaWxlcywgYWNjZXB0KSB7XG4gIHJldHVybiBmaWxlcy5ldmVyeShmdW5jdGlvbiAoZmlsZSkge1xuICAgIHJldHVybiBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KTtcbiAgfSk7XG59XG5cbi8vIGFsbG93IHRoZSBlbnRpcmUgZG9jdW1lbnQgdG8gYmUgYSBkcmFnIHRhcmdldFxuZnVuY3Rpb24gb25Eb2N1bWVudERyYWdPdmVyKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4oZSl7aWYocltlXSlyZXR1cm4gcltlXS5leHBvcnRzO3ZhciBvPXJbZV09e2V4cG9ydHM6e30saWQ6ZSxsb2FkZWQ6ITF9O3JldHVybiB0W2VdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubG9hZGVkPSEwLG8uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gbi5tPXQsbi5jPXIsbi5wPVwiXCIsbigwKX0oW2Z1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjtuLl9fZXNNb2R1bGU9ITAscig4KSxyKDkpLG5bXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKHQsbil7aWYodCYmbil7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgcj1BcnJheS5pc0FycmF5KG4pP246bi5zcGxpdChcIixcIiksZT10Lm5hbWV8fFwiXCIsbz10LnR5cGV8fFwiXCIsaT1vLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik7cmV0dXJue3Y6ci5zb21lKGZ1bmN0aW9uKHQpe3ZhciBuPXQudHJpbSgpO3JldHVyblwiLlwiPT09bi5jaGFyQXQoMCk/ZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKG4udG9Mb3dlckNhc2UoKSk6L1xcL1xcKiQvLnRlc3Qobik/aT09PW4ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTpvPT09bn0pfX0oKTtpZihcIm9iamVjdFwiPT10eXBlb2YgcilyZXR1cm4gci52fXJldHVybiEwfSx0LmV4cG9ydHM9bltcImRlZmF1bHRcIl19LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPXt2ZXJzaW9uOlwiMS4yLjJcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1yKX0sZnVuY3Rpb24odCxuKXt2YXIgcj10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1yKX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDEpLGk9cig0KSx1PXIoMTkpLGM9XCJwcm90b3R5cGVcIixmPWZ1bmN0aW9uKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkobixhcmd1bWVudHMpfX0scz1mdW5jdGlvbih0LG4scil7dmFyIGEscCxsLHksZD10JnMuRyxoPXQmcy5QLHY9ZD9lOnQmcy5TP2Vbbl18fChlW25dPXt9KTooZVtuXXx8e30pW2NdLHg9ZD9vOm9bbl18fChvW25dPXt9KTtkJiYocj1uKTtmb3IoYSBpbiByKXA9ISh0JnMuRikmJnYmJmEgaW4gdixsPShwP3Y6cilbYV0seT10JnMuQiYmcD9mKGwsZSk6aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9mKEZ1bmN0aW9uLmNhbGwsbCk6bCx2JiYhcCYmdSh2LGEsbCkseFthXSE9bCYmaSh4LGEseSksaCYmKCh4W2NdfHwoeFtjXT17fSkpW2FdPWwpfTtlLmNvcmU9byxzLkY9MSxzLkc9MixzLlM9NCxzLlA9OCxzLkI9MTYscy5XPTMyLHQuZXhwb3J0cz1zfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMTgpO3QuZXhwb3J0cz1yKDIyKT9mdW5jdGlvbih0LG4scil7cmV0dXJuIGUuc2V0RGVzYyh0LG4sbygxLHIpKX06ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0W25dPXIsdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9T2JqZWN0O3QuZXhwb3J0cz17Y3JlYXRlOnIuY3JlYXRlLGdldFByb3RvOnIuZ2V0UHJvdG90eXBlT2YsaXNFbnVtOnt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLGdldERlc2M6ci5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isc2V0RGVzYzpyLmRlZmluZVByb3BlcnR5LHNldERlc2NzOnIuZGVmaW5lUHJvcGVydGllcyxnZXRLZXlzOnIua2V5cyxnZXROYW1lczpyLmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9sczpyLmdldE93blByb3BlcnR5U3ltYm9scyxlYWNoOltdLmZvckVhY2h9fSxmdW5jdGlvbih0LG4pe3ZhciByPTAsZT1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK3IrZSkudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIwKShcIndrc1wiKSxvPXIoMikuU3ltYm9sO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XXx8KGVbdF09byYmb1t0XXx8KG98fHIoNikpKFwiU3ltYm9sLlwiK3QpKX19LGZ1bmN0aW9uKHQsbixyKXtyKDI2KSx0LmV4cG9ydHM9cigxKS5BcnJheS5zb21lfSxmdW5jdGlvbih0LG4scil7cigyNSksdC5leHBvcnRzPXIoMSkuU3RyaW5nLmVuZHNXaXRofSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbil7dmFyIHI9e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtpZihlKHQpLHZvaWQgMD09PW4pcmV0dXJuIHQ7c3dpdGNoKHIpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQuY2FsbChuLHIpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHIsZSl7cmV0dXJuIHQuY2FsbChuLHIsZSl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixlLG8pe3JldHVybiB0LmNhbGwobixyLGUsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbj0vLi87dHJ5e1wiLy4vXCJbdF0obil9Y2F0Y2goZSl7dHJ5e3JldHVybiBuW3IoNykoXCJtYXRjaFwiKV09ITEsIVwiLy4vXCJbdF0obil9Y2F0Y2gobyl7fX1yZXR1cm4hMH19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaChuKXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTYpLG89cigxMSksaT1yKDcpKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBlKHQpJiYodm9pZCAwIT09KG49dFtpXSk/ISFuOlwiUmVnRXhwXCI9PW8odCkpfX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6bn19fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPXIoNCksaT1yKDYpKFwic3JjXCIpLHU9XCJ0b1N0cmluZ1wiLGM9RnVuY3Rpb25bdV0sZj0oXCJcIitjKS5zcGxpdCh1KTtyKDEpLmluc3BlY3RTb3VyY2U9ZnVuY3Rpb24odCl7cmV0dXJuIGMuY2FsbCh0KX0sKHQuZXhwb3J0cz1mdW5jdGlvbih0LG4scix1KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYobyhyLGksdFtuXT9cIlwiK3Rbbl06Zi5qb2luKFN0cmluZyhuKSkpLFwibmFtZVwiaW4gcnx8KHIubmFtZT1uKSksdD09PWU/dFtuXT1yOih1fHxkZWxldGUgdFtuXSxvKHQsbixyKSl9KShGdW5jdGlvbi5wcm90b3R5cGUsdSxmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJnRoaXNbaV18fGMuY2FsbCh0aGlzKX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyKSxvPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsaT1lW29dfHwoZVtvXT17fSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpW3RdfHwoaVt0XT17fSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigxNyksbz1yKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIpe2lmKGUobikpdGhyb3cgVHlwZUVycm9yKFwiU3RyaW5nI1wiK3IrXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO3JldHVybiBTdHJpbmcobyh0KSl9fSxmdW5jdGlvbih0LG4scil7dC5leHBvcnRzPSFyKDE1KShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxuKXt2YXIgcj1NYXRoLmNlaWwsZT1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP2U6cikodCl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMyksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKGUodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsbixyKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1yKDMpLG89cigyNCksaT1yKDIxKSx1PVwiZW5kc1dpdGhcIixjPVwiXCJbdV07ZShlLlArZS5GKnIoMTQpKHUpLFwiU3RyaW5nXCIse2VuZHNXaXRoOmZ1bmN0aW9uKHQpe3ZhciBuPWkodGhpcyx0LHUpLHI9YXJndW1lbnRzLGU9ci5sZW5ndGg+MT9yWzFdOnZvaWQgMCxmPW8obi5sZW5ndGgpLHM9dm9pZCAwPT09ZT9mOk1hdGgubWluKG8oZSksZiksYT1TdHJpbmcodCk7cmV0dXJuIGM/Yy5jYWxsKG4sYSxzKTpuLnNsaWNlKHMtYS5sZW5ndGgscyk9PT1hfX0pfSxmdW5jdGlvbih0LG4scil7dmFyIGU9cig1KSxvPXIoMyksaT1yKDEpLkFycmF5fHxBcnJheSx1PXt9LGM9ZnVuY3Rpb24odCxuKXtlLmVhY2guY2FsbCh0LnNwbGl0KFwiLFwiKSxmdW5jdGlvbih0KXt2b2lkIDA9PW4mJnQgaW4gaT91W3RdPWlbdF06dCBpbltdJiYodVt0XT1yKDEyKShGdW5jdGlvbi5jYWxsLFtdW3RdLG4pKX0pfTtjKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpLGMoXCJpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzXCIsMyksYyhcImpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIpLG8oby5TLFwiQXJyYXlcIix1KX1dKTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlamVjdGVkOiB7XG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjYzY2JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJyM2YzYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG4gIH0sXG4gIGRlZmF1bHQ6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwLFxuICAgIGJvcmRlcldpZHRoOiAyLFxuICAgIGJvcmRlckNvbG9yOiAnIzY2NicsXG4gICAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuICAgIGJvcmRlclJhZGl1czogNVxuICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC5qcyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA4ODg2MDRkYWY2ZDYzMWJhODA3IiwiLyogZXNsaW50IHByZWZlci10ZW1wbGF0ZTogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge1xuICBzdXBwb3J0TXVsdGlwbGUsXG4gIGZpbGVBY2NlcHRlZCxcbiAgYWxsRmlsZXNBY2NlcHRlZCxcbiAgZmlsZU1hdGNoU2l6ZSxcbiAgb25Eb2N1bWVudERyYWdPdmVyLFxuICBnZXREYXRhVHJhbnNmZXJJdGVtc1xufSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3V0aWxzL3N0eWxlcydcblxuY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuY29tcG9zZUhhbmRsZXJzID0gdGhpcy5jb21wb3NlSGFuZGxlcnMuYmluZCh0aGlzKVxuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRvY3VtZW50RHJvcCA9IHRoaXMub25Eb2N1bWVudERyb3AuYmluZCh0aGlzKVxuICAgIHRoaXMub25EcmFnRW50ZXIgPSB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRHJhZ0xlYXZlID0gdGhpcy5vbkRyYWdMZWF2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRyYWdPdmVyID0gdGhpcy5vbkRyYWdPdmVyLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRHJhZ1N0YXJ0ID0gdGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkRyb3AgPSB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkZpbGVEaWFsb2dDYW5jZWwgPSB0aGlzLm9uRmlsZURpYWxvZ0NhbmNlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbklucHV0RWxlbWVudENsaWNrID0gdGhpcy5vbklucHV0RWxlbWVudENsaWNrLmJpbmQodGhpcylcblxuICAgIHRoaXMuc2V0UmVmID0gdGhpcy5zZXRSZWYuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0UmVmcyA9IHRoaXMuc2V0UmVmcy5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dlZEZpbGVzOiBbXSxcbiAgICAgIGFjY2VwdGVkRmlsZXM6IFtdLFxuICAgICAgcmVqZWN0ZWRGaWxlczogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHByZXZlbnREcm9wT25Eb2N1bWVudCB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXVxuXG4gICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRvY3VtZW50RHJhZ092ZXIsIGZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3AsIGZhbHNlKVxuICAgIH1cbiAgICB0aGlzLmZpbGVJbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbklucHV0RWxlbWVudENsaWNrLCBmYWxzZSlcbiAgICAvLyBUcmllZCBpbXBsZW1lbnRpbmcgYWRkRXZlbnRMaXN0ZW5lciwgYnV0IGRpZG4ndCB3b3JrIG91dFxuICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IHRoaXMub25GaWxlRGlhbG9nQ2FuY2VsXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IHByZXZlbnREcm9wT25Eb2N1bWVudCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChwcmV2ZW50RHJvcE9uRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25Eb2N1bWVudERyYWdPdmVyKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMub25Eb2N1bWVudERyb3ApXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbGVJbnB1dEVsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSW5wdXRFbGVtZW50Q2xpY2ssIGZhbHNlKVxuICAgIH1cbiAgICAvLyBDYW4gYmUgcmVwbGFjZWQgd2l0aCByZW1vdmVFdmVudExpc3RlbmVyLCBpZiBhZGRFdmVudExpc3RlbmVyIHdvcmtzXG4gICAgaWYgKGRvY3VtZW50ICE9IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkub25mb2N1cyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb3NlSGFuZGxlcnMoaGFuZGxlcikge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyXG4gIH1cblxuICBvbkRvY3VtZW50RHJvcChldnQpIHtcbiAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5jb250YWlucyhldnQudGFyZ2V0KSkge1xuICAgICAgLy8gaWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdUYXJnZXRzID0gW11cbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGV2dCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uRHJhZ1N0YXJ0LmNhbGwodGhpcywgZXZ0KVxuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ0VudGVyKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBDb3VudCB0aGUgZHJvcHpvbmUgYW5kIGFueSBjaGlsZHJlbiB0aGF0IGFyZSBlbnRlcmVkLlxuICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmluZGV4T2YoZXZ0LnRhcmdldCkgPT09IC0xKSB7XG4gICAgICB0aGlzLmRyYWdUYXJnZXRzLnB1c2goZXZ0LnRhcmdldClcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSwgLy8gRG8gbm90IHJlbHkgb24gZmlsZXMgZm9yIHRoZSBkcmFnIHN0YXRlLiBJdCBkb2Vzbid0IHdvcmsgaW4gU2FmYXJpLlxuICAgICAgZHJhZ2dlZEZpbGVzOiBnZXREYXRhVHJhbnNmZXJJdGVtcyhldnQpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ0VudGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRHJhZ0VudGVyLmNhbGwodGhpcywgZXZ0KVxuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB0cnkge1xuICAgICAgLy8gVGhlIGZpbGUgZGlhbG9nIG9uIENocm9tZSBhbGxvd3MgdXNlcnMgdG8gZHJhZyBmaWxlcyBmcm9tIHRoZSBkaWFsb2cgb250b1xuICAgICAgLy8gdGhlIGRyb3B6b25lLCBjYXVzaW5nIHRoZSBicm93c2VyIHRoZSBjcmFzaCB3aGVuIHRoZSBmaWxlIGRpYWxvZyBpcyBjbG9zZWQuXG4gICAgICAvLyBBIGRyb3AgZWZmZWN0IG9mICdub25lJyBwcmV2ZW50cyB0aGUgZmlsZSBmcm9tIGJlaW5nIGRyb3BwZWRcbiAgICAgIGV2dC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID8gJ25vbmUnIDogJ2NvcHknIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdPdmVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRHJhZ092ZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb25EcmFnTGVhdmUoZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIE9ubHkgZGVhY3RpdmF0ZSBvbmNlIHRoZSBkcm9wem9uZSBhbmQgYWxsIGNoaWxkcmVuIGhhdmUgYmVlbiBsZWZ0LlxuICAgIHRoaXMuZHJhZ1RhcmdldHMgPSB0aGlzLmRyYWdUYXJnZXRzLmZpbHRlcihlbCA9PiBlbCAhPT0gZXZ0LnRhcmdldCAmJiB0aGlzLm5vZGUuY29udGFpbnMoZWwpKVxuICAgIGlmICh0aGlzLmRyYWdUYXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIENsZWFyIGRyYWdnaW5nIGZpbGVzIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgZHJhZ2dlZEZpbGVzOiBbXVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRyYWdMZWF2ZS5jYWxsKHRoaXMsIGV2dClcbiAgICB9XG4gIH1cblxuICBvbkRyb3AoZXZ0KSB7XG4gICAgY29uc3QgeyBvbkRyb3AsIG9uRHJvcEFjY2VwdGVkLCBvbkRyb3BSZWplY3RlZCwgbXVsdGlwbGUsIGRpc2FibGVQcmV2aWV3LCBhY2NlcHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBmaWxlTGlzdCA9IGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2dClcbiAgICBjb25zdCBhY2NlcHRlZEZpbGVzID0gW11cbiAgICBjb25zdCByZWplY3RlZEZpbGVzID0gW11cblxuICAgIC8vIFN0b3AgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIFJlc2V0IHRoZSBjb3VudGVyIGFsb25nIHdpdGggdGhlIGRyYWcgb24gYSBkcm9wLlxuICAgIHRoaXMuZHJhZ1RhcmdldHMgPSBbXVxuICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gZmFsc2VcblxuICAgIGZpbGVMaXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBpZiAoIWRpc2FibGVQcmV2aWV3KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmlsZS5wcmV2aWV3ID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIHByZXZpZXcgZm9yIGZpbGUnLCBmaWxlLCBlcnIpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpICYmXG4gICAgICAgIGZpbGVNYXRjaFNpemUoZmlsZSwgdGhpcy5wcm9wcy5tYXhTaXplLCB0aGlzLnByb3BzLm1pblNpemUpXG4gICAgICApIHtcbiAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3RlZEZpbGVzLnB1c2goZmlsZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgLy8gaWYgbm90IGluIG11bHRpIG1vZGUgYWRkIGFueSBleHRyYSBhY2NlcHRlZCBmaWxlcyB0byByZWplY3RlZC5cbiAgICAgIC8vIFRoaXMgd2lsbCBhbGxvdyBlbmQgdXNlcnMgdG8gZWFzaWx5IGlnbm9yZSBhIG11bHRpIGZpbGUgZHJvcCBpbiBcInNpbmdsZVwiIG1vZGUuXG4gICAgICByZWplY3RlZEZpbGVzLnB1c2goLi4uYWNjZXB0ZWRGaWxlcy5zcGxpY2UoMSkpXG4gICAgfVxuXG4gICAgaWYgKG9uRHJvcCkge1xuICAgICAgb25Ecm9wLmNhbGwodGhpcywgYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcywgZXZ0KVxuICAgIH1cblxuICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wUmVqZWN0ZWQpIHtcbiAgICAgIG9uRHJvcFJlamVjdGVkLmNhbGwodGhpcywgcmVqZWN0ZWRGaWxlcywgZXZ0KVxuICAgIH1cblxuICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcbiAgICAgIG9uRHJvcEFjY2VwdGVkLmNhbGwodGhpcywgYWNjZXB0ZWRGaWxlcywgZXZ0KVxuICAgIH1cblxuICAgIC8vIENsZWFyIGZpbGVzIHZhbHVlXG4gICAgdGhpcy5kcmFnZ2VkRmlsZXMgPSBudWxsXG5cbiAgICAvLyBSZXNldCBkcmFnIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgZHJhZ2dlZEZpbGVzOiBbXSxcbiAgICAgIGFjY2VwdGVkRmlsZXMsXG4gICAgICByZWplY3RlZEZpbGVzXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2xpY2soZXZ0KSB7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBkaXNhYmxlQ2xpY2sgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVDbGljaykge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2suY2FsbCh0aGlzLCBldnQpXG4gICAgICB9XG5cbiAgICAgIC8vIGluIElFMTEvRWRnZSB0aGUgZmlsZS1icm93c2VyIGRpYWxvZyBpcyBibG9ja2luZywgZW5zdXJlIHRoaXMgaXMgYmVoaW5kIHNldFRpbWVvdXRcbiAgICAgIC8vIHRoaXMgaXMgc28gcmVhY3QgY2FuIGhhbmRsZSBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBvbkNsaWNrIHByb3AgYWJvdmUgYWJvdmVcbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy80NTBcbiAgICAgIHNldFRpbWVvdXQodGhpcy5vcGVuLmJpbmQodGhpcyksIDApXG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEVsZW1lbnRDbGljayhldnQpIHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzICYmIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DbGljaygpXG4gICAgfVxuICB9XG5cbiAgb25GaWxlRGlhbG9nQ2FuY2VsKCkge1xuICAgIC8vIHRpbWVvdXQgd2lsbCBub3QgcmVjb2duaXplIGNvbnRleHQgb2YgdGhpcyBtZXRob2RcbiAgICBjb25zdCB7IG9uRmlsZURpYWxvZ0NhbmNlbCB9ID0gdGhpcy5wcm9wc1xuICAgIC8vIGV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgRmlsZURpYWxvZyBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcbiAgICBpZiAodGhpcy5pc0ZpbGVEaWFsb2dBY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSZXR1cm5zIGFuIG9iamVjdCBhcyBGaWxlTGlzdFxuICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLmZpbGVJbnB1dEVsXG5cbiAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmlzRmlsZURpYWxvZ0FjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9uRmlsZURpYWxvZ0NhbmNlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uRmlsZURpYWxvZ0NhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcbiAgICB9XG4gIH1cblxuICBzZXRSZWYocmVmKSB7XG4gICAgdGhpcy5ub2RlID0gcmVmXG4gIH1cblxuICBzZXRSZWZzKHJlZikge1xuICAgIHRoaXMuZmlsZUlucHV0RWwgPSByZWZcbiAgfVxuICAvKipcbiAgICogT3BlbiBzeXN0ZW0gZmlsZSB1cGxvYWQgZGlhbG9nLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBvcGVuKCkge1xuICAgIHRoaXMuaXNGaWxlRGlhbG9nQWN0aXZlID0gdHJ1ZVxuICAgIHRoaXMuZmlsZUlucHV0RWwudmFsdWUgPSBudWxsXG4gICAgdGhpcy5maWxlSW5wdXRFbC5jbGljaygpXG4gIH1cblxuICByZW5kZXJDaGlsZHJlbiA9IChjaGlsZHJlbiwgaXNEcmFnQWN0aXZlLCBpc0RyYWdBY2NlcHQsIGlzRHJhZ1JlamVjdCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIGlzRHJhZ0FjdGl2ZSxcbiAgICAgICAgaXNEcmFnQWNjZXB0LFxuICAgICAgICBpc0RyYWdSZWplY3RcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjY2VwdCxcbiAgICAgIGFjY2VwdENsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZENsYXNzTmFtZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICByZWplY3RDbGFzc05hbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB7XG4gICAgICBhY2NlcHRTdHlsZSxcbiAgICAgIGFjdGl2ZVN0eWxlLFxuICAgICAgY2xhc3NOYW1lID0gJycsXG4gICAgICBkaXNhYmxlZFN0eWxlLFxuICAgICAgcmVqZWN0U3R5bGUsXG4gICAgICBzdHlsZSxcbiAgICAgIC4uLnByb3BzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgfSA9IHJlc3RcblxuICAgIGNvbnN0IHsgaXNEcmFnQWN0aXZlLCBkcmFnZ2VkRmlsZXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBmaWxlc0NvdW50ID0gZHJhZ2dlZEZpbGVzLmxlbmd0aFxuICAgIGNvbnN0IGlzTXVsdGlwbGVBbGxvd2VkID0gbXVsdGlwbGUgfHwgZmlsZXNDb3VudCA8PSAxXG4gICAgY29uc3QgaXNEcmFnQWNjZXB0ID0gZmlsZXNDb3VudCA+IDAgJiYgYWxsRmlsZXNBY2NlcHRlZChkcmFnZ2VkRmlsZXMsIHRoaXMucHJvcHMuYWNjZXB0KVxuICAgIGNvbnN0IGlzRHJhZ1JlamVjdCA9IGZpbGVzQ291bnQgPiAwICYmICghaXNEcmFnQWNjZXB0IHx8ICFpc011bHRpcGxlQWxsb3dlZClcbiAgICBjb25zdCBub1N0eWxlcyA9XG4gICAgICAhY2xhc3NOYW1lICYmICFzdHlsZSAmJiAhYWN0aXZlU3R5bGUgJiYgIWFjY2VwdFN0eWxlICYmICFyZWplY3RTdHlsZSAmJiAhZGlzYWJsZWRTdHlsZVxuXG4gICAgaWYgKGlzRHJhZ0FjdGl2ZSAmJiBhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY3RpdmVDbGFzc05hbWVcbiAgICB9XG4gICAgaWYgKGlzRHJhZ0FjY2VwdCAmJiBhY2NlcHRDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBhY2NlcHRDbGFzc05hbWVcbiAgICB9XG4gICAgaWYgKGlzRHJhZ1JlamVjdCAmJiByZWplY3RDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyByZWplY3RDbGFzc05hbWVcbiAgICB9XG4gICAgaWYgKGRpc2FibGVkICYmIGRpc2FibGVkQ2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyAnICsgZGlzYWJsZWRDbGFzc05hbWVcbiAgICB9XG5cbiAgICBpZiAobm9TdHlsZXMpIHtcbiAgICAgIHN0eWxlID0gc3R5bGVzLmRlZmF1bHRcbiAgICAgIGFjdGl2ZVN0eWxlID0gc3R5bGVzLmFjdGl2ZVxuICAgICAgYWNjZXB0U3R5bGUgPSBzdHlsZS5hY3RpdmVcbiAgICAgIHJlamVjdFN0eWxlID0gc3R5bGVzLnJlamVjdGVkXG4gICAgICBkaXNhYmxlZFN0eWxlID0gc3R5bGVzLmRpc2FibGVkXG4gICAgfVxuXG4gICAgbGV0IGFwcGxpZWRTdHlsZSA9IHsgLi4uc3R5bGUgfVxuICAgIGlmIChhY3RpdmVTdHlsZSAmJiBpc0RyYWdBY3RpdmUpIHtcbiAgICAgIGFwcGxpZWRTdHlsZSA9IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIC4uLmFjdGl2ZVN0eWxlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY2NlcHRTdHlsZSAmJiBpc0RyYWdBY2NlcHQpIHtcbiAgICAgIGFwcGxpZWRTdHlsZSA9IHtcbiAgICAgICAgLi4uYXBwbGllZFN0eWxlLFxuICAgICAgICAuLi5hY2NlcHRTdHlsZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVqZWN0U3R5bGUgJiYgaXNEcmFnUmVqZWN0KSB7XG4gICAgICBhcHBsaWVkU3R5bGUgPSB7XG4gICAgICAgIC4uLmFwcGxpZWRTdHlsZSxcbiAgICAgICAgLi4ucmVqZWN0U3R5bGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpc2FibGVkU3R5bGUgJiYgZGlzYWJsZWQpIHtcbiAgICAgIGFwcGxpZWRTdHlsZSA9IHtcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIC4uLmRpc2FibGVkU3R5bGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEF0dHJpYnV0ZXMgPSB7XG4gICAgICBhY2NlcHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgbXVsdGlwbGU6IHN1cHBvcnRNdWx0aXBsZSAmJiBtdWx0aXBsZSxcbiAgICAgIHJlZjogdGhpcy5zZXRSZWZzLFxuICAgICAgb25DaGFuZ2U6IHRoaXMub25Ecm9wLFxuICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJ1xuICAgIH1cblxuICAgIGlmIChuYW1lICYmIG5hbWUubGVuZ3RoKSB7XG4gICAgICBpbnB1dEF0dHJpYnV0ZXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICAvLyBEZXN0cnVjdHVyZSBjdXN0b20gcHJvcHMgYXdheSBmcm9tIHByb3BzIHVzZWQgZm9yIHRoZSBkaXYgZWxlbWVudFxuICAgIGNvbnN0IHtcbiAgICAgIGFjY2VwdGVkRmlsZXMsXG4gICAgICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQsXG4gICAgICBkaXNhYmxlUHJldmlldyxcbiAgICAgIGRpc2FibGVDbGljayxcbiAgICAgIG9uRHJvcEFjY2VwdGVkLFxuICAgICAgb25Ecm9wUmVqZWN0ZWQsXG4gICAgICBvbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgICBtYXhTaXplLFxuICAgICAgbWluU2l6ZSxcbiAgICAgIC4uLmRpdlByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc3R5bGU9e2FwcGxpZWRTdHlsZX1cbiAgICAgICAgey4uLmRpdlByb3BzIC8qIGV4cGFuZCB1c2VyIHByb3ZpZGVkIHByb3BzIGZpcnN0IHNvIGV2ZW50IGhhbmRsZXJzIGFyZSBuZXZlciBvdmVycmlkZGVuICovfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbXBvc2VIYW5kbGVycyh0aGlzLm9uQ2xpY2spfVxuICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyYWdTdGFydCl9XG4gICAgICAgIG9uRHJhZ0VudGVyPXt0aGlzLmNvbXBvc2VIYW5kbGVycyh0aGlzLm9uRHJhZ0VudGVyKX1cbiAgICAgICAgb25EcmFnT3Zlcj17dGhpcy5jb21wb3NlSGFuZGxlcnModGhpcy5vbkRyYWdPdmVyKX1cbiAgICAgICAgb25EcmFnTGVhdmU9e3RoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25EcmFnTGVhdmUpfVxuICAgICAgICBvbkRyb3A9e3RoaXMuY29tcG9zZUhhbmRsZXJzKHRoaXMub25Ecm9wKX1cbiAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgYXJpYS1kaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKGNoaWxkcmVuLCBpc0RyYWdBY3RpdmUsIGlzRHJhZ0FjY2VwdCwgaXNEcmFnUmVqZWN0KX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgey4uLmlucHV0UHJvcHMgLyogZXhwYW5kIHVzZXIgcHJvdmlkZWQgaW5wdXRQcm9wcyBmaXJzdCBzbyBpbnB1dEF0dHJpYnV0ZXMgb3ZlcnJpZGUgdGhlbSAqL31cbiAgICAgICAgICB7Li4uaW5wdXRBdHRyaWJ1dGVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3B6b25lXG5cbkRyb3B6b25lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFsbG93IHNwZWNpZmljIHR5cGVzIG9mIGZpbGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9hdHRyLWFjY2VwdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAgICogZm9yIGV4YW1wbGUsIGFyZSByZXBvcnRlZCBhcyB0ZXh0L3BsYWluIHVuZGVyIG1hY09TIGJ1dCBhcyBhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwgdW5kZXJcbiAgICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbC5cbiAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NlxuICAgKi9cbiAgYWNjZXB0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDb250ZW50cyBvZiB0aGUgZHJvcHpvbmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWxsb3cgY2xpY2tpbmcgb24gdGhlIGRyb3B6b25lIGNvbnRhaW5lciB0byBvcGVuIGZpbGUgZGlhbG9nXG4gICAqL1xuICBkaXNhYmxlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lIGVudGlyZWx5XG4gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUvZGlzYWJsZSBwcmV2aWV3IGdlbmVyYXRpb25cbiAgICovXG4gIGRpc2FibGVQcmV2aWV3OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgZmFsc2UsIGFsbG93IGRyb3BwZWQgaXRlbXMgdG8gdGFrZSBvdmVyIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG4gICAqL1xuICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQYXNzIGFkZGl0aW9uYWwgYXR0cmlidXRlcyB0byB0aGUgYDxpbnB1dCB0eXBlPVwiZmlsZVwiLz5gIHRhZ1xuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQWxsb3cgZHJvcHBpbmcgbXVsdGlwbGUgZmlsZXNcbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogYG5hbWVgIGF0dHJpYnV0ZSBmb3IgdGhlIGlucHV0IHRhZ1xuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTWF4aW11bSBmaWxlIHNpemVcbiAgICovXG4gIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gZmlsZSBzaXplXG4gICAqL1xuICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogY2xhc3NOYW1lIGZvciBhY3RpdmUgc3RhdGVcbiAgICovXG4gIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogY2xhc3NOYW1lIGZvciBhY2NlcHRlZCBzdGF0ZVxuICAgKi9cbiAgYWNjZXB0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBjbGFzc05hbWUgZm9yIHJlamVjdGVkIHN0YXRlXG4gICAqL1xuICByZWplY3RDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIGNsYXNzTmFtZSBmb3IgZGlzYWJsZWQgc3RhdGVcbiAgICovXG4gIGRpc2FibGVkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5XG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyYWcgaXMgYWN0aXZlXG4gICAqL1xuICBhY3RpdmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ1NTIHN0eWxlcyB0byBhcHBseSB3aGVuIGRyb3Agd2lsbCBiZSBhY2NlcHRlZFxuICAgKi9cbiAgYWNjZXB0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENTUyBzdHlsZXMgdG8gYXBwbHkgd2hlbiBkcm9wIHdpbGwgYmUgcmVqZWN0ZWRcbiAgICovXG4gIHJlamVjdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDU1Mgc3R5bGVzIHRvIGFwcGx5IHdoZW4gZHJvcHpvbmUgaXMgZGlzYWJsZWRcbiAgICovXG4gIGRpc2FibGVkU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIG9uQ2xpY2sgY2FsbGJhY2tcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyb3AgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJvcEFjY2VwdGVkIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyb3BBY2NlcHRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJvcFJlamVjdGVkIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyb3BSZWplY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ1N0YXJ0IGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ0VudGVyIGNhbGxiYWNrXG4gICAqL1xuICBvbkRyYWdFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIG9uRHJhZ092ZXIgY2FsbGJhY2tcbiAgICovXG4gIG9uRHJhZ092ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBvbkRyYWdMZWF2ZSBjYWxsYmFja1xuICAgKi9cbiAgb25EcmFnTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgY2FsbGJhY2sgb24gY2xpY2tpbmcgdGhlIGNhbmNlbCBidXR0b24gb2YgdGhlIGZpbGUgZGlhbG9nXG4gICAqL1xuICBvbkZpbGVEaWFsb2dDYW5jZWw6IFByb3BUeXBlcy5mdW5jXG59XG5cbkRyb3B6b25lLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiB0cnVlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVQcmV2aWV3OiBmYWxzZSxcbiAgZGlzYWJsZUNsaWNrOiBmYWxzZSxcbiAgbXVsdGlwbGU6IHRydWUsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhY2NlcHRzIGZyb20gJ2F0dHItYWNjZXB0J1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydE11bHRpcGxlID1cbiAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50XG4gICAgPyAnbXVsdGlwbGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICA6IHRydWVcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFUcmFuc2Zlckl0ZW1zKGV2ZW50KSB7XG4gIGxldCBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBbXVxuICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgY29uc3QgZHQgPSBldmVudC5kYXRhVHJhbnNmZXJcbiAgICBpZiAoZHQuZmlsZXMgJiYgZHQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5maWxlc1xuICAgIH0gZWxzZSBpZiAoZHQuaXRlbXMgJiYgZHQuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBEdXJpbmcgdGhlIGRyYWcgZXZlbiB0aGUgZGF0YVRyYW5zZmVyLmZpbGVzIGlzIG51bGxcbiAgICAgIC8vIGJ1dCBDaHJvbWUgaW1wbGVtZW50cyBzb21lIGRyYWcgc3RvcmUsIHdoaWNoIGlzIGFjY2VzaWJsZSB2aWEgZGF0YVRyYW5zZmVyLml0ZW1zXG4gICAgICBkYXRhVHJhbnNmZXJJdGVtc0xpc3QgPSBkdC5pdGVtc1xuICAgIH1cbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzKSB7XG4gICAgZGF0YVRyYW5zZmVySXRlbXNMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzXG4gIH1cbiAgLy8gQ29udmVydCBmcm9tIERhdGFUcmFuc2Zlckl0ZW1zTGlzdCB0byB0aGUgbmF0aXZlIEFycmF5XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhVHJhbnNmZXJJdGVtc0xpc3QpXG59XG5cbi8vIEZpcmVmb3ggdmVyc2lvbnMgcHJpb3IgdG8gNTMgcmV0dXJuIGEgYm9ndXMgTUlNRSB0eXBlIGZvciBldmVyeSBmaWxlIGRyYWcsIHNvIGRyYWdvdmVycyB3aXRoXG4vLyB0aGF0IE1JTUUgdHlwZSB3aWxsIGFsd2F5cyBiZSBhY2NlcHRlZFxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpIHtcbiAgcmV0dXJuIGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtbW96LWZpbGUnIHx8IGFjY2VwdHMoZmlsZSwgYWNjZXB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZU1hdGNoU2l6ZShmaWxlLCBtYXhTaXplLCBtaW5TaXplKSB7XG4gIHJldHVybiBmaWxlLnNpemUgPD0gbWF4U2l6ZSAmJiBmaWxlLnNpemUgPj0gbWluU2l6ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChmaWxlcywgYWNjZXB0KSB7XG4gIHJldHVybiBmaWxlcy5ldmVyeShmaWxlID0+IGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpKVxufVxuXG4vLyBhbGxvdyB0aGUgZW50aXJlIGRvY3VtZW50IHRvIGJlIGEgZHJhZyB0YXJnZXRcbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50RHJhZ092ZXIoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKGUpe2lmKHJbZV0pcmV0dXJuIHJbZV0uZXhwb3J0czt2YXIgbz1yW2VdPXtleHBvcnRzOnt9LGlkOmUsbG9hZGVkOiExfTtyZXR1cm4gdFtlXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIG4ubT10LG4uYz1yLG4ucD1cIlwiLG4oMCl9KFtmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7bi5fX2VzTW9kdWxlPSEwLHIoOCkscig5KSxuW1wiZGVmYXVsdFwiXT1mdW5jdGlvbih0LG4pe2lmKHQmJm4pe3ZhciByPWZ1bmN0aW9uKCl7dmFyIHI9QXJyYXkuaXNBcnJheShuKT9uOm4uc3BsaXQoXCIsXCIpLGU9dC5uYW1lfHxcIlwiLG89dC50eXBlfHxcIlwiLGk9by5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpO3JldHVybnt2OnIuc29tZShmdW5jdGlvbih0KXt2YXIgbj10LnRyaW0oKTtyZXR1cm5cIi5cIj09PW4uY2hhckF0KDApP2UudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChuLnRvTG93ZXJDYXNlKCkpOi9cXC9cXCokLy50ZXN0KG4pP2k9PT1uLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik6bz09PW59KX19KCk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHIpcmV0dXJuIHIudn1yZXR1cm4hMH0sdC5leHBvcnRzPW5bXCJkZWZhdWx0XCJdfSxmdW5jdGlvbih0LG4pe3ZhciByPXQuZXhwb3J0cz17dmVyc2lvbjpcIjEuMi4yXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9cil9LGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9cil9LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDIpLG89cigxKSxpPXIoNCksdT1yKDE5KSxjPVwicHJvdG90eXBlXCIsZj1mdW5jdGlvbih0LG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKX19LHM9ZnVuY3Rpb24odCxuLHIpe3ZhciBhLHAsbCx5LGQ9dCZzLkcsaD10JnMuUCx2PWQ/ZTp0JnMuUz9lW25dfHwoZVtuXT17fSk6KGVbbl18fHt9KVtjXSx4PWQ/bzpvW25dfHwob1tuXT17fSk7ZCYmKHI9bik7Zm9yKGEgaW4gcilwPSEodCZzLkYpJiZ2JiZhIGluIHYsbD0ocD92OnIpW2FdLHk9dCZzLkImJnA/ZihsLGUpOmgmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGw/ZihGdW5jdGlvbi5jYWxsLGwpOmwsdiYmIXAmJnUodixhLGwpLHhbYV0hPWwmJmkoeCxhLHkpLGgmJigoeFtjXXx8KHhbY109e30pKVthXT1sKX07ZS5jb3JlPW8scy5GPTEscy5HPTIscy5TPTQscy5QPTgscy5CPTE2LHMuVz0zMix0LmV4cG9ydHM9c30sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNSksbz1yKDE4KTt0LmV4cG9ydHM9cigyMik/ZnVuY3Rpb24odCxuLHIpe3JldHVybiBlLnNldERlc2ModCxuLG8oMSxyKSl9OmZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gdFtuXT1yLHR9fSxmdW5jdGlvbih0LG4pe3ZhciByPU9iamVjdDt0LmV4cG9ydHM9e2NyZWF0ZTpyLmNyZWF0ZSxnZXRQcm90bzpyLmdldFByb3RvdHlwZU9mLGlzRW51bTp7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxnZXREZXNjOnIuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLHNldERlc2M6ci5kZWZpbmVQcm9wZXJ0eSxzZXREZXNjczpyLmRlZmluZVByb3BlcnRpZXMsZ2V0S2V5czpyLmtleXMsZ2V0TmFtZXM6ci5nZXRPd25Qcm9wZXJ0eU5hbWVzLGdldFN5bWJvbHM6ci5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsZWFjaDpbXS5mb3JFYWNofX0sZnVuY3Rpb24odCxuKXt2YXIgcj0wLGU9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytyK2UpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LG4scil7dmFyIGU9cigyMCkoXCJ3a3NcIiksbz1yKDIpLlN5bWJvbDt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGVbdF18fChlW3RdPW8mJm9bdF18fChvfHxyKDYpKShcIlN5bWJvbC5cIit0KSl9fSxmdW5jdGlvbih0LG4scil7cigyNiksdC5leHBvcnRzPXIoMSkuQXJyYXkuc29tZX0sZnVuY3Rpb24odCxuLHIpe3IoMjUpLHQuZXhwb3J0cz1yKDEpLlN0cmluZy5lbmRzV2l0aH0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LG4pe3ZhciByPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gci5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTApO3QuZXhwb3J0cz1mdW5jdGlvbih0LG4scil7aWYoZSh0KSx2b2lkIDA9PT1uKXJldHVybiB0O3N3aXRjaChyKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiB0LmNhbGwobixyKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihyLGUpe3JldHVybiB0LmNhbGwobixyLGUpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHIsZSxvKXtyZXR1cm4gdC5jYWxsKG4scixlLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShuLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsbixyKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIG49Ly4vO3RyeXtcIi8uL1wiW3RdKG4pfWNhdGNoKGUpe3RyeXtyZXR1cm4gbltyKDcpKFwibWF0Y2hcIildPSExLCFcIi8uL1wiW3RdKG4pfWNhdGNoKG8pe319cmV0dXJuITB9fSxmdW5jdGlvbih0LG4pe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2gobil7cmV0dXJuITB9fX0sZnVuY3Rpb24odCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH19LGZ1bmN0aW9uKHQsbixyKXt2YXIgZT1yKDE2KSxvPXIoMTEpLGk9cig3KShcIm1hdGNoXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgbjtyZXR1cm4gZSh0KSYmKHZvaWQgMCE9PShuPXRbaV0pPyEhbjpcIlJlZ0V4cFwiPT1vKHQpKX19LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbil7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOm59fX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1yKDQpLGk9cig2KShcInNyY1wiKSx1PVwidG9TdHJpbmdcIixjPUZ1bmN0aW9uW3VdLGY9KFwiXCIrYykuc3BsaXQodSk7cigxKS5pbnNwZWN0U291cmNlPWZ1bmN0aW9uKHQpe3JldHVybiBjLmNhbGwodCl9LCh0LmV4cG9ydHM9ZnVuY3Rpb24odCxuLHIsdSl7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG8ocixpLHRbbl0/XCJcIit0W25dOmYuam9pbihTdHJpbmcobikpKSxcIm5hbWVcImluIHJ8fChyLm5hbWU9bikpLHQ9PT1lP3Rbbl09cjoodXx8ZGVsZXRlIHRbbl0sbyh0LG4scikpfSkoRnVuY3Rpb24ucHJvdG90eXBlLHUsZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZ0aGlzW2ldfHxjLmNhbGwodGhpcyl9KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMiksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLGk9ZVtvXXx8KGVbb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaVt0XXx8KGlbdF09e30pfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMTcpLG89cigxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsbixyKXtpZihlKG4pKXRocm93IFR5cGVFcnJvcihcIlN0cmluZyNcIityK1wiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtyZXR1cm4gU3RyaW5nKG8odCkpfX0sZnVuY3Rpb24odCxuLHIpe3QuZXhwb3J0cz0hcigxNSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsbil7dmFyIHI9TWF0aC5jZWlsLGU9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9lOnIpKHQpfX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoMjMpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhlKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LG4scil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9cigzKSxvPXIoMjQpLGk9cigyMSksdT1cImVuZHNXaXRoXCIsYz1cIlwiW3VdO2UoZS5QK2UuRipyKDE0KSh1KSxcIlN0cmluZ1wiLHtlbmRzV2l0aDpmdW5jdGlvbih0KXt2YXIgbj1pKHRoaXMsdCx1KSxyPWFyZ3VtZW50cyxlPXIubGVuZ3RoPjE/clsxXTp2b2lkIDAsZj1vKG4ubGVuZ3RoKSxzPXZvaWQgMD09PWU/ZjpNYXRoLm1pbihvKGUpLGYpLGE9U3RyaW5nKHQpO3JldHVybiBjP2MuY2FsbChuLGEscyk6bi5zbGljZShzLWEubGVuZ3RoLHMpPT09YX19KX0sZnVuY3Rpb24odCxuLHIpe3ZhciBlPXIoNSksbz1yKDMpLGk9cigxKS5BcnJheXx8QXJyYXksdT17fSxjPWZ1bmN0aW9uKHQsbil7ZS5lYWNoLmNhbGwodC5zcGxpdChcIixcIiksZnVuY3Rpb24odCl7dm9pZCAwPT1uJiZ0IGluIGk/dVt0XT1pW3RdOnQgaW5bXSYmKHVbdF09cigxMikoRnVuY3Rpb24uY2FsbCxbXVt0XSxuKSl9KX07YyhcInBvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXNcIiwxKSxjKFwiaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlc1wiLDMpLGMoXCJqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YscmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbFwiKSxvKG8uUyxcIkFycmF5XCIsdSl9XSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXR0ci1hY2NlcHQvZGlzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlamVjdGVkOiB7XG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjYzY2JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJyM2YzYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG4gIH0sXG4gIGRlZmF1bHQ6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwLFxuICAgIGJvcmRlcldpZHRoOiAyLFxuICAgIGJvcmRlckNvbG9yOiAnIzY2NicsXG4gICAgYm9yZGVyU3R5bGU6ICdkYXNoZWQnLFxuICAgIGJvcmRlclJhZGl1czogNVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc3R5bGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
