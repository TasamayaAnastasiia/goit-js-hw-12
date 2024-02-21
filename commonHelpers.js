import{S as w,i as u,a as g}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();let n=null;async function h(a,e){let l=document.querySelector(".image-gallery"),i="";const t=document.querySelector(".container-loader");t.style.display="block";const o=document.querySelector(".load-button");if(await new Promise(r=>setTimeout(r,1e3)),a.forEach(r=>{i+=`
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
        `}),l.insertAdjacentHTML("beforeend",i),t.style.display="none",o.style.display="block",n&&n.destroy(),n=new w(".gallery-link",{captionType:"attr",captionsData:"alt",captionDelay:250}),await n.refresh(),e){const r=document.querySelector(".image-card").getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}}const L=document.querySelector(".form_images"),m=document.querySelector(".input_searching"),d=document.querySelector(".load-button"),y=document.querySelector(".container-loader"),S=document.querySelector(".image-gallery");let s,c,f=1,b,p=0;L.addEventListener("submit",a=>{if(a.preventDefault(),c=m.value.trim(),m.value="",!c){u.error({title:"Error",message:"Please enter a keyword for search"});return}S.innerHTML="",d.style.display="none",s=new URLSearchParams({key:"42360153-ab2745711a491af6a9cf29268",q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}),b=s.get("per_page"),g.get(`https://pixabay.com/api/?${s.toString()}`).then(e=>{if(e.status<200||e.status>=300)throw new Error("Failed to fetch images");return e.data}).then(e=>{if(e.hits.length===0)throw new Error("No images found");h(e.hits,0),p+=1}).catch(e=>{u.error({title:"Error",message:e.message})})});d.addEventListener("click",a=>{a.preventDefault(),d.style.display="none",y.style.display="block",f++,s.set("page",f),g.get(`https://pixabay.com/api/?${s.toString()}`).then(e=>{if(e.data.totalHits<=b*p)throw y.style.display="none",new Error("We're sorry, but you've reached the end of search results.");return e.data}).then(e=>{h(e.hits,1),p+=1}).catch(e=>{u.error({title:"Error",message:e.message})})});
//# sourceMappingURL=commonHelpers.js.map
