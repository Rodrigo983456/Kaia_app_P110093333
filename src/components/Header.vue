<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container">
                <a class="navbar-brand ps-0 ms-0" href="/">
                    <h3>Kaia app</h3>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link me-3" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link me-3" to="/products">Products</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link me-3" to="/about">About Us</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <RouterLink class="btn btn-sm btn-dark me-2" to="/signup" >Create Account</RouterLink>
                        <RouterLink class="btn btn-sm btn-dark me-0" to="/login" >Login</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
        <RouterView />
    </header>
</template>

<style scoped>
.nav-link { 
    color: #000;
}
</style>