<template>
  <v-row dense class="d-flex">
    <v-col
      v-for="car in cars"
      :key="car.id"
      class="ma-auto"
      cols="12"
      md="4"
      xl="4"
    >
      <v-card elevation="10" class="ma-2" color="#F2F2F2" style="">
        <v-img max-height="350" :src="car.image"></v-img>

        <div class="ma-2">
          <v-card-title class="text-h5 font-weight-bold">
            {{ car.name }}
          </v-card-title>
          <v-card-subtitle class="text-p">
            {{ car.model }}
          </v-card-subtitle>
          <div class="d-flex justify-space-between">
            <v-chip-group class="justify-center ma-auto">
              <v-chip label>{{ car.owner }} </v-chip>
              <v-chip label>{{ car.distance }} </v-chip>
              <v-chip label> {{ car.fuel }}</v-chip>
            </v-chip-group>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-card-text class="text-h6 font-weight-bold">
              {{ car.price }}
            </v-card-text>
            <v-btn
              color="primary"
              class="white--text"
              dark
              depressed
              large
              outlined
              :href="whatsappLink(car.name, car.model)"
              target="_blank"
            >
              Buy Now
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    whatsappLink(name, model) {
      return (
        `https://wa.me/9840700040?text=Hello, am interested in buying your car name ` +
        name +
        ` and  ` +
        model +
        ` . Please send me more details`
      );
    },
  },
  data() {
    return {
      cars: [
        {
          id: 1,
          image: require("@/assets/images/car1.jpg"),
          name: "2021 SUV",
          model: "Model Number: 123",
          owner: "1st Owner",
          distance: "20,000KM",
          fuel: "Pertrol",
          price: "₹2,00,000",
        },
        {
          id: 2,
          image: require("@/assets/images/car1.jpg"),
          name: "2021 SUV",
          model: "Model Number: 123",
          owner: "1st Owner",
          distance: "20,000KM",
          fuel: "Pertrol",
          price: "₹2,00,000",
        },
        {
          id: 3,
          image: require("@/assets/images/car1.jpg"),
          name: "2021 SUV",
          model: "Model Number: 123",
          owner: "1st Owner",
          distance: "20,000KM",
          fuel: "Pertrol",
          price: "₹2,00,000",
        },
      ],
    };
  },
};
</script>

<style></style>
