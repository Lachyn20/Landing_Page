<template>

  <div class="h-[auto] w-full text-center mt-5 pt-10 pb-32 bg-[#F3EEEA]  ">
    <div class="flex flex-col gap-5 items-center">
      <div class="font-[400] font1 text-4xl"><p>Shop by space and get inspired</p></div>
      <div class="text-[xlpx]">Get inspired to create your own Branch workspace with our curated rooms. Explore
        different spaces and their
        featured products.</div>
      <div class="w-full">
        <div class="swiper-container max-w-5xl mx-[auto] h-[80vh]">


          <!-- Thumbnail Slider -->
          <swiper @swiper="setThumbsSwiper" :modules="[Thumbs]" :slidesPerView="4" :spaceBetween="10"
            class="thumb-swiper mb-4 border-[#8DC0D2]">
            <swiper-slide v-for="(photo, index) in photos" :key="photo.id" @click="slideTo(index)"
              class="cursor-pointer">
              <img :src="photo.url"
                class="w-full h-20 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                :class="{ '!opacity-100 !border-2 !border-[#8DC0D2]': activeIndex === index }">
            </swiper-slide>
          </swiper>

          <!-- Scroll Bar - Fixed -->
          <div class="w-full h-1.5 bg-gray-200 relative my-4 cursor-pointer rounded-full" @click="handleScrollBarClick"
            ref="scrollBar">
            <div class="absolute top-0 h-full bg-[#8DC0D2] transition-all duration-300 rounded-full" :style="{
              width: `${100 / photos.length}%`,
              left: `${(activeIndex / photos.length) * 100}%`
            }"></div>
          </div>

          <!-- Main Slider -->
          <swiper @swiper="setMainSwiper" :thumbs="{ swiper: thumbsSwiper }" :modules="[Navigation, Thumbs]"
            @slideChange="updateActiveIndex" class="main-swiper mb-4 ">
            <swiper-slide v-for="(photo, index) in photos" :key="photo.id">
              <img :src="photo.url" class="w-full max-h-[450px] rounded-4xl object-cover">
            </swiper-slide>
          </swiper>
        </div>
      </div>


      <div
        class="w-[200px] h-[50px] pt-[13px] text-[14px] font-[700] bg-[#314438] text-[white] border-[#314438] border-[2px] hover:bg-[white] hover:text-[#314438]">
        SHOP ALL SPACES</div>
    </div>

  </div>



</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const photos = [
  { id: 1, url: 'https://www.branchfurniture.ca/cdn/shop/files/Frame_238_1.jpg?v=3181556263448365758' },
  { id: 2, url: 'https://www.branchfurniture.ca/cdn/shop/files/Frame_238_330c3b13-d068-49ef-9d19-5915f956b3b2.jpg?v=5329050241711133020' },
  { id: 3, url: 'https://www.branchfurniture.ca/cdn/shop/files/pl-branch-brainstorm-lounge-fa22-main-604_2.webp?v=4039596711269690736' },
  { id: 4, url: "https://www.branchfurniture.ca/cdn/shop/files/shopbyspacehomepage.png?v=17993391766872543324" }
];

const mainSwiper = ref(null);
const thumbsSwiper = ref(null);
const scrollBar = ref(null);
const activeIndex = ref(0);

const setMainSwiper = (swiper) => {
  mainSwiper.value = swiper;
};

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const slideTo = (index) => {
  activeIndex.value = index;
  mainSwiper.value.slideTo(index);
};

const updateActiveIndex = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};

const handleScrollBarClick = (e) => {
  if (!mainSwiper.value || !scrollBar.value) return;

  const barRect = scrollBar.value.getBoundingClientRect();
  const clickPosition = e.clientX - barRect.left;
  const barWidth = barRect.width;
  const slideIndex = Math.floor((clickPosition / barWidth) * photos.length);

  // Ensure index stays within bounds
  const clampedIndex = Math.min(photos.length - 1, Math.max(0, slideIndex));
  mainSwiper.value.slideTo(clampedIndex);
};
</script>

<style scoped>
.thumb-swiper .swiper-slide-thumb-active img {
  @apply opacity-100 border-2;
}

.main-swiper .swiper-slide {
  @apply overflow-hidden;
}


.font1 {
  font-family: "Frank Ruhl Libre", serif;
}
</style>