<template>
    <div class="game">
        <h1>Fifteen Puzzle</h1>
        <div class="graph">
            <puzzle-block
                    v-for="position of map"
                    :key="position"
                    :position="position"
                    :imgPromise="imgPromise"/>
        </div>
        <el-button type="primary">test</el-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import PuzzleBlock from '../components/PuzzleBlock.vue';

    export default {
        name: 'game',
        computed: {
            ...mapState({
                map: ({game}) => game.map,
                imgUrl: ({game}) => game.currentImg
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

    .cache-image {
        display: none;
    }

    .graph {
        display: flex;
        flex-flow: row wrap;
        margin: 0 -10px;
        width: 400px;
        height: 400px;
    }
</style>