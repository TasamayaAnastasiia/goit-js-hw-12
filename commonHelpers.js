import{S as h,i as d,a as f}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();let n=null;async function g(s){let r=document.querySelector(".image-gallery"),o="";const a=document.querySelector(".container-loader");a.style.display="block";const t=document.querySelector(".load-button");await new Promise(e=>setTimeout(e,1e3)),s.forEach(e=>{o+=`
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
        `}),r.insertAdjacentHTML("beforeend",o),a.style.display="none",t.style.display="block",n&&await n.destroy(),n=new h(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await n.refresh()}const w=document.querySelector(".form_images"),c=document.querySelector(".input_searching"),u=document.querySelector(".load-button"),y=document.querySelector(".container-loader"),b=document.querySelector(".image-gallery");let i,p=1,m=0;w.addEventListener("submit",async s=>{if(s.preventDefault(),!c.value.trim()){d.error({title:"Error",message:"Please enter a keyword for search"});return}i=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:c.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),c.value="",b.innerHTML="",u.style.display="none";try{const r=await f.get(`https://pixabay.com/api/?${i.toString()}`);if(r.status<200||r.status>=300)throw new Error("Failed to fetch images");const o=r.data;if(o.hits.length===0)throw new Error("No images found");g(o.hits),m=1,p=1}catch(r){d.error({title:"Error",message:r.message})}});u.addEventListener("click",async s=>{s.preventDefault(),u.style.display="none",y.style.display="block",p++,i.set("page",p);try{const r=await f.get(`https://pixabay.com/api/?${i.toString()}`);if(r.data.totalHits<=i.get("per_page")*m)throw y.style.display="none",new Error("We're sorry, but you've reached the end of search results.");const o=r.data;await g(o.hits);const a=document.querySelector(".image-card").getBoundingClientRect().height*2;window.scrollBy({top:a,behavior:"smooth"}),m+=1}catch(r){d.error({title:"Error",message:r.message})}});
//# sourceMappingURL=commonHelpers.js.map
