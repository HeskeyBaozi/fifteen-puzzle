<template>
    <canvas width="100"
            height="100"
            :ref="'block' + position"
            :class="classObject"
            :style="relativePosition"
            @click.self="move"
    >
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
            },
            index: {
                type: Number,
                required: true
            },
            movableBlockIndexArray: {
                type: Array,
                required: true
            }
        },
        methods: {
            move: function (event) {
                console.log(event);
            }
        },
        computed: {
            isBlank: function () {
                return this.position === 15;
            },
            column: function () {
                return this.index % 4;
            },
            shouldColumn: function () {
                return this.position % 4;
            },
            row: function () {
                return Math.floor(this.index / 4);
            },
            shouldRow: function () {
                return Math.floor(this.position / 4)
            },
            relativePosition: function () {
                return {
                    top: `${this.row * 100}px`,
                    left: `${this.column * 100}px`
                };
            },
            classObject: function () {
                return {active: !this.isBlank, block: true};
            },
            movableDescriptor: function () {
                const direction = this.movableBlockIndexArray.findIndex(movableObject => movableObject.isMovable && this.index === movableObject.index);
                return {
                    isMovable: direction !== -1,
                    direction
                };
            }
        },
        mounted: async function () {
            const imageObject = await this.imgPromise;
            const ctx = this.$refs['block' + this.position].getContext('2d');
            ctx.drawImage(
                imageObject,
                this.shouldColumn * (imageObject.width / 4),
                this.shouldRow * (imageObject.height / 4),
                (imageObject.width / 4),
                (imageObject.height / 4),
                0, 0, 100, 100
            );
            if (this.isBlank) {
                ctx.fillStyle = 'rgba(120, 120, 120, 0.7)';
                ctx.fillRect(0, 0, 100, 100);
            }
        }
    }
</script>

<style scoped>
    .block {
        position: absolute;
        transition: all 200ms;
        box-sizing: border-box;
    }

    .active:hover {
        transform: scale(1.1);
        z-index: 10;
        border: 1px solid lightgray;
    }
</style>