import{i as A,S as b}from"./assets/vendor-DB8xv3_Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const U="43342378-f760c13e6ac2de41c368148af",C="https://pixabay.com/api/";function S(a){return fetch(`${C}?key=${U}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",w=document.createElement("span");w.classList.add("loader");const f=document.createElement("div");f.classList.add("container");const d=document.createElement("form"),c=document.createElement("input");c.setAttribute("type","text");c.setAttribute("name","query");c.placeholder="Search images...";const y=document.createElement("button");y.setAttribute("type","submit");y.textContent="Search";const l=document.createElement("ul");l.classList.add("gallery");d.append(c,y);f.append(d);document.body.append(f);document.body.append(l,w);d.addEventListener("submit",x);function x(a){a.preventDefault();const r=a.currentTarget.elements.query.value;if(r.trim()===""){A.warning({title:"Caution",message:"Type what you want to find!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",iconUrl:"",timeout:2e3});return}l.innerHTML="";const i=document.querySelector(".loader");i.classList.add("isVisible"),S(r).finally(()=>{i.classList.remove("isVisible")}).then(o=>{if(o.hits.length===0){A.error({theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:E,maxWidth:"432px",timeout:2e3});return}console.log(o),o.hits.forEach(e=>{const t=document.createElement("li");t.classList.add("gallery-item");const n=document.createElement("a");n.classList.add("gallery-link"),n.href=e.largeImageURL;const s=document.createElement("img");s.classList.add("gallery-image"),s.src=e.webformatURL,s.dataset.source=e.largeImageURL,s.alt=e.tags,s.width=360,s.height=200,n.appendChild(s);const h={Likes:e.likes,Views:e.views,Comments:e.comments,Downloads:e.downloads},m=document.createElement("ul");m.classList.add("gallery-desc-list");for(let L in h){const u=document.createElement("li");u.classList.add("gallery-desc-item");const g=document.createElement("p");g.classList.add("gallery-desc-ttl"),g.textContent=L;const p=document.createElement("p");p.classList.add("gallery-desc-text"),p.textContent=h[L],u.append(g,p),m.append(u)}t.append(n,m),l.appendChild(t)}),new b(".gallery a",{captionsData:"alt",captionDelay:250}),c.value=""}).catch(o=>(A.error({theme:"dark",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:" #ef4040",iconUrl:E,maxWidth:"432px",timeout:2e3}),console.log(o),d.reset(),o))}
//# sourceMappingURL=commonHelpers.js.map
