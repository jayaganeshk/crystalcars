<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <!-- <v-img :src="item.src"></v-img> -->
      <v-overlay absolute class="text-center" opacity="0.7">
        <div class="text-h6 white--text">//CRYSTAL CARS//</div>
        <div class="text-h4 white--text font-weight-bold mt-2">
          {{ item.text }}
        </div>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/carousel-01.jpg"),
          text: "Buying, Selling, Financing for Used Cars",
        },
        {
          src: require("@/assets/images/carousel-02.jpg"),
          text: "All Brands of used Cars from Benz to Maruthi",
        },
      ],
    };
  },
};
</script>

<style></style>
