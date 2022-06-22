<template>
    <div>
        <About />
        <Principal />
        <Staff />
    </div>
</template>

<script>
    import About from "~/components/profil/About.vue";
    import Principal from "~/components/index/Principal";
    import Staff from "~/components/profil/Staff.vue";
    export default {
        components: {
            About,
            Principal,
            Staff
        }
    }
</script>

<style lang="scss" scoped>

</style>