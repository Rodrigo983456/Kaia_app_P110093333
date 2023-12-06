<script setup></script>
<template>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/assets/media/banners/home-banner1.jpg" class="d-block w-100" height="580" alt="c-img">
                <div class="carousel-caption d-md-block">
                    <div class="content">
                        <h2>Discover Our</h2>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/assets/media/banners/home-banner2.jpg" class="d-block w-100" height="580" alt="c-img">
                <div class="carousel-caption d-md-block">
                    <div class="content">
                        <h2>Amazing</h2>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/assets/media/banners/home-banner3.jpg" class="d-block w-100" height="580" alt="c-img">
                <div class="carousel-caption d-md-block">
                    <div class="content">
                        <h2>Products</h2>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
.carousel-inner .carousel-item {
    position: relative;
}

.carousel-inner .carousel-caption {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}

.carousel-caption .content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
}

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    .carousel-inner img {
        height: 300px;
    }
    .carousel-caption h2 {
        font-size: 22px;
    }
    .carousel-caption p {
        font-size: 13px;
    }
  }
</style>