export default function ({ $axios, store, redirect, error }) {
  $axios.setHeader('Content-Type', 'application/json; charset=utf-8', ['post'])

  $axios.onRequest((config) => {})
  $axios.onRequestError((error) => {})
  $axios.onResponse((res) => {})
  $axios.onResponseError((error) => {})
  $axios.onError((err) => {})
}
