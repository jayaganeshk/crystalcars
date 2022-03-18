<template>
  <v-app>
    <v-app-bar app color="white" elevation="5">
      <span
        class="text-h4 primary--text font-weight-bold"
        style="text-overflow: initial"
      >
        Crystal Cars
      </span>
      <v-spacer></v-spacer>
      <!-- <v-item-group class="text-subtitle-1 font-weight-medium">
        <span class="ma-1 pa-1"> SERVICE</span>
        <span class="ma-1 pa-1"> ABOUT</span>
        <span class="ma-1 pa-1"> CONTACT</span>
      </v-item-group> -->
    </v-app-bar>
    <v-main>
      <HomeCarousel />
      <div class="mx-6">
        <v-row dense class="d-flex mt-5">
          <v-col v-for="service in services" :key="service.id" class="ma-auto">
            <ServicesCard
              :icon="service.icon"
              :title="service.title"
              :content="service.content"
            />
          </v-col>
        </v-row>
        <div
          class="text-h6 text-center font-weight-bold primary--text ma-2 text-uppercase mt-10"
        >
          //Buy our Pre-owned cars//
        </div>
        <div class="text-h5 text-center font-weight-bold secondary--text ma-2">
          Featured Cars
        </div>

        <CarsCard class="mt-16" />
        <AboutUs class="mt-16" />
      </div>
      <StatsTile class="mt-10" />
      <HomeFooter class="mt-10" />
    </v-main>
  </v-app>
</template>

<script>
import HomeCarousel from "@/components/HomeCarousel.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import CarsCard from "@/components/CarsCard.vue";
import AboutUs from "@/components/AboutUs.vue";
import StatsTile from "@/components/StatsTile.vue";
import HomeFooter from "@/components/HomeFooter.vue";
export default {
  name: "App",
  components: {
    HomeCarousel,
    ServicesCard,
    CarsCard,
    AboutUs,
    StatsTile,
    HomeFooter,
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    },
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: "fa-car",
          title: "Buy a used car",
          content:
            " We always have stock flow of mixed varieties of Cars from Benz to Maruti and ranges from 2 lakhs Onwards.",
        },
        {
          id: 2,
          icon: "fa-car-side",
          title: "Sell a Used Cars",
          content:
            "Sell Your Used Car with us. we are well versed in identifying the problems of Used Cars.",
        },
        {
          id: 3,
          icon: "fa-certificate",
          title: "Financing",
          content:
            "We also deal with financing through various banks. we are titled as value partner with TVS Credit Servies.",
        },
      ],
    };
  },
  // data: () => ({

  // }),
};
</script>
