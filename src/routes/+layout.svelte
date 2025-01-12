<script>
  import "../app.css";
  import { page } from "$app/stores";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Dock from "../components/Dock.svelte";
  import window from "../components/window.svelte";
  import { Section } from "lucide-svelte";
  // import { X } from "lucide-svelte";

  export let goToSection;

  // State to control window visibility
  let isOpen = true;

  let y;
  let innerHeight = 0;
  let innerWidth = 0;

  // Define a map of URLs to their corresponding Tailwind CSS background colors
  // const urlColors = {
  //   "/": "bg-blue-500",
  //   "/about": "bg-green-500",
  //   "/contact": "bg-yellow-500",
  //   // Add more URLs and colors as needed
  // };

  // $: bgColor = urlColors[page.url.pathname] || "bg-gray-100"; // Default color

  // Define tabs for the header and dock 3 = dock. 2 = header. 1 = both
//  export let tabs = [
//     { name: "Home", onClick: () => document.body.scrollIntoView({ behavior: "smooth" }), icon: "./assets/Icon_home.svg", type: 3 },
//     { name: "Projects", onClick: () => document.body.scrollIntoView({ behavior: "smooth" }), icon: "./assets/Icon_projects.svg", type: 1 },
//     { name: "Contact", onClick: () => document.body.scrollIntoView({ behavior: "smooth" }), icon: "./assets/Icon_projects.svg", type: 2 },
//     { name: "CodePen", onClick: () => window.open("https://codepen.io", "_blank"), icon: "./assets/Icon_codepen.svg", type: 3 },
//     { name: "About me", onClick: () => document.body.scrollIntoView({ behavior: "smooth" }), icon: "./assets/ak-logo.svg", type: 1 },
//   ];

// let tabs = [
//     { name: "Home", link: "/", icon: "./assets/Icon_home.svg", type: 3 },
//     { name: "Projects", link: "projects", icon: "./assets/Icon_projects.svg", type: 1 },
//     { name: "Contact", link: "contact", icon: "./assets/Icon_projects.svg", type: 2 },
//     { name: "CodePen", link: "codepen", icon: "./assets/Icon_codepen.svg", type: 3 },
//     { name: "About me", link: "about", icon: "./assets/ak-logo.svg", type: 1 },
//   ];

  // let tabs = [
  //   { name: "Home", icon: "./assets/Icon_home.svg",  },
  //   { name: "Projects", icon: "./assets/Icon_projects.svg",  },
  //   { name: "Contact", icon: "./assets/Icon_projects.svg",  },
  //   { name: "CodePen", icon: "./assets/Icon_codepen.svg",  },
  //   { name: "About me", icon: "./assets/ak-logo.svg",  },
  // ];

  let tabs = [
    { name: "Home", icon: "./assets/Icon_home.svg", link:"home", type: 3, section: 1, },
    { name: "Projects", icon: "./assets/Icon_projects.svg", link:"projects", type: 1, section: 2, },
    { name: "Contact", icon: "./assets/Icon_projects.svg", link:"contact", type: 2, popup: true, },
    { name: "CodePen", icon: "./assets/Icon_codepen.svg", link:"codepen", type: 3, open:"new", },
    { name: "About me", icon: "./assets/ak-logo.svg", link:"about", type: 1, popup: true,},
  ];


  // function goTop() {
  //   document.body.scrollIntoView();
  // }
</script>

<div
  class="relative flex flex-col max-w-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom o w-full duration 200 flex p-10 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "opacity-0 pointer-events-none")}
  >
    <!-- <button
      on:click={goTop}
      class="ml-auto rounded full text-white px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
    >
      <i class="fa-solid fa-arrow-up" />
    </button> -->
  </div>
  <!-- Dock position absolute to make it float above slot -->

  <Header {y} {tabs} />
  <Dock  {tabs} />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
