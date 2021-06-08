<template>
  <div class="p-10">
    <!-- <Table :clients="clientData" :providers="providerData"></Table> -->
    <NewClient :providers="providerData"></NewClient>
  </div>
</template>

<script>
// import Table from './components/Table.vue'
import { GetAllClients, GetAllProviders } from './api/'
import NewClient from './components/NewClient.vue'
export default {
  name: 'App',
  components: {
    // Table,
    NewClient,
  },
  data() {
    return {
      clientData: [],
      providerData: [],
    }
  },
  created() {
    GetAllClients()
      .then((response) => response.data)
      .then((data) => {
        this.$data.clientData = data
      })

    GetAllProviders()
      .then((response) => response.data)
      .then((data) => {
        this.$data.providerData = data
      })
  },
}
</script>

<style>
</style>
