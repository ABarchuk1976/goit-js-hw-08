var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a),a("8zd4h");var n=a("kEUo3");const r=document.getElementsByName("email"),s=document.getElementsByName("message"),l=document.querySelector(".feedback-form"),i={email:"",message:""};function c(){try{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):{email:"",message:""}}catch(e){console.error("Помилка: ",e.message)}}window.addEventListener("load",(()=>{r[0].value=c().email,s[0].value=c().message}));const d=n.throttle((function(){try{localStorage.setItem("feedback-form-state",JSON.stringify(i));const e=new Date,t=e.getHours(),o=e.getMinutes(),a=e.getSeconds();console.log(`${t}:${o}:${a}`)}catch(e){console.error("Помилка: ",e.message)}}),500);r[0].addEventListener("input",(e=>{i.email=e.target.value,d()})),s[0].addEventListener("input",(e=>{i.message=e.target.value,d()})),l.addEventListener("submit",(e=>{try{console.log(e),e.preventDefault();let t=c();i.email=t.email,i.message=t.message,console.log(`Об'єкт: з полями і значеннями email: ${i.email} та message: ${i.message}.} `),localStorage.clear(),window.location.reload()}catch(e){console.error("Помилка: ",e.message)}}));
//# sourceMappingURL=03-feedback.8c8625c7.js.map
