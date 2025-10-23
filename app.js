
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    const images = gsap.utils.toArray('.demo-gallery img');
    const loader = document.querySelector('.loader--text');

    // Heavy scroll effect
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        document.body.style.pointerEvents = 'none';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.body.style.pointerEvents = 'auto';
        }, 150);
    });
  
    function handelLoading(event) {
        loader.textContent = `${Math.round(event.progressedCount * 100 / images.length)} %`;
    }
  







    function hideLoader() {
      gsap.to(".loader", {
        opacity: 0,
      });
      document.body.style.overflow = "auto";
      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");
        let x, xEnd;

        if (index % 2 == 1) {
            x = '100%';
            xEnd = -(w.scrollWidth - w.offsetWidth);
        } else {
            x = -600;
            xEnd = -(w.scrollWidth - w.offsetWidth);
        }

        gsap.fromTo(w, {
            x: x,
        }, {
            x: xEnd,
            scrollTrigger: {
                trigger: section,
                scrub: 2,
                start: "top bottom",
                end: "bottom top"
            }
        });
      });

    }
  









    imagesLoaded(images)
      .on('progress', handelLoading)
      .on('always', hideLoader);
  
  });
  
  