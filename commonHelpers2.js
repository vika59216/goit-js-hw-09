import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const l=document.querySelector(".feedback-form"),t=document.querySelector('[name="email"]'),a=document.querySelector('[name="message"]');l.addEventListener("input",e=>{const s=t.value,m=a.value,c={email:s,message:m};localStorage.setItem("feedback-form-state",JSON.stringify(c))});const o=localStorage.getItem("feedback-form-state");if(o!==null){const e=JSON.parse(o);t.value=e.email,a.value=e.message}l.addEventListener("submit",e=>{e.preventDefault();const s=t.value,m=a.value;console.log({email:s,message:m}),t.value="",a.value=""});
//# sourceMappingURL=commonHelpers2.js.map
