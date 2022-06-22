<template>
    <div class="hero">
        <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 h-full bg-gray-100 rounded-lg lg:items-center overflow-hidden dark:bg-gray-900">
            <div class="col-start-1 row-start-2 md:row-start-1 p-4 self-center ">
                <h2 class="text-xl lg:text-3xl py-2" >Website Portal Informasi</h2>
                <h1 class="text-3xl md:text-3xl lg:text-6xl font-bold py-2 tracking-wide">
                    UPT SMPN 24 GRESIK
                </h1>
                <hr class="w-16 border-4 border-green-600 my-3 dark:border-yellow-700">
                <p class="text-sm md:text-base py-2 pb-5 md:pb-8 lg:pb-10 lg:mr-10">
                    Sekolah Adiwiyata tingkat Nasional di Kecamatan Cerme Kabupaten Gresik Provinsi Jawa Timur Indonesia
                </p>
                <TButton class="btn btn-green">
                    Selengkapnya
                </TButton> 
            </div>
            <div class="col-start-1 row-start-1 grid grid-cols-2 grid-rows-2 gap-4 md:h-full md:col-start-2 p-4">
                <div class="row-start-1 col-span-2">
                    <img class="opacity-90 w-full h-full object-cover rounded-lg object-center" src="/img/tes4.jpeg" alt="">
                </div>
                <div class="row-start-2">
                    <img class="opacity-90 w-full h-full object-cover rounded-lg object-center" src="/img/tes3.jpeg" alt="">
                </div>
                <div class="row-start-2">
                    <img class="opacity-90 w-full h-full object-cover rounded-lg object-center" src="/img/tes5.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss" scoped>
    .hero {
        @apply lg:h-screen w-full pt-20 z-20;
    }
</style>