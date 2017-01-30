<template>
    <canvas width="100" height="100" :ref="'block' + position">
        Your Browser is not support the Canvas
    </canvas>
</template>

<script>
    export default {
        name: 'PuzzleBlock',
        props: {
            imgPromise: {
                type: Promise,
                required: true
            },
            position: {
                type: Number,
                required: true
            }
        },
        computed: {
            isLast: function () {
                return this.position === 15;
            },
            column: function () {
                return this.position % 4;
            },
            row: function () {
                return Math.floor(this.position / 4);
            }
        },
        mounted: async function () {
            const imageObject = await this.imgPromise;
            const ctx = this.$refs['block' + this.position].getContext('2d');
            ctx.drawImage(
                imageObject,
                this.column * (imageObject.width / 4),
                this.row * (imageObject.height / 4),
                (imageObject.width / 4),
                (imageObject.height / 4),
                0, 0, 100, 100
            );
            if (this.isLast) {
                ctx.fillStyle = 'rgba(120, 120, 120, 0.7)';
                ctx.fillRect(0, 0, 100, 100);
            }
        }
    }
</script>