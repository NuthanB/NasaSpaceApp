(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),l=t.n(r);t(12),t(13);var s=()=>{const[e,a]=Object(n.useState)(!1),[t,r]=Object(n.useState)(!1),[l,s]=Object(n.useState)(""),o=()=>{const e=window.scrollY,a=document.querySelector(".navbar").offsetHeight;r(e>50);const t=document.querySelectorAll("section");let n="";t.forEach(t=>{const c=t.offsetTop-a,r=t.clientHeight;e>=c&&e<c+r&&(n=t.getAttribute("id"))}),s(n)};Object(n.useEffect)(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[]);const i=e=>{const t=document.getElementById(e);if(t){const n=document.querySelector(".navbar").offsetHeight;window.scrollTo({top:t.offsetTop-n,behavior:"smooth"}),s(e),a(!1)}};return c.a.createElement("section",{className:"navbar ".concat(t?"navbar-scrolled":"")},c.a.createElement("div",{className:"navbar-container"},c.a.createElement("div",{className:"navbar-logo"},c.a.createElement("img",{src:"./icons/logo-dark.png",alt:"logo"}),c.a.createElement("img",{src:"./icons/dsu.png",alt:"logo"})),c.a.createElement("div",{className:"navbar-toggle ".concat(e?"open":"")},c.a.createElement("button",{onClick:()=>{a(!e)},className:"navbar-toggle-button"},e?c.a.createElement("svg",{fill:"none",stroke:"orange",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"navbar-icon"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})):c.a.createElement("svg",{fill:"none",stroke:"orange",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"navbar-icon"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})))),c.a.createElement("ul",{className:"navbar-menu ".concat(e?"open":"")},c.a.createElement("li",{className:"navbar-menu-item"},c.a.createElement("a",{href:"#home",className:"navbar-link ".concat("home"===l?"t-orange":""),onClick:()=>i("home")},"Home")),c.a.createElement("li",{className:"navbar-menu-item"},c.a.createElement("a",{href:"#about",className:"navbar-link ".concat("about"===l?"t-orange":""),onClick:()=>i("about")},"About")),c.a.createElement("li",{className:"navbar-menu-item"},c.a.createElement("a",{href:"#organizers",className:"navbar-link ".concat("organizers"===l?"t-orange":""),onClick:()=>i("organizers")},"Organizers")),c.a.createElement("li",{className:"navbar-menu-item"},c.a.createElement("a",{href:"#foot",className:"navbar-link ".concat("foot"===l?"t-orange":""),onClick:()=>i("foot")},"Contact")))))};function o(e){let{words:a}=e;const t=Object(n.useRef)(null),r=Object(n.useRef)(null),l=Object(n.useRef)(0),s=Object(n.useRef)(0),o=Object(n.useRef)(!1),i=Object(n.useCallback)(()=>{const e=a[l.current];o.current?s.current>0?(t.current.innerHTML=e.substring(0,s.current-1),s.current--,setTimeout(i,50)):(o.current=!1,l.current=(l.current+1)%a.length,setTimeout(i,500)):s.current<e.length?(t.current.innerHTML+=e.charAt(s.current),s.current++,setTimeout(i,100)):setTimeout(()=>{o.current=!0,i()},1e3)},[a]);return Object(n.useEffect)(()=>{const e=setTimeout(i,500),a=t.current,n=r.current;return()=>{clearTimeout(e),a&&(a.innerHTML=""),n&&(n.style.display="inline"),l.current=0,s.current=0,o.current=!1}},[i]),c.a.createElement("div",{className:"typing-container"},c.a.createElement("h1",{className:"typing-text",ref:t,"aria-label":"Typing animation text"}," "),c.a.createElement("span",{className:"typing-cursor",ref:r},"|"))}var i=function(){return c.a.createElement("section",{id:"home",className:"hero-section"},c.a.createElement("h1",null,"At DSU,"),c.a.createElement("div",{className:"typing"},c.a.createElement("h1",null,"we are"),c.a.createElement(o,{words:["Inspiring","Innovating","Creating","Empowering"]})),c.a.createElement("h2",null,"World's largest NASA Space Apps Local Event 2024"))};function m(){return Object(n.useEffect)(()=>{const e=document.querySelector(".about-section"),a=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(e.classList.add("animate"),a.unobserve(e))})},{threshold:.1});a.observe(e)},[]),c.a.createElement("section",{id:"about",className:"about-section"},c.a.createElement("div",{className:"left-section"},c.a.createElement("h3",{className:"heading"},"NASA Space Apps?"),c.a.createElement("p",{className:"t-italic"},"NASA Space Apps is an annual international hackathon that brings together global participants to tackle challenges in space exploration and Earth science. Organized by NASA, it encourages teamwork, creativity, and innovation using NASA's open data. This event unites experts and enthusiasts from diverse backgrounds, making it a hub for advancing science and technology. Join us in Harohalli to be part of this global movement with a unique local touch."),c.a.createElement("p",null,"The NASA International Space Apps Challenge is a hackathon for coders, scientists, designers, storytellers, makers, technologists, and innovators around the world to come together and use open data from NASA and its Space Agency Partners to create solutions to challenges we face on Earth and in space.")),c.a.createElement("div",{className:"right-section"},c.a.createElement("img",{src:"./about.jpeg",alt:"About NASA Space Apps"})))}function u(){Object(n.useEffect)(()=>{const a=document.querySelector(".counts-section"),t=new IntersectionObserver(n=>{n.forEach(n=>{if(n.isIntersecting){document.querySelectorAll(".count-box .number").forEach(a=>{e(a)}),a.classList.add("animate"),t.unobserve(a)}})},{threshold:.1});t.observe(a)},[]);const e=e=>{const a=parseInt(e.innerText,10);let t=0;const n=Math.ceil(a/50),c=()=>{(t+=n)>a&&(t=a),e.innerText=t,t<a&&requestAnimationFrame(c)};c()};return c.a.createElement("section",{id:"counts",className:"counts-section"},c.a.createElement("div",{className:"right-section"},c.a.createElement("img",{src:"./counts.jpeg",alt:"About NASA Space Apps"})),c.a.createElement("div",{className:"left-section"},c.a.createElement("h3",{className:"heading"},"About DSU"),c.a.createElement("p",{className:"t-italic"},"Dayananda Sagar University has ideally positioned itself in providing value-based education, research and healthcare is now all set to take forward its 6 decades legacy of providing world-class quality education in its sprawling campus at Harohalli, Bengaluru."),c.a.createElement("div",{className:"counts-subsection"},c.a.createElement("p",{className:"left"},"This main campus is thoughtfully planned on 130 acres, with a picturesque site and a blossoming green environment, making it free from city crowds and pollution. Being a completely selfcontained campus at Harohalli, Kanakapura Road (35kms from Bengaluru city), it is equipped with the entire modern state-of-the-art infrastructure, creating a conducive environment for progressive experiential learning and futuristic growth and transforming you into next-generation innovators, explorers, leaders, and researchers."),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"count-box"},c.a.createElement("img",{className:"box-icon",src:"./icons/happy.png",alt:"Happy face icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("p",{className:"number"},"1800+"),c.a.createElement("p",null,"Students"))),c.a.createElement("div",{className:"count-box"},c.a.createElement("img",{className:"box-icon",src:"./icons/notes.png",alt:"Journal icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("p",{className:"stats"},"NAAC A+"),c.a.createElement("p",null,"approved"))),c.a.createElement("div",{className:"count-box box-spl-1"},c.a.createElement("img",{className:"box-icon",src:"./icons/village.png",alt:"Village house icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("p",{className:"number"},"4"),c.a.createElement("p",null,"villages adopted over"))),c.a.createElement("div",{className:"count-box box-spl-2"},c.a.createElement("img",{className:"box-icon",src:"./icons/premium-badge.png",alt:"premium badge icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("p",{className:"stats"},"Sagar Hospitals"),c.a.createElement("p",null,"free treatment to the adopted villages")))))))}var d=function(e){let{img_path:a,card_title:t,card_body:n,card_tail:r}=e;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:a,alt:n}),c.a.createElement("p",{className:"t-orange"},t),c.a.createElement("p",null,n),c.a.createElement("p",{className:"t-small t-italic"},r))};var p=function(){const[e,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{const e=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(e)},[]),c.a.createElement("section",{id:"organizers",className:"org-section ".concat(e?"fade-up":"")},c.a.createElement("h2",{className:"sub-title"},"THANKS TO OUR"),c.a.createElement("h1",{className:"heading"},"ORGANIZERS"),c.a.createElement("div",{className:"cards-container"},c.a.createElement(d,{img_path:"./organizers/Ms-Supriya-Mathew.jpg",card_title:"Ms. Supriya Mathew ",card_body:"Organiser, Nasa Space Apps- Harohalli. Vice\nPresident- International Affairs",card_tail:""}),c.a.createElement(d,{img_path:"./organizers/Mr-Lohith-RD.jpg",card_title:"Mr. Lohith R D",card_body:"Local Lead, Nasa Space Apps- Harohalli. Technical\nLead, International Affairs at DSU",card_tail:"Has been the NASA Space Apps global\nnominee in 2022(Bangalore, India) and 2023(Cambridge, UK)"}),c.a.createElement(d,{img_path:"./organizers/Ms-Sudha-Deepthi.jpg",card_title:"Ms. Sudha Deepthi",card_body:"Co-Local Lead, Nasa Space Apps- Harohalli. Manager,\nBosch Rexroth.",card_tail:"Has been hosting NASA Space Apps for the past 12\nyears"}),c.a.createElement(d,{img_path:"./organizers/Ms-Shivamma-Devanna.jpg",card_title:"Ms. Shivamma D",card_body:"Co-Host, Nasa Space Apps- Harohalli. Professor - Data\nScience Department.",card_tail:"NASA Global Mentor 2022 from Bangalore, India"})))};var g=function(){const[e,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{const e=setTimeout(()=>{a(!0)},100);return()=>clearTimeout(e)},[]),c.a.createElement("section",{id:"contact",className:"contact-section ".concat(e?"fade-up":"")},c.a.createElement("h1",{className:"heading"},"CONTACT US"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"./icons/pin-black.png",alt:"map pin icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("h3",null,"Location:"),c.a.createElement("p",{className:"t-orange"},c.a.createElement("strong",null,"Dayananda Sagar University, Harohalli")))),c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"./icons/mail.png",alt:"mail icon"}),c.a.createElement("div",{className:"flexbox"},c.a.createElement("h3",null,"Email (Local Lead):"),c.a.createElement("p",{className:"t-orange"},c.a.createElement("strong",null,"rdlohith@gmail.com"))))),c.a.createElement("div",{className:"right-section"},c.a.createElement("img",{src:"./icons/telegram.png",alt:"telegram icon",onClick:()=>{window.location.href="https://t.me/+qA5CpmKRdQVmMGY1"}}),c.a.createElement("img",{src:"./icons/gmail.png",alt:"email icon",onClick:()=>{window.location.href="#footer"}}))))};var E=function(){return c.a.createElement("section",{id:"foot",className:"footer"},c.a.createElement("div",{className:"footer-box"},c.a.createElement("img",{src:"./icons/hyperlink.png",alt:"hyperlink icon"}),c.a.createElement("a",{href:"https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/harohalli/",className:"footer-link"},"NASA Space Apps Challenge 2024")),c.a.createElement("div",{className:"footer-box"},c.a.createElement("img",{src:"./icons/pin.png",alt:"location pin icon"}),c.a.createElement("a",{href:"https://maps.app.goo.gl/TooMk6KBsYGgSG7X7",className:"footer-link location"},"DSU Main Campus - HAROHALLI")),c.a.createElement("div",{className:"socials"},c.a.createElement("button",{className:"social-icon"},c.a.createElement("a",{href:"https://www.instagram.com/nasa.spaceappsharohalli/"},c.a.createElement("img",{src:"./icons/instagram.png",alt:"instagram icon"}))),c.a.createElement("button",{className:"social-icon"},c.a.createElement("a",{href:"https://t.me/+qA5CpmKRdQVmMGY1"},c.a.createElement("img",{src:"./icons/telegram-footer.png",alt:"linked in icon"})))),c.a.createElement("p",null,"Developed by ",c.a.createElement("strong",null,c.a.createElement("span",{className:"t-orange devs"},c.a.createElement("a",{href:"https://www.linkedin.com/in/nuthanb/"},"Nuthan B"),",",c.a.createElement("a",{href:"https://www.linkedin.com/in/pavan-ks-bhat/"},"Pavanananda K S")))),c.a.createElement("p",null,"Email: ",c.a.createElement("strong",null,c.a.createElement("span",{className:"t-orange"},"international-relations@dsu.edu.in"))))};var h=()=>{const[e,a]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=()=>{window.scrollY>300?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);return c.a.createElement("div",{className:"back-to-top"},e&&c.a.createElement("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"back-to-top-button"},"\u2191"))};var b=()=>c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(i,null),c.a.createElement("div",{className:"main"},c.a.createElement(m,null),c.a.createElement("hr",null),c.a.createElement(u,null),c.a.createElement("hr",null),c.a.createElement(p,null),c.a.createElement("hr",null),c.a.createElement(g,null)),c.a.createElement(E,null),c.a.createElement(h,null));var v=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(a=>{let{getCLS:t,getFID:n,getFCP:c,getLCP:r,getTTFB:l}=a;t(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null))),v()},3:function(e,a,t){e.exports=t(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.493f88c9.chunk.js.map