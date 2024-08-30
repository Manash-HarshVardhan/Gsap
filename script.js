gsap.to('.maincontainer ',{
  
    x:'20%',
    duration:1,
    scrollTrigger:{
        trigger:'.firstsec--topbg',
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


gsap.from('.secsection--page',{
    y:'20px',
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger:'.secsection',
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
        trigger: '.secsection',
        scroller:'body',
        start: 'top 80%',
        end: '100% 100%',
        scrub:2,
       
    }
});


document.addEventListener('mousemove',(e)=>{
    const cursor=document.querySelector('.bodycontainer--customcursor')
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
   
});
document.body.style.cursor='none'