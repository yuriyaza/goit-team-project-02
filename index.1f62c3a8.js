!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=n.parcelRequirecb2a;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){t[e]=n},n.parcelRequirecb2a=l);var d=l("1lPHI");const r=document.querySelector(".header-menu"),c=document.querySelectorAll(".menuItem"),i=document.querySelector(".header-menu-open"),s=document.querySelector(".header-menu-open-shopping"),a=document.querySelector(".header-menu-closed"),u=document.querySelector(".header-menu-closed-shopping");function y(){r.classList.contains("showMenu")?(r.classList.remove("showMenu"),i.style.display="block",a.style.display="none",e(d).enablePageScroll(document.body)):(r.classList.add("showMenu"),i.style.display="none",a.style.display="block",e(d).disablePageScroll(document.body))}window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){if(!n.matches)return;r.classList.remove("showMenu"),i.style.display="block",a.style.display="none",e(d).enablePageScroll(document.body)})),i.addEventListener("click",y),s.addEventListener("click",y),a.addEventListener("click",y),u.addEventListener("click",y),c.forEach((function(e){e.addEventListener("click",y)}))}();
//# sourceMappingURL=index.1f62c3a8.js.map
