<template>
  <div id="app" class="container">
    <Navbar />
    <Pembukaan v-if="page == 'pembukaan'" @data="checkViewType" />
    <Isi v-else-if="page == 'isi'" @data="changePage" v-bind:status="viewType" />
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
    checkViewType: function(data) {
      if (data.creator == true) {
        this.viewType = "creator"
      } else {
        this.viewType = "player"
      }
      this.changePage(data)
    },
    changePage(data) {
      this.page = data.page
    }
  }
}
</script>

<style>

</style>
