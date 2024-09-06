let preloader=document.querySelector('.preloader')
let graphicmillwebpg=document.querySelector('.graphicmillwebpg')
let body=document.querySelector('body')
setTimeout(()=>{
    preloader.style.display='none'
    graphicmillwebpg.style.display='block'
    body.style.overflowX='hidden'
    gsap.to('.maincontainer ',{
  
        x:'20%',
        duration:1,
        scrollTrigger:{
            trigger:'.firstsection--topbg',
            scroller:'body',
            start:'top 20%',
            end:'top 10%',
            scrub:2,
        }
    });
    
    gsap.to(".asidecontainer--text", {
        y:"-300vh",
       
        scrollTrigger: {
            trigger:'.maincontainer',
            scroller:'body',
            start: "top center",
            end: "bottom top", 
            scrub: 2, 
            
        },    
    });
    
    
    gsap.from('.pgandimgsection--page',{
        y:'20px',
        opacity:0,
        duration:2,
        scrollTrigger: {
            trigger:'.pgandimgsection',
            scroller:'body',
            start:'top 90%',
            end:'top 70%',
            scrub:2,
        },
    });
    gsap.to('.graphicheader--menusvg', {
        rotation: 1800,
        ease:"power2.out",
        
        scrollTrigger: {
            trigger: '.pgandimgsection',
            scroller:'body',
            start: 'top 80%',
            end: '100% 100%',
            scrub:4,
           
        }
    });
    
    gsap.to('.nxtproject',{
        y:"-30%",
        scrollTrigger: {
            trigger:'.nxtproject',
            scroller:'body',
            start:'top 90%',
            end:'top 40%',
            scrub:2,
           
        },
    })

    gsap.from('.graphicmillwebpg',{
        opacity:0.4,
        duration:0.5,
        ease:"power2.out",
    })

    document.addEventListener('mousemove',(e)=>{
        const cursor=document.querySelector('.graphicmillwebpg--customcursor')
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
       
    });
    document.body.style.cursor='none'

},2500)


gsap.to('.preloader--image',{
    rotation: 360,
    ease:"power2.out",
    duration:2,
    delay:0.3
})


gsap.to('.preloader',{
    opacity:0,
    ease:"power2.out",
    duration:1,
    delay:1
})

