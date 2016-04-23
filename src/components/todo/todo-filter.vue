<template>
  <p>
    <label for="all">
      <input v-bind:value="null" v-model="activeFilter" id="all" type="radio" name="todoFilter"/><span>all</span>
    </label>
    <label for="toggled">
      <input value="true" v-model="activeFilter" id="toggled" type="radio" name="todoFilter"/><span>toggled</span>
    </label>
    <label for="untoggled">
      <input value="false" v-model="activeFilter" id="untoggled" type="radio" name="todoFilter"/><span>untoggled</span>
    </label>
  </p>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      activeFilter: null
    }
  });
</script>

<style lang="less">
  label {
    cursor: pointer;
  }
  input[type="radio"] {
    visibility: hidden;
    position: absolute;
    
    & + span {
      display: inline-block;
      padding: 3px 10px;
      transition: background 150ms;
    }
    
    &:checked + span {
      background: black;
      color: white;
    }
  }
</style>