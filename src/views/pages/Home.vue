<script setup>

import HomeCarousel from '../../components/HomeCarousel.vue';
import PolicyCards from '../../components/common/PolicyCards.vue';
import TopSellingBanner from '../../components/banners/TopSellingBanner.vue'
import SubscriptionBanner from '../../components/banners/SubscriptionBanner.vue';
</script>

<template>

    <div class="home-carousel">
        <HomeCarousel />
    </div>

    <div class="policies-cards my-6">
        <PolicyCards />
    </div>

    <div class="top-selling-banner pt-5">
        <TopSellingBanner />
    </div>

    <div class="subscription-banner mt-7">
        <SubscriptionBanner />
    </div>

</template>

<style scoped>

</style>