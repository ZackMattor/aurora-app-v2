<template>
  <div class="w-full h-screen bg-gray-800 text-white">
    <router-view></router-view>

    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 shadow">
      <div id="tabs" class="flex justify-between">
        <router-link to="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-list"></i>
          <span class="tab tab-home block text-xs">Animator</span>
        </router-link>
        <router-link to="/lights" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-lightbulb"></i>
          <span class="tab tab-kategori block text-xs">Lights</span>
        </router-link>
        <router-link to="/settings" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <i class="fas fa-cog"></i>
          <span class="tab tab-kategori block text-xs">Settings</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
}
</script>
