<template>
  <div class="nearby">
    <v-article :id="id"></v-article>
  </div>
</template>

<script>
import Articles from './article'
export default {
  components: {
    'v-article': Articles
  },
  data() {
    return {
      id: 1
    }
  },
}
</script>

<style>

</style>
