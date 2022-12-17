<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <section class="bg-white dark:bg-gray-900">
      <div
        class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
      >
        <div class="mr-auto  lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
          >
            السلام عليكم
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 "
          >
            انا مراد حسن مصمم ومطور ويب و اعمل كفري لانسر مصمم ومطور ويب شغفي ب
            تصميم المواقع و تصميم التطبيقات ينبع بسبب القيمة الكبيرة التي يمكن
            تقديمها _ي عمل تجاري في حال كان لديه منتج مصمم بطريقة ممتازة جداً
            جداً جداً
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./../assets/person.png" alt="hero image" />
        </div>
      </div>
    </section>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
