var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o),o("8zd4h");var r=o("kEUo3");const n=document.getElementsByName("email"),s=document.getElementsByName("message"),l=document.querySelector(".feedback-form"),i={email:"",message:""};function c(){try{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):{email:"",message:""}}catch(e){console.error("Помилка: ",e.message)}}window.addEventListener("load",(()=>{i=c(),n[0].value=i.email,s[0].value=i.message}));const d=r.throttle((function(){try{localStorage.setItem("feedback-form-state",JSON.stringify(i));const e=new Date,t=e.getHours(),a=e.getMinutes(),o=e.getSeconds();console.log(`${t}:${a}:${o}`)}catch(e){console.error("Помилка: ",e.message)}}),500);n[0].addEventListener("input",(e=>{i=c(),i.email=e.target.value,d()})),s[0].addEventListener("input",(e=>{i=c(),i.message=e.target.value,d()})),l.addEventListener("submit",(e=>{try{e.preventDefault(),i=c(),console.log(`Об'єкт: {email: ${i.email} та message: ${i.message}}`),localStorage.removeItem("feedback-form-state"),n[0].value=c().email,s[0].value=c().message}catch(e){console.error("Помилка: ",e.message)}}));
//# sourceMappingURL=03-feedback.a82b09a9.js.map
