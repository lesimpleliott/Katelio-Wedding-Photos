import{r as p,j as C,d as G}from"./index-Bxyo5PoG.js";function y({width:t,height:o}){return t/o}function x(t,o=0){const n=10**o;return Math.round((t+Number.EPSILON)*n)/n}function H(t){return(o,n)=>t(n)-t(o)}class D{constructor(o){this.comparator=o,this.heap=[],this.n=0}greater(o,n){return this.comparator(this.heap[o],this.heap[n])<0}swap(o,n){const e=this.heap[o];this.heap[o]=this.heap[n],this.heap[n]=e}swim(o){let n=o,e=Math.floor(n/2);for(;n>1&&this.greater(e,n);)this.swap(e,n),n=e,e=Math.floor(n/2)}sink(o){let n=o,e=n*2;for(;e<=this.n&&(e<this.n&&this.greater(e,e+1)&&(e+=1),!!this.greater(n,e));)this.swap(n,e),n=e,e=n*2}push(o){this.n+=1,this.heap[this.n]=o,this.swim(this.n)}pop(){if(this.n===0)return;this.swap(1,this.n),this.n-=1;const o=this.heap.pop();return this.sink(1),o}size(){return this.n}}function B(t,o,n){const e=new Map,r=new Set,s=new Map;s.set(o,0);const c=new D(H(i=>i.weight));for(c.push({id:o,weight:0});c.size()>0;){const{id:i,weight:a}=c.pop();if(!r.has(i)){const l=t(i);r.add(i),l.forEach((u,h)=>{const f=a+u,d=e.get(h),m=s.get(h);(m===void 0||m>f&&(m/f>1.005||d!==void 0&&d<i))&&(s.set(h,f),c.push({id:h,weight:f}),e.set(h,i))})}}return s.has(n)?e:void 0}function V(t,o){const n=[];for(let e=o;e!==void 0;e=t.get(e))n.push(e);return n.reverse()}function q(t,o,n){const e=B(t,o,n);return e?V(e,n):void 0}function Q({photos:t,targetRowHeight:o,containerWidth:n}){const e=t.reduce((r,s)=>Math.min(y(s),r),Number.MAX_VALUE);return x(n/o/e)+2}function A(t,o,n,e){const r=o-(t.length-1)*n-2*e*t.length,s=t.reduce((c,i)=>c+y(i),0);return r/s}function T(t,o,n,e,r,s,c){const i=t.slice(o,n),a=A(i,e,s,c);return a>0?(a-r)**2*i.length:void 0}function U({photos:t,layoutOptions:o,targetRowHeight:n,limitNodeSearch:e,rowConstraints:r}){return s=>{var c,i;const{containerWidth:a,spacing:l,padding:u}=o,h=new Map;h.set(s,0);const f=(c=r==null?void 0:r.minPhotos)!=null?c:1,d=Math.min(e,(i=r==null?void 0:r.maxPhotos)!=null?i:1/0);for(let m=s+f;m<t.length+1&&!(m-s>d);m+=1){const g=T(t,s,m,a,n,l,u);if(g===void 0)break;h.set(m,g)}return h}}function X({photos:t,layoutOptions:o}){const{spacing:n,padding:e,containerWidth:r,targetRowHeight:s,rowConstraints:c}=o,i=Q({photos:t,containerWidth:r,targetRowHeight:s}),a=U({photos:t,layoutOptions:o,targetRowHeight:s,limitNodeSearch:i,rowConstraints:c}),l=q(a,0,t.length);if(l===void 0)return;const u=[];for(let h=1;h<l.length;h+=1){const f=t.map((m,g)=>({photo:m,index:g})).slice(l[h-1],l[h]),d=A(f.map(({photo:m})=>m),r,n,e);u.push(f.map(({photo:m,index:g},w)=>({photo:m,layout:{height:d,width:d*y(m),index:g,photoIndex:w,photosCount:f.length}})))}return u}function R(...t){return[...t].filter(o=>!!o).join(" ")}function I(t,{width:o,photosCount:n},{spacing:e,padding:r,containerWidth:s}){const c=e*(n-1)+2*r*n;return`calc((${t} - ${c}px) / ${x((s-c)/o,5)})`}function J(t,o){return o.layout!=="rows"?`calc(100% - ${2*o.padding}px)`:I("100%",t,o)}function j(t,o,n){var e,r;return I((r=(e=t.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:e[1])!=null?r:t,o,n)}function K(t,o,n){let e,r;const s=t.srcSet||t.images;return s&&s.length>0&&(e=s.concat(s.find(({width:c})=>c===t.width)?[]:[{src:t.src,width:t.width,height:t.height}]).sort((c,i)=>c.width-i.width).map(c=>`${c.src} ${c.width}w`).join(", ")),n.sizes?r=(n.sizes.sizes||[]).map(({viewport:c,size:i})=>`${c} ${j(i,o,n)}`).concat(j(n.sizes.size,o,n)).join(", "):e&&(r=`${Math.ceil(o.width/n.containerWidth*100)}vw`),{srcSet:e,sizes:r}}function W(t){var o,n;const{photo:e,layout:r,layoutOptions:s,imageProps:{style:c,className:i,...a}={},renderPhoto:l}=t,{onClick:u}=s,h={display:"block",boxSizing:"content-box",width:J(r,s),height:"auto",aspectRatio:`${e.width} / ${e.height}`,...s.padding?{padding:`${s.padding}px`}:null,...(s.layout==="columns"||s.layout==="masonry")&&r.photoIndex<r.photosCount-1?{marginBottom:`${s.spacing}px`}:null,...u?{cursor:"pointer"}:null,...c},f=u?w=>{u({event:w,photo:e,index:r.index})}:void 0,d={src:e.src,alt:(o=e.alt)!=null?o:"",title:e.title,onClick:f,style:h,className:R("react-photo-album--photo",i),loading:"lazy",decoding:"async",...K(e,r,s),...a},m=w=>{const{src:M,alt:b,srcSet:P,sizes:E,style:k,...$}=d;return p.createElement("img",{alt:b,...P?{srcSet:P,sizes:E}:null,src:M,style:w!=null&&w.wrapped?{display:"block",width:"100%",height:"100%"}:k,...$})},g=(({display:w,boxSizing:M,width:b,aspectRatio:P,padding:E,marginBottom:k,cursor:$})=>({display:w,boxSizing:M,width:b,aspectRatio:P,padding:E,marginBottom:k,cursor:$}))(h);return p.createElement(p.Fragment,null,(n=l==null?void 0:l({photo:e,layout:r,layoutOptions:s,imageProps:d,renderDefaultPhoto:m,wrapperStyle:g}))!=null?n:m())}function Y({rowContainerProps:t,children:o}){return p.createElement("div",{...t},o)}function Z(t){const{layoutOptions:o,rowIndex:n,rowsCount:e,renderRowContainer:r,rowContainerProps:{style:s,className:c,...i}={},children:a}=t,l={className:R("react-photo-album--row",c),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...n<e-1?{marginBottom:`${o.spacing}px`}:null,...s},...i};return p.createElement(p.Fragment,null,(r??Y)({layoutOptions:o,rowIndex:n,rowsCount:e,rowContainerProps:l,children:a}))}function tt(t){const{photos:o,layoutOptions:n,renderPhoto:e,renderRowContainer:r,componentsProps:{imageProps:s,rowContainerProps:c}}=t,i=X({photos:o,layoutOptions:n});return i?p.createElement(p.Fragment,null,i.map((a,l)=>p.createElement(Z,{key:`row-${l}`,layoutOptions:n,rowIndex:l,rowsCount:i.length,renderRowContainer:r,rowContainerProps:c},a.map(({photo:u,layout:h})=>p.createElement(W,{key:u.key||u.src,photo:u,layout:h,layoutOptions:n,renderPhoto:e,imageProps:s}))))):null}function nt(t,o,n,e){const r=new Map,s=new Set;s.add(n);for(let c=0;c<o;c+=1){const i=[...s.keys()];s.clear(),i.forEach(a=>{const l=c>0?r.get(a)[c].weight:0;t(a).forEach(({neighbor:u,weight:h})=>{let f=r.get(u);f||(f=[],r.set(u,f));const d=l+h,m=f[c+1];(!m||m.weight>d&&(m.weight/d>1.0001||a<m.node))&&(f[c+1]={node:a,weight:d}),c<o-1&&u!==e&&s.add(u)})})}return r}function et(t,o,n){const e=[n];for(let r=n,s=o;s>0;s-=1)r=t.get(r)[s].node,e.push(r);return e.reverse()}function ot(t,o,n,e){return et(nt(t,o,n,e),o,e)}function rt({photos:t,spacing:o,padding:n,targetColumnWidth:e,targetColumnHeight:r}){return s=>{const c=[],i=r*1.5;let a=e/y(t[s])+2*n;for(let l=s+1;l<t.length+1&&(c.push({neighbor:l,weight:(r-a)**2}),!(a>i||l===t.length));l+=1)a+=e/y(t[l])+o+2*n;return c}}function N({path:t,photos:o,containerWidth:n,columnsGaps:e,columnsRatios:r,spacing:s,padding:c}){const i=[],a=r.reduce((l,u)=>l+u,0);for(let l=0;l<t.length-1;l+=1){const u=o.map((d,m)=>({photo:d,index:m})).slice(t[l],t[l+1]),h=r.reduce((d,m,g)=>d+(e[l]-e[g])*m,0),f=(n-(t.length-2)*s-2*(t.length-1)*c-h)*r[l]/a;i.push(u.map(({photo:d,index:m},g)=>({photo:d,layout:{width:f,height:f/y(d),index:m,photoIndex:g,photosCount:u.length}})))}return i}function st({photos:t,layoutOptions:o,targetColumnWidth:n}){const{columns:e,spacing:r,padding:s,containerWidth:c}=o,i=[],a=[];if(t.length<=e){const d=t.length>0?t.reduce((g,w)=>g+y(w),0)/t.length:1;for(let g=0;g<e;g+=1)i[g]=2*s,a[g]=g<t.length?y(t[g]):d;const m=N({path:Array.from({length:e+1}).map((g,w)=>Math.min(w,t.length)),photos:t,columnsRatios:a,columnsGaps:i,containerWidth:c,spacing:r,padding:s});return{columnsGaps:i,columnsRatios:a,columnsModel:m}}const l=(t.reduce((d,m)=>d+n/y(m),0)+r*(t.length-e)+2*s*t.length)/e,u=rt({photos:t,targetColumnWidth:n,targetColumnHeight:l,spacing:r,padding:s}),h=ot(u,e,0,t.length);for(let d=0;d<h.length-1;d+=1){const m=t.slice(h[d],h[d+1]);i[d]=r*(m.length-1)+2*s*m.length,a[d]=1/m.reduce((g,w)=>g+1/y(w),0)}const f=N({path:h,photos:t,columnsRatios:a,columnsGaps:i,containerWidth:c,spacing:r,padding:s});return{columnsGaps:i,columnsRatios:a,columnsModel:f}}function L(t){const{photos:o,layoutOptions:n}=t,{columns:e,spacing:r,padding:s,containerWidth:c}=n,i=(c-r*(e-1)-2*s*e)/e,{columnsGaps:a,columnsRatios:l,columnsModel:u}=st({photos:o,layoutOptions:n,targetColumnWidth:i});return u.findIndex(h=>h.findIndex(({layout:{width:f,height:d}})=>f<0||d<0)>=0)>=0?e>1?L({photos:o,layoutOptions:{...n,columns:e-1}}):void 0:{columnsModel:u,columnsGaps:a,columnsRatios:l}}function it({photos:t,layoutOptions:o}){return L({photos:t,layoutOptions:o})}function ct({columnContainerProps:t,children:o}){return p.createElement("div",{...t},o)}function at(t){const{layoutOptions:o,columnIndex:n,columnsCount:e,columnsGaps:r,columnsRatios:s}=t,{layout:c,spacing:i,padding:a}=o;if(c==="masonry"||!r||!s)return`calc((100% - ${i*(e-1)}px) / ${e})`;const l=s.reduce((h,f)=>h+f,0),u=s.reduce((h,f,d)=>h+(r[n]-r[d])*f,0);return`calc((100% - ${x((e-1)*i+2*e*a+u,3)}px) * ${x(s[n]/l,5)} + ${2*a}px)`}function F(t){const{layoutOptions:o,renderColumnContainer:n,children:e,columnContainerProps:{style:r,className:s,...c}={},...i}=t,a={className:R("react-photo-album--column",s),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:at(t),justifyContent:o.layout==="columns"?"space-between":"flex-start",...r},...c};return p.createElement(p.Fragment,null,(n??ct)({layoutOptions:o,columnContainerProps:a,children:e,...i}))}function lt(t){const{photos:o,layoutOptions:n,renderPhoto:e,renderColumnContainer:r,componentsProps:{imageProps:s,columnContainerProps:c}}=t,i=it({photos:o,layoutOptions:n});if(!i)return null;const{columnsModel:a,columnsRatios:l,columnsGaps:u}=i;return p.createElement(p.Fragment,null,a.map((h,f)=>p.createElement(F,{key:`column-${f}`,layoutOptions:n,columnIndex:f,columnsCount:a.length,columnsGaps:u,columnsRatios:l,renderColumnContainer:r,columnContainerProps:c},h.map(({photo:d,layout:m})=>p.createElement(W,{key:d.key||d.src,photo:d,layout:m,layoutOptions:n,renderPhoto:e,imageProps:s})))))}function O(t){const{photos:o,layoutOptions:n}=t,{columns:e,spacing:r,padding:s,containerWidth:c}=n,i=(c-r*(e-1)-2*s*e)/e;if(i<=0)return e>1?O({...t,layoutOptions:{...n,columns:e-1}}):void 0;const a=[];for(let u=0;u<e;u+=1)a[u]=0;return o.reduce((u,h,f)=>{const d=a.reduce((m,g,w)=>g<a[m]-1?w:m,0);return a[d]=a[d]+i/y(h)+r+2*s,u[d].push({photo:h,index:f}),u},Array.from({length:e}).map(()=>[])).map(u=>u.map(({photo:h,index:f},d)=>({photo:h,layout:{width:i,height:i/y(h),index:f,photoIndex:d,photosCount:u.length}})))}function ut(t){const{photos:o,layoutOptions:n,renderPhoto:e,renderColumnContainer:r,componentsProps:{imageProps:s,columnContainerProps:c}}=t,i=O({photos:o,layoutOptions:n});return i?p.createElement(p.Fragment,null,i.map((a,l)=>p.createElement(F,{key:`masonry-column-${l}`,layoutOptions:n,columnsCount:i.length,columnIndex:l,renderColumnContainer:r,columnContainerProps:c},a.map(({photo:u,layout:h})=>p.createElement(W,{key:u.key||u.src,photo:u,layout:h,layoutOptions:n,renderPhoto:e,imageProps:s}))))):null}function dt({containerProps:t,children:o,containerRef:n}){return p.createElement("div",{ref:n,...t},o)}function ht(t){const{layout:o,renderContainer:n,children:e,containerRef:r,containerProps:{style:s,className:c,...i}={}}=t,a={className:R("react-photo-album",`react-photo-album--${o}`,c),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:o==="rows"?"column":"row",...s},...i};return p.createElement(p.Fragment,null,(n??dt)({containerProps:a,containerRef:r,layout:o,children:e}))}function mt(t){const o=p.useRef(t);return(!t||!o.current||t.join()!==o.current.join())&&(o.current=t),o.current}function ft(t,{newContainerWidth:o,newScrollbarWidth:n}){const{containerWidth:e,scrollbarWidth:r}=t;return e!==void 0&&r!==void 0&&o!==void 0&&n!==void 0&&o>e&&o-e<=20&&n<r?{containerWidth:e,scrollbarWidth:n}:e!==o||r!==n?{containerWidth:o,scrollbarWidth:n}:t}function pt(t,o){let n=t==null?void 0:t.clientWidth;if(n!==void 0&&o&&o.length>0){const e=[...o.filter(s=>s>0)].sort((s,c)=>c-s);e.push(Math.floor(e[e.length-1]/2));const r=n;n=e.find((s,c)=>s<=r||c===e.length-1)}return n}function gt(t,o){const[{containerWidth:n},e]=p.useReducer(ft,{containerWidth:o}),r=p.useRef(null),s=p.useRef();return{containerRef:p.useCallback(i=>{var a;(a=s.current)==null||a.disconnect(),s.current=void 0,r.current=i;const l=()=>e({newContainerWidth:pt(r.current,t),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});l(),i&&typeof ResizeObserver<"u"&&(s.current=new ResizeObserver(l),s.current.observe(i))},[t]),containerWidth:n}}const wt=Object.freeze([1200,600,300,0]);function S(t,o){return typeof t=="function"?t(o):t}function _(t,o){return typeof t<"u"?S(t,o):void 0}function yt(t,o){const n=wt.findIndex(e=>e<=o);return S(t[n>=0?n:0],o)}function v(t,o,n,e=0){const r=_(t,o);return Math.round(Math.max(r===void 0?yt(n,o):r,e))}function Pt({layout:t,onClick:o,containerWidth:n,targetRowHeight:e,rowConstraints:r,columns:s,spacing:c,padding:i,sizes:a}){return{layout:t,onClick:o,containerWidth:n,columns:v(s,n,[5,4,3,2],1),spacing:v(c,n,[20,15,10,5]),padding:v(i,n,[0,0,0,0,0]),targetRowHeight:v(e,n,[l=>l/5,l=>l/4,l=>l/3,l=>l/2]),rowConstraints:_(r,n),sizes:a}}function Ct(t,o,n){const{photos:e,componentsProps:r}=t,s=S(r,o)||{};if(n){const{layout:c,spacing:i,padding:a,rowConstraints:l}=n;if(c==="rows"){const{singleRowMaxHeight:u}=l||{};if(u){const h=Math.floor(e.reduce((f,{width:d,height:m})=>f+d/m*u-2*a,a*e.length*2+i*(e.length-1)));h>0&&(s.containerProps=s.containerProps||{},s.containerProps.style={maxWidth:h,...s.containerProps.style})}}}return s}function vt(t,o,n){const{photos:e,layout:r,renderPhoto:s,renderRowContainer:c,renderColumnContainer:i}=t,a={photos:e,renderPhoto:s,componentsProps:o};return r==="rows"?p.createElement(tt,{layoutOptions:n,renderRowContainer:c,...a}):r==="columns"?p.createElement(lt,{layoutOptions:n,renderColumnContainer:i,...a}):p.createElement(ut,{layoutOptions:n,renderColumnContainer:i,...a})}function xt(t){const{photos:o,layout:n,renderContainer:e,defaultContainerWidth:r,breakpoints:s}=t,{containerRef:c,containerWidth:i}=gt(mt(s),r);if(!n||!["rows","columns","masonry"].includes(n)||!Array.isArray(o))return null;const a=i?Pt({containerWidth:i,...t}):void 0,l=Ct(t,i,a);return p.createElement(ht,{layout:n,containerRef:c,renderContainer:e,containerProps:l.containerProps},a&&vt(t,l,a))}const Rt=G,Mt=t=>new Promise(o=>{const n=new Image;n.onload=()=>{o({width:n.width,height:n.height})},n.src=t}),bt=async t=>await Promise.all(t.images.map(async n=>{const{width:e,height:r}=await Mt(`${t.path}/thumbnail/${n.lowRes}`);return{src:`${t.path}/thumbnail/${n.lowRes}`,width:e,height:r,alt:n.id,title:n.author}})),z=Rt.albums.map(t=>({id:t.id,title:t.title,photos:bt(t)})),kt=()=>{const[t,o]=p.useState(z[0]),[n,e]=p.useState([]);return p.useEffect(()=>{(async()=>{const s=await t.photos;e(s)})()},[t]),C.jsxs("div",{children:[C.jsx("div",{className:"album-selector",children:z.map(r=>C.jsx("button",{onClick:()=>o(r),children:r.title},r.id))}),C.jsx(xt,{layout:"rows",photos:n})]})};export{kt as default};
