<template>
  <div>
    <Galleries :galeri_card="loadedGaleri" />
  </div>
</template>

<script>
import Galleries from "~/components/galeri/Galleries.vue";
export default {
  components: {
    Galleries,
  },
  computed: {
    loadedGaleri() {
      return this.$store.getters.loadedGaleri;
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>