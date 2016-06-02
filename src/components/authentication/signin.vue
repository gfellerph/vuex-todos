<template>
    <form novalidate class="container" action="" method="post">
        <div class="card-panel login-form">
            <div class="row">
                <div class="input-field col s12">
                    <input
                        type="email"
                        id="username"
                        name="username"
                        v-model="username">

                    <label for="username">Username (Email)</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        v-model="password">

                    <label for="password">Password</label>
                </div>
            </div>

            <errors :errors="errors"></errors>

            <p class="right-align">
                <button
                    class="btn teal waves-effect waves-light"
                    type="submit"
                    :disabled="isEmpty || isLoading"
                    @click="login"
                >Login</button>
            </p>
            
            <spinner v-if="isLoading"></spinner>
        </div>
    </form>
</template>

<script>
    import store from 'src/store';
    import firebase from 'src/firebase';
    import errors from 'components/errors/errors';
    import User from 'models/User';
    import spinner from 'components/shared/spinner';

	export default {
		data () {
			return {
				username: '',
				password: '',
                errors: [],
                isLoading: false
			}
		},
        computed: {
            isEmpty () {
                return !this.username && !this.password;
            }
        },
		methods: {
			login (event) {
				event.preventDefault();
                this.isLoading = true;

                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.username, this.password)
                    .then(() => {
                        this.errors = [];
                        this.isLoading = false;
                        store.dispatch('LOGIN', {user: new User(firebase.auth().currentUser)});
                    })
                    .catch(err => {
                        this.isLoading = false;
                        this.errors = [err.message];
                    });
			}
		},
        components: {
            errors,
            spinner
        }
	}
</script>

<style lang="scss">
    .login-form {
        position: relative;

        .progress {
            position: absolute;
            left: 0;
            bottom: 0;
            margin: 0;
        }
    }
</style>