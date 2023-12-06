<script setup></script>

<template>
    <footer class="pt-2 pb-3">
        <div class="container">
        <div class="row mb-4">
            <div class="col-md-4">
                <h2>Kaia app</h2>
                <p class="my-3 pe-2"></p>
                <div class="socials d-flex">
                    <a href="" class="social-link">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="" class="social-link mx-2">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="social-link me-2">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div class="col-xl-2 col-md-2 col-6 mt-2">
                <div class="info-links">
                   
                
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-6 mt-2">
                <div class="info-links">
                    <h4>Contact</h4>
                    <ul class="nav flex flex-column mt-3">
                        <li class="nav-item ps-0  ms-0">
                            <a href="/" class="nav-link py-1 ms-0 ps-0">
                                <i class="fa fa-envelope pe-2"></i>
                                <span>kaia@hotmail.com</span>
                            </a>
                        </li>
                        <li class="nav-item ps-0  ms-0">
                            <a href="/" class="nav-link py-1 ms-0 ps-0">
                                <i class="fa fa-phone pe-2"></i>
                                <span>(01632 960663)</span>
                            </a>
                        
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 col-6 mt-2">
                <div class="info-links">
                </div>
            </div>
        </div>
        <hr>
        <p class="text-center pt-2">Copyright © 2023 Kaia. Made by P110093333.</p>
    </div>
    </footer>
</template>

<style scoped>

footer h2 {
    font-weight: bold;
}
footer h4 {
    font-size: 19px;
}
footer p{
    letter-spacing: .55px;
    font-size: 13px !important;
}
footer .social-link {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 100%;
    color: gray;
    transition: .88s;
    border: 1px solid rgb(224, 224, 224) !important;
}

footer .social-link:hover {
    transform: all;
    background-color: #444;
    color: #FFF;
}

footer .nav li a {
    color: #5f5f5f !important;
    font-size: 15px;
    letter-spacing: .44px;
}
footer .nav li a:hover {
    color: #000 !important;
}
</style>