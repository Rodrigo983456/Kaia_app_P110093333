
<script setup>
import ContactBanner from '../../components/common/ContactBanner.vue';
</script>

<template>
    <div class="contact-us">
        <ContactBanner />
        <div class="container my-6">
            <div class="row">
                <div class="col-md-4">
                    <div class="first">
                        <div class="row d-flex align-items-center">
                            <div class="col-3">
                                <a href="" class="btn btn-dark">
                                    <i class="fa fa-envelope"></i>
                                </a>
                            </div>
                            <div class="col-9">
                                <strong>Kaia@hotmai.com</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="second">
                        <div class="row d-flex align-items-center">
                            <div class="col-3">
                                <a href="" class="btn btn-dark">
                                    <i class="fa fa-home"></i>
                                </a>
                            </div>
                            <div class="col-9">
                                <strong>Please meet us here.</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="second">
                        <div class="row d-flex align-items-center">
                            <div class="col-3">
                                <a href="" class="btn btn-dark">
                                    <i class="fa fa-phone"></i>
                                </a>
                            </div>
                            <div class="col-9">
                                <strong>(01632960663)</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-5 map">
                <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=London+(Kia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center my-3 mb-4">
                    <p>Our main offices are situated on the great city of London</p>
                </div>
                <div class="col-md-12">
                    <div class="card p-5 shadow-lg">
                        <div class="heading">
                            <h2>Contact Now</h2>
                            <hr>
                        </div>
                       <div class="row">
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Your Name">
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="email" class="form-control" placeholder="Enter Your Email Address">
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Your Phone Address">
                        </div>
                        <div class="col-md-6 my-3">
                            <input type="text" class="form-control" placeholder="Enter Your Address">
                        </div>
                        <div class="col-md-12 my-3">
                            <textarea  class="form-control" rows="10" placeholder="Enter Your Message..."></textarea>
                        </div>
                        <div class="col-md-12 text-center mt-4">
                            <button class="btn btn-primary w-25 mx-auto btn-lg">SUBMIT</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.my-6 {
    margin-top: 6rem;
    margin-bottom: 6rem;
}
</style>