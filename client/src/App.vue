<template>
  <div class="p-10">
    <Table :clients="clientData"></Table>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import { GetAllClients } from './api/'
export default {
  name: 'App',
  components: {
    Table,
  },
  data() {
    return {
      clientData: [],
    }
  },
  created() {
    GetAllClients()
      .then((response) => response.data)
      .then((data) => {
        this.$data.clientData = data
      })
  },
}
</script>

<style>
</style>
