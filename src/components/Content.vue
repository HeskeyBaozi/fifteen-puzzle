<template>
    <div class="main">
        <div class="content center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    };
</script>

<style scoped>
    .main {
        height: 100vh;
        box-sizing: border-box;
        display: flex;
    }

    .content {
        width: 400px;
        height: min-content;
        background-color: rgb(243, 243, 243);
        padding: 10px;
    }

    .center {
        margin: auto;
    }

</style>