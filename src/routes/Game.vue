<template>
    <div class="game">
        <h1>Fifteen Puzzle</h1>
        <div class="graph">
            <puzzle-block
                    v-for="(position, index) in map"
                    :key="position"
                    :position="position"
                    :index="index"
                    :imgPromise="imgPromise"
                    :movableBlockIndexArray="movableBlockIndexArray"
            />
        </div>
        <el-button type="primary">test</el-button>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    import PuzzleBlock from '../components/PuzzleBlock.vue';

    export default {
        name: 'game',
        computed: {
            ...mapState({
                map: ({game}) => game.map,
                imgUrl: ({game}) => game.currentImg
            }),
            ...mapGetters({
                movableBlockIndexArray: 'game/movableBlockIndexArray'
            }),
            imgPromise: function () {
                const imgObject = new Image();
                imgObject.src = this.imgUrl;
                return new Promise(resolve => {
                    imgObject.onload = () => {
                        resolve(imgObject);
                    }
                })
            }
        },
        components: {
            PuzzleBlock
        }
    };
</script>

<style scoped>
    .game {
        display: flex;
        flex-flow: column nowrap;
    }

    .graph {
        position: relative;
        margin: 0 -10px;
        width: 400px;
        height: 400px;
    }
</style>