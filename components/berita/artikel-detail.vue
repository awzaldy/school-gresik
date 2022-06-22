<template>
  <div>
    <nav id="header" class="fixed w-full z-10 top-0">
      <div
        id="progress"
        class="h-1 z-20 top-0"
        style="
          background: linear-gradient(
            to right,
            #4dc0b5 var(--scroll),
            transparent 0
          );
        "
      ></div>

      <div
        class="
          w-full
          md:max-w-4xl
          mx-auto
          flex flex-wrap
          items-center
          justify-between
          mt-0
          py-3
        "
      >
        <div class="pl-4">
          <a
            class="
              text-gray-900 text-base
              no-underline
              hover:no-underline
              font-extrabold
              text-xl
            "
            href="#"
          >
            Minimal Blog
          </a>
        </div>

        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="
              flex
              items-center
              px-3
              py-2
              border
              rounded
              text-gray-500
              border-gray-600
              hover:text-gray-900 hover:border-green-500
              appearance-none
              focus:outline-none
            "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="
            w-full
            flex-grow
            lg:flex lg:items-center lg:w-auto
            hidden
            lg:block
            mt-2
            lg:mt-0
            bg-gray-100
            md:bg-transparent
            z-20
          "
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="
                  inline-block
                  py-2
                  px-4
                  text-gray-900
                  font-bold
                  no-underline
                "
                href="#"
                >Active</a
              >
            </li>
            <li class="mr-3">
              <a
                class="
                  inline-block
                  text-gray-600
                  no-underline
                  hover:text-gray-900 hover:text-underline
                  py-2
                  px-4
                "
                href="#"
                >link</a
              >
            </li>
            <li class="mr-3">
              <a
                class="
                  inline-block
                  text-gray-600
                  no-underline
                  hover:text-gray-900 hover:text-underline
                  py-2
                  px-4
                "
                href="#"
                >link</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
              href="#"
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
      <hr class="border-b-2 border-gray-400 mx-4" />    

      <!--Author-->
      <div class="flex w-full items-center font-sans px-4 py-8">
        <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
        <div class="flex-1 px-2">
          <p class="text-base font-bold text-base md:text-xl leading-none mb-2">
            {{ artikel.nama_admin }}
          </p>
          <p class="text-gray-600 text-xs md:text-base">
            {{ artikel.jabatan }}
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