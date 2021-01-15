<template>
  <ul class="flex flex-col p-4">
    <li class="border-gray-400 flex flex-row mb-2">
      <router-link to="/animation_builder" tag="div" class="select-none cursor-pointer border-4 border-solid border-gray-400 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col rounded-md w-20 h-20 bg-gray-600 justify-center items-center mr-4 text-5xl"><i class="fas fa-dice-d20"></i></div>

        <div class="flex-1 pl-1 mr-15">
          <div class="font-medium text-xl">Icosahedron</div>
          <div class="text-gray-600 text-sm">12 Animations</div>
        </div>
      </router-link>
    </li>

    <li class="border-gray-400 flex flex-row mb-2">
      <router-link to="/animation_builder" tag="div" class="select-none cursor-pointer border-4 border-solid border-gray-400 rounded-md flex flex-1 items-center p-4">
        <div class="flex flex-col rounded-md w-20 h-20 bg-gray-600 justify-center items-center mr-4 text-5xl"><i class="fas fa-align-justify"></i></div>

        <div class="flex-1 pl-1 mr-15">
          <div class="font-medium text-xl">Bookcase</div>
          <div class="text-gray-600 text-sm">3 Animations</div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return { };
  }
}
</script>
