<template>
    <div>
        <div class="relative">
            <div class="absolute w-full">
                <!-- header starts here  -->
                <div class="bg-black grid grid-cols-3 bg-opacity-0">
                    <div class="px-3 py-3">
                        <NuxtLink to="/aipage"><img src="../assets/logo.webp" style="width: 50px;" alt=""></NuxtLink>
                    </div>
                    <div class="col-span-2 px-3 py-3">
                        <div class="hidden sm:block">
                            <div class="flex flex-nowrap space-x-3 text-white   text-right ">
                                <div class="grow w-full text-sm sm:text-sm mt-2 text-center">
                                    <NuxtLink to="/"><span >AI Portal</span></NuxtLink> 
                                </div>
                                <div class="grow w-full text-sm sm:text-sm  mt-2 text-center">
                                    <NuxtLink to="/BecomePartner"><span >Become a Partner</span></NuxtLink> 
                                </div>
                                <div class=" grow w-full text-sm sm:text-sm mt-2 text-center">
                                    <NuxtLink to="/about"><span >About Inaiways</span></NuxtLink> 
                                </div>
                                <div class=" grow  "> 
                                    <a href="#connect"> <button class="btn bg-blue-500 w-28 text-sm sm:text-xs border-none text-white hover:bg-blue-700">Contact us</button> </a>
                                </div>
                            </div>
                        </div>
                        <div class="display  sm:hidden float-right" @click="mobilenar = !mobilenar">
                            <label tabindex="0" class="bg-white text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 bg-white bg-opacity-30 "
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="bg-black space-y-4 font-semibold text-slate-400 p-5 sm:hidden absolute w-full bg-opacity-80"
                    v-show="mobilenar">
                    <NuxtLink to="/"><div><span >AI Portal</span></div></NuxtLink>
                    <NuxtLink to="/BecomePartner"><div><span >Become a Partner</span></div></NuxtLink>
                    <NuxtLink to="/about"><div><span>About Us</span></div></NuxtLink>
                </div>
                <!-- header ends here  -->
                <div class="grid sm:grid-cols-2 grid-cols-1">
                    <div class="hidden sm:block"></div>
                    <div class="sm:p-5 py-1 px-2">
                        <p class="md:text-4xl sm:text-2xl text-xl text-white">Unlock the Power of</p>
                        <p
                            class="sm:font-extrabold font-semibold md:text-5xl sm:text-3xl text-xl  bg-gradient-to-r from-pink-600  to-blue-700 bg-clip-text text-transparent ">
                            Artificial Intelligence for your Business</p>
                        <p class="text-slate-200 md:text-xl sm:text-lg text-xs">Increase the Top Line & Bottom Line for your
                            business.
                            with our AI-powered interlinked products to optimize the
                            processes of your business
                        </p>
                        <button
                            class=" bg-blue-600 border-none text-white font-bold text-xs sm:text-md md:text-base my-5 sm:h-12 h-8 px-3 rounded-lg">Book
                            a demo</button>
                    </div>
                </div>
            </div>
            <div class=""> <img src="../assets/aiimg.png" class="" alt=""></div>
        </div>

        <div class="grid md:grid-cols-2 grid-cols-1  py-10 px-5">
            <div>
                <p class="text-3xl">AI Portal for</p>
                <p class="text-3xl font-extrabold text-purple-600">Lead Generation</p>
                <p class="text-sm">Don’t settle just for contact details of a lead. Capture the Lead’s buying intent, fears,
                    and desires &
                    boost your sales</p>
                <span class="flex my-3">
                    <span class="text-xs py-1 text-purple-900">Learn how AI Portal is ahead of other lead generation
                        platforms</span>
                    <span class="p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="2.5" stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </span>
            </div>
            <div class="hidden md:block">
                <div class="grid grid-cols-2 gap-5">
                    <div><img src="../assets/leadg2.jpeg" class="w-64 rounded-lg" alt=""></div>
                    <div class="row-span-2 "><img src="../assets/leadg3.jpeg" class="w-56 rounded-lg mt-10" alt=""></div>
                    <div class=""><img src="../assets/leadg1.jpeg" class="w-56 rounded-lg" alt=""></div>
                    <!-- <span><img src="../assets/leadg2.jpeg" class="w-36 rounded-lg" alt=""></span>
                    <span><img src="../assets/leadg1.jpeg" class="w-52 rounded-lg mt-10" alt=""></span>
                    <span><img src="../assets/leadg3.jpeg" class="w-52 rounded-lg" alt=""></span> -->
                </div>
            </div>
            <div class="display md:hidden">

                <span><img src="../assets/leadg3.jpeg" class="w-auto rounded-lg mx-auto my-5" alt=""></span>
                <span class="sm:text-sm text-xs">Increase the Top Line & Bottom Line for your
                    business. with our AI-powered interlinked products to optimize the
                    processes of your business. Increase the Top Line & Bottom Line for your
                    business. with our AI-powered interlinked products to optimize the
                    processes of your business</span>
            </div>

        </div>


        <!-- below is the main div that contains two child div's  -->
        <div class=" px-32 my-5 py-10  sm:py-5 bg-slate-100">

            <div class="md:w-6/12 sm:w-8/12 w-full my-5 sm:my-0"> 
                <p class="font-extralight text-purple-500 text-sm">BUSINESS STUDIO AI PRODUCTS</p>
                <p class="md:text-4xl sm:text-2xl text-xl font-bold">Imagine the best
                    AI Productivity Suite
                    for your Business</p>
                <p class="text-sm font-light">These products are suitable for every kind of an enterprise - right from small - Micro Businesses to
                    Large MNCs. Show interest in any of our products and we will reach out to you with a special gift: “an
                    early-bird discount”!

                    AI-powered invoicing app to automate billing, manage invoices, and analyze financial data
                    PRO
                    AI Invoices
                    AI-powered OKR app to set and track objectives, align teams, and provide real-time insights for better
                    decision-making
                    PRO
                    AI OKR
                    Harness the power of Artificial Intelligence to boost your sales
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full ">

                <div class=" row-span-2 col-span-full 
                           sm:col-span-1 sm:row-start-2
                           md:col-start-1 md:row-start-3 
                           mx-auto
                           
               ">
               <div class="relative" @click="senddata(this.mtoaiinvoices)">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI Invoices </span></p>
                <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

                <div class="row-span-2 col-span-full
                           sm:col-span-1 sm:row-start-4
                           md:col-start-1 md:row-start-5 
                           xl:col-start-2 xl:row-start-2
                           mx-auto
               ">  <div class="relative" @click="senddata(this.mtoaiOKR)">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI OKR </span></p>
               <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

                <div class="row-span-2 col-span-full 
                           sm:col-span-1 sm:row-start-6 
                           md:col-start-2 md:row-start-2
                           xl:col-start-2 xl:row-start-4
                           mx-auto
               ">  <div class="relative">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI Portal </span></p>
               <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

                <div class="
                          row-span-2 col-span-full
                          sm:col-span-1 sm:row-start-1
                          md:col-start-2 md:row-start-4 
                          xl:col-start-3 xl:row-start-1
                          mx-auto
               ">
               <div class="relative" @click="senddata(this.mtoaiCRM)">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI CRM </span></p>
               <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

                <div class="
                           row-span-2 col-span-full
                           sm:col-span-1 sm:row-start-3 
                           md:col-start-3 md:row-start-1 
                           xl:col-start-3 xl:row-start-3 
                           mx-auto
               ">  <div class="relative" @click="senddata(this.mtoaiSOP)">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI SOP </span></p>
               <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

                <div class="
                          row-span-2 col-span-full 
                          sm:col-span-1 sm:row-start-5 
                          md:col-start-3 md:row-start-3 
                          xl:col-start-4 xl:row-start-2
                          mx-auto
               ">  <div class="relative" @click="senddata(this.mtoaiDocumentMagament)">
                <p class="absolute top-10 p-10 max-w-xs transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"><span class="text-white bg-blue-900 px-2 rounded-lg">Pro</span><br> <span class="text-3xl font-extrabold text-white"> AI Document Management </span></p>
               <img src="../assets/aiimg.png" class=" w-72 rounded-lg " alt="">
               </div>
                </div>

            </div>

        </div>

        <formandDetalis kkk="" />

        <div>
            <Footer />
        </div>

    </div>
</template>

<script>
definePageMeta({
    layout: "custome",
});
export default {
    data() {
        return {
            mobilenar: false,
            mtoaiinvoices: "AI Invoice App",
            mtoaiOKR: "AI OKR App",
            mtoaiCRM:"AI CRM App",
            mtoaiSOP:"AI SOP App",
            mtoaiDocumentMagament:"AI Document Management App",
        }
    },
    methods:{
        senddata(value){
            console.log(value);
            const query = {
              value : value
            }
          this.$router.push({
            path:'/profeatures',
            query
          })
        }
      
    }
    
}
</script>

<style ></style>