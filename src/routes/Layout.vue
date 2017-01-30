<template>
    <div class="layout">
        <my-header/>
        <my-content/>
        <my-footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Content from '../components/Content.vue';
    import Footer from '../components/Footer.vue';

    export default {
        name: 'Layout',
        components: {
            MyHeader: Header,
            MyContent: Content,
            MyFooter: Footer
        }
    };
</script>

<style scoped>
    .layout {
        background: url("../assets/simple.jpg") 0 / cover fixed;
        min-height: 100vh;
    }
</style>