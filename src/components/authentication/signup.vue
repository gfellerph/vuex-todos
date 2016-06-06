<template>
    <div class="center-center">
        <validator name="sign_up">
            <form novalidate class="container card-panel" action="" method="post">
                <h4>Sign up</h4>
                <div class="row">
                    <div class="input-field col s12">
                        <input
                            type="email"
                            id="username"
                            name="username"
                            v-model="username"
                            v-validate:username="{required:true, email:true}"
                        />

                        <div class="errors" v-if="$sign_up.username.dirty">
                            <p class="error" v-if="$sign_up.username.required">Username required</p>
                            <p class="error" v-if="$sign_up.username.email">Use your email</p>
                        </div>

                        <label for="username">Username (Email)</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            v-model="password"
                            v-validate:password="{required:true}">

                        <div class="errors" v-if="$sign_up.password.dirty">
                            <p v-if="$sign_up.password.required">This field is required.</p>
                        </div>

                        <label for="password">Password</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input
                            type="password"
                            id="match_password"
                            v-model="match_password"
                            name="match_password"
                            v-validate:match_password="{
                                required:true,
                                match:{rule:password},
                                minlength:6
                            }">
                        
                        <div v-if="$sign_up.match_password.dirty" class="errors">
                            <p v-if="$sign_up.match_password.required">This field is required.</p>
                            <p v-if="$sign_up.match_password.match">Both passwords must match.</p>
                        </div>

                        <label for="match_password">Repeat password</label>
                    </div>
                </div>

                <errors :errors="errors"></errors>

                <p class="right-align">
                    <a
                        v-link="'signin'"
                        class="btn-flat waves-effect"
                    >sign in</a>
                    <button
                        :disabled="$sign_up.invalid || loading"
                        @click="submit"
                        type="submit"
                        class="btn green waves-effect waves-light"
                    >Sign up</button>
                </p>
            </form>
        </validator>
    </div>
</template>

<script>
    import validator from 'vue-validator';
    import firebase from 'firebase';
    import errors from 'components/errors/errors';
    import router from 'src/router';

    export default {
        data () {
            return {
                username: '',
                password: '',
                match_password: '',
                errors: [],
                loading: false
            }
        },
        methods: {
            submit () {
                event.preventDefault();
                this.loading = true;
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.username, this.password)
                    .then(user => {
                        this.errors = [];
                        this.loading = false;
                        router.go('/signup-success');
                    })
                    .catch(err => {
                        this.errors.push(err.message);
                        this.loading = false;
                    });
            }
        },
        components: {
            validator,
            errors
        }
    }
</script>