<script setup > 
import { ref } from 'vue'
const showAboutMenu = ref(false);
const showSupportMenu = ref(false)
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
</script>
<template>
    <div class="w-full">
        <div class="flex flex-col ">
            <div class="flex flex-row  gap-[420px] lg:justify-end justify-center bg-[#314438] text-[white] text-[12px] px-5 py-3">
                <div>Use code <span class="font-[600]">VICTORIADAY</span> to get up to 15% off <a class="hover:opacity-50 hover:border-b-2 hover:border-[white]"
                        href="https://www.branchfurniture.ca/collections/work-from-home">home office bestsellers.</a>
                </div>
                <div class="lg:flex hidden flex-row gap-10 ">
                  <div class="relative">
                        <button @click="showAboutMenu = !showAboutMenu" class="hover:opacity-80">
                            About >
                        </button>
                        <div v-show="showAboutMenu" class="absolute top-full left-0 bg-white min-w-[160px] shadow-md z-10 mt-1">
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Our Story</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Reviews</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Press & Media</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Design Values</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Branch Blog</a>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <button @click="showSupportMenu = !showSupportMenu" class="hover:opacity-80">
                            Support >
                        </button>
                        <div v-show="showSupportMenu" class="absolute top-full left-0 bg-white min-w-[160px] shadow-md z-10 mt-1">
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Track My Order</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">FAQ</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Ergonomics</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Visit a Showroom</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Assembly Guides</a>
                            <a href="#" class="block px-4 py-2 text-black hover:bg-gray-100">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between px-5 bg-[#F3F0ED]">
                <div></div>
                <div class="pt-[8px] pb-[8px]"><img class=" h-[30px]" src="https://www.branchfurniture.ca/cdn/shop/files/Branch_Normal.png?v=1729608557&width=540"></div>
                <div></div>
            </div>
            <div class="flex flex-row p-4 lg:gap-20 gap-7 text-[14px] text-[#314438] font-bold justify-center text-center bg-[white]">
                <div class="hover">SHOP BY</div>
                <div class="hover">OFFICE CHAIRS</div>
                <div class="hover">DESKS & TABLES</div>
                <div class="hover">BUNDLES</div>
                <div class="hover">STORAGE & ACCESSORIES</div>
                <div class="hover">SALE</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hover:hover {
    border-bottom: 2px solid #8DC0D2;
    padding-bottom: 2px; /* Alt çizgi ile metin arası boşluk */
    margin-bottom: -2px; /* Layout kaymasını önlemek için */
}
</style>