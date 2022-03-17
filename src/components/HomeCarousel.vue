<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    >
      <!-- <v-img :src="item.src"></v-img> -->
      <v-overlay absolute class="text-center" opacity="0.7">
        <div class="text-h6 white--text">//CRYSTAL CARS//</div>
        <div
          class="text-h4 white--text font-weight-bold mt-2"
          :class="[isMobile ? 'carouselwidth' : '']"
        >
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
};
</script>

<style>
.carouselwidth {
  max-width: 250px;
}
</style>
