<template>
    <div>
        <!-- <div class="navbar bg-base-400 ">
            <div class="navbar-start">
                <span><img src="../assets/logo.webp" style="width: 50px;" alt=""></span>
            </div>

            <div class="navbar-center">
                <div class="hidden md:block">
                <div class="grid grid-cols-4  text-white  text-lg space-x-4 font-semibold w-full text-right ">
                    <div class=" grow w-full mt-2 text-right">
                        <p>AI Portal</p>
                    </div>
                    <div class=" grow w-full mt-2">
                        <p>Become a Partner</p>
                    </div>
                    <div class=" grow w-full mt-2">
                        <p>About Inaiways</p>
                    </div>
                    <div class=" grow w-full "> <button class="btn bg-blue-500 border-none text-white">Contact us</button>
                    </div>
                </div>
                </div>
                <div class="dropdown  md:hidden  text-white ralative left-64">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 bg-white bg-opacity-30 " fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div> -->
        <div class="bg-black  grid grid-cols-3">
            <div class="px-3 py-3">
                <img src="../assets/logo.webp" style="width: 50px;" alt="">
            </div>
            <div class="col-span-2 px-3 py-3">
                <div class="hidden sm:block">
                <div class="flex flex-nowrap space-x-3 text-white    text-right ">
                    <div class="grow w-full text-sm sm:text-sm mt-2 text-center">
                        AI Portal
                    </div>
                    <div class="grow w-full text-sm sm:text-sm  mt-2 text-center">
                        Become a Partner
                    </div>
                    <div class=" grow w-full text-sm sm:text-sm mt-2 text-center">
                        About Inaiways
                    </div>
                    <div class=" grow w-full "> <button class="btn bg-blue-500 text-sm sm:text-xs border-none text-white">Contact us</button>
                    </div>
                </div>
                </div>
                <div class="display  sm:hidden float-right" @click="mobilenar = ! mobilenar">
                    <label tabindex="0" class="bg-white text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 bg-white bg-opacity-30 " fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
        <div class="bg-black space-y-4 font-semibold text-slate-400 p-5 sm:hidden" v-show="mobilenar">
            <div><span>AI Portal</span></div>
            <div><span>Become a partner</span></div>
            <div><span>About</span></div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
    return{
        mobilenar: false
    }
   }
}
</script>

<style></style>