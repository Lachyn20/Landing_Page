<script setup>
import { ref, onMounted } from 'vue';

const container1 = ref(null);
const container2 = ref(null);
const fillHeight1 = ref(0);
const fillHeight2 = ref(0);

function handleScroll() {
  if (container1.value) {
    const rect1 = container1.value.getBoundingClientRect();
    if (rect1.bottom <= window.innerHeight && fillHeight1.value === 0) {
      fillHeight1.value = 100; // Tam dolu
    }
  }

  if (container2.value) {
    const rect2 = container2.value.getBoundingClientRect();
    if (rect2.bottom <= window.innerHeight && fillHeight2.value === 0) {
      fillHeight2.value = 50; // Yarı dolu
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Sayfa yüklendiğinde kontrol
});
</script>


<template>

  <div class="w-full h-[auto] pt-4 pb-12">
    <div class="flex  lg:flex-row flex-col gap-5 mx-16">
      <div class="flex flex-col gap-5 justify-center pt-20 lg:py-20 items-center text-center lg:w-[50%] full">
        <p class="font1 text-4xl">WE sell direct and the share savings.</p>
        <p class="px-12 text-[14px]">We cut out middlemen and maintain a lean line of modular inventory to save you up
          to 50%
          compared to
          traditional office furniture of similar quality.</p>
        <div
          class="w-[200px] h-[50px] text-[white] hover:border-[2px] hover:border-[#314438] bg-[#314438] font-[500] hover:bg-[white] hover:text-[#314438] pt-[13px]">
          OUR STORY</div>
      </div>

      <div class="flex flex-row gap-5 md:justify-center">
        <div class="flex flex-col relative items-end justify-center lg:gap-[90px] gap-[60px] py-[30px] opacity-50" >
          <div>
            <h3>Delivery, Assembly & disposal </h3>
          </div>
          <div>
            <h3>Dealer Markup</h3>
          </div>
          <div>
            <h3>Manufacturer Markup</h3>
          </div>
          <div>
            <h3>Materials & Manufacturer</h3>
          </div>
        </div>




        <div class="flex flex-col items-center">
          <div ref="container1" class="relative h-[400px] w-[100px] bg-gray-100 mt-20
         overflow-hidden">
            <!-- Dolum animasyonu -->
            <div class="absolute bottom-0 left-0 w-full bg-[#AEB6B0] transition-all duration-[5s] ease-out"
              :style="{ height: fillHeight1 + '%' }">
              <!-- Dalga efekti (CSS olmadan) -->
              <div v-if="fillHeight > 0" class="absolute -top-4 left-0 w-full h-12 overflow-hidden">
                <svg class="absolute bottom-0 left-0 w-full text-[#AEB6B0] animate-wave" viewBox="0 0 1200 120"
                  preserveAspectRatio="none">
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="currentColor" opacity="0.3"></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    fill="currentColor" opacity="0.6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 class="mt-1 text-xl font-[600]">Furniture</h3>
            <h3 class="text-xl font-[600]">Dealer</h3>
          </div>
        </div>



        <div class="flex flex-col items-center">
          <div ref="container2"
            class="relative h-[400px] w-[100px] bg-gray-100 mt-20 border-2 border-dashed border-[#314438] overflow-hidden">
            <!-- Dolum animasyonu -->
            <div class="absolute bottom-0 left-0 w-full bg-[#314438]  transition-all duration-[5s] ease-out"
              :style="{ height: fillHeight2 + '%' }">
              <!-- Dalga efekti (CSS olmadan) -->
              <div v-if="fillHeight > 0" class="absolute -top-4 left-0 w-full h-12 overflow-hidden">
                <svg class="absolute bottom-0 left-0 w-full text-[#314438]  animate-wave" viewBox="0 0 1200 120"
                  preserveAspectRatio="none">
                  <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="currentColor" opacity="0.3"></path>
                  <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    fill="currentColor" opacity="0.6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div><img class="w-[100px] mt-8"
              src="https://www.branchfurniture.ca/cdn/shop/t/76/assets/logo.png?v=37369424611378019991714657519"></div>
        </div>


      </div>

    </div>
  </div>




</template>
<style scoped>
.font1 {
  font-family: "Frank Ruhl Libre", serif;
}


/* Dalga animasyonu */
.animate-wave {
  animation: wave 3s linear infinite;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>