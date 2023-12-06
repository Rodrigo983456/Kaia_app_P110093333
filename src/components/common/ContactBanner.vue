<script setup></script>

<template>
    <div class="common-banner">
        <div class="overlay">
            <div class="content text-center d-flex align-items-center flex-column justify-content-center py-4">
                <h4>Contact Us</h4>
                <p>Feel free to contact us if you have any question or sugestion, our team is 24h available</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.common-banner {
    position: relative;
    width: 100%;
    min-height: 55vh;
    color: #FFF;
    background: url('/assets/media/banners/home-banner3.jpg');
}

.common-banner .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 55vh;
    background: rgba(0, 0, 0, 0.7);
}
.common-banner .overlay .content {
    width: 32%;
    margin: auto;
    min-height: 55vh;
}
</style>