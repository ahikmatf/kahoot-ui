<template>
  <div id="app" class="container">
    <Navbar />
    <Pembukaan v-if="page == 'pembukaan'" @data="changePageTo" />
    <Isi v-bind:status="viewType" v-else-if="page == 'isi'"/>
    <Penutup v-else-if="page == 'penutup'" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Pembukaan from './components/Pembukaan.vue'
import Isi from './components/Isi.vue'
import Penutup from './components/Penutup.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Pembukaan,
    Isi,
    Penutup
  },
  data: function() {
    return {
      page: 'pembukaan',
      viewType: 'creator'
    }
  },
  methods: {
    changePageTo: function(data) {
      if (data.creator == true) {
        this.viewType = "creator"
      } else {
        this.viewType = "player"
      }
      this.page = data.page
    }
  }
}
</script>

<style>

</style>
