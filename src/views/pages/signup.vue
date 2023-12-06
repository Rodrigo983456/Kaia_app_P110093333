<script setup>
import CommonBanner from '../../components/common/CommonBanner.vue';
</script>
<template>
    <div class="signup-page">

        <CommonBanner />
        <div class="container">
            <!-- Signup Form -->
        <div class="card p-4 shadow-lg">
            <h3>Signup</h3>
            <hr>
            <form class="mt-3">
                <div class="row">
                    <div class="col-md-6 mt-2">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" placeholder="Enter First Name" class="form-control mt-2">
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" placeholder="Enter last Name" class="form-control mt-2">
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="flname">Full Name</label>
                        <input type="text" id="flname" placeholder="Enter last Name" class="form-control mt-2">
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter Email Address" class="form-control mt-2">
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" class="form-control mt-2">
                    </div>
                    <div class="col-md-6 mt-2">
                        <label for="cpassword">Password</label>
                        <input type="password" id="cpassword" placeholder="Confirm Password" class="form-control mt-2">
                    </div>
                    <div class="col-md-12 mt-4">
                        <button class="btn btn-primary w-100">SINGUP</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 50%;
    margin: 5rem auto;
}
</style>