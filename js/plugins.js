! function() {
    for (var e, n = function() {}, o = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = o.length, r = window.console = window.console || {}; i--;) e = o[i], r[e] || (r[e] = n)
}();
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);
! function(e) {
    var n = window.Chicago || {
        utils: {
            now: Date.now || function() {
                return (new Date).getTime()
            },
            uid: function(e) {
                return (e || "id") + n.utils.now() + "RAND" + Math.ceil(1e5 * Math.random())
            },
            is: {
                number: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                fn: function(e) {
                    return "function" == typeof e
                },
                object: function(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }
            },
            debounce: function(e, n, i) {
                var t;
                return function() {
                    var r = this,
                        o = arguments,
                        u = function() {
                            t = null, i || e.apply(r, o)
                        },
                        a = i && !t;
                    t && clearTimeout(t), t = setTimeout(u, n), a && e.apply(r, o)
                }
            }
        },
        $: window.jQuery || null
    };
    if ("function" == typeof define && define.amd && define("chicago", function() {
            return n.load = function(e, i, t, r) {
                var o = e.split(","),
                    u = [],
                    a = (r.config && r.config.chicago && r.config.chicago.base ? r.config.chicago.base : "").replace(/\/+$/g, "");
                if (!a) throw new Error("Please define base path to jQuery resizeend in the requirejs config.");
                for (var s = 0; s < o.length;) {
                    var c = o[s].replace(/\./g, "/");
                    u.push(a + "/" + c), s += 1
                }
                i(u, function() {
                    t(n)
                })
            }, n
        }), window && window.jQuery) return e(n, window, window.document);
    if (!window.jQuery) throw new Error("jQuery resizeend requires jQuery")
}(function(e, n, i) {
    e.$win = e.$(n), e.$doc = e.$(i), e.events || (e.events = {}), e.events.resizeend = {
            defaults: {
                delay: 250
            },
            setup: function() {
                var n, i = arguments,
                    t = {
                        delay: e.$.event.special.resizeend.defaults.delay
                    };
                e.utils.is.fn(i[0]) ? n = i[0] : e.utils.is.number(i[0]) ? t.delay = i[0] : e.utils.is.object(i[0]) && (t = e.$.extend({}, t, i[0]));
                var r = e.utils.uid("resizeend"),
                    o = e.$.extend({
                        delay: e.$.event.special.resizeend.defaults.delay
                    }, t),
                    u = o,
                    a = function(n) {
                        u && clearTimeout(u), u = setTimeout(function() {
                            return u = null, n.type = "resizeend.chicago.dom", e.$(n.target).trigger("resizeend", n)
                        }, o.delay)
                    };
                return e.$(this).data("chicago.event.resizeend.uid", r), e.$(this).on("resize", e.utils.debounce(a, 100)).data(r, a)
            },
            teardown: function() {
                var n = e.$(this).data("chicago.event.resizeend.uid");
                return e.$(this).off("resize", e.$(this).data(n)), e.$(this).removeData(n), e.$(this).removeData("chicago.event.resizeend.uid")
            }
        },
        function() {
            e.$.event.special.resizeend = e.events.resizeend, e.$.fn.resizeend = function(n, i) {
                return this.each(function() {
                    e.$(this).on("resizeend", n, i)
                })
            }
        }()
});
(function(c) {
    c.fn.stupidtable = function(b) {
        return this.each(function() {
            var a = c(this);
            b = b || {};
            b = c.extend({}, c.fn.stupidtable.default_sort_fns, b);
            a.data("sortFns", b);
            a.on("click.stupidtable", "thead th", function() {
                c(this).stupidsort()
            })
        })
    };
    c.fn.stupidsort = function(b) {
        var a = c(this),
            g = 0,
            f = c.fn.stupidtable.dir,
            e = a.closest("table"),
            k = a.data("sort") || null;
        if (null !== k) {
            a.parents("tr").find("th").slice(0, c(this).index()).each(function() {
                var a = c(this).attr("colspan") || 1;
                g += parseInt(a, 10)
            });
            var d;
            1 == arguments.length ? d = b : (d = b || a.data("sort-default") || f.ASC, a.data("sort-dir") && (d = a.data("sort-dir") === f.ASC ? f.DESC : f.ASC));
            e.trigger("beforetablesort", {
                column: g,
                direction: d
            });
            e.css("display");
            setTimeout(function() {
                var b = [],
                    l = e.data("sortFns")[k],
                    h = e.children("tbody").children("tr");
                h.each(function(a, e) {
                    var d = c(e).children().eq(g),
                        f = d.data("sort-value");
                    "undefined" === typeof f && (f = d.text(), d.data("sort-value", f));
                    b.push([f, e])
                });
                b.sort(function(a, b) {
                    return l(a[0], b[0])
                });
                d != f.ASC && b.reverse();
                h = c.map(b, function(a) {
                    return a[1]
                });
                e.children("tbody").append(h);
                e.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc");
                a.data("sort-dir", d).addClass("sorting-" + d);
                e.trigger("aftertablesort", {
                    column: g,
                    direction: d
                });
                e.css("display")
            }, 10);
            return a
        }
    };
    c.fn.updateSortVal = function(b) {
        var a = c(this);
        a.is("[data-sort-value]") && a.attr("data-sort-value", b);
        a.data("sort-value", b);
        return a
    };
    c.fn.stupidtable.dir = {
        ASC: "asc",
        DESC: "desc"
    };
    c.fn.stupidtable.default_sort_fns = {
        "int": function(b, a) {
            return parseInt(b, 10) - parseInt(a, 10)
        },
        "float": function(b, a) {
            return parseFloat(b) - parseFloat(a)
        },
        string: function(b, a) {
            return b.localeCompare(a)
        },
        "string-ins": function(b, a) {
            b = b.toLocaleLowerCase();
            a = a.toLocaleLowerCase();
            return b.localeCompare(a)
        }
    }
})(jQuery);
$(function() {
    $.fn.scrollTo = function(e, t, o) {
        "function" == typeof t && 2 == arguments.length && (o = t, t = e);
        var n = $.extend({
            scrollTarget: e,
            offsetTop: 50,
            duration: 500,
            easing: "swing"
        }, t);
        return this.each(function() {
            var e = $(this),
                t = "number" == typeof n.scrollTarget ? n.scrollTarget : $(n.scrollTarget),
                a = "number" == typeof t ? t : t.offset().top + e.scrollTop() - n.offsetTop;
            e.animate({
                scrollTop: a
            }, n.duration, n.easing, function() {
                "function" == typeof o && o.call(this)
            })
        })
    };
    var e = $("#demo-stage").find("ul").children("li"),
        t = new Array;
    e.each(function(e) {
        t[e] = Math.round($(this).offset().top - $("#demo-stage").offset().top) - 10
    }), e.eq(0).addClass("active"), $("#demo-nav > nav > button").click(function() {
        var o, n = e.parent().find("li.active").removeClass("active").index();
        switch ($(this).index()) {
            case 1:
                o = n + 1 == e.length ? 0 : n + 1;
                break;
            case 2:
                o = e.length - 1;
                break;
            case 3:
                o = 0
        }
        e.eq(o).addClass("active"), $("#demo-stage").scrollTo(t[o])
    })
});;
(function($) {
    var helper = {},
        current, title, tID, IE = $.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent),
        track = false;
    $.tooltip = {
        blocked: false,
        defaults: {
            delay: 200,
            fade: false,
            showURL: true,
            extraClass: "",
            top: 15,
            left: 15,
            id: "tooltip"
        },
        block: function() {
            $.tooltip.blocked = !$.tooltip.blocked;
        }
    };
    $.fn.extend({
        tooltip: function(settings) {
            settings = $.extend({}, $.tooltip.defaults, settings);
            createHelper(settings);
            return this.each(function() {
                $.data(this, "tooltip", settings);
                this.tOpacity = helper.parent.css("opacity");
                this.tooltipText = this.title;
                $(this).removeAttr("title");
                this.alt = "";
            }).mouseover(save).mouseout(hide).click(hide);
        },
        fixPNG: IE ? function() {
            return this.each(function() {
                var image = $(this).css('backgroundImage');
                if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
                    image = RegExp.$1;
                    $(this).css({
                        'backgroundImage': 'none',
                        'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
                    }).each(function() {
                        var position = $(this).css('position');
                        if (position != 'absolute' && position != 'relative') $(this).css('position', 'relative');
                    });
                }
            });
        } : function() {
            return this;
        },
        unfixPNG: IE ? function() {
            return this.each(function() {
                $(this).css({
                    'filter': '',
                    backgroundImage: ''
                });
            });
        } : function() {
            return this;
        },
        hideWhenEmpty: function() {
            return this.each(function() {
                $(this)[$(this).html() ? "show" : "hide"]();
            });
        },
        url: function() {
            return this.attr('href') || this.attr('src');
        }
    });

    function createHelper(settings) {
        if (helper.parent) return;
        helper.parent = $('<div id="' + settings.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide();
        if ($.fn.bgiframe) helper.parent.bgiframe();
        helper.title = $('h3', helper.parent);
        helper.body = $('div.body', helper.parent);
        helper.url = $('div.url', helper.parent);
    }

    function settings(element) {
        return $.data(element, "tooltip");
    }

    function handle(event) {
        if (settings(this).delay) tID = setTimeout(show, settings(this).delay);
        else
            show();
        track = !!settings(this).track;
        $(document.body).bind('mousemove', update);
        update(event);
    }

    function save() {
        if ($.tooltip.blocked || this == current || (!this.tooltipText && !settings(this).bodyHandler)) return;
        current = this;
        title = this.tooltipText;
        if (settings(this).bodyHandler) {
            helper.title.hide();
            var bodyContent = settings(this).bodyHandler.call(this);
            if (bodyContent.nodeType || bodyContent.jquery) {
                helper.body.empty().append(bodyContent)
            } else {
                helper.body.html(bodyContent);
            }
            helper.body.show();
        } else if (settings(this).showBody) {
            var parts = title.split(settings(this).showBody);
            helper.title.html(parts.shift()).show();
            helper.body.empty();
            for (var i = 0, part;
                (part = parts[i]); i++) {
                if (i > 0) helper.body.append("<br/>");
                helper.body.append(part);
            }
            helper.body.hideWhenEmpty();
        } else {
            helper.title.html(title).show();
            helper.body.hide();
        }
        if (settings(this).showURL && $(this).url()) helper.url.html($(this).url().replace('http://', '')).show();
        else
            helper.url.hide();
        helper.parent.addClass(settings(this).extraClass);
        if (settings(this).fixPNG) helper.parent.fixPNG();
   ndle.apply(this, arguments);
    }

    function show() {
        tID = null;
        if ((!IE || !$.fn.bgiframe) && settings(current).fade) {
            if (helper.parent.is(":animated")) helper.parent.stop().show().fadeTo(settings(current).fade, current.tOpacity);
            else
                helper.parent.is(':visible') ? helper.parent.fadeTo(settings(current).fade, current.tOpacity) : helper.parent.fadeIn(settings(current).fade);
        } else {
            helper.parent.show();
        }
        update();
    }

    function update(event) {
        if ($.tooltip.blocked) return;
        if (event && event.target.tagName == "OPTION") {
            return;
        }
        if (!track && helper.parent.is(":visible")) {
            $(document.body).unbind('mousemove', update)
        }
        if (current == null) {
            $(document.body).unbind('mousemove', update);
            return;
        }
        helper.parent.removeClass("viewport-right").removeClass("viewport-bottom");
        var left = helper.parent[0].offsetLeft;
        var top = helper.parent[0].offsetTop;
        if (event) {
            left = event.pageX + settings(current).left;
            top = event.pageY + settings(current).top;
            var right = 'auto';
            if (settings(current).positionLeft) {
                right = $(window).width() - left;
                left = 'auto';
            }
            helper.parent.css({
                left: left,
                right: right,
                top: top
            });
        }
        var v = viewport(),
            h = helper.parent[0];
        if (v.x + v.cx < h.offsetLeft + h.offsetWidth) {
            left -= h.offsetWidth + 20 + settings(current).left;
            helper.parent.css({
                left: left + 'px'
            }).addClass("viewport-right");
        }
        if (v.y + v.cy < h.offsetTop + h.offsetHeight) {
            top -= h.offsetHeight + 20 + settings(current).top;
            helper.parent.css({
                top: top + 'px'
            }).addClass("viewport-bottom");
        }
    }

    function viewport() {
        return {
            x: $(window).scrollLeft(),
            y: $(window).scrollTop(),
            cx: $(window).width(),
            cy: $(window).height()
        };
    }

    function hide(event) {
        if ($.tooltip.blocked) return;
        if (tID) clearTimeout(tID);
        current = null;
        var tsettings = settings(this);

        function complete() {
            helper.parent.removeClass(tsettings.extraClass).hide().css("opacity", "");
        }
        if ((!IE || !$.fn.bgiframe) && tsettings.fade) {
            if (helper.parent.is(':animated')) helper.parent.stop().fadeTo(tsettings.fade, 0, complete);
            else
                helper.parent.stop().fadeOut(tsettings.fade, complete);
        } else
            complete();
        if (settings(this).fixPNG) helper.parent.unfixPNG();
    }
})(jQuery);
(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if (current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 1);
    };
})(jQuery);
(function($) {
    $.fn.writeTextTyper = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if (current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++] + contentArray[current++]);
            }
        }, 30);
    };
})(jQuery); 
