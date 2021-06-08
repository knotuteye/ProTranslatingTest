<template>
  <div class="flex flex-col shadow-md border mt-5">
    <div class="px-8 py-4 border-b">
      <h1 class="font-bold text-2xl text-blue-600">New Client</h1>
    </div>
    <div class="px-20 py-10">
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
        <div class="rounded-md border w-48">
          <div class="flex" v-for="provider in providers" :key="provider.name">
            <input type="checkbox" :name="provider.name" id="" />
            <p>{{ provider.name }}</p>
          </div>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
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