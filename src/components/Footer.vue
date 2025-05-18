<script setup>
const shops = [
    { id: 1, name: "Build My Office", link: "https://www.branchfurniture.ca/pages/quiz" },
    { id: 2, name: "Work From Home ", link: "https://www.branchfurniture.ca/collections/work-from-home" },
    { id: 3, name: "Branch Gift Card", link: "https://www.branchfurniture.ca/products/branch-gift-card" },
    { id: 4, name: "Chairs", link: "https://www.branchfurniture.ca/collections/office-chairs" },
    { id: 5, name: "Desks", link: "https://www.branchfurniture.ca/collections/desks" },
    { id: 6, name: "Conference", link: "https://www.branchfurniture.ca/collections/conference" },
    { id: 7, name: "Lounge", link: "https://www.branchfurniture.ca/collections/lounge" },
    { id: 8, name: "Phone Booths", link: "https://www.branchfurniture.ca/collections/phone-booths" },
    { id: 9, name: "Packages", link: "https://www.branchfurniture.ca/collections/bundles" },
    { id: 10, name: "Open box", link: "https://www.branchfurniture.ca/collections/open-box" },
];

const businesses = [
    { id: 1, name: "Chat With Sales", link: "https://www.branchfurniture.ca/pages/for-teams" },
    { id: 2, name: "Trade Program", link: "https://www.branchfurniture.ca/pages/trade" },
    { id: 3, name: "Free Space Plan", link: "https://www.branchfurniture.ca/pages/plan-your-space" },
    { id: 4, name: "Case Studies", link: "https://www.branchfurniture.ca/pages/projects" },
    { id: 5, name: "Conference", link: "https://www.branchfurniture.ca/collections/conference" },
    { id: 6, name: "Lounge", link: "https://www.branchfurniture.ca/collections/home-lounge" },
    { id: 7, name: "Team Desks", link: "https://www.branchfurniture.ca/collections/team-desks" },
    { id: 8, name: "Phone Booths", link: "https://www.branchfurniture.ca/collections/phone-booths" },
    { id: 9, name: "Space Division", link: "https://www.branchfurniture.ca/collections/panels" },
];


const discoveries = [
    { id: 1, name: "About Branch", link: "https://www.branchfurniture.ca/pages/about-us" },
    { id: 2, name: "Trade Branch", link: "https://www.branchfurniture.ca/pages/trade" },
    { id: 3, name: "Free Space Program", link: "https://www.branchfurniture.ca/pages/plan-your-space" },
    { id: 4, name: "Design Values", link: "https://www.branchfurniture.ca/pages/design-values" },
    { id: 5, name: "Ergonomics", link: "https://www.branchfurniture.ca/pages/ergonomics-101" },
    { id: 6, name: "Branch Blog", link: "https://www.branchfurniture.ca/blogs/turn-key" },
    { id: 7, name: "Showroom", link: "https://www.branchfurniture.ca/pages/showrooms" },
    { id: 8, name: "Careers", link: "https://www.branchfurniture.ca/pages/careers" },
    { id: 9, name: "Press & Media", link: "https://www.branchfurniture.ca/pages/press" },
    { id: 10, name: "Reviews", link: "https://www.branchfurniture.ca/pages/reviews" },
];


const supportes = [
    { id: 1, name: "Contact Us", link: "https://www.branchfurniture.ca/pages/contact" },
    { id: 2, name: "Track My Order", link: "https://www.branchfurniture.ca/pages/track-my-order" },
    { id: 3, name: "Assembly Guides", link: "https://www.branchfurniture.ca/pages/assembly-guides" },
    { id: 4, name: "Shipping", link: "https://www.branchfurniture.ca/pages/shipping" },
    { id: 5, name: "Delivery Options", link: "https://www.branchfurniture.ca/pages/shipping-and-delivery-options" },
    { id: 6, name: "Returns", link: "https://www.branchfurniture.ca/pages/returns" },
    { id: 7, name: "Warrantly", link: "https://www.branchfurniture.ca/pages/warranty" },
    { id: 8, name: "Careers", link: "https://www.branchfurniture.ca/pages/careers" },
];

</script>
<template>
    <div class="w-full bg-[rgb(49,68,56)] py-20">
        <div class="flex lg:flex-row flex-col text-[#F3EEEA] text-[14px] lg:justify-evenly items-center flex-wrap ">
            <div class="md:pb-5"><img src="/images/Branch.png" alt="branch brand" class="pb-3 h-[50px] w-[auto] opacity-[75]"><br />
                <h3 class="item">385 Adelaide St W,Suite</h3>
                <h3 class="item">200, Toronto ON</h3>
                <h3 class="item">2025 Branch Canada</h3>
            </div>

            <div class="flex lg:flex-row flex-col gap-15">
                <div class="flex flex-row gap-10">
                    <div class="flex flex-col">
                        <div class="item">SHOP</div>
                        <div><a v-for="(shop, index) in shops" :key="shop.id" href="shop.link">{{ shop.name }}<br /></a>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="item">BUSINESS</div>
                        <div><a v-for="(business, index) in businesses" :key="business.id" href="shop.link">{{
                            business.name
                                }}<br /></a></div>
                    </div>
                </div>

                <div class="flex flex-row gap-10">
                    <div class="flex flex-col">
                        <div class="item">EXPLORE</div>
                        <div><a v-for="(explore, index) in discoveries" :key="explore.id" href="business.link">{{
                            explore.name
                                }}<br /></a></div>
                    </div>
                    <div class="flex flex-col">
                        <div class="item">SUPPORT</div>
                        <div><a v-for="(support, index) in supportes" :key="support.id" href="support.link">{{
                            support.name
                                }}<br /></a></div>
                    </div>
                </div>
            </div>

            <div>
                <p>NEWS, OFFERS AND MORE</p> <br />
                <div class="h-[40px]">
                    <input type="email" placeholder="EMAIL"
                        class="lg:w-[175px] w-full md:block h-[40px] bg-[#FFFFFF1F]">
                    <button type="submit" class=" md:hidden w-[40px] h-[40px] ml-1 bg-[#FFFFFF1F]">></button>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.item {
    opacity: 50%;
    font-weight: 700;

}
</style>