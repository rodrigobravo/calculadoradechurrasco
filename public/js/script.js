!function(){!function(){function e(){X.style.display="none",p.style.display="none",y.style.display="none",s.style.display="none",u.style.display="none"}function t(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=1,e.style.zIndex=9})}function n(){X.style.display="flex",p.style.display="flex",y.style.display="flex",s.style.display="flex",u.style.display="flex"}function l(){Array.prototype.forEach.call(m,function(e,t,n){e.style.opacity=0,e.style.zIndex=3})}function o(){a("meat"),f.innerHTML="Churrasco",L.innerHTML="Quantidade de carne:",S.innerHTML="XXX g",z.innerHTML="Quantidade de frango:",z.style.display="flex",b.innerHTML="XXX g",b.style.display="flex",q.style.display="flex",M.style.display="flex",B.style.height="50vh"}function r(){a("beer"),f.innerHTML="Bebidas",L.innerHTML="Quantidade de refrigerante:",S.innerHTML="XXX L",z.style.display="flex",z.innerHTML="Quantidade de cerveja:",b.style.display="flex",b.innerHTML="XXX L",q.style.display="none",M.style.display="none",B.style.height="28vh"}function i(){a("pizza"),f.innerHTML="Pizza",L.innerHTML="Quantidade de pizza:",S.innerHTML="XXX pizzas",z.style.display="none",b.style.display="none",q.style.display="none",M.style.display="none",B.style.height="15vh"}function c(e){w=Number(H.value)+Number(T.value/2),"meat"===e?(A=String(.4*w),S.innerHTML=A.match(/\d.\d\d/)+" kg",E=String(.05*w),b.innerHTML=E.match(/\d.\d\d/)+" kg",Q=1*w,M.innerHTML=Q+" pães de alho"):"beer"===e?(C=1.5*w,S.innerHTML=C+" L",I=4*w,b.innerHTML=I+" latas de 350ml"):"pizza"===e&&(D=Math.ceil(.5*w),S.innerHTML=D+" pizzas de 8 fatias")}function a(e){x.style.width="70%",x.style.border="none",g.style.width="70%",g.style.border="none",k.style.width="70%",k.style.border="none","meat"===e?(x.style.width="100%",x.style.borderBottom="solid #B92D00"):"beer"===e?(g.style.width="100%",g.style.borderBottom="solid #B92D00"):"pizza"===e&&(k.style.width="100%",k.style.borderBottom="solid #B92D00")}var d=document.querySelectorAll(".cover-item-calc"),y=document.querySelector(".churrasco"),s=document.querySelector(".bebidas"),u=document.querySelector(".pizza"),p=document.querySelector(".cover-subtitle"),m=document.querySelectorAll(".options-all"),f=document.querySelector(".options-title"),h=document.querySelectorAll(".options-bottons"),L=document.querySelector(".meat-title"),S=document.querySelector(".meat-number"),z=document.querySelector(".chicken-title"),b=document.querySelector(".chicken-number"),q=document.querySelector(".other-title"),M=document.querySelector(".other-number"),H=document.querySelector("#value-adult"),T=document.querySelector("#value-child"),v=document.querySelector(".calculate"),X=document.querySelector(".cover-title"),x=(document.querySelector("#back-icon"),document.querySelector("#meat-icon")),g=document.querySelector("#beer-icon"),k=document.querySelector("#pizza-icon"),B=document.querySelector(".options-answer"),w=0,A=0,E=0,Q=0,D=0,C=0,I=0;Array.prototype.forEach.call(d,function(n,l,c){n.addEventListener("click",function(){e(),t(),0===l?o():1===l?r():2===l&&i()})}),Array.prototype.forEach.call(h,function(e,t,c){e.addEventListener("click",function(){0===t?(n(),l()):1===t?o():2===t?r():3===t&&i()})}),v.addEventListener("click",function(){"Churrasco"==f.innerHTML?c("meat"):"Bebidas"==f.innerHTML?c("beer"):"Pizza"==f.innerHTML&&c("pizza")})}()}();