<template>
    <div class="navbar">
        <div class="font-bold text-xl">
            <h1>SPENDAG</h1>
        </div>
        <ul class=" hidden md:flex">
            <li 
            class="border-2 py-2 px-2 rounded cursor-pointer dark:bg-white dark:border-white dark:text-black"
            @click="$colorMode.preference = 'light'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            </li>
            <li class="border-2 py-2 px-2 rounded cursor-pointer bg-gray-900 border-gray-900 text-white"
            @click="$colorMode.preference = 'dark'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            </li>
        </ul>
        <div class="md:hidden">
            <ul>
                <li class="dark:text-white cursor-pointer" @click="activeMobile()">
                    <svg viewBox="0 0 100 80" fill="currentColor"
                stroke="currentColor" width="40" height="40">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </li>
            </ul>

        </div>
        <div v-show="mobileMenu == true" class="fixed flex flex-col md:hidden h-screen w-full top-0 left-0 bg-gray-100 dark:bg-gray-800">
        <div class="flex justify-between items-center w-full h-auto py-2 top-0 bg-gray-100 dark:bg-gray-800 px-4">

        <ul class="flex md:hidden">
            <li 
            class="border-2 py-2 px-2 rounded cursor-pointer dark:bg-white dark:border-white dark:text-black"
            @click="$colorMode.preference = 'light'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            </li>
            <li class="border-2 py-2 px-2 rounded cursor-pointer bg-gray-900 border-gray-900 text-white"
            @click="$colorMode.preference = 'dark'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            </li>
        </ul>
                    <ul>
                <li class="dark:text-white cursor-pointer" @click="closeMobile()">
                    <h2 class="text-5xl font-bold">
                        X
                    </h2>
                </li>
            </ul>
        </div>
        <div class="md:hidden pt-10">    
            <ul class="flex flex-col justify-between items-center">
                <li class="px-2 pb-8 text-3xl" @click="closeMobile()">
                    <nuxt-link to="/"><TButton class="btn btn-menu" ><strong class="text-green-600">H</strong>ome</TButton></nuxt-link>
                </li>
                <li class="px-2 pb-8 text-3xl" @click="closeMobile()">
                    <nuxt-link to="profil"><TButton class="btn btn-menu" ><strong class="text-green-600">P</strong>rofil</TButton></nuxt-link>
                </li>
                <!-- <li class="px-2" @click="closeMobile()">
                    <nuxt-link to=""><TButton class="btn btn-menu"><strong class="text-green-600">F</strong>asilitas</TButton></nuxt-link>
                </li> -->
                <li class="px-2 pb-8 text-3xl" @click="closeMobile()">
                    <nuxt-link to="berita"><TButton class="btn btn-menu" ><strong class="text-green-600">B</strong>erita</TButton></nuxt-link>
                </li>
                <li class="px-2 pb-8 text-3xl" @click="closeMobile()">
                    <nuxt-link to="galeri"><TButton class="btn btn-menu" ><strong class="text-green-600">G</strong>aleri</TButton></nuxt-link>
                </li>
                <li class="px-2 pb-8 text-3xl" @click="closeMobile()">
                    <nuxt-link to="/kontak"><TButton class="btn btn-menu" ><strong class="text-green-600">A</strong>lamat</TButton></nuxt-link>
                </li>
            </ul>
        </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                mobileMenu: false
            }
        },
        methods: {
            activeMobile() {
                this.mobileMenu =  true;
            },
            closeMobile() {
                this.mobileMenu =  false;
            },
        }
    }
</script>

<style lang="postcss" scoped>
    .navbar {
        @apply fixed flex z-50 justify-between items-center w-full h-auto py-2 top-0 bg-white dark:bg-gray-800 ;
    }

</style>