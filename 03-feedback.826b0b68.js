!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("eaxEB");var o=n("1WSnx"),r=document.getElementsByName("email"),s=document.getElementsByName("message"),l=document.querySelector(".feedback-form"),i="feedback-form-state",c={email:"",message:""};function m(){try{var e=localStorage.getItem(i);return e?JSON.parse(e):{email:"",message:""}}catch(e){console.error("Помилка: ",e.message)}}window.addEventListener("load",(function(){r[0].value=m().email,s[0].value=m().message}));var u=o.throttle((function(){try{localStorage.setItem(i,JSON.stringify(c));var e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();console.log("".concat(t,":").concat(a,":").concat(n))}catch(e){console.error("Помилка: ",e.message)}}),500);r[0].addEventListener("input",(function(e){c.email=e.target.value,u()})),s[0].addEventListener("input",(function(e){c.message=e.target.value,u()})),l.addEventListener("submit",(function(e){try{e.preventDefault();var t=m();c.email=t.email,c.message=t.message,console.log("Об'єкт: з полями і значеннями email: ".concat(c.email," та message: ").concat(c.message,".} ")),localStorage.removeItem(i),r[0].value=m().email,s[0].value=m().message}catch(e){console.error("Помилка: ",e.message)}}))}();
//# sourceMappingURL=03-feedback.826b0b68.js.map
