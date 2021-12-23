<template>


<div class="app">
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5 text-center">
                    <img src="../assets/packit.png" class="img-fluid" style="width: 50%"
                        alt="Logo packit">                        
                    <h1 class="mt-3">PACK IT</h1>                        
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                        <!-- Email input -->
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <span class="input-group">
                                    <font-awesome-icon :icon="['fas', 'user']" size="lg"/>
                                </span>
                            </div>
                            <input type="email" id="loginEmail" class="form-control form-control-lg"
                                    placeholder="Enter a valid email address"/>
                        </div>

                        <!-- Password input -->
                        <div class="input-group mb-3">
                            <div class="input-group-text">
                                <span class="input-group">
                                    <font-awesome-icon :icon="['fas', 'key']" size="lg"/>
                                </span>
                            </div>
                            <input type="password" id="loginPassword" class="form-control form-control-lg"
                                    placeholder="Enter password" />
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="checkRemember" />
                                <label class="form-check-label" for="checkRemember">Remember me</label>
                            </div>
                            <a href="#!" class="text-body">Forgot password?</a>
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="button" class="btn btn-primary btn-lg"
                                    style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account? <a href="#!" class="link-danger">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
                GNU v3
            </div>
            <!-- Copyright -->

            <!-- Right -->
<!--        
            <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
-->            
            <!-- Right -->
        </div>
    </section>
</div>

</template>
<script>


    export default {
        name: 'Index',
        components: {

        }
    }

</script>

<style scoped>
    .divider:after,
    .divider:before {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;
    }
    .h-custom {
        height: calc(100% - 73px);
    }
    @media (max-width: 450px) {
        .h-custom {
            height: 100%;
        }
    }
</style>