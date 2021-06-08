<template>
  <div class="p-10">
    <Table :clients="clientData" :providers="providerData"></Table>
    <ClientModal
      :edit="true"
      :client="clientData[0]"
      :providers="providerData"
    ></ClientModal>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import { GetAllClients, GetAllProviders } from './api/'
import ClientModal from './components/ClientModal.vue'
export default {
  name: 'App',
  components: {
    Table,
    ClientModal,
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
