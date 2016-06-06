<template>
  <div class="switch">
    <label>
      <span>Open</span>
      <sup>{{openCount}}</sup>
      <input
        type="checkbox"
        @change="setFilter"
      >
      <span class="lever"></span>
      <span>Closed</span>
      <sup>{{closedCount}}</sup>
    </label>
  </div>
</template>

<script>
  export default {
    computed: {
      openCount () {
        return this.todos.filter(todo => !todo.toggled).length;
      },
      closedCount () {
        return this.todos.filter(todo => todo.toggled).length;
      }
    },
    vuex: {
      getters: {
        todos: state => state.todo.todos
      },
      actions: {
        setFilter: function ({dispatch}, e) {
          dispatch('SET_FILTER', {activeFilter: e.currentTarget.checked});
        }
      }
    }
  };
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