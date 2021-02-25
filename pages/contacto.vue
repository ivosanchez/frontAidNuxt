<template>
  <main>
    <h1
      v-html="content.contacto.title"></h1>

    <div
      v-html="content.contacto.content"></div>
  </main>
</template>

<script>
  import conf from '../conf';

  export default {
    head() {
      return {
        title: this.content.title
      };
    },
    async asyncData({$content}) {
      const content = await $content(conf.CONTENT).fetch();
      return {content};
    },
  };
</script>

<style scoped>
  *{
    outline: 2px dashed rgb(136, 7, 7);
  }
  main{
    background: rgba(6, 209, 16, 0.897);
  }
</style>

