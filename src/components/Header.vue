<template>
    <div class="header">
        <el-menu default-active="1" mode="horizontal" class="menu">
            <el-menu-item class="menu-item" index="1">Game</el-menu-item>
            <el-menu-item class="menu-item" index="2">About</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style scoped>
    .header {
        height: 60px;
        padding: 0 60px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
        background-color: rgb(243, 243, 243);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    .header:before {
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(40px);
        background: url('../assets/simple.jpg') 0 / cover fixed;
    }

    .menu {
        background-color: rgba(255, 255, 255, 0);
        height: 100%;
    }

    .menu .is-active {
        font-weight: bold;
    }

    .menu .menu-item {
        background-color: rgba(255, 255, 255, 0);
    }

    .menu .menu-item:hover {
        background-color: rgba(255, 255, 255, 0);
    }
</style>