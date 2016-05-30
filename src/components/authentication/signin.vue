<template>
    <form novalidate class="container" action="" method="post">
        <div class="card-panel">
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
                <button :disabled="isEmpty" @click="login" type="submit" class="btn teal waves-effect waves-light">Login</button>
            </p>
        </div>
    </form>
</template>

<script>
    import store from 'src/store';
    import firebase from 'src/firebase';
    import errors from 'components/errors/errors';

	export default {
		data () {
			return {
				username: '',
				password: '',
                errors: []
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
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.username, this.password)
                    .then(user => {
                        this.errors = [];
                        store.dispatch('LOGIN', {user});
                    })
                    .catch(err => {
                        this.errors = [err.message];
                    });
			}
		},
        components: {
            errors
        }
	}
</script>