!function(){var e,t,c,a;(e=jQuery).switcher=function(t){var c=e("input[type=checkbox]");void 0!==t&&t.length&&(c=c.filter(t)),c.each((function(){var t=e(this).hide(),c=e(document.createElement("div")).addClass("ui-switcher").attr("aria-checked",t.is(":checked"));toggleSwitch=function(e){void 0===e.target.type&&t.trigger(e.type),document.body.classList.toggle("theme-dark"),c.attr("aria-checked",t.is(":checked"))},c.on("click",toggleSwitch),c.insertBefore(t)}))},t=document.body.dataset.activePage,c=document.querySelector("[data-home-btn]"),a=document.querySelector("[data-shopping-btn]"),"home"===t?(a.classList.remove("active"),c.classList.add("active")):(c.classList.remove("active"),a.classList.add("active"));var i=document.querySelector(".form-check-input");function o(e){localStorage.setItem("theme",e)}i.addEventListener("click",(function(){if(!0===i.checked)return void o("theme-dark");localStorage.removeItem("theme"),o("theme-light")})),function(){if("theme-dark"===localStorage.getItem("theme"))return o("theme-dark"),i.checked=!0,void document.body.classList.add("theme-dark");o("theme-light"),i.checked=!1,document.body.classList.remove("theme-dark")}()}();
//# sourceMappingURL=shopping.9d9998ab.js.map