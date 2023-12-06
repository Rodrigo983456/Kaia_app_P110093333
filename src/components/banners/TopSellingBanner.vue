<script setup>

import TwoImages from '../common/TwoImages.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="container">
        <h2>Top Selling</h2>
        <div class="row">
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p1.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Chair sofa</a>
                        </p>
                        <strong class="text-danger mt-0">£100</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p2.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Orange Chair</a>
                        </p>
                        <strong class="text-danger mt-0">£70</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p3.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Smelly good</a>
                        </p>
                        <strong class="text-danger mt-0">£20</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p4.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Red chair House</a>
                        </p>
                        <strong class="text-danger mt-0">£300</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p5.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Brown Lamp</a>
                        </p>
                        <strong class="text-danger mt-0">£50</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p6.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Amazing Chair</a>
                        </p>
                        <strong class="text-danger mt-0">£700</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p7.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Huge pillow</a>
                        </p>
                        <strong class="text-danger mt-0">£1000</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
                <RouterLink to="/products" class="product-card mt-4 px-3 py-1">
                    <div class="product-img text-center">
                        <img src="/assets/media/products/p8.jpg" height="190" class="card-img" alt="">
                    </div>
                    <div class="produc-info text-center">
                        <small class="text-muted">Furniture</small>
                        <p class="mb-0 py-1">
                            <a href="#" class="nav-link">Basic Chair</a>
                        </p>
                        <strong class="text-danger mt-0">£25</strong>
                        <p class="ratings mt-3">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning px-1"></i>
                            <i class="fa fa-star text-warning"></i>
                        </p>
                    </div>
                    <div class="buttons d-flex flex-column align-items-start">
                        <a href="#" class="btn btn-sm btn-outline-secondary">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="btn btn-sm btn-outline-secondary mt-2">
                            <i class="fa fa-heart"></i>
                        </a>
                    </div>
                </RouterLink>
            </div>
        </div>
        <TwoImages />
    </div>
</template>

<style scoped>
.product-card {
    width: 100%;
    display: inline-block;
    position: relative;
    background-color: #FFF !important;
    border-radius: 14px !important;
    transition: 1s;
}

.product-card .buttons {
    display: flex !important;
    position: absolute;
    top: 16px;
    left: 16px;
    width: 100px;
    /* border: 2px solid red; */
}
.product-card:hover {
    cursor: pointer;
    transform: scale(1.02);
}
.buttons .btn-outline-secondary {
    display: none !important;
}
.product-card:hover > .buttons .btn-outline-secondary {
    display: inline-block !important;
}
.product-card p {
    font-size: 14.66px;
    font-weight: 500;
}

.product-card .nav-link:hover {
    color: rgb(180, 180, 180);
}
.product-card .ratings {
    font-size: 13px;
}

a {
    text-decoration: none;
    color: #000;
}

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    .product-card img {
        height: 300px;
    }
  }

</style>