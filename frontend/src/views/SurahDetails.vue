<template>
  <div>
    <div class="card" v-for="ayah in surah" :key="ayah.ayah_num">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ ayah.ayah_num }}</h6>
        <p class="card-text">
          {{ ayah.ayah_rus }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getSurah } from "@/services/surahAPI.ts";
export default {
  name: "SurahDetails",
  setup() {
    const route = useRoute();
    const surah = ref([]);
    onMounted(async () => {
      const id = route.params.id;
      surah.value = await getSurah(id);
    });
    return {
      surah,
    };
  },
};
</script>
