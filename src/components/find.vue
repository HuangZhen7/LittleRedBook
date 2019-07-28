<template>
  <div class="find">
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
      id: 0
    }
  },
}
</script>

<style>

</style>
