<template>
    <div>
        <div class="bg-black grid grid-cols-3">
            <div class="px-3 py-3">
                <NuxtLink to="/aipage"><img src="../assets/logo.webp" style="width: 50px;" alt=""></NuxtLink>
            </div>
            <div class="col-span-2 px-3 py-3">
                <div class="hidden sm:block">
                    <div class="flex flex-nowrap space-x-3 text-white    text-right ">
                        <div class="grow w-full text-sm sm:text-sm mt-2 text-center">
                            <NuxtLink to="/"><span>AI Portal</span></NuxtLink>
                        </div>
                        <div class="grow w-full text-sm sm:text-sm  mt-2 text-center">
                            <NuxtLink to="/BecomePartner"><span >Become a Partner</span></NuxtLink> 
                        </div>
                        <div class=" grow w-full text-sm sm:text-sm mt-2 text-center">
                            <NuxtLink to="/about"><span >About Inaiways</span></NuxtLink> 
                        </div>
                        <div class=" grow w-full ">   <a href="#connect"> <button class="btn bg-blue-500 w-28 text-sm sm:text-xs border-none text-white hover:bg-blue-700 ">Contact us</button> </a>
                        </div>
                    </div>
                </div>
                <div class="display  sm:hidden float-right" @click="mobilenar = !mobilenar">
                    <label tabindex="0" class="bg-white text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 bg-white bg-opacity-30 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
        <div class="bg-black space-y-4 font-semibold text-slate-400 p-5 sm:hidden" v-show="mobilenar">
            <NuxtLink to="/">
                <div><span>AI Portal</span></div>
            </NuxtLink>
            <NuxtLink to="/BecomePartner">
                <div><span>Become a Partner</span></div>
            </NuxtLink>
            <NuxtLink to="/about">
                <div><span>About Us</span></div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            mobilenar: false,
            value1: this.value
        }
    }
}
</script>

<style>.active {
    background: rgba(0, 151, 19, 0);
}</style>