<template>
  <div class="errors">
    <p v-for="error in errors">{{error}}</p>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    props: {
      errors: Array
    }
  }
</script>

<style>
  .errors,
  .error {
    font-size: 14px;
    color: red;
  }
</style>