<template>
  <div>
    <artikel-detail :artikel="loadedPost"></artikel-detail>
  </div>
</template>

<script>
import axios from "axios";
import artikelDetail from "~/components/berita/artikel-detail.vue";
export default {
  components: { artikelDetail },
  async asyncData(context) {
    return await axios
      .get(
        process.env.baseUrl + "/DataArtikel/" + context.params.slug + ".json"
      )
      .then((res) => {
        return {
          loadedPost: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
};
</script>

<style>
</style>