<script setup></script>
<template>
    <div class="banner mt-9">
        <div class="content">
            <div class="container d-flex flex-column justify-content-center align-items-center px-5">
                <div class="text-center">
                    <h3>Get The Latest Deals</h3>
                    <p>Up to 30% off in some products</p>
                </div>
                <form>
                    <div class="form-group d-flex mt-3">
                        <input type="email" class="form-control ps-3" placeholder="Enter Your Email Address">
                        <button class="py-3 px-3 d-flex justify-content-center align-items-center">
                            <span>Subscribe</span>
                            <i class="fa fa-arrow-right ps-2 pt-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner {
    min-height: 60vh;
    width: 100%;
    position: relative;
    background: url('/assets/media/banners/home-banner1.jpg') no-repeat center center/cover;

}
input{
    border-radius: 0px !important;
    width: 450px;
    border-right: 1px solid rgb(214, 214, 214) !important;
}
input,button {
    border: none;
    background-color: #FFF;
    transition: .77s;
}
.banner button {
    background-color: #000;
    color: #FFF;
}
.banner .content button:hover {
    transform: all;
    background-color: #FFF;
    color: #000;

}
.banner .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60vh;
    background: rgba(255, 255, 255, 0.6);
}
.banner .content .container {
    width: 100%;
    min-height: 60vh;
}

  /* Media query for smaller screens */
  @media (max-width: 700px) {
    .banner .content form .form-group{
        max-width: 430px;
    }
    .banner .content form .form-group input{
        width: 300px;
        max-width: 430px;
        font-size: 14px;
    }
    .banner .content form .form-group button{
        padding-top: 13px !important;
        padding-bottom: 13px !important;
        font-size: 13px;
    }
  }
</style>