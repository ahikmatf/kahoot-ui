<template>
    <div id="pembukaan">
        <audio src="../assets/horse.mp3" type="audio/mp3" />
        <div id="left">
            <a class="button is-primary is-rounded" v-on:click="onCreateClick">Create</a>
            <div v-if="isCreateClicked">
                <b-field label="Quiz ID">
                    <b-input v-model="quizIdCreate"></b-input>
                </b-field> 
                <b-field label="Clan Name">
                    <b-input v-model="clanName"></b-input>
                </b-field>        
                <a class="button is-success is-active" v-on:click="onSubmitClick(true)">Submit</a> 
            </div>
        </div>

        <div id="right">
            <a class="button is-primary is-rounded" v-on:click="onJoinClick">Join</a>
            <div v-if="isJoinClicked"> 
                <b-field label="Quiz ID">
                    <b-input v-model="quizIdJoin"></b-input>
                </b-field> 
                <b-field label="Your Name">
                    <b-input v-model="yourName"></b-input>
                </b-field>        
                <a class="button is-success is-active" v-on:click="onSubmitClick(false)">Submit</a>  
            </div>

        </div>
        <h3>Creator {{isCreator}}</h3>
        
    </div>
</template>

<script>
export default {
    name: "Pembukaan",
    data: function() {
        return {
            isCreateClicked: false,
            isJoinClicked: false,
            yourName: '',
            quizIdCreate: '',
            quizIdJoin: '',
            clanName: '',
            isCreator: false
        }
    },
    methods: {
        onCreateClick: function() {
            this.isCreateClicked = !this.isCreateClicked
        },
        onJoinClick: function() {
            this.isJoinClicked = !this.isJoinClicked
        },
        onSubmitClick: function(status) {
            this.isCreator = status
            this.$emit('data', {'page': "isi", 'creator': status})
        }
    }
}
</script>

<style scoped>
    #pembukaan {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1em;
    }

    #left, #right {
        padding: 5%;
    }
</style>
