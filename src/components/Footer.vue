<template>
    <div class="footer">
        <div class="center">
            Heskey Baozi
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>

<style scoped>
    .center {
        margin: auto;
    }

    .footer {
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(243, 243, 243, 0.64);
        z-index: 1;
        height: 40px;
    }

    .footer:before {
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