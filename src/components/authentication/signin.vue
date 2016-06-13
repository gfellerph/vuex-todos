<template>
    <div class="center-center">
        <form novalidate class="container card-panel" action="" method="post">
            <h4>Sign in</h4>
            <div class="login-form">
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
                    <a
                        v-link="'signup'"
                        class="btn-flat waves-effect"
                    >sign up</a>
                    <button
                        class="btn cyan waves-effect waves-light"
                        type="submit"
                        :disabled="isEmpty || isLoading"
                        @click="login"
                    >Login</button>
                </p>
                
                <spinner v-if="isLoading"></spinner>
            </div>
        </form>
    </div>
</template>

<script>
    import firebase from 'src/firebase';
    import errors from 'components/errors/errors';
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