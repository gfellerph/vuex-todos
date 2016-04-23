<template>
  <p>
    <label for="all">
      <input
        value="null"
        :checked="activeFilter==null"
        @change="setFilter"
        id="all"
        type="radio"
        name="todoFilter"
      />
      <span>all</span>
    </label>
    <label for="toggled">
      <input
        value="true"
        :checked="activeFilter==true"
        @change="setFilter"
        id="toggled"
        type="radio"
        name="todoFilter"
      />
      <span>toggled</span>
    </label>
    <label for="untoggled">
      <input
        value="false"
        :checked="activeFilter==false"
        @change="setFilter"
        id="untoggled"
        type="radio"
        name="todoFilter"
      />
      <span>untoggled</span>
    </label>
  </p>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    vuex: {
      getters: {
        activeFilter: state => state.activeFilter
      },
      actions: {
        setFilter: ({dispatch}, e) => {
          dispatch('SET_FILTER', {activeFilter: JSON.parse(e.target.value)});
        }
      }
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