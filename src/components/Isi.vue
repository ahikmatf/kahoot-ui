<template>
    <div>
        <div id="soal" v-if="viewType == 'creator'">
            <h1 class="title"><span>{{ questionNumber }}</span> {{ question }}</h1>
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
/* eslint-disable */
export default {
    name: "Isi",
    props: ['status'],
    data: function() {
        return {
            viewType: this.status,
            questionNumber: 0,
            questionNumbers: [1, 2, 3, 4, 5],
            question: "",
            questions: ["who?", "when?", "why?", "why?", "how?"],
            choices: [
                {"a": "a", "b": "b", "c": "c", "d":"d"},
                {"a": "a", "b": "b", "c": "c", "d":"d"},
                {"a": "a", "b": "b", "c": "c", "d":"d"},
                {"a": "a", "b": "b", "c": "c", "d":"d"},
                {"a": "a", "b": "b", "c": "c", "d":"d"}
            ]
        }
    },
    mounted: function() {
        this.startCounting()
    },
    methods: {
        startCounting() {
            let self = this
            let ourInterval = setInterval(function() {
                self.assignProblem()

                if (self.questionNumber == self.questionNumbers.length) {
                    clearInterval(ourInterval)
                    self.$emit('data', {'page': 'penutup'})
                }
            }, 2000)
        },
        assignProblem() {
            this.question = this.questions[this.questionNumber]
            this.questionNumber = this.questionNumbers[this.questionNumber]
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
