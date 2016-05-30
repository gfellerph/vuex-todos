<template>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li>
            <label for="toggled">
              <input
                value="false"
                :checked="activeFilter==false"
                @change="setFilter"
                id="toggled"
                type="radio"
                name="todoFilter"
              />
              <span>todo</span>
            </label>
          </li>
          <li>
            <label for="untoggled">
              <input
                value="true"
                :checked="activeFilter==true"
                @change="setFilter"
                id="untoggled"
                type="radio"
                name="todoFilter"
              />
              <span>done</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    vuex: {
      getters: {
        activeFilter: state => state.todo.activeFilter
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