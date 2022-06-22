<template>
  <div class="flex flex-col py-12 md:py-16">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 p-0"
    >
      <div class="flex flex-col lg:col-span-2">
        <div class="mb-4">
          <h2 class="text-2xl lg:text-3xl font-bold tracking-wide">
            Artikel Terbaru
          </h2>
          <hr
            class="w-12 border-4 border-green-600 my-3 dark:border-yellow-700"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 p-0 w-full">
          <div
            class="card"
            v-for="artikel_card in artikel_card.slice().reverse()"
            :key="artikel_card.id"
          >
            <img
              class="object-cover w-600 h-350"
              :src="artikel_card.gambar_artikel"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-xl mb-2 dark:text-white">
                {{ artikel_card.judul_artikel }}
              </div>
              <p class="text-green-700 text-base pb-2">
                {{ artikel_card.tanggal_terbit }}
              </p>
              <p class="text-gray-700 dark:text-gray-300 text-base">
                {{ artikel_card.headline_artikel }}
              </p>
            </div>
            <div class="px-6 py-4">
              <nuxt-link :to="'/artikel/' + artikel_card.id">
                <TButton class="btn btn-green"> Selengkapnya </TButton>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="mb-4">
          <h2 class="text-2xl lg:text-3xl font-bold tracking-wide">
            Info & Agenda
          </h2>
          <hr
            class="w-12 border-4 border-green-600 my-3 dark:border-yellow-700"
          />
        </div>
        <div class="bg-gray-100 rounded-lg dark:bg-gray-900 p-4 w-full">
          <div class="flex flex-col">
            <div
              class="flex mb-10"
              v-for="informasi_card in sortedItems.slice().reverse()"
              :key="informasi_card.id"
            >
              <div
                class="
                  grid grid-cols-3
                  gap-3
                  h-40
                  w-full
                  overflow-hidden
                  border-b-2
                "
              >
                <div class="flex flex-col justify-center items-center">
                  <h2 class="text-5xl md:text-6xl font-bold tracking-wide">
                    {{ informasi_card.tanggal_only_mulai }}
                  </h2>
                  <h3 class="text-base md:text-lg tracking-wide">
                    {{ informasi_card.bulan_agenda_mulai }}
                    {{ informasi_card.tahun_agenda_mulai }}
                  </h3>
                </div>
                <div class="col-span-2">
                  <h3 class="font-bold pb-1">
                    {{ informasi_card.judul_informasi }}
                  </h3>
                  <div
                    class="font-sans py-6 text-base"
                    v-html="informasi_card.informasi"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    artikel_card: {
      type: Array,
      require: true,
    },
    informasi_card: {
      type: Array,
      require: true,
    },
  },
  methods: {},
  computed: {
    sortedItems: function () {
      return this.informasi_card
        .reverse()
        .sort(
          (a, b) =>
            new Date(b.tanggal_agenda_mulai) - new Date(a.tanggal_agenda_mulai)
        );
    },
  },
};
</script>

<style lang="postcss" scoped>
.card {
  @apply rounded overflow-hidden shadow-lg mb-4 dark:bg-gray-900;
}
.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-700  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200;
  &:hover {
    @apply bg-gray-300 text-black;
  }
}
</style>