import{S as w,i as d,a as g}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();let l=null;async function h(s,t){let a=document.querySelector(".image-gallery"),i="";const e=document.querySelector(".container-loader");e.style.display="block";const o=document.querySelector(".load-button");if(await new Promise(r=>setTimeout(r,1e3)),s.forEach(r=>{i+=`
            <li class="image-card">
                <a class="gallery-link" href="${r.webformatURL}">
                    <img class="img-example" src="${r.webformatURL}" alt="${r.tags}"></img>
                </a>

                    <div class="tumb">
                        <ul class="box-info">
                            <li>
                                <p>Likes</p>
                                <p>${r.likes}</p>
                            </li>
                            <li>
                                <p>Views</p>
                                <p>${r.views}</p>
                            </li>
                            <li>
                                <p>Comments</p>
                                <p>${r.comments}</p>
                            </li>
                            <li>
                                <p>Downloads</p>
                                <p>${r.downloads}</p>
                            </li>
                        </ul>
                    </div>
            </li>
        `}),a.insertAdjacentHTML("beforeend",i),e.style.display="none",o.style.display="block",l&&l.destroy(),l=new w(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await l.refresh(),t){const r=document.querySelector(".image-card").getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}}const L=document.querySelector(".form_images"),m=document.querySelector(".input_searching"),u=document.querySelector(".load-button"),y=document.querySelector(".container-loader"),S=document.querySelector(".image-gallery");let n,c,f=1,b,p=0;L.addEventListener("submit",async s=>{if(s.preventDefault(),c=m.value.trim(),m.value="",!c){d.error({title:"Error",message:"Please enter a keyword for search"});return}S.innerHTML="",u.style.display="none",n=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),b=n.get("per_page");try{const t=await g.get(`https://pixabay.com/api/?${n.toString()}`);if(t.status<200||t.status>=300)throw new Error("Failed to fetch images");const a=t.data;if(a.hits.length===0)throw new Error("No images found");h(a.hits,0),p+=1}catch(t){d.error({title:"Error",message:t.message})}});u.addEventListener("click",async s=>{s.preventDefault(),u.style.display="none",y.style.display="block",f++,n.set("page",f);try{const t=await g.get(`https://pixabay.com/api/?${n.toString()}`);if(t.data.totalHits<=b*p)throw y.style.display="none",new Error("We're sorry, but you've reached the end of search results.");const a=t.data;h(a.hits,1),p+=1}catch(t){d.error({title:"Error",message:t.message})}});
//# sourceMappingURL=commonHelpers.js.map
