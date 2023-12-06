<script setup>
import LoginBanner from '../../components/common/LoginBanner.vue';
</script>
<template>
    <div class="signup-page">

        <LoginBanner />
        <div class="container">
            <!-- Signup Form -->
        <div class="card p-4 shadow-lg">
            <h3>Login</h3>
            <hr>
            <form class="">
                <div class="row">
                    <div class="col-md-12 mt-2">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Email Address" class="form-control mt-2">
                    </div>
                    <div class="col-md-12 mt-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" class="form-control mt-2">
                    </div>
                    <div class="col-md-12 mt-4">
                        <button class="btn btn-primary w-100">LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 40%;
    margin: 5rem auto;
}
</style>