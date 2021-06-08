<template>
  <button class="bg-gray-100 border-gray-200 border text-sm px-5 h-7">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: { content: String },
}
</script>

<style>
</style>