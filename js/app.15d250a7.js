(function (e)
{
	function t(t)
	{
		for (var r, n, i = t[0], c = t[1], l = t[2], d = 0, p = []; d < i.length; d++) n = i[d], o[n] && p.push(o[n][0]), o[n] = 0;
		for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
		u && u(t);
		while (p.length) p.shift()();
		return s.push.apply(s, l || []), a()
	}

	function a()
	{
		for (var e, t = 0; t < s.length; t++)
		{
			for (var a = s[t], r = !0, i = 1; i < a.length; i++)
			{
				var c = a[i];
				0 !== o[c] && (r = !1)
			}
			r && (s.splice(t--, 1), e = n(n.s = a[0]))
		}
		return e
	}
	var r = {},
		o = {
			app: 0
		},
		s = [];

	function n(t)
	{
		if (r[t]) return r[t].exports;
		var a = r[t] = {
			i: t,
			l: !1,
			exports:
			{}
		};
		return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
	}
	n.m = e, n.c = r, n.d = function (e, t, a)
	{
		n.o(e, t) || Object.defineProperty(e, t,
		{
			enumerable: !0,
			get: a
		})
	}, n.r = function (e)
	{
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag,
		{
			value: "Module"
		}), Object.defineProperty(e, "__esModule",
		{
			value: !0
		})
	}, n.t = function (e, t)
	{
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (n.r(a), Object.defineProperty(a, "default",
			{
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(a, r, function (t)
			{
				return e[t]
			}.bind(null, r));
		return a
	}, n.n = function (e)
	{
		var t = e && e.__esModule ? function ()
		{
			return e["default"]
		} : function ()
		{
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function (e, t)
	{
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/";
	var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
		c = i.push.bind(i);
	i.push = t, i = i.slice();
	for (var l = 0; l < i.length; l++) t(i[l]);
	var u = c;
	s.push([0, "chunk-vendors"]), a()
})(
{
	0: function (e, t, a)
	{
		e.exports = a("56d7")
	},
	1591: function (e, t, a) {},
	2394: function (e)
	{
		e.exports = {
			header:
			{
				builtby: "Conçu avec 🌮 par"
			},
			form:
			{
				columns: "Colonnes",
				rows: "Rangées",
				columngap: "Marge entre Colonnes",
				rowgap: "Marge entre Rangées",
				codebutton: "Puis-je voir le code ?",
				project: "Que fait ce projet ?",
				reset: "Réinitialiser la grille"
			},
			modal:
			{
				header:
				{
					yourcode: "Votre code",
					what: "Qu'est-ce que c'est ?"
				},
				copy:
				{
					title: "Copier le code ci-dessous :",
					clipboard: "Copier dans le presse-papier !"
				},
				button: "Terminé"
			},
			grid:
			{
				realcssunit: "Utilisez de vraies unités CSS !"
			},
			explain:
			{
				paragraph1: "Vous pouvez définir les nombres et unités de vos colonnes et rangées, et je générerai une grille CSS pour vous ! <strong>Déplacez le curseur dans les cases</strong> pour créer des divs à l'intérieur de la grille.",
				paragraph2: "Bien que ce projet puisse générer une mise en page de base pour vous, il ne constitue pas une visite complète des fonctionnalités de CSS Grid. C'est un moyen pour vous d'utiliser les fonctionnalités de CSS Grid rapidement.",
				paragraph3: "J'ai remarqué que beaucoup de gens n'utilisaient pas CSS Grid parce qu'ils trouvaient que c'était trop complexe à assimiler. CSS Grid a tellement de possibilités, et ce petit générateur n'en reproduit qu'une fraction. Le but de ce projet est de permettre aux gens d'être rapidement opérationnel et de créer des mises en pages plus intéressantes. ",
				paragraph4: "Une fois que vous aurez utilisé un peu ce générateur, je vous recommande de suivre le travail de",
				cssguide: "un guide CSS Grid sur CSS-Tricks",
				paragraph5: "pour approfondir vos connaissances sur le sujet. Il existe aussi",
				paragraph6: "et un petit jeu amusant appelé",
				paragraph7: "pour vous aider à en apprendre davantage !",
				contributions: "Ce projet est ouvert aux contributions !",
				fork: "Forkez le ici.",
				note: "À noter : les lecteurs d'écrans liront les divs dans l'ordre dans lequel vous les ajoutez. Gardez cela à l'esprit lorsque vous construisez une grille."
			},
			utils:
			{
				and: "et"
			}
		}
	},
	3418: function (e, t, a) {},
	"558c": function (e, t, a)
	{
		"use strict";
		var r = a("c1df"),
			o = a.n(r);
		o.a
	},
	"56d7": function (e, t, a)
	{
		"use strict";
		a.r(t);
		a("cadf"), a("551c"), a("f751"), a("097d");
		var r = a("2b0e"),
			o = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div",
				{
					attrs:
					{
						id: "app"
					}
				}, [a("app-header"), a("section",
				{
					staticClass: "container"
				}, [a("app-grid"), a("app-form")], 1)], 1)
			},
			s = [],
			n = (a("386d"), function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("header", [a("app-github-corner"), a("app-logo")], 1)
			}),
			i = [],
			c = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("nav", [a("svg",
				{
					attrs:
					{
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 100 100",
						width: "50",
						height: "50"
					}
				}, [a("g",
				{
					staticClass: "logo",
					attrs:
					{
						"fill-rule": "nonzero"
					}
				}, [a("path",
				{
					attrs:
					{
						d: "M23 23v65h65V23H23zm-1-1h67v67H22V22zM10 10v8h8v-8h-8zM9 9h10v10H9V9z"
					}
				}), a("path",
				{
					attrs:
					{
						d: "M9.146 9.854a.5.5 0 1 1 .708-.708l9 9a.5.5 0 0 1-.708.708l-9-9zM33 22h1v66.168h-1zM66 22h1v66.168h-1zM44 22h1v66.168h-1zM77 22h1v66.168h-1zM55 22h1v66.168h-1z"
					}
				}), a("path",
				{
					attrs:
					{
						d: "M88.584 34.084v-1H22.416v1zM88.584 78.084v-1H22.416v1zM88.584 56.084v-1H22.416v1zM88.584 45.084v-1H22.416v1zM89.084 67.084v-1H22.916v1zM13 18.5h1V89h-1zM18 14v-1h71v1z"
					}
				}), a("path",
				{
					attrs:
					{
						d: "M88 9h1v9h-1zM9 89v-1h9v1z"
					}
				})])]), e._v("\n  CSS Grid Generator\n  "), a("p",
				{
					staticClass: "caveat"
				}, [e._v("\n    " + e._s(e.$t("header.builtby")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://twitter.com/sarah_edo",
						target: "_blank"
					}
				}, [e._v("sarah_edo")])])])
			},
			l = [],
			u = {},
			d = u,
			p = (a("9fb0"), a("2877")),
			m = Object(p["a"])(d, c, l, !1, null, "1d215c44", null),
			h = m.exports,
			g = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("a",
				{
					staticClass: "github-corner",
					attrs:
					{
						href: "https://github.com/sdras/cssgridgenerator",
						"aria-label": "View source on GitHub"
					}
				}, [a("svg",
				{
					staticStyle:
					{
						fill: "#64CEAA",
						color: "#192d38",
						position: "absolute",
						top: "0",
						border: "0",
						right: "0"
					},
					attrs:
					{
						width: "80",
						height: "80",
						viewBox: "0 0 250 250",
						"aria-hidden": "true"
					}
				}, [a("path",
				{
					attrs:
					{
						d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
					}
				}), a("path",
				{
					staticClass: "octo-arm",
					staticStyle:
					{
						"transform-origin": "130px 106px"
					},
					attrs:
					{
						d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
						fill: "currentColor"
					}
				}), a("path",
				{
					staticClass: "octo-body",
					attrs:
					{
						d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
						fill: "currentColor"
					}
				})])])
			},
			v = [],
			f = {},
			b = f,
			C = (a("c123"), Object(p["a"])(b, g, v, !1, null, "553b04e0", null)),
			_ = C.exports,
			w = {
				components:
				{
					AppGithubCorner: _,
					AppLogo: h
				}
			},
			y = w,
			S = Object(p["a"])(y, n, i, !1, null, "7c1a213e", null),
			x = S.exports,
			$ = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("main", [a("section",
				{
					staticClass: "colunits",
					style:
					{
						gridTemplateColumns: e.colTemplate,
						gridTemplateRows: "50px",
						gridColumnGap: e.columngap + "px",
						gridRowGap: e.rowgap + "px"
					}
				}, e._l(e.colArr, function (t, r)
				{
					return a("div",
					{
						key: r
					}, [a("input",
					{
						directives: [
						{
							name: "model",
							rawName: "v-model.lazy",
							value: t.unit,
							expression: "col.unit",
							modifiers:
							{
								lazy: !0
							}
						}],
						class: [e.columns > 8 ? e.widthfull : ""],
						attrs:
						{
							"aria-label": "Grid Template Column Measurements"
						},
						domProps:
						{
							value: t.unit
						},
						on:
						{
							change: [function (a)
							{
								return e.$set(t, "unit", a.target.value)
							}, function (t)
							{
								return e.validateunit(t, r, "col")
							}]
						}
					}), -1 !== e.errors.col.indexOf(r) ? a("div",
					{
						staticClass: "errors"
					}, [e._v(e._s(e.$t("grid.realcssunit")))]) : e._e()])
				}), 0), a("section",
				{
					staticClass: "rowunits",
					style:
					{
						gridTemplateColumns: "50px",
						gridTemplateRows: e.rowTemplate,
						gridColumnGap: e.columngap + "px",
						gridRowGap: e.rowgap + "px"
					}
				}, e._l(e.rowArr, function (t, r)
				{
					return a("div",
					{
						key: r
					}, [a("input",
					{
						directives: [
						{
							name: "model",
							rawName: "v-model.lazy",
							value: t.unit,
							expression: "row.unit",
							modifiers:
							{
								lazy: !0
							}
						}],
						attrs:
						{
							"aria-label": "Grid Template Row Measurements"
						},
						domProps:
						{
							value: t.unit
						},
						on:
						{
							change: [function (a)
							{
								return e.$set(t, "unit", a.target.value)
							}, function (t)
							{
								return e.validateunit(t, r, "row")
							}]
						}
					}), -1 !== e.errors.row.indexOf(r) ? a("div",
					{
						staticClass: "errors"
					}, [e._v(e._s(e.$t("grid.realcssunit")))]) : e._e()])
				}), 0), a("div",
				{
					attrs:
					{
						id: "gridcontainer"
					}
				}, [a("section",
				{
					staticClass: "grid",
					style:
					{
						gridTemplateColumns: e.colTemplate,
						gridTemplateRows: e.rowTemplate,
						gridColumnGap: e.columngap + "px",
						gridRowGap: e.rowgap + "px"
					},
					on:
					{
						touchstart: function (t)
						{
							return t.preventDefault(), e.delegatedTouchPlaceChild(t)
						},
						touchend: function (t)
						{
							return t.preventDefault(), e.delegatedTouchPlaceChild(t)
						}
					}
				}, e._l(e.divNum, function (t, r)
				{
					return a("div",
					{
						key: r,
						class: "box" + r,
						attrs:
						{
							"data-id": t
						},
						on:
						{
							mousedown: function (a)
							{
								return e.placeChild(t, "s")
							},
							mouseup: function (a)
							{
								return e.placeChild(t, "e")
							}
						}
					})
				}), 0), a("section",
				{
					staticClass: "grid gridchild",
					style:
					{
						gridTemplateColumns: e.colTemplate,
						gridTemplateRows: e.rowTemplate,
						gridColumnGap: e.columngap + "px",
						gridRowGap: e.rowgap + "px"
					}
				}, e._l(e.childarea, function (t, r)
				{
					return a("div",
					{
						key: t,
						class: "child" + r,
						style:
						{
							gridArea: t
						}
					}, [a("button",
					{
						on:
						{
							click: function (t)
							{
								return e.removeChild(r)
							}
						}
					}, [e._v("×")])])
				}), 0)])])
			},
			j = [],
			T = a("768b"),
			G = (a("6762"), a("2fdb"), a("cebc")),
			k = a("2f62"),
			M = {
				data: function ()
				{
					return {
						child:
						{},
						widthfull: "widthfull",
						errors:
						{
							col: [],
							row: []
						}
					}
				},
				computed: Object(G["a"])(
				{}, Object(k["c"])(["columngap", "rowgap", "colArr", "rowArr", "columns", "rows", "childarea"]), Object(k["b"])(["rowTemplate", "colTemplate", "divNum"])),
				methods:
				{
					validateunit: function (e, t, a)
					{
						var r = e.target.value,
							o = /fr$/.test(r) || /px$/.test(r) || /%$/.test(r) || /em$/.test(r) || /rem$/.test(r) || /vw$/.test(r) || /vh$/.test(r) || /vmin$/.test(r) || /q$/.test(r) || /mm$/.test(r) || /cm$/.test(r) || /in$/.test(r) || /pt$/.test(r) || /pc$/.test(r) || /ex$/.test(r) || /ch$/.test(r) || /minmax/.test(r) || ["auto", "min-content", "max-content"].includes(r) || 0 === parseInt(r, 10);
						o ? this.errors[a].splice(this.errors[a].indexOf(t), 1) : this.errors[a].push(t)
					},
					delegatedTouchPlaceChild: function (e)
					{
						var t = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
							a = "touchstart" === e.type ? "s" : "e";
						this.placeChild(t.dataset.id, a)
					},
					placeChild: function (e, t)
					{
						if (this.child["".concat(t, "row")] = Math.ceil(e / this.columns), this.child["".concat(t, "col")] = e - (this.child["".concat(t, "row")] - 1) * this.columns, "e" === t)
						{
							var a = this.child.srow <= this.child.erow ? [this.child.srow, this.child.erow] : [this.child.erow, this.child.srow],
								r = Object(T["a"])(a, 2),
								o = r[0],
								s = r[1],
								n = this.child.scol <= this.child.ecol ? [this.child.scol, this.child.ecol] : [this.child.ecol, this.child.scol],
								i = Object(T["a"])(n, 2),
								c = i[0],
								l = i[1],
								u = "".concat(o, " / ").concat(c, " / ").concat(s + 1, " / ").concat(l + 1);
							this.$store.commit("addChildren", u)
						}
					},
					removeChild: function (e)
					{
						this.$store.commit("removeChildren", e)
					}
				}
			},
			O = M,
			z = (a("7573"), Object(p["a"])(O, $, j, !1, null, "d328a46e", null)),
			A = z.exports,
			q = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("aside", [a("fieldset", [a("label",
				{
					attrs:
					{
						for: "columns"
					}
				}, [e._v(e._s(e.$t("form.columns")))]), a("input",
				{
					attrs:
					{
						id: "columns",
						type: "number",
						min: "0",
						max: "12"
					},
					domProps:
					{
						value: e.columns
					},
					on:
					{
						input: function (t)
						{
							return e.$store.commit("updateColumns", t.target.value)
						}
					}
				})]), a("fieldset", [a("label",
				{
					attrs:
					{
						for: "rows"
					}
				}, [e._v(e._s(e.$t("form.rows")))]), a("input",
				{
					attrs:
					{
						id: "rows",
						type: "number",
						min: "0",
						max: "12"
					},
					domProps:
					{
						value: e.rows
					},
					on:
					{
						input: function (t)
						{
							return e.$store.commit("updateRows", t.target.value)
						}
					}
				})]), a("fieldset", [a("label",
				{
					attrs:
					{
						for: "columngap"
					}
				}, [e._v(e._s(e.$t("form.columngap")) + " "), a("span",
				{
					staticClass: "label-extra-info"
				}, [e._v(e._s(e.$t("form.units")))])]), a("input",
				{
					attrs:
					{
						id: "columngap",
						type: "number",
						min: "0",
						max: "50"
					},
					domProps:
					{
						value: e.columngap
					},
					on:
					{
						input: function (t)
						{
							return e.$store.commit("updateColumnGap", t.target.value)
						}
					}
				})]), a("fieldset", [a("label",
				{
					attrs:
					{
						for: "rowgap"
					}
				}, [e._v(e._s(e.$t("form.rowgap")) + " "), a("span",
				{
					staticClass: "label-extra-info"
				}, [e._v(e._s(e.$t("form.units")))])]), a("input",
				{
					attrs:
					{
						id: "rowgap",
						type: "number",
						min: "0",
						max: "50"
					},
					domProps:
					{
						value: e.rowgap
					},
					on:
					{
						input: function (t)
						{
							return e.$store.commit("updateRowGap", t.target.value)
						}
					}
				})]), a("button",
				{
					on:
					{
						click: function (t)
						{
							e.showCodeModal = !0
						}
					}
				}, [e._v(e._s(e.$t("form.codebutton")))]), a("button",
				{
					attrs:
					{
						type: "reset"
					},
					on:
					{
						click: function (t)
						{
							return e.$store.commit("resetGrid")
						}
					}
				}, [e._v(e._s(e.$t("form.reset")))]), e.showCodeModal ? a("app-modal",
				{
					on:
					{
						close: function (t)
						{
							e.showCodeModal = !1
						}
					}
				}, [a("h3",
				{
					attrs:
					{
						slot: "header"
					},
					slot: "header"
				}, [e._v(e._s(e.$t("modal.header.yourcode")))]), a("div",
				{
					attrs:
					{
						slot: "body"
					},
					slot: "body"
				}, [a("app-code")], 1)]) : e._e(), a("p",
				{
					staticClass: "wat",
					on:
					{
						click: function (t)
						{
							e.showExplainModal = !0
						}
					}
				}, [e._v(e._s(e.$t("form.project")))]), e.showExplainModal ? a("app-modal",
				{
					on:
					{
						close: function (t)
						{
							e.showExplainModal = !1
						}
					}
				}, [a("h3",
				{
					attrs:
					{
						slot: "header"
					},
					slot: "header"
				}, [e._v(e._s(e.$t("modal.header.what")))]), a("div",
				{
					attrs:
					{
						slot: "body"
					},
					slot: "body"
				}, [a("app-explain")], 1)]) : e._e()], 1)
			},
			E = [],
			P = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("section", [a("p",
				{
					domProps:
					{
						innerHTML: e._s(e.$t("explain.paragraph1"))
					}
				}), a("p",
				{
					domProps:
					{
						innerHTML: e._s(e.$t("explain.paragraph2"))
					}
				}), a("p",
				{
					domProps:
					{
						innerHTML: e._s(e.$t("explain.paragraph3"))
					}
				}), a("p", [e._v("\n    " + e._s(e.$t("explain.paragraph4")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://twitter.com/rachelandrew",
						target: "_blank"
					}
				}, [e._v("Rachel Andrew")]), e._v(",\n    "), a("a",
				{
					attrs:
					{
						href: "https://twitter.com/jensimmons",
						target: "_blank"
					}
				}, [e._v("Jen Simmons")]), e._v(", " + e._s(e.$t("utils.and")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://twitter.com/geddski",
						target: "_blank"
					}
				}, [e._v("Dave Geddes")]), e._v(" " + e._s(e.$t("explain.paragraph5")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://css-tricks.com/snippets/css/complete-guide-grid/",
						target: "_blank"
					}
				}, [e._v(e._s(e.$t("explain.cssguide")))]), e._v(", " + e._s(e.$t("explain.paragraph6")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://cssgridgarden.com/",
						target: "_blank"
					}
				}, [e._v("Grid Garden")]), e._v(" " + e._s(e.$t("explain.paragraph7")) + "\n  ")]), a("p", [e._v(e._s(e.$t("explain.note")))]), a("p",
				{
					staticClass: "cursive"
				}, [e._v("\n    " + e._s(e.$t("explain.contributions")) + "\n    "), a("a",
				{
					attrs:
					{
						href: "https://github.com/sdras/cssgridgenerator",
						target: "_blank"
					}
				}, [e._v(e._s(e.$t("explain.fork")))])])])
			},
			R = [],
			H = {},
			L = H,
			V = (a("a890"), Object(p["a"])(L, P, R, !1, null, "054db666", null)),
			D = V.exports,
			N = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("transition",
				{
					attrs:
					{
						name: "modal"
					}
				}, [a("div",
				{
					staticClass: "modal-mask"
				}, [a("div",
				{
					staticClass: "modal-wrapper",
					on:
					{
						click: function (t)
						{
							return t.target !== t.currentTarget ? null : e.close(t)
						}
					}
				}, [a("div",
				{
					staticClass: "modal-container",
					attrs:
					{
						role: "dialog",
						"aria-labelledby": "modalTitle",
						"aria-describedby": "modalDescription"
					}
				}, [a("header",
				{
					staticClass: "modal-header",
					attrs:
					{
						id: "modalTitle"
					}
				}, [e._t("header", [e._v("default header")])], 2), a("section",
				{
					staticClass: "modal-body",
					attrs:
					{
						id: "modalDescription"
					}
				}, [e._t("body", [e._v("default body")])], 2), a("button",
				{
					staticClass: "modal-button",
					attrs:
					{
						type: "button",
						"aria-label": "Close modal"
					},
					on:
					{
						click: e.close
					}
				}, [e._v(e._s(e.$t("modal.button")))])])])])])
			},
			I = [],
			F = a("6c92"),
			W = a.n(F),
			J = {
				data: function ()
				{
					return {
						focusTrap: null
					}
				},
				mounted: function ()
				{
					document.addEventListener("keydown", this.closeOnEsc), this.focusTrap = W()(this.$el), this.focusTrap.activate()
				},
				beforeDestroy: function ()
				{
					document.removeEventListener("keydown", this.closeOnEsc), this.focusTrap.deactivate()
				},
				methods:
				{
					closeOnEsc: function (e)
					{
						27 == e.keyCode && this.close()
					},
					close: function ()
					{
						this.$emit("close")
					}
				}
			},
			Q = J,
			U = (a("558c"), Object(p["a"])(Q, N, I, !1, null, "170ed3bd", null)),
			B = U.exports,
			Y = function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div",
				{
					staticClass: "group codegroup"
				}, [a("h3", [e._v(e._s(e.$t("modal.copy.title")))]), a("div",
				{
					staticClass: "gridcode"
				}, [a("button",
				{
					staticClass: "togglehtml",
					attrs:
					{
						role: "region",
						id: "toggleShowHtml",
						"aria-live": "polite",
						type: "button"
					},
					on:
					{
						click: function (t)
						{
							return t.stopPropagation(), t.preventDefault(), e.toggleHtml(t)
						}
					}
				}, [e.showHtml ? [e._v(e._s(e.$t("modal.copy.css")))] : [e._v(e._s(e.$t("modal.copy.html")))]], 2), a("button",
				{
					staticClass: "copycode",
					attrs:
					{
						role: "region",
						id: "codeCopyStatus",
						"aria-live": "polite",
						type: "button"
					},
					on:
					{
						click: function (t)
						{
							return t.stopPropagation(), t.preventDefault(), e.copy(t)
						}
					}
				}, [e.codeWasCopied ? [e._v(e._s(e.$t("modal.copy.clipboardSuccess")))] : [e._v(e._s(e.$t("modal.copy.clipboard")))]], 2), a("div",
				{
					ref: "code",
					attrs:
					{
						id: "code"
					}
				}, [e.showHtml ? a("div", [a("p", [e._v("\n          <"), a("span",
				{
					staticClass: "cname"
				}, [e._v("div ")]), a("span",
				{
					staticClass: "cprop"
				}, [e._v('class="parent"')]), e._v(">\n          "), a("br"), e.childarea.length > 0 ? a("span", e._l(e.childarea, function (t, r)
				{
					return a("span",
					{
						key: t
					}, [a("span",
					{
						staticClass: "sp"
					}, [e._v("\n                <"), a("span",
					{
						staticClass: "cname"
					}, [e._v("div")]), a("span",
					{
						staticClass: "cprop"
					}, [e._v(' class="div' + e._s(r + 1) + '"')]), e._v(">\n                </"), a("span",
					{
						staticClass: "cname"
					}, [e._v("div")]), e._v(">\n              ")]), a("br")])
				}), 0) : a("span", [a("br")]), e._v("\n          </"), a("span",
				{
					staticClass: "cname"
				}, [e._v("div")]), e._v(">\n        ")])]) : a("div", [a("p", [a("span",
				{
					staticClass: "cname"
				}, [e._v(".parent")]), e._v(" {\n          "), a("br"), e._m(0), a("br"), a("span",
				{
					staticClass: "sp"
				}, [a("span",
				{
					staticClass: "ckey"
				}, [e._v("grid-template-columns")]), e._v(":\n            "), a("span",
				{
					staticClass: "cprop"
				}, [e._v(e._s(e.colTemplate))]), e._v(";\n          ")]), a("br"), a("span",
				{
					staticClass: "sp"
				}, [a("span",
				{
					staticClass: "ckey"
				}, [e._v("grid-template-rows")]), e._v(":\n            "), a("span",
				{
					staticClass: "cprop"
				}, [e._v(e._s(e.rowTemplate))]), e._v(";\n          ")]), a("br"), a("span",
				{
					staticClass: "sp"
				}, [a("span",
				{
					staticClass: "ckey"
				}, [e._v("grid-column-gap")]), e._v(":\n            "), a("span",
				{
					staticClass: "cprop"
				}, [e._v(e._s(e.columngap) + "px;")])]), a("br"), a("span",
				{
					staticClass: "sp"
				}, [a("span",
				{
					staticClass: "ckey"
				}, [e._v("grid-row-gap")]), e._v(":\n            "), a("span",
				{
					staticClass: "cprop"
				}, [e._v(e._s(e.rowgap) + "px")]), e._v(";\n          ")]), a("br"), e._v("}\n        ")]), a("p", [e.childarea.length > 0 ? a("span", e._l(e.childarea, function (t, r)
				{
					return a("span",
					{
						key: t
					}, [a("span", [a("span",
					{
						staticClass: "cname"
					}, [e._v(".div" + e._s(r + 1))]), e._v(" {\n                "), a("span",
					{
						staticClass: "ckey"
					}, [e._v("grid-area")]), e._v(":\n                "), a("span",
					{
						staticClass: "cprop"
					}, [e._v(e._s(t))]), e._v("; }\n              ")]), a("br")])
				}), 0) : e._e()])])])])])
			},
			Z = [function ()
			{
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("span",
				{
					staticClass: "sp"
				}, [a("span",
				{
					staticClass: "ckey"
				}, [e._v("display")]), e._v(":\n            "), a("span",
				{
					staticClass: "cprop"
				}, [e._v("grid")]), e._v(";\n          ")])
			}],
			X = {
				data: function ()
				{
					return {
						codeWasCopied: !1,
						showHtml: !1
					}
				},
				computed: Object(G["a"])(
				{}, Object(k["c"])(["columngap", "rowgap", "childarea"]), Object(k["b"])(["rowTemplate", "colTemplate"])),
				methods:
				{
					copy: function ()
					{
						var e, t, a = this,
							r = this.$refs.code;
						document.body.createTextRange ? (e = document.body.createTextRange(), e.moveToElementText(r), e.select()) : window.getSelection && (t = window.getSelection(), e = document.createRange(), e.selectNodeContents(r), t.removeAllRanges(), t.addRange(e));
						var o = document.execCommand("copy");
						o && (this.codeWasCopied = !0, setTimeout(function ()
						{
							a.codeWasCopied = !1
						}, 2e3))
					},
					toggleHtml: function ()
					{
						this.showHtml = !this.showHtml
					}
				}
			},
			K = X,
			ee = (a("73c5"), Object(p["a"])(K, Y, Z, !1, null, "5ac8b550", null)),
			te = ee.exports,
			ae = {
				components:
				{
					AppExplain: D,
					AppModal: B,
					AppCode: te
				},
				data: function ()
				{
					return {
						showCodeModal: !1,
						showExplainModal: !1
					}
				},
				computed: Object(G["a"])(
				{}, Object(k["c"])(["columngap", "rowgap", "columns", "rows"])),
				watch:
				{
					columns: function (e, t)
					{
						var a = {
							newVal: e,
							oldVal: t,
							direction: "colArr"
						};
						this.$store.commit("adjustArr", a)
					},
					rows: function (e, t)
					{
						var a = {
							newVal: e,
							oldVal: t,
							direction: "rowArr"
						};
						this.$store.commit("adjustArr", a)
					}
				}
			},
			re = ae,
			oe = (a("cc3f"), Object(p["a"])(re, q, E, !1, null, "21df1ba1", null)),
			se = oe.exports,
			ne = {
				components:
				{
					AppHeader: x,
					AppGrid: A,
					AppForm: se
				},
				created: function ()
				{
					this.$store.commit("initialArrIndex", window.location.search)
				}
			},
			ie = ne,
			ce = (a("5c0b"), Object(p["a"])(ie, o, s, !1, null, null, null)),
			le = ce.exports,
			ue = (a("c5f6"), a("7618")),
			de = (a("ac4d"), a("8a81"), a("ac6a"), function ()
			{
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
					{
						unit: "1fr"
					}],
					t = e.map(function (e)
					{
						return e["unit"]
					}),
					a = [
						[t.shift()]
					],
					r = !0,
					o = !1,
					s = void 0;
				try
				{
					for (var n, i = t[Symbol.iterator](); !(r = (n = i.next()).done); r = !0)
					{
						var c = n.value,
							l = a[a.length - 1]; - 1 !== l.indexOf(c) ? l.push(c) : a.push([c])
					}
				}
				catch (u)
				{
					o = !0, s = u
				}
				finally
				{
					try
					{
						r || null == i.return || i.return()
					}
					finally
					{
						if (o) throw s
					}
				}
				return a
			}),
			pe = function (e)
			{
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
				return e.map(function (e)
				{
					return e.length === t ? e.join(" ") : "repeat(".concat(e.length, ", ").concat(e[0], ")")
				}).join(" ")
			};
		r["a"].use(k["a"]);
		var me = new k["a"].Store(
			{
				state:
				{
					columns: 5,
					rows: 5,
					columngap: 0,
					rowgap: 0,
					colArr: [],
					rowArr: [],
					childarea: []
				},
				getters:
				{
					colTemplate: function (e)
					{
						var t = de(e.colArr);
						return pe(t)
					},
					rowTemplate: function (e)
					{
						var t = de(e.rowArr);
						return pe(t)
					},
					divNum: function (e)
					{
						return Math.max(e.columns, 0) * Math.max(e.rows, 0)
					}
				},
				mutations:
				{
					initialArrIndex: function (e, t)
					{
						if ("" !== t)
						{
							var a = new URLSearchParams(t);
							for (var r in e)
							{
								var o = a.has(r),
									s = Object(ue["a"])(e[r]);
								o && "number" === s ? e[r] = a.get(r) : o && "object" === s && (e[r] = JSON.parse(a.get(r)))
							}
						}
						else he(e.columns, e.colArr), he(e.rows, e.rowArr)
					},
					adjustArr: function (e, t)
					{
						var a = Math.max(Number(t.newVal), 0),
							r = Math.max(Number(t.oldVal), 0);
						if (a < r)
							for (var o = r - a, s = 1; s <= o; s++) e[t.direction].pop();
						else
							for (var n = a - r, i = 1; i <= n; i++) e[t.direction].push(
							{
								unit: "1fr"
							})
					},
					addChildren: function (e, t)
					{
						e.childarea.push(t)
					},
					removeChildren: function (e, t)
					{
						e.childarea.splice(t, 1)
					},
					updateColumns: function (e, t)
					{
						e.columns = t
					},
					updateRows: function (e, t)
					{
						e.rows = t
					},
					updateColumnGap: function (e, t)
					{
						e.columngap = t
					},
					updateRowGap: function (e, t)
					{
						e.rowgap = t
					},
					resetGrid: function (e, t)
					{
						e.childarea = []
					}
				}
			}),
			he = function (e, t)
			{
				for (var a = 1; a <= e; a++) t.push(
				{
					unit: "1fr"
				})
			},
			ge = a("a925"),
			ve = a("e088"),
			fe = a("d90a"),
			be = a("8066"),
			Ce = a("6a7b"),
			_e = a("2394");
		r["a"].use(ge["a"]);
		var we = window.navigator.language ? window.navigator.language.substring(0, 2) : "en";

		function ye()
		{
			return new ge["a"](
			{
				locale: we,
				fallbackLocale: "en",
				messages:
				{
					en: ve,
					es: fe,
					zh: be,
					pt: Ce,
					fr: _e
				}
			})
		}
		r["a"].config.productionTip = !1;
		var Se = ye();
		new r["a"](
		{
			store: me,
			i18n: Se,
			render: function (e)
			{
				return e(le)
			}
		}).$mount("#app")
	},
	"5c0b": function (e, t, a)
	{
		"use strict";
		var r = a("5e27"),
			o = a.n(r);
		o.a
	},
	"5e27": function (e, t, a) {},
	"690a": function (e, t, a) {},
	"6a7b": function (e)
	{
		e.exports = {
			header:
			{
				builtby: "construído com 🌮 por"
			},
			form:
			{
				columns: "Colunas",
				rows: "Linhas",
				columngap: "Espaçamento entre Colunas",
				rowgap: "Espaçamento entre Linhas",
				codebutton: "Poderia me ver um código?",
				project: "O que esse projeto faz?",
				reset: "Reiniciar grid"
			},
			modal:
			{
				header:
				{
					yourcode: "Seu código grid",
					what: "O que é isso?"
				},
				copy:
				{
					title: "Copie o código abaixo:",
					clipboard: "Copie para a área de transferência!",
					clipboardSuccess: "Código copiado!"
				},
				button: "Concluído"
			},
			grid:
			{
				realcssunit: "Use unidades CSS reais, seu bobo"
			},
			explain:
			{
				paragraph1: "Você pode selecionar o número de linhas e colunas e eu vou gerar uma grid CSS pra você! <strong>Clique e arraste dentro das caixas</strong> para criar divs dentro da grid.",
				paragraph2: "Apesar desse projeto poder criar um layout básico pra você, ele não é um tour completo das capacidades da CSS Grid. Ele é uma forma de você utilizar as funcionalidades da CSS Grid rapidamente.",
				paragraph3: "Eu percebi que várias pessoas não estavam usando a Grid porque sentiam que era complicado demais e não conseguiam entendê-la. A Grid é capaz de muitas coisas, e esse pequeno gerador só toca em uma fração das suas funcionalidades. O propósito dele é que as pessoas criem rapidamente layouts mais interessantes.",
				paragraph4: "Assim que você tiver utilizado um pouco o projeto, sugiro que vá conferir os recursos de ",
				cssguide: "Guia da CSS Grid no CSS-Tricks",
				paragraph5: "para entender mais profundamente. Também há um",
				paragraph6: "e um joguinho divertido chamado",
				paragraph7: "para ajudar você a aprender mais!",
				contributions: "Este projeto está aberto a contribuições!",
				fork: "Faça um fork aqui.",
				note: "Por favor note: Leitores de tela lerão as divs na ordem que você adicioná-las, por favor mantenha isso em mente enquanto você está construindo uma grid"
			},
			utils:
			{
				and: "e"
			}
		}
	},
	"6c23": function (e, t, a) {},
	"6f7f": function (e, t, a) {},
	"73c5": function (e, t, a)
	{
		"use strict";
		var r = a("1591"),
			o = a.n(r);
		o.a
	},
	7573: function (e, t, a)
	{
		"use strict";
		var r = a("9109"),
			o = a.n(r);
		o.a
	},
	8066: function (e)
	{
		e.exports = {
			header:
			{
				builtby: "built with 🌮 by"
			},
			form:
			{
				columns: "列",
				rows: "行",
				columngap: "列间距",
				rowgap: "行间距",
				codebutton: "请给我示例中的代码",
				project: "这个项目可以做什么？",
				reset: "重置布局",
				units: "(单位 px)"
			},
			modal:
			{
				header:
				{
					yourcode: "您的 Grid 代码",
					what: "这是什么？"
				},
				copy:
				{
					title: "复制以下代码：",
					clipboard: "复制",
					clipboardSuccess: "复制成功！",
					html: "展示 HTML",
					css: "展示 CSS"
				},
				button: "完成"
			},
			grid:
			{
				realcssunit: "请使用正确的 CSS 单位"
			},
			explain:
			{
				paragraph1: "您可以设置行和列的数字还有单位，我将为您生成一个 CSS Grid 网格布局！<strong>在方框中拖动</strong>来创建 div 放置在网格内。",
				paragraph2: "虽然这个项目可以为您提供一个基本的布局, 但是本项目不是对 CSS 网格功能的全面介绍。这只是一种快速使用 CSS Grid 网格布局功能的方法。",
				paragraph3: "我注意到很多人没有使用 Grid，因为他们觉得这个太复杂了，难以理解。 Grid 可以做很多事情，而这个小的生成器只涉及到了一小部分功能。 这样做的目的是让人们能够快速上手并创建更多有趣的布局。",
				paragraph4: "一旦你对此有所了解，我建议您可以通过以下资源，",
				cssguide: "CSS Grid Guide on CSS-Tricks",
				paragraph5: "进行更深入的了解。 还有一个",
				paragraph6: "和一个有趣的小游戏叫",
				paragraph7: "可以帮助您了解更多！",
				contributions: "这个项目是开源的!",
				fork: "请在这里 Fork",
				note: "请注意：读屏器将按照添加 div 的顺序读取 div，请在构建 Grid 网格布局时牢记这一点"
			},
			utils:
			{
				and: "和"
			}
		}
	},
	9109: function (e, t, a) {},
	"9fb0": function (e, t, a)
	{
		"use strict";
		var r = a("6f7f"),
			o = a.n(r);
		o.a
	},
	a890: function (e, t, a)
	{
		"use strict";
		var r = a("690a"),
			o = a.n(r);
		o.a
	},
	c123: function (e, t, a)
	{
		"use strict";
		var r = a("3418"),
			o = a.n(r);
		o.a
	},
	c1df: function (e, t, a) {},
	cc3f: function (e, t, a)
	{
		"use strict";
		var r = a("6c23"),
			o = a.n(r);
		o.a
	},
	d90a: function (e)
	{
		e.exports = {
			header:
			{
				builtby: "hecho con 🌮 por"
			},
			form:
			{
				columns: "Columnas",
				rows: "Filas",
				columngap: "Margen entre Columnas",
				rowgap: "Margen entre Filas",
				codebutton: "Mostrar Código",
				project: "¿Qué hace este proyecto?",
				reset: "Reiniciar cuadrícula",
				units: "(en px)"
			},
			modal:
			{
				header:
				{
					yourcode: "Tu código",
					what: "¿Qué es ésto?"
				},
				copy:
				{
					title: "Copia el siguiente código:",
					clipboard: "Copiar en el portapapeles",
					clipboardSuccess: "Código copiado!",
					html: "Ver HTML",
					css: "Ver CSS"
				},
				button: "Cerrar"
			},
			grid:
			{
				realcssunit: "Debes usar unidades reales de CSS"
			},
			explain:
			{
				paragraph1: "Puedes introducir el número y unidades de tus columnas y filas, y yo generaré el código de CSS Grid para ti! <strong>Arrastra dentro de las cajas</strong> para generar divs dentro de la cuadrícula.",
				paragraph2: "Aunque este proyecto puede generar un diseño básico por ti, no es un tour completo de las caracteríticas de CSS Grid sino una forma rápida de probar rápidamente sus capacidades.",
				paragraph3: "Me he dado cuenta de que mucha gente no está usando CSS Grid porque parece muy complicado y no consiguen entenderlo. CSS Grid puede hacer mucho más, y este generador de código sólo muestra una pequeña porción de sus posibilidades. La razón de ser de este proyecto es ayudar a la gente a empezar rápido y crear layouts más interesantes.",
				paragraph4: "Cuando hayas probado el proyecto, recomiendo leer algunos recursos de ",
				cssguide: "Guía de CSS Grid en CSS-Tricks",
				paragraph5: "para profundizar más. También existe una ",
				paragraph6: "y un divertido juego llamado",
				paragraph7: "para ayudarte a aprender más.",
				contributions: "¡Este proyecto está abierto a contribuciones!",
				fork: "Comprueba su código aquí",
				note: "Nota: Los lectores de pantalla leen los divs en el orden en el que son añadidos, ten ésto en cuenta al construir tu cuadrícula"
			},
			utils:
			{
				and: "y"
			}
		}
	},
	e088: function (e)
	{
		e.exports = {
			header:
			{
				builtby: "built with 🌮 by"
			},
			form:
			{
				columns: "Columns",
				rows: "Rows",
				columngap: "Column Gap",
				rowgap: "Row Gap",
				codebutton: "Please may I have some code",
				project: "What does this project do?",
				reset: "Reset grid",
				units: "(in px)"
			},
			modal:
			{
				header:
				{
					yourcode: "Your Grid Code",
					what: "What is this?"
				},
				copy:
				{
					title: "Copy the code below:",
					clipboard: "Copy to clipboard!",
					clipboardSuccess: "Code copied!",
					html: "Show HTML",
					css: "Show CSS"
				},
				button: "Done"
			},
			grid:
			{
				realcssunit: "Must use real CSS units, goofball"
			},
			explain:
			{
				paragraph1: "You can set the numbers, and units of your columns and rows, and I'll generate a CSS grid for you! <strong>Drag within the boxes</strong> to create divs placed within the grid.",
				paragraph2: "Though this project can get a basic layout started for you, this project is not a comprehensive tour of CSS Grid capabilities. It is a way for you to use CSS Grid features quickly.",
				paragraph3: "I noticed a lot of people weren't using Grid because they felt it was too complicated and they couldn't understand it. Grid is capable of so much, and this small generator only touches on a fraction of the features. The purpose of this is so people get up and running quickly, and create more interesting layouts.",
				paragraph4: "Once you work with this a bit, I suggest checking out resources by",
				cssguide: "CSS Grid Guide on CSS-Tricks",
				paragraph5: "to dive deeper. There is also a",
				paragraph6: "and a fun little game called",
				paragraph7: "to help you learn more!",
				contributions: "This project is open to contributions!",
				fork: "Fork it here.",
				note: "Please note: Screenreaders will read the divs in the order you add the divs in, please keep this in mind while you're building a grid"
			},
			utils:
			{
				and: "and"
			}
		}
	}
});
//# sourceMappingURL=app.15d250a7.js.map
