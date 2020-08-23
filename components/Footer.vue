<style lang="stylus" scoped></style>
<template lang="pug">
.footer
  .container-fluid
    .row
      .col-12
        a(href='').text-white.small 隱私權政策
        spna.text-white ．
        a(href='').text-white.small 關於 Donate
        spna.text-white ．
        a(href='').text-white.small 小敝步
        spna.text-white ．
        a(href='').text-white.small 意見回饋

</template>
<style lang="scss" scoped>
.footer {
  padding: 1rem 0;
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
