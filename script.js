/* =========================================================
   PORTFOLIO WEBSITE JAVASCRIPT
   BLACK + GOLD PREMIUM EXPERIENCE
   ========================================================= */


/* =========================================================
   PRELOADER
   ========================================================= */
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,5,5,.95)";

        navbar.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background =
        "rgba(5,5,5,.75)";

        navbar.style.boxShadow =
        "none";

    }

});


/* =========================================================
   HERO IMAGE FLOATING ANIMATION
   ========================================================= */
const heroImage =
document.querySelector(".hero-image img");

if(heroImage){

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        heroImage.style.transform =
        `translateY(${Math.sin(angle)*8}px)`;

    },20);

}





/* =========================================================
   STAGGER ANIMATION (ONE TIME ONLY)
   ========================================================= */

const staggerItems = document.querySelectorAll(
".gallery-item,.stat-card,.achievement-card,.category-card,.timeline-item"
);

staggerItems.forEach((item,index)=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";

    const observer = new IntersectionObserver((entries)=>{

        if(!entries[0].isIntersecting) return;

        setTimeout(()=>{

            item.style.transition =
            "all .8s ease";

            item.style.opacity =
            "1";

            item.style.transform =
            "translateY(0)";

        },index * 80);

        observer.unobserve(item);

    },{
        threshold:.15
    });

    observer.observe(item);

});
/* =========================================================
   ANIMATED GOOGLE MAPS COUNTERS
   ========================================================= */
const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let current = 0;

            const increment =
            target / 200;

            const updateCounter = ()=>{

                current += increment;

                if(current < target){

                    counter.innerText =
                    Math.floor(current)
                    .toLocaleString();

                    requestAnimationFrame(
                    updateCounter
                    );

                }

                else{

                    counter.innerText =
                    target.toLocaleString();

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/* =========================================================
   GOLD SPOTLIGHT CURSOR EFFECT
   ========================================================= */
const spotlight =
document.createElement("div");

spotlight.classList.add("spotlight");

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left =
    e.clientX + "px";

    spotlight.style.top =
    e.clientY + "px";

});


/*
ADD CSS:

.spotlight{
position:fixed;
width:400px;
height:400px;
pointer-events:none;
border-radius:50%;
background:radial-gradient(
circle,
rgba(212,175,55,.08),
transparent 70%
);
transform:translate(-50%,-50%);
z-index:-1;
}
*/


/* =========================================================
   HERO PARALLAX EFFECT
   ========================================================= */
window.addEventListener("scroll",()=>{

    const scrolled =
    window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.transform =
        `translateY(${scrolled * 0.15}px)`;

    }

});


/* =========================================================
   GALLERY HOVER TILT EFFECT
   ========================================================= */
const galleryCards =
document.querySelectorAll(
".gallery-item"
);

galleryCards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y-centerY)/20;

        const rotateY =
        (centerX-x)/20;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* =========================================================
   IMAGE LIGHTBOX
   ========================================================= */
const images =
document.querySelectorAll(
".gallery-item img"
);

const lightbox =
document.createElement("div");

lightbox.id =
"lightbox";

lightbox.innerHTML =

`
<span class="close-lightbox">&times;</span>
<img class="lightbox-image">
`;

document.body.appendChild(lightbox);

const lightboxImg =
lightbox.querySelector(
".lightbox-image"
);

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add(
        "show-lightbox"
        );

        lightboxImg.src =
        img.src;

    });

});

lightbox.addEventListener(
"click",()=>{

    lightbox.classList.remove(
    "show-lightbox"
    );

});

/*
ADD CSS

#lightbox{
position:fixed;
inset:0;
background:rgba(0,0,0,.95);
display:flex;
justify-content:center;
align-items:center;
opacity:0;
visibility:hidden;
transition:.4s;
z-index:9999;
}

.show-lightbox{
opacity:1 !important;
visibility:visible !important;
}

.lightbox-image{
max-width:90%;
max-height:90%;
border-radius:15px;
}

.close-lightbox{
position:absolute;
top:30px;
right:40px;
font-size:3rem;
color:white;
cursor:pointer;
}
*/


/* =========================================================
   FLOATING GOLD PARTICLES
   ========================================================= */
function createParticle(){

    const particle =
    document.createElement("span");

    particle.classList.add(
    "particle"
    );

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.animationDuration =
    (Math.random()*8 + 6)
    + "s";

    particle.style.opacity =
    Math.random();

    document.body.appendChild(
    particle
    );

    setTimeout(()=>{

        particle.remove();

    },15000);

}

setInterval(
createParticle,
400
);

/*
ADD CSS

.particle{
position:fixed;
bottom:-20px;
width:4px;
height:4px;
background:#D4AF37;
border-radius:50%;
pointer-events:none;
animation:floatParticle linear forwards;
z-index:-1;
}

@keyframes floatParticle{
to{
transform:
translateY(-110vh);
opacity:0;
}
}
*/


/* =========================================================
   TIMELINE GLOW ON VIEW
   ========================================================= */

const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        entry.target.style.boxShadow =
        "0 0 30px rgba(212,175,55,.15)";

        entry.target.style.padding =
        "15px";

        entry.target.style.borderRadius =
        "15px";

        timelineObserver.unobserve(
        entry.target
        );

    });

},{
    threshold:.5
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});

/* =========================================================
   BUTTON MAGNET EFFECT
   ========================================================= */
const buttons =
document.querySelectorAll(
".btn,.maps-button"
);

buttons.forEach(button=>{

    button.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        button.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const moveX =
        (x-rect.width/2)*0.15;

        const moveY =
        (y-rect.height/2)*0.15;

        button.style.transform =
        `translate(${moveX}px,${moveY}px)`;

    });

    button.addEventListener(
    "mouseleave",
    ()=>{

        button.style.transform =
        "translate(0,0)";

    });

});


/* =========================================================
   GOLD TEXT SHIMMER
   ========================================================= */
const goldTitles =
document.querySelectorAll(
".section-title"
);

setInterval(()=>{

    goldTitles.forEach(title=>{

        title.style.textShadow =
        `
        0 0 10px rgba(212,175,55,.2),
        0 0 20px rgba(212,175,55,.2)
        `;

        setTimeout(()=>{

            title.style.textShadow =
            "none";

        },1000);

    });

},5000);


/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */
const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.className =
"back-to-top";

document.body.appendChild(
topButton
);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.opacity = "1";

    }

    else{

        topButton.style.opacity = "0";

    }

});

topButton.addEventListener(
"click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/*
ADD CSS

.back-to-top{

position:fixed;

right:30px;
bottom:30px;

width:55px;
height:55px;

border:none;

border-radius:50%;

background:#D4AF37;

color:black;

font-size:22px;

cursor:pointer;

opacity:0;

transition:.3s;

z-index:999;
}
*/


/* =========================================================
   CONSOLE SIGNATURE
   ========================================================= */
console.log(
"%c Photography Portfolio Loaded",
"color:#D4AF37;font-size:18px;font-weight:bold;"
);
