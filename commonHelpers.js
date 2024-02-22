import{S as h,i as u,a as m}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=o(r);fetch(r.href,e)}})();let l=null;async function y(n){let t=document.querySelector(".image-gallery"),o="";const a=document.querySelector(".container-loader");a.style.display="block";const r=document.querySelector(".load-button");await new Promise(e=>setTimeout(e,1e3)),n.forEach(e=>{o+=`
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
        `}),t.insertAdjacentHTML("beforeend",o),a.style.display="none",r.style.display="block",l&&await l.destroy(),l=new h(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await l.refresh()}const w=document.querySelector(".form_images"),p=document.querySelector(".input_searching"),c=document.querySelector(".load-button"),g=document.querySelector(".container-loader"),b=document.querySelector(".image-gallery");let s,i=1,f=0;w.addEventListener("submit",async n=>{if(n.preventDefault(),!p.value.trim()){u.error({title:"Error",message:"Please enter a keyword for search"});return}s=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:p.value.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),p.value="",b.innerHTML="",c.style.display="none";try{const t=await m.get(`https://pixabay.com/api/?${s.toString()}`);if(t.status<200||t.status>=300)throw new Error("Failed to fetch images");const o=t.data;if(o.hits.length===0)throw new Error("No images found");y(o.hits),f=1,i=1}catch(t){u.error({title:"Error",message:t.message})}});c.addEventListener("click",async n=>{n.preventDefault(),c.style.display="none",g.style.display="block",i++,s.set("page",i);try{const t=await m.get(`https://pixabay.com/api/?${s.toString()}`),o=t.data;await y(o.hits);const a=document.querySelector(".image-card").getBoundingClientRect().height*2;if(window.scrollBy({top:a,behavior:"smooth"}),i===t.data.totalHits/s.get("per_page"))throw console.log("currentPage = "+i),console.log("response.data.totalHits/searchParams.get('per_page') = "+t.data.totalHits/s.get("per_page")),console.log("response.data.totalHits = "+t.data.totalHits),console.log("searchParams.get('per_page') = "+s.get("per_page")),g.style.display="none",c.style.display="none",new Error("We're sorry, but you've reached the end of search results.");f+=1}catch(t){u.error({title:"Error",message:t.message})}});
//# sourceMappingURL=commonHelpers.js.map
