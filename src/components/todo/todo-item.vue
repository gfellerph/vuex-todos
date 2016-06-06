<template>
  <div
    class="card-panel todo-item"
    @click="toggleTodo"
  >
    <p
      v-bind:class="{toggled:todo.toggled}"
      class="todo-text"
    >{{todo.text}}</p>
    <button
      class="todo-delete"
      @click="deleteTodo"
    >
      <i class="material-icons">delete</i>
    </button>
  </div>
</template>

<script>
  import firebase from 'src/firebase';

  export default {
    props: {
      todo: Object
    },
    methods: {
      toggleTodo () {
        firebase
          .database()
          .ref(`todos/${this.todo.id}`)
          .set(Object.assign({}, this.todo, {
            toggled: !this.todo.toggled
          }));
      },
      deleteTodo () {
        firebase
          .database()
          .ref(`todos/${this.todo.id}`)
          .remove();
      }
    }
  };
</script>

<style lang="scss">
  .todo-item {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .todo-delete {
    border: none;
    background: none;
    box-shadow: none;
    outline: none;
    opacity: 0;
    color: #e0e0e0;
    transition: opacity 500ms, color 500ms;

    &:hover,
    &:active,
    &:focus {
      background: none;
      border: none;
      outline: none;
      color: #d32f2f;
    }

    .todo-item:hover & {
      opacity: 1;
    }

    > i {
      display: block;
    }
  }

  .todo-text {
    margin: 0;
    width: 100%;
  }

  .toggled {
    text-decoration: line-through;
  }
</style>