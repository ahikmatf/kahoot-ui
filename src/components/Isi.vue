<template>
    <div>
        <div id="soal" v-if="viewType == 'creator'">
            <h1 class="title">Soal</h1>
            <h3 class="subtitle">Ini adalah soal yang bakalan muncul</h3>
        </div>
        <div id="jawaban" v-else-if="viewType == 'player'">
            <a class="button is-info" id="a">Normal</a>
            <a class="button is-success" id="b">Normal</a>
            <a class="button is-warning" id="c">Normal</a>
            <a class="button is-danger" id="d">Normal</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Isi",
    props: ['status'],
    data: function() {
        return {
            viewType: this.status
        }
    }
}
</script>

<style>
    #jawaban {
        display: grid;
        grid-template-areas:
            "a b"
            "c d";
    }
    #a {
        grid-area: a;
    }
    #b {
        grid-area: b;
    }
    #c {
        grid-area: c;
    }
    #d {
        grid-area: d;
    }
</style>
