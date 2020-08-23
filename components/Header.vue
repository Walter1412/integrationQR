<template lang="pug">
.header
  .image
    img(src="/donate_white_en.svg")
  .my
    a(href='/signin').btn.btn-primary 登入

</template>
<style lang="scss" scoped>
.header {
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;;
}
</style>

<script>
export default {
  validate({ params, query, store }) {
    // return true // if the params are valid
    // return false // will stop Nuxt.js to render the route and display the error page
  },
  // asyncData(context, callback) {},
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
