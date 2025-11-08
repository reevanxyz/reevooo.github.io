const sections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(revealSection, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

const insideItems = document.querySelectorAll('.insidehead img');
const cloudL = document.querySelector('.cloudL');
const cloudR = document.querySelector('.cloudR');
const cloudLText = document.querySelector('.cloudL-text');
const cloudRText = document.querySelector('.cloudR-text');

insideItems.forEach(item => {
  item.addEventListener('click', () => {
    const side = item.dataset.side;
    const cloud = item.dataset.cloud;
    const text = item.dataset.text;

    insideItems.forEach(i => { if(i.dataset.side===side) i.classList.remove('active'); });
    item.classList.add('active');

    if(cloud==="cloudL"){ cloudL.classList.add("active"); cloudLText.textContent=text; cloudLText.classList.add("active"); }
    if(cloud==="cloudR"){ cloudR.classList.add("active"); cloudRText.textContent=text; cloudRText.classList.add("active"); }

    document.getElementById('intro-cloud').style.opacity='0';
  });
});

const desk = document.getElementById("desk");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

desk.addEventListener("click", () => popup.classList.add("active"));
closeBtn.addEventListener("click", () => popup.classList.remove("active"));

const pages = [
`<h3>Agile — Bank App (Flutter + Firebase)</h3>
<p class="peni">As Scrum Master I led a team to build a banking app using <strong>Flutter</strong> and <strong>Firebase</strong>. We used SCRUM methodology and implemented core features like account creation, secure logins, transactions, password validation, and email verification with security in mind.</p>
<img src="/images/projects/app.jpg" style="width:40%; display:block; margin:14px auto;">`,

`<h3>Built a Personal Website from Scratch</h3>
<p class="peni">I designed and developed a custom site using pure HTML, CSS, and JavaScript. All UI elements and interactions were handmade — the site included an artwork gallery and a fully custom music player. That project ignited my passion for coding; I’ve since built multiple sites, including this!</p>
<img src="/images/projects/website.png"><img src="/images/projects/website2.png">`,

`<h3>Creating Habit Tracker</h3>
<p class="peni">I created a tracker in Obsidian that extrapolates percentages from a daily checklist into timeframes like last month and the last 90 days. I also customized Obsidian with code to fit my routines and better track plans and goals.</p>
<img src="/images/projects/habittracker.png" alt="habit tracker screenshot">`,

`<h3>Running and maintaining game servers</h3>
<p class="peni">I built and hosted custom multiplayer servers, creating large mod environments and handling setup, performance tuning, plugin compatibility, and optimization so multiple players could enjoy stable sessions even on limited hardware.</p>

<h3>Hacking and modding consoles</h3>
<p class="peni">I started modding consoles at 13, learning reverse-engineering and exploiting firmware to add emulators and unlock features. I’ve worked on several PlayStation and Nintendo units — managing risks like bricking and using custom firmwares and community exploits.</p>

<h3>Modifying open-source applications</h3>
<p class="peni">I updated visuals of an older game by replacing default assets with custom-designed ones to breathe new life into it. The project gained traction and exceeded 5,000 downloads.</p>`,

`<h3>NLP — Arabic News Classification</h3>
<p class="peni">Developed a text classification pipeline for Arabic news articles. The workflow includes dataset loading, tokenization, vectorization, feature engineering, model training, performance evaluation, and an interactive prediction interface for testing classification outputs in real time.</p>`
];

let currentPage=0;
const projectContent=document.getElementById("project-content");
projectContent.innerHTML=pages[currentPage];

document.getElementById("nextProject").addEventListener("click",()=>{
    currentPage=(currentPage+1)%pages.length;
    projectContent.innerHTML=pages[currentPage];
});

document.getElementById("prevProject").addEventListener("click",()=>{
    currentPage=(currentPage-1+pages.length)%pages.length;
    projectContent.innerHTML=pages[currentPage];
});
