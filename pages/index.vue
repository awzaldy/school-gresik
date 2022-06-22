<template>
  <div>
    <Hero />
    <Welcome />
    <Principal />
    <Article :artikel_card="loadedPost" :informasi_card="loadedInformasi" />
    <!-- <Gallery/> -->
  </div>
</template>

<script>
import Hero from "~/components/index/Hero";
import Welcome from "~/components/index/Welcome";
import Principal from "~/components/index/Principal";
import Article from "~/components/index/Article";
import Gallery from "~/components/index/Gallery";

export default {
  components: {
    Hero,
    Welcome,
    Principal,
    Article,
    Gallery,
  },
  computed: {
    loadedPost() {
      return this.$store.getters.loadedPosts;
    },
    loadedInformasi() {
      return this.$store.getters.loadedInformasi;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>