<template>
  <div>
    <!--Container-->
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div
        class="w-full px-4 md:px-6 text-xl leading-normal"
        style="font-family: Georgia, serif"
      >
        <!--Title-->
        <div class="font-sans">
          <p class="text-base md:text-sm text-green-500 font-bold">
            &lt;
            <a
              href="/"
              class="
                text-base
                md:text-sm
                text-green-500
                font-bold
                no-underline
                hover:underline
              "
              >Kembali</a
            >
          </p>
          <h1
            class="
              font-bold font-sans
              break-normal
              pt-6
              pb-2
              text-3xl
              md:text-4xl
            "
          >
            {{ artikel.judul_artikel }}
          </h1>

          <img
            class="
              opacity-90
              w-full
              h-full
              object-cover
              rounded-lg
              object-center
              mt-10
              mb-10
            "
            :src="artikel.gambar_artikel"
            alt=""
          />
          <p class="text-sm md:text-base font-normal text-gray-600">
            Diterbitkan {{ artikel.tanggal_terbit }}, {{ artikel.jam_terbit }}
          </p>
        </div>

        <!--Post Content-->

        <!--Lead Para-->
        <div
          class="font-sans py-6 text-base"
          v-html="artikel.deskripsi_artikel"
        ></div>

        <!--/ Post Content-->
      </div>

      <!--Divider-->
      <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

      <div class="container px-4 border-green-600">
        <div
          class="
            font-sans
            border border-green-600
            rounded-lg
            shadow-xl
            p-4
            text-center
          "
        >
          <h1
            class="
              font-bold
              text-green-600
              break-normal
              text-xl
              md:text-3xl
              mb-5
            "
          >
            WELCOME TO SPENDAG
          </h1>
          <h5 class="font-bold break-normal text-gray-600 text-sm md:text-md">
            Sekolah Adiwiyata tingkat Nasional di Kecamatan Cerme Kabupaten
            Gresik Provinsi Jawa Timur Indonesia
          </h5>
          <div class="w-full text-center pt-4"></div>
        </div>
      </div>

      <!--Author-->
      <div class="flex w-full items-center font-sans px-4 py-8">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-gray-600 text-xs md:text-base mb-2">Penulis :</p>
          <p class="text-base font-bold text-base md:text-xl leading-none mb-2">
            {{ artikel.nama_penulis }}
          </p>
          <p class="text-gray-600 text-xs md:text-lg">
            {{ artikel.jabatan_penulis }}
          </p>
        </div>
      </div>
      <!--/Author-->

      <!--Divider-->
      <hr class="border-b-2 border-gray-400 mb-8 mx-4" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artikel: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
</style>