<template>
    <div class="gallery">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold py-4 tracking-wide">
            Galeri Kegiatan Kami
        </h1>
        <hr class="w-16 border-4 border-green-600 my-3 mb-8 dark:border-yellow-700">
        <div class="test">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal1.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal2.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal3.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal4.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal5.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal6.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal7.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal8.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal9.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal10.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal11.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal12.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal13.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal14.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal15.jpeg" alt="">
            <img class="opacity-90 object-cover rounded-lg object-center mb-4" src="/img/gallery/gal16.jpg" alt="">
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss" scoped>
    .gallery {
        @apply w-full pt-20 z-20 pb-16;
    }

    .test {
        columns: 3;
    }

    @media only screen and (min-width: 1024px) {
        .test {
            columns: 3;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .test {
            columns: 2;
        }
    }

    @media only screen and (max-width: 767px) {
        .test {
            columns: 1;
        }
    }

</style>