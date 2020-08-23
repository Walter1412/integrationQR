<template lang="pug">
.d-flex.flex-column.justify-content-center.align-items-center
  .container
    .donate-card
      //- .logo
      //-   img(src='/donate_normal_en.svg')
      .avatar
        .image
        .name Username
        .url https://donate.tw/username
      .introduce 一些介紹一些介紹一些介紹一些介紹一些介紹一些介紹一些介紹一些介紹一些介紹一些介紹
      .row.d-flex.flex-column.justify-content-between.w-100
        .col-12.px-0
          button.btn.btn-outline-primary.btn-block.btn-lg.mb-3.border-2
            bold.small 使用 街口支付 抖內
          button.btn.btn-outline-primary.btn-block.btn-lg.border-2
            bold.small 使用 LinePay 抖內
</template>
<style lang="scss" scoped>
.donate-card {
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  .logo {
    padding-bottom: 1rem;
    img {
      max-height: 3rem;
    }
  }
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
      width: 10rem;
      height: 10rem;
      border-radius: 5rem;
      background-color: #ccc;
      border: 4px solid #ff154f;
    }
    .url {
      font-size: 0.75rem;
      padding: 0.1rem 0.5rem;
      background-color: lighten(#ff154f, 42%);
      border: 1px solid lighten(#ff154f, 38%);
      color: #ff154f;
      border-radius: 1rem;
    }
    .name {
      text-align: center;
      font-weight: 500;
      padding: 0.5rem 0;
    }
  }
  .introduce {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    padding: 1rem 0;
    text-align: center;
  }
  .border-2 {
    border-width: 2px;
    border-radius: 1rem;
  }
}
</style>

<script>
export default {
  layout: 'full',
}
</script>
