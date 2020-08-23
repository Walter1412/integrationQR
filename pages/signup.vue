<template lang="pug">
.d-flex.flex-column.justify-content-center.align-items-center
  .container
    .row
      .col-12.col-sm-10.offset-sm-1
        h3.text-primary 註冊
    .row
      .col-12.col-sm-10.offset-sm-1
        p.text-secondary 註冊抖內，製作屬於自己的抖內page
        .form-group
          label 帳號
          input(placeholder='username@donate.com').form-control
        .form-group
          label 密碼
          input(placeholder='至少八位英文數字').form-control
        .form-group
          label 您的專屬 Url
          input(placeholder='love54088').form-control
    .row.mt-2
      .col-12
        p.small.text-center
          spna 註冊即代表您同意我們的
          a(href='#').mx-1 服務條款
          span 及
          a(href='#').mx-1 隱私權政策
    .row.mt-2
      .col-12.col-sm-10.offset-sm-1
          button.btn.btn-primary.btn-block 註冊
    .row.mt-4
      .col-12
        p.small.text-center
          spna.text-muted 已有帳號？
          a(href='/signin').mx-1 立即登入

</template>
<style lang="scss" scoped>
</style>

<script>
export default {
  layout: 'blank',
}
</script>
