<template>
  <div class="todo-item-wrapper">
    <div v-cloak v-if="panshift >= 0 && !todo.toggled" class="todo-item-reveal todo-item-toggle green">
      <i class="material-icons">check</i>
    </div>
    <div v-cloak v-if="todo.toggled && panshift < 0" class="todo-item-reveal todo-item-untoggle amber">
      <i class="material-icons">replay</i>
    </div>
    <div v-cloak v-if="showDelete" class="todo-item-reveal todo-item-delete red">
      <i class="material-icons">delete</i>
      <i class="material-icons">delete</i>
    </div>
    <div
      v-el:todo-element
      class="card-panel todo-item"
      @click="toggleTodo"
      v-touch:pan="onPan"
      v-touch-options:pan="{direction: 'horizontal', threshold: 5}"
      :style="style"
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
  </div>
</template>

<script>
  import firebase from 'src/firebase';

  export default {
    props: {
      todo: Object
    },
    data () {
      return {
        panshift: 0
      }
    },
    computed: {
      showDelete () {
        return (this.panshift >= 0) ? this.todo.toggled : !this.todo.toggled;
      },
      style () {
        return {
          transform: `translateX(${this.panshift}px)`,
          transition: (this.applyTransition) ? 'transform 500ms' : 'none'
        }
      },
      applyTransition () {
        return this.panshift == 0 || Math.abs(this.panshift) >= window.innerWidth;
      }
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
      },
      onPan (e) {
        if (e.isFinal) {
          const itemWidth = window.innerWidth;

          // Panup, this was the last pan event, decide what to do with
          // the todo
          if (Math.abs(e.overallVelocityX) > 1 || Math.abs(this.panshift) > itemWidth * 0.33) {

            // Panned strong or more than 50%, check whether to toggle
            // or delete
            if (e.offsetDirection == 4) {

              // Right pan
              this.todo.toggled ? this.deleteTodo() : this.toggleTodo();
            } else if (e.offsetDirection == 2) {

              // Left pan
              this.todo.toggled ? this.toggleTodo() : this.deleteTodo();
            } else {

              // WTF, do nothing
              this.panshift = 0;
            }

            var modifier = (e.offsetDirection == 4) ? 1 : -1;
            this.panshift = itemWidth * modifier;
          } else {

            // Not panned enough, do nothing
            this.panshift = 0;
          }
        } else {

          // Still panning, follow the finger
          this.panshift = e.deltaX;
        }
      }
    }
  };
</script>

<style lang="scss">
  .todo-item-wrapper {
    position: relative;
  }

  .todo-item {
    position: relative;
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

    @media (max-width: 765px) {
      display: none;
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

  .todo-item-reveal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  .todo-item-untoggle {
    justify-content: flex-end;
  }
</style>