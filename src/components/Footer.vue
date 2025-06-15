<template>
    <footer  class="bg-gradient-to-b from-purple-700 via-purple-400 to-purple-200 w-full py-8 px-5 shadow-inner">
        <div class="flex flex-col gap-6 text-center max-w-7xl mx-auto">
            <!-- Logo/Title -->
            <div class="flex justify-center items-center">
                <h2 class="font-bold font1 text-3xl text-white tracking-wide drop-shadow-lg">
                    Mo<span class="text-purple-100 animate-pulse">v</span>ie<span class="text-yellow-300">.</span>Page
                </h2>
            </div>
            
            <!-- Divider -->
            <div class="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-3/4 mx-auto my-2"></div>
            
            <!-- Links -->
            <div class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
                <a href="#" class="text-purple-900 hover:text-white transition-all duration-300 font-medium">Copyright © 2025</a>
                <a href="#" class="text-purple-800 hover:text-white transition-all duration-300 font-medium">Privacy & Legal</a>
                <a href="#" class="text-purple-800 hover:text-white transition-all duration-300 font-medium">Accessibility</a>
                <a href="#" class="text-purple-800 hover:text-white transition-all duration-300 font-medium">Manage Cookies</a>
                <div class="flex items-center gap-2 text-purple-900">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span>Language: English (US)</span>
                </div>
            </div>
            
            <!-- Social Icons -->
            <div class="flex justify-center gap-5 mt-4">
                <a href="#" class="text-purple-900 hover:text-white transition-all duration-300 transform hover:scale-125">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" class="text-purple-900 hover:text-white transition-all duration-300 transform hover:scale-125">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"/></svg>
                </a>
                <a href="#" class="text-purple-900 hover:text-white transition-all duration-300 transform hover:scale-125">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(to bottom, 
        #6b21a8,  /* purple-700 */
        #9d4edd,  /* purple-400 */ 
        #e9d5ff   /* purple-200 */
    );
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.font1 {
  font-family: "Frank Ruhl Libre", serif;
}
</style>