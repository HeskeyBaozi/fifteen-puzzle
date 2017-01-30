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
        width: 300px;
        height: 500px;
        background-color: rgb(243, 243, 243);
    }

    .center {
        margin: auto;
    }

</style>