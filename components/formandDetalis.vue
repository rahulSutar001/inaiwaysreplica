<template>
    <div>
        <div v-if="kkk == ''">
            <div class="px-5   md:grid md:grid-cols-2  md:space-x-10">
                <div class="">
                    <p class="text-blue-500 font-bold text-sm">SETTING A NEW STANDARD {{ value }}</p>
                    <p class="sm:text-5xl text-3xl my-4">AI portal <br>
                        <span class="font-extrabold">trusted by our
                            delighted <br>
                            clients
                        </span>
                    </p>
                    <div class="flex flex-wrap w-full space-x-0 sm:space-x-4 space-y-4 sm:space-y-0  my-4">
                        <div class="grow w-full">
                            <span class="flex sm:text-left text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 mt-3 mr-3 h-4 text-blue-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                                <p class="mt-2 "><b>Read Customer Stories</b></p>
                            </span>
                        </div>
                        <div class="grow w-full"><button class="btn bg-blue-600 text-white border-none rounded-sm">Get me
                                more
                                customer</button></div>
                    </div>
                </div>
                <div class=" ">
                    <div class="grid md:grid-cols-3 grid-cols-2  md:py-12 space-y-5 ">
                        <div class=""><img src="../assets/tata.jpg" class="w-20 mx-auto" alt=""></div>
                        <div><img src="../assets/DPU-color-Logo.png" class="w-16 mx-auto" alt=""></div>
                        <div><img src="../assets/sra.png" class="w-16 mx-auto" alt=""></div>
                        <div><img src="../assets/vgoldenagelogo.webp" class="w-20 mx-auto" alt=""></div>
                        <div><img src="../assets/sra.png" class="w-16 mx-auto" alt=""></div>
                        <div><img src="../assets/sra.png" class="w-16 mx-auto" alt=""></div>
                        <div><img src="../assets/tata.jpg" class="w-20 mx-auto" alt=""></div>
                        <div><img src="../assets/DPU-color-Logo.png" class="w-16 mx-auto" alt=""></div>
                        <div><img src="../assets/vgoldenagelogo.webp" class="w-20 mx-auto" alt=""></div>
                    </div>
                </div>
            </div>

            <div class=" py-5 text-center mx-auto">
                <p><span class="sm:text-4xl text-2xl font-extrabold">What our Clients Say About</span> <br>
                    <span class="sm:text-3xl text-xl">AI-Portal</span>
                </p>
            </div>
            <div class="grid sm:grid-cols-2 grid-cols-1 space-y-7 pb-5">
                <div class="">
                    <img src="../assets/tata.jpg" class="w-36 mx-auto" alt="">
                </div>
                <div class="sm:px-4 px-6">
                    <p><span class="font-bold text-2xl">Gaurav Naik</span><br>
                        <span class="font-bold text-xl">Director-Levitate Elevators</span><br>
                    </p>
                    <p class="my-2 text-slate-500 font-semibold"><span class="">Contextual marketing increased genuine
                            leads</span></p>
                    <p class="text-slate-500">”We were selling elevators in a market where people call it
                        a lift. Hence when we tried using IndiaMart’s services to
                        sell the leads were very vague (different requirement, another
                        cities, etc.) and we never made any conversions. Inaiways not only
                        helped us do market research to find out what our potential customers
                        are looking for, but it also generated genuine leads for us.</p>
                </div>

                <div class="">
                    <img src="../assets/vgoldenagelogo.webp" class="w-36 mx-auto sm:pb-0 pb-10" alt="">
                </div>
                <div class="sm:px-4 px-6">
                    <p><span class="font-bold text-2xl">Hrishikesh Kute</span><br>
                        <span class="font-bold text-xl">CEO, vGoldenage</span><br>
                    </p>
                    <p class="my-2 text-slate-500 font-semibold"><span class="">Our business doubled in 5 months!</span></p>
                    <p class="text-slate-500">“In just 6 months, we went from no admissions to full occupancy.
                        Thanks to the intelligent marketing by Inaiways.
                        Today we have so many incoming requests & a huge waiting list along with their preference
                        that we are expanding by opening a new center.</p>
                </div>
            </div>
        </div>

        <!-- ----------------------  -->
        <div class="grid sm:grid-cols-2 grid-cols-1  " id="connect">
            <div class="bg-slate-100 p-10">

                <p class="text-4xl font-extrabold">Increase your Top Line & Bottom Line by connecting with us</p>
                <p class="text-4xl">Reduce your expenses for advertising straight by 90%</p>
                <div class="flex items-center py-4">

                    <!-- The left line -->
                    <div class="flex-grow h-px bg-gray-400"></div>

                    <!-- Your text here -->
                    <span class="flex-shrink text-xs font-semibold text-gray-500 px-4 ">CONNECT WITH US</span>

                    <!-- The right line -->
                    <div class="flex-grow h-px bg-gray-400"></div>
                </div>


                <!-- form starts here -->

                <form action="">
                    <div class=" form-control">
                        <label for="">Your name</label>
                        <input type="text" v-model="name"
                            class="form-group  border-slate-500 shadow  rounded-md h-10 my-2">
                    </div>
                    <div class=" form-control">
                        <label for="">Your mobile number</label>
                        <input type="text" v-model="mob"
                            class="form-group  border-slate-500 shadow  rounded-md h-10 my-2">
                    </div>
                    <button class="btn bg-purple-600 text-white my-5" @click.prevent="senddata">Connect me with conversion
                        specialist</button>
                </form>
                <p class="my-5">You will be redirected to the AI driven Lead Generation questionnaire <span
                        class="text-purple-600"> once you click on submit </span></p>
                <!-- form ends here  -->
            </div>
            <div class=" bg-gradient-to-r  from-purple-300 via-purple-100 to-white-100 p-14">
                <p class="text-xs text-purple-500">WHAT HAPPENS ONCE YOU JOIN US ?</p>
                <div class="my-10">
                    <div class="flex space-x-5">
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-purple-800">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </span>
                        <span>
                            <p class="text-lg font-semibold text-purple-800">100% Transparency</p>
                            <p>We have everything automated and logged, this makes it transparent</p>
                        </span>
                    </div>
                </div>

                <div class="my-10">
                    <div class="flex space-x-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-purple-800">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>

                        </span>
                        <span>
                            <p class="text-lg font-semibold text-purple-800">200+ Google Ads Parameters Captured</p>
                            <p>Your ads will capture 200+ Google Ads parameters with our AI engine to showcase ads to the
                                targeted persona at an affordable price</p>
                        </span>
                    </div>
                </div>

                <!-- third div  -->
                <div class="my-10">
                    <div class="flex space-x-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-purple-800">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                            </svg>

                        </span>
                        <span>
                            <p class="text-lg font-semibold text-purple-800">100% AI Automated</p>
                            <p>Our AI works 24x7 to give you and your team an enhanced experience of running your business.
                                This enables you to give your 100% to your customers.</p>
                        </span>
                    </div>
                </div>

                <!-- fourt div  -->

                <div class="my-10">
                    <div class="flex space-x-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 text-purple-800">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>

                        </span>
                        <span>
                            <p class="text-lg font-semibold text-purple-800">100% Futuristic</p>
                            <p>We are ahead of the times when it comes to AI driven digital marketing and AI productivity
                                tools. Artificial Intelligence IS the future!</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['kkk'],
    data() {
        return {
            value: this.kkk,
            data: {
            name: '',
            mob: ''
        }

        }
    },
    methods: {
        async senddata() {
            const response = await axios.post('/api/posts/store', this.data)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }



}
</script>

<style></style>