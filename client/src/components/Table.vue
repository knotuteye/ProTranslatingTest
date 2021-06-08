<template>
  <div>
    <div class="flex flex-row justify-between px-8 py-5 bg-blue-100">
      <h1 class="text-2xl font-bold text-blue-800">Clients</h1>
      <Button content="New Client"></Button>
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
      <div
        class="grid grid-cols-5 text-sm"
        v-for="client in clients"
        :key="client._id"
      >
        <div class="text-sm text-gray-600 px-5 py-2 border">
          {{ client.name }}
        </div>
        <div class="text-gray-600 px-5 py-2 border">
          {{ client.email }}
        </div>
        <div class="text-gray-600 px-5 py-2 border">
          {{ formatPhone(client.phone) }}
        </div>
        <div class="text-gray-600 px-5 py-2 border">
          {{ providerNames(client) }}
        </div>
        <div class="flex justify-evenly text-gray-600 px-5 py-2 border">
          <button class="text-blue-600 underline">Edit</button>
          <button class="text-red-600 underline">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Table',
  props: {
    clients: Array,
    providers: Array,
  },
  components: { Button },
  computed: {},
  data() {
    return {
      tableHeaders: ['Name', 'Email', 'Phone', 'Providers', ''],
    }
  },
  methods: {
    formatPhone(phone) {
      let formattedPhone = ''
      phone.split('').forEach((digit, index) => {
        formattedPhone += `${digit}${index === 2 || index === 5 ? '-' : ''}`
      })
      return formattedPhone
    },
    providerNames(client) {
      return client.providers.map((x) => x.name).join(', ')
    },
  },
}
</script>

<style>
</style>