<template>
    <div class="layout">
        <header>
            <el-menu default-active="1" mode="horizontal" class="menu">
                <el-menu-item class="menu-item" index="1">Game</el-menu-item>
                <el-menu-item class="menu-item" index="2">About</el-menu-item>
            </el-menu>
        </header>
        <div class="main">
            <div class="content center">
                <router-view></router-view>
            </div>
        </div>
        <footer>
            <div class="center">
                Heskey Baozi
            </div>
        </footer>
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

    header {
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

    .main {
        padding: 0 60px;
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

    footer {
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(243, 243, 243, 0.64);
        z-index: 1;
        height: 40px;
    }

    footer:before {
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
</style>