<template>
  <div class="flex flex-col shadow-md border mt-5">
    <div class="px-8 py-4 border-b">
      <h1 class="font-bold text-2xl text-blue-600">New Client</h1>
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
            class="border-2 rounded-sm w-72"
            :type="field.type"
            :name="field.label.toLowerCase()"
            id=""
          />
        </div>
        <div class="flex justify-center items-center mb-4">
          <label class="font-bold text-sm w-36 text-right mr-5" for="providers"
            >Providers:</label
          >
          <input
            class="border-2 rounded-sm w-40"
            type=""
            name="providers"
            id=""
          />
          <Button class="ml-2 w-32" content="Add Provider"></Button>
        </div>
        <div class="ml-52 flex flex-col rounded-md border p-3 w-48 gap-y-2">
          <div
            class="flex items-center text-gray-600 gap-x-2"
            v-for="provider in providers"
            :key="provider.name"
          >
            <input type="checkbox" :name="provider.name" id="" />
            <p class="text-sm flex-1">{{ provider.name }}</p>
            <PencilAltIcon class="w-4 cursor-pointer h-4"></PencilAltIcon>
            <TrashIcon class="w-4 cursor-pointer h-4"></TrashIcon>
          </div>
        </div>
      </form>
    </div>
    <div class="flex px-8 py-4 gap-x-5 justify-end">
      <Button content="Cancel"></Button>
      <Button content="Add Client"></Button>
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
  },
  data() {
    return {
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