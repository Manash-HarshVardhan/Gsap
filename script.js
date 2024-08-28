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

gsap.to('.graphicheader--menusvg',{
    transform:'rotate(360deg)',
    
})
