<template lang="pug">
.d-flex.flex-column.justify-content-center.align-items-center
  .container
    .row
      .col-12.col-sm-10.offset-sm-1
        h3.text-primary 登入
    .row
      .col-12.col-sm-10.offset-sm-1
        p.text-secondary 登入抖內，分享你的抖內帳號，讓大家抖起來!
        .form-group
          label 帳號
          input(placeholder='username@donate.com').form-control
        .form-group
          label.d-flex.justify-content-between.align-items-center
            spna 密碼
            a(href='#').text-secondary.small 忘記密碼？
          input(placeholder='password').form-control
    .row.mt-3
      .col-12.col-sm-10.offset-sm-1
          button.btn.btn-primary.btn-block 登入
    .row.mt-4
      .col-12.col-sm-10.offset-sm-1
        p.small.text-center.text-muted 沒有帳號？
          a(href='/signup') 立即註冊

</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  layout: 'blank',
}
</script>
