<script setup></script>

<template>
    <div class="products-banner">
        <div class="overlay">
            <div class="content text-center d-flex align-items-center flex-column justify-content-center py-4">
                <h4>Products List</h4>
                <p>Here is the complete list of our products</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.products-banner {
    position: relative;
    width: 100%;
    min-height: 55vh;
    color: #FFF;
    background: url('/assets/media/banners/home-banner1.jpg') no-repeat center center/cover;
}

.products-banner .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 55vh;
    background: rgba(0, 0, 0, 0.7);
}
.products-banner .overlay .content {
    width: 32%;
    margin: auto;
    min-height: 55vh;
}
</style>