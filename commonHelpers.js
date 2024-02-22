import{S as h,i as d,a as f}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();let l=null;async function g(s,t){let a=document.querySelector(".image-gallery"),i="";const e=document.querySelector(".container-loader");e.style.display="block";const o=document.querySelector(".load-button");if(await new Promise(r=>setTimeout(r,1e3)),s.forEach(r=>{i+=`
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
        `}),a.insertAdjacentHTML("beforeend",i),e.style.display="none",o.style.display="block",l&&l.destroy(),l=new h(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await l.refresh(),t){const r=document.querySelector(".image-card").getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}}const b=document.querySelector(".form_images"),c=document.querySelector(".input_searching"),u=document.querySelector(".load-button"),y=document.querySelector(".container-loader"),w=document.querySelector(".image-gallery");let n,p=1,m=0;b.addEventListener("submit",async s=>{if(s.preventDefault(),!c.value.trim()){d.error({title:"Error",message:"Please enter a keyword for search"}),c.value="";return}n=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:c.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),c.value="",w.innerHTML="",u.style.display="none";try{const t=await f.get(`https://pixabay.com/api/?${n.toString()}`);if(t.status<200||t.status>=300)throw new Error("Failed to fetch images");const a=t.data;if(a.hits.length===0)throw new Error("No images found");g(a.hits,0),m=1,p=1}catch(t){d.error({title:"Error",message:t.message})}});u.addEventListener("click",async s=>{s.preventDefault(),u.style.display="none",y.style.display="block",p++,n.set("page",p);try{const t=await f.get(`https://pixabay.com/api/?${n.toString()}`);if(t.data.totalHits<=n.get("per_page")*m)throw y.style.display="none",new Error("We're sorry, but you've reached the end of search results.");const a=t.data;g(a.hits,1),m+=1}catch(t){d.error({title:"Error",message:t.message})}});
//# sourceMappingURL=commonHelpers.js.map
