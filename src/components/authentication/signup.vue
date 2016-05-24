<template>
    <validator name="sign_up">
        <form novalidate class="container">
            <div class="card-panel">
                <div class="row">
                    <div class="col s12">
                        <div class="input-field">
                            <input
                                type="email"
                                id="username"
                                name="username"
                                v-validate:username="['required', 'email']">
                            <label for="username">Email</label>
                        </div>
                    </div>
                </div>

                <div class="errors">
                    <p v-if="$sign_up.username.required">Username required</p>
                    <p v-if="$sign_up.username.email">Use email</p>
                </div>

                <div class="row">
                    <div class="col s12">
                        <div class="input-field">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                v-validate:password="['required']">
                            <label for="password">Password</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12">
                        <div class="input-field">
                            <input
                                type="password"
                                id="match_password"
                                name="match_password">
                            <label for="match_password">Repeat password</label>
                        </div>
                    </div>
                </div>

                <p class="right-align">
                    <waves :color="'white'">
                        <button type="submit" class="btn teal">Sign in</button>
                    </waves>
                </p>
            </div>
        </form>
    </validator>
</template>

<script>
    import validator from 'vue-validator';
    import waves from 'vue-materialize/waves';

    export default {
        components: {
            waves,
            validator
        }
    }
</script>