<script setup>
import ProductsBanner from '../../components/common/ProductsBanner.vue';
import ProductsFilter from '../../components/ProductsFilter.vue';
import ProductsList from '../../components/ProductsList.vue'
</script>

<template>
    <div class="products-page mb-5 pb-5">
        <ProductsBanner />
        <ProductsFilter />
        <ProductsList />
        
    </div>
</template>