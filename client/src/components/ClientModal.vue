<template>
  <div class="flex flex-col shadow-md rounded-lg border mt-5">
    <div class="px-8 py-4 border-b">
      <h1 class="font-bold text-2xl text-blue-600">
        {{ modalHeader }}
      </h1>
    </div>
    <div class="px-20 py-10 border-b">
      <form>
        <div
          class="flex justify-center items-center mb-4"
          v-for="field in fields"
          :key="field.label"
        >
          <label
            class="font-bold text-sm w-36 text-right mr-5"
            :for="field.label.toLowerCase()"
            >{{ field.label }}:</label
          >
          <input
            class="border-2 rounded-sm w-72 text-sm"
            :type="field.type"
            :value="this[field.label.toLowerCase()]"
            :name="field.label.toLowerCase()"
            id=""
          />
        </div>
        <div class="flex justify-center items-center mb-4">
          <label class="font-bold text-sm w-36 text-right mr-5" for="providers"
            >Providers:</label
          >
          <input
            v-model="newProvider"
            class="border-2 rounded-sm w-40 text-sm"
            type="text"
            name="providers"
            id=""
          />
          <Button class="ml-2" content="Add Provider"></Button>
        </div>
        <div class="m-auto flex flex-col rounded-md border p-3 w-48 gap-y-2">
          <div
            class="flex items-center text-gray-600 gap-x-2"
            v-for="provider in providers"
            :key="provider.name"
          >
            <input
              type="checkbox"
              :checked="client.providers.map((x) => x.id).includes(provider.id)"
              :name="provider.name"
              id=""
            />
            <p class="text-sm flex-1">{{ provider.name }}</p>
            <PencilAltIcon class="w-4 cursor-pointer h-4"></PencilAltIcon>
            <TrashIcon class="w-4 cursor-pointer h-4"></TrashIcon>
          </div>
        </div>
      </form>
    </div>
    <div class="flex px-8 py-4">
      <div class="flex flex-1">
        <Button
          content="Delete Client"
          v-if="edit"
          class="bg-red-600 text-white"
        ></Button>
      </div>
      <div class="flex gap-x-5 justify-end">
        <Button content="Cancel"></Button>
        <Button content="Add Client"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import { TrashIcon, PencilAltIcon } from '@heroicons/vue/solid'

export default {
  components: { Button, TrashIcon, PencilAltIcon },
  props: {
    providers: Array,
    edit: Boolean,
    client: { name: String, email: String, phone: String, providers: Array },
  },
  computed: {
    modalHeader() {
      return this.edit ? 'Edit Client' : 'New Client'
    },
    name() {
      return this.edit && this.client ? this.client.name : ''
    },
    email() {
      return this.edit && this.client ? this.client.email : ''
    },
    phone() {
      return this.edit && this.client ? this.client.phone : ''
    },
  },
  data() {
    return {
      newProvider: '',
      fields: [
        { type: 'text', label: 'Name' },
        { type: 'email', label: 'Email' },
        { type: 'tel', label: 'Phone' },
      ],
    }
  },
}
</script>

<style>
</style>