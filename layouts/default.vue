<template>
  <div class="h-full dark:bg-gray-800 dark:text-gray-200">
    <Navbar class="px-4 lg:px-10"/>
    <nuxt class="mx-auto px-4 lg:px-10" />
    <Footer class="px-4 lg:px-10"/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar";
  import Footer from "~/components/Footer";
  export default {
    head: {
      title: "UPT SMPN 24 Gresik",
      meta: [{
          charset: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          hid: "description",
          name: "description",
          content: "Nuxt.js with TailwindCSS example",
        },
      ],
      link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }],
    },
    components: {
      Navbar,
      Footer
    }
  };
</script>