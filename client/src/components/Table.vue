<template>
  <div>
    <div class="flex flex-row justify-between px-8 py-5 bg-blue-100">
      <h1 class="text-2xl font-bold text-blue-800">Clients</h1>
      <button class="bg-gray-100 border-gray-200 border text-sm px-5">
        New Client
      </button>
    </div>
    <div>
      <div class="grid grid-cols-5">
        <div
          class="text-sm font-bold text-gray-600 px-5 py-2 bg-gray-50 border"
          v-for="header in tableHeaders"
          :key="header"
        >
          {{ header }}
        </div>
      </div>
      <div v-for="client in clients" :key="client._id"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    clients: Array,
  },
  data() {
    return {
      tableHeaders: ['Name', 'Email', 'Phone', 'Providers', ''],
    }
  },
}
</script>

<style>
</style>