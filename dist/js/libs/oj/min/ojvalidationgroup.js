/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","ojs/ojcomponentcore"],function(e){var n={properties:{valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0}},methods:{setProperty:{},getProperty:{},setProperties:{},showMessages:{},focusOn:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};function t(n){var t,o=this,i=n.element,r=[];function d(){r=[],function e(n){var t;var o;var i;var d;var a=[];o=n.childNodes;d=o.length;for(i=0;i<d;i++)t=o[i],f(t)?r.push(t):a.push(t);d=a.length;for(i=0;i<d;i++)e(a[i])}(i),n.props.valid=v();for(var e=r.length,t=0;t<e;t++)a(r[t])}function a(e){e.addEventListener("validChanged",l.bind(this)),e.addEventListener("disabledChanged",u.bind(this)),e.addEventListener("readonlyChanged",u.bind(this))}function s(e){e.removeEventListener("validChanged",l),e.removeEventListener("disabledChanged",u),e.removeEventListener("readonlyChanged",u)}function l(e){n.props.valid=v()}function u(e){var t=e.target,o=t.valid,i=!(t.readonly||t.disabled);"valid"!==o&&(n.props.valid=i&&"invalidShown"===o?"invalidShown":v())}function v(){for(var e,n,t,o,i="valid",d=r.length,a=0;a<d&&"invalidShown"!==i;a++)p(e=r[a])&&(t=e.valid,n=e.disabled,o=e.readonly,n||o||("invalidShown"===t?i="invalidShown":"invalidHidden"===t?i="invalidHidden":"pending"===t&&"valid"===i&&(i="pending")));return i}function f(e){return!!(1===e.nodeType&&-1!==e.tagName.indexOf("-")&&"valid"in e&&p(e)&&void 0!==e.valid)}function c(e,n){var t=n.length;if(f(e))return!0;for(var o=0;o<t;o++)if(f(n[o]))return!0;return!1}function h(e){var n=r.length;if(1!==e.nodeType)return!1;for(var t=0;t<n;t++)if(r[t].contains(e))return!0;return!1}function g(e){for(var n,t=r.length,o=0;o<e.length;o++)if(1===(n=e[o]).nodeType){if(-1!==r.indexOf(n))return!0;for(var i=0;i<t;i++)if(n.contains(r[i]))return!0}return!1}function p(n){var t,o;return void 0!==(t=e.BaseCustomElementBridge.getInstance(n)._WIDGET_ELEM)&&(o=e.Components.__GetWidgetConstructor(t)),!(void 0!==t&&!o)}o._rootElementMutationObserver=new MutationObserver(function(e){if(document.body.contains(i)){for(var n,t,o,r,a=e.length,l=!1,u=0;u<a&&!l;u++)r=(t=e[u]).target,o=t.removedNodes,n=t.addedNodes,!(l=g(o))&&n.length>0&&!h(r)&&c(r,n)&&(l=!0);l&&(!function(e){for(var n=e.length,t=0;t<n;t++)for(var o=e[t],i=o.removedNodes.length,r=0;r<i;r++){var d=o.removedNodes[r];1===d.nodeType&&s(d)}}(e),d())}else this.disconnect()}),o.createDOM=function(){for(i.classList.add("oj-validation-group"),(t=document.createElement("div")).setAttribute("data-oj-context","");i.firstChild;)t.appendChild(i.firstChild);i.appendChild(t)},o.updateDOM=function(){e.Context.getContext(t).getBusyContext().whenReady().then(function(){for(var e=r.length,n=0;n<e;n++)s(r[n]);d(),o._rootElementMutationObserver.observe(i,{childList:!0,subtree:!0})})},o.handlePropertyChanged=function(e,n){return!0},o.showMessages=function(){for(var e,n=0;n<r.length;n++)(e=r[n]).disabled||e.readonly||"showMessages"in e&&e.showMessages()},o.focusOn=function(n){var t=null,o=null;"@firstInvalidShown"===n?(o=function(){var e,n=[];if("invalidShown"!==i.valid)return null;for(var t=r.length,o=0;o<t;o++)(e=r[o]).disabled||e.readonly||"invalidShown"===e.valid&&n.push(e);if(0===n.length)return null;return n.sort(function(e,n){return e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),n[0]}())&&("focusOn"in o?o.focusOn("@firstInvalidShown"):o.focus()):void 0===n?(t=function(){for(var e=null,n=r.length,t=0;t<n;t++)if(!(e=r[t]).readonly&&!e.disabled)return e;return null}())&&("focusOn"in t?t.focusOn():t.focus()):e.Logger.info("focusOn's parameter value is not '@firstInvalidShown' or empty, so it's a no-op.")}}n.extension._CONSTRUCTOR=t,Object.freeze(n),e.CustomElementBridge.registerMetadata("oj-validation-group",null,n),e.CustomElementBridge.register("oj-validation-group",{metadata:e.CustomElementBridge.getMetadata("oj-validation-group")})});