import{S as h,i as p,a as m}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();let l=null;async function f(s){let t=document.querySelector(".image-gallery"),o="";const a=document.querySelector(".container-loader");a.style.display="block";const r=document.querySelector(".load-button");await new Promise(e=>setTimeout(e,1e3)),s.forEach(e=>{o+=`
            <li class="image-card">
                <a class="gallery-link" href="${e.webformatURL}">
                    <img class="img-example" src="${e.webformatURL}" alt="${e.tags}"></img>
                </a>

                    <div class="tumb">
                        <ul class="box-info">
                            <li>
                                <p>Likes</p>
                                <p>${e.likes}</p>
                            </li>
                            <li>
                                <p>Views</p>
                                <p>${e.views}</p>
                            </li>
                            <li>
                                <p>Comments</p>
                                <p>${e.comments}</p>
                            </li>
                            <li>
                                <p>Downloads</p>
                                <p>${e.downloads}</p>
                            </li>
                        </ul>
                    </div>
            </li>
        `}),t.insertAdjacentHTML("beforeend",o),a.style.display="none",r.style.display="block",l&&await l.destroy(),l=new h(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await l.refresh()}const w=document.querySelector(".form_images"),u=document.querySelector(".input_searching"),n=document.querySelector(".load-button"),y=document.querySelector(".container-loader"),b=document.querySelector(".image-gallery");let i,c=1,g=0;w.addEventListener("submit",async s=>{if(s.preventDefault(),!u.value.trim()){p.error({title:"Error",message:"Please enter a keyword for search"});return}i=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:u.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),u.value="",b.innerHTML="",n.style.display="none";try{const t=await m.get(`https://pixabay.com/api/?${i.toString()}`);if(t.status<200||t.status>=300)throw new Error("Failed to fetch images");const o=t.data;if(o.hits.length===0)throw new Error("No images found");if(await f(o.hits),t.data.totalHits<=i.get("per_page"))throw n.style.display="none",new Error("We're sorry, but you've reached the end of search results.");g=1,c=1}catch(t){p.error({title:"Error",message:t.message})}});n.addEventListener("click",async s=>{s.preventDefault(),n.style.display="none",y.style.display="block",c++,i.set("page",c);try{const t=await m.get(`https://pixabay.com/api/?${i.toString()}`),o=t.data;await f(o.hits);const a=document.querySelector(".image-card").getBoundingClientRect().height*2;if(window.scrollBy({top:a,behavior:"smooth"}),c==Math.ceil(t.data.totalHits/i.get("per_page")))throw y.style.display="none",n.style.display="none",new Error("We're sorry, but you've reached the end of search results.");g+=1}catch(t){p.error({title:"Error",message:t.message})}});
//# sourceMappingURL=commonHelpers.js.map
