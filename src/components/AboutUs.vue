<template>
  <div>
    <div
      class="text-h6 text-center font-weight-bold primary--text ma-2 text-uppercase"
    >
      // About us //
    </div>
    <v-row>
      <v-col>
        <div>
          <div
            class="text-p secondary--text font-weight-bold text-capitalize ma-2 p-content"
          >
            <span class="text-h4 primary--text font-weight-bold p-content"
              >Crystal Cars</span
            >
            Is The Best Place For Selling or Buying Your Used Cars
          </div>
          <div class="text-p ma-4 p-content">
            We deal Buying and Selling of Used Cars in the Market more than 15
            years. we have more than 500 valuable customers in our data base. as
            being in the market for a long period we are well versed in
            identifying the problem of used cars.
          </div>
        </div></v-col
      >
      <v-col>
        <v-list-item-group v-for="about in aboutus" :key="about.id">
          <v-list-item two-line>
            <v-list-item-avatar
              left
              tile
              color="#F2F2F2"
              class="secondary--text font-weight-bold"
            >
              {{ about.id }}
            </v-list-item-avatar>
            <v-list-item-content class="pa-1 ma-1">
              <v-list-item-title
                class="text-p font-weight-bold secondary--text p-tile"
              >
                {{ about.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-capitalize p-tile">
                {{ about.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      aboutus: [
        {
          id: 1,
          title: "Buy a used car",
          content: "Used cars in good quality",
        },
        {
          id: 2,
          title: "Sell a used car",
          content: "Sell or Exchange your used car",
        },
        {
          id: 3,
          title: "Finanace and Insurance",
          content: "we provide finanicing and insurance for used cars",
        },
      ],
    };
  },
};
</script>

<style>
.p-content {
  font-size: 20px;
}
.p-tile {
  font-size: 18px;
}
</style>
