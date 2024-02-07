ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function hello() {
    function init() {
      gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    init();

    document.querySelectorAll(".nava").forEach(function (e) {
      e.addEventListener("mousemove", function (dets) {
        e.querySelector("h1:nth-child(1)").style.transform =
          "translateY(-100%)";
        e.querySelector("h1:nth-child(2)").style.transform =
          "translateY(-100%)";
        e.querySelector("#bar").style.width = "100%";
      });

      e.addEventListener("mouseleave", function (dets) {
        e.querySelector("h1:nth-child(1)").style.transform = "translateY(0%)";
        e.querySelector("h1:nth-child(2)").style.transform = "translateY(0%)";
        e.querySelector("#bar").style.width = "0%";
      });
    });

    document.querySelectorAll("#page3 h1 u").forEach(function (e) {
      e.addEventListener("mouseenter", function (dets) {
        e.classList.add("hovered");
      });

      e.addEventListener("mouseleave", function (dets) {
        e.classList.remove("hovered");
      });
    });

    document
      .querySelector("#main")
      .addEventListener("mousemove", function (dets) {
        document.querySelectorAll(".eyes-svg__group").forEach(function (group) {
          const rect = group.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = dets.clientX - centerX;
          const deltaY = dets.clientY - centerY;
          const offsetX = (dets.clientX - centerX - 800) * 0.04;
          const offsetY = (dets.clientY - centerY - 800) * 0.04;
          group.parentElement.style.left = `calc(16.5% + ${offsetX}px)`;
          group.parentElement.style.top = `calc(16.5% + ${offsetY}px)`;
          const angle = Math.atan2(deltaY, deltaX);
          const angleDeg = angle * (180 / Math.PI);
          group.style.transform = `rotate(${angleDeg + 90}deg)`;
        });
      });

    document
      .querySelector("#page7")
      .addEventListener("mousemove", function (dets) {
        document.querySelectorAll(".eyes-svg__group").forEach(function (group) {
          const rect = group.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = dets.clientX - centerX;
          const deltaY = dets.clientY - centerY;
          const offsetX = (dets.clientX - centerX - 800) * 0.04;
          const offsetY = (dets.clientY - centerY - 800) * 0.04;
          group.parentElement.style.left = `calc(16.5% + ${offsetX}px)`;
          group.parentElement.style.top = `calc(16.5% + ${offsetY}px)`;
          const angle = Math.atan2(deltaY, deltaX);
          const angleDeg = angle * (180 / Math.PI);
          group.style.transform = `rotate(${angleDeg + 90}deg)`;
        });
      });

    document
      .querySelector("#vid")
      .addEventListener("mousemove", function (dets) {
        document.querySelector("#p").style.left = `${dets.clientX - 25}px`;
        document.querySelector("#p").style.top = `${dets.clientY - 20}px`;
      });
    document.querySelector("#page5").addEventListener("click", function (dets) {
      document.querySelector("#vid").style.display = "initial";
    });
    document.querySelector("#vid").addEventListener("click", function (dets) {
      document.querySelector("#vid").style.opacity = 0;
    });

    const text = new SplitType("#p6content h1");

    document
      .querySelector("#p61")
      .addEventListener("mousemove", function (dets) {
        gsap.to(".p1 .char", {
          y: -125,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p61")
      .addEventListener("mouseleave", function (dets) {
        gsap.to(".p1 .char", {
          y: 0,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p62")
      .addEventListener("mousemove", function (dets) {
        gsap.to(".p2 .char", {
          y: -355,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p62")
      .addEventListener("mouseleave", function (dets) {
        gsap.to(".p2 .char", {
          y: -100,
          stagger: 0.05,
        });
      });

    document
      .querySelector("#p63")
      .addEventListener("mousemove", function (dets) {
        gsap.to(".p3 .char", {
          y: -125,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p63")
      .addEventListener("mouseleave", function (dets) {
        gsap.to(".p3 .char", {
          y: 0,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p64")
      .addEventListener("mousemove", function (dets) {
        gsap.to(".p4 .char", {
          y: -355,
          stagger: 0.05,
        });
      });
    document
      .querySelector("#p64")
      .addEventListener("mouseleave", function (dets) {
        gsap.to(".p4 .char", {
          y: -100,
          stagger: 0.05,
        });
      });

    document.querySelectorAll("#btn").forEach(function (e) {
      e.addEventListener("mousemove", function (dets) {
        const rect = e.getBoundingClientRect();
        const x = dets.clientX - rect.left;
        const y = dets.clientY - rect.top;
        e.querySelector("#bb").style.left = `${x}px`;
        e.querySelector("#bb").style.top = `${y}px`;
      });
    });

    gsap.fromTo(
      "#page1 img",
      {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        width: "0%",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        width: "20%",
        duration: 0.7,
        ease: Power1.easeInOut, // Use Power4.easeInOut instead of power4
        delay: 0.2,
      }
    );
    gsap.fromTo(
      "#nav",
      {
        y: -100,
      },
      {
        y: 0,
        duration: 0.7,
        delay: 1,
      }
    );
  },
  hello() {},
});

// --------------------responsive--------------

ScrollTrigger.matchMedia({
  "(max-width: 600px)": function hello1() {
    document.querySelectorAll("#rectangle svg").forEach(function (svg) {
      gsap.fromTo(
        svg,
        {
          rotate: 130,
        },
        {
          rotate: 230,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: Power2.easeInOut,
        }
      );
    });
  },
  hello1() {},
});
