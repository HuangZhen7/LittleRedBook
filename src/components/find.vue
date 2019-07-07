<template>
  <div class="find">
    <v-article :id="id"></v-article>
  </div>
</template>

<script>
import Article from './article'
export default {
  components: {
    'v-article': Article
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
