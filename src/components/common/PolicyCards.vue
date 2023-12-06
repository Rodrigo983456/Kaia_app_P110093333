<template>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-6">
                    <div class="row d-flex align-items-center p-box">
                        <div class="col-3">
                            <img src="/assets/media/icons/policy-icon1.png" alt="p-img">
                        </div>
                        <div class="col-9">
                            <p class="pb-0 mb-0">Fast Delivery!</p>
                            <small class="pt-0 mt-0">Garante delivery in less than 72H.</small>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-6">
                    <div class="row d-flex align-items-center p-box mx-3">
                        <div class="col-3">
                            <img src="/assets/media/icons/policy-icon2.png" alt="p-img">
                        </div>
                        <div class="col-9">
                            <p class="pb-0 mb-0">Only deliverying in UK</p>
                            <small class="pt-0 mt-0">We will expand to other parts in europe</small>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-6">
                    <div class="row d-flex align-items-center p-box">
                        <div class="col-3">
                            <img src="/assets/media/icons/policy-icon3.png" alt="p-img">
                        </div>
                        <div class="col-9">
                            <p class="pb-0 mb-0">Money back gurantee</p>
                            <small class="pt-0 mt-0">Returning item never been so easy</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
.p-box {
    min-height: 120px;
    /* background: #fff; */
    box-shadow: 0px 0px 14px 0px #d8d8d8;
    border: 1px solid rgb(236, 236, 236);
}

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    .p-box {
        margin: 1rem !important;
    }
  }
</style>