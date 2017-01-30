<template>
    <div class="layout main-flex-container">
        <header>
            <el-menu default-active="1" mode="horizontal" class="menu">
                <el-menu-item class="menu-item" index="1">Game</el-menu-item>
                <el-menu-item class="menu-item" index="2">About</el-menu-item>
            </el-menu>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>Footer</footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Menu, MenuItem} from 'element-ui';

    export default {
        name: 'Layout',
        components: {
            [Menu.name]: Menu,
            [MenuItem.name]: MenuItem
        }

    };
</script>

<style scoped>
    .layout {
        background: url("../assets/simple.jpg") 0 / cover fixed;
        min-height: 100vh;
    }

    .main-flex-container {
        display: flex;
        flex-flow: column nowrap;
    }

    header {
        height: 60px;
        padding: 0 60px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
        background-color: rgb(243, 243, 243);
        position: relative;
        z-index: 1;
    }

    header:before {
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