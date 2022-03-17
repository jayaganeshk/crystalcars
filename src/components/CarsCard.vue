<template>
  <v-card elevation="10" class="ma-2" color="#F2F2F2">
    <v-img max-height="350" src="@/assets/images/car1.jpg"></v-img>

    <div class="ma-2">
      <v-card-title class="text-h5 font-weight-bold">2021 SUV</v-card-title>
      <v-card-subtitle class="text-p">Model Number: #123 </v-card-subtitle>
      <div class="d-flex justify-space-between">
        <v-chip-group class="justify-center ma-auto">
          <v-chip label>1st Owner</v-chip>
          <v-chip label>20,000KM</v-chip>
          <v-chip label>Pertrol</v-chip>
        </v-chip-group>
      </div>
      <v-divider></v-divider>
      <v-card-actions>
        <v-card-text class="text-h6 font-weight-bold"> ₹20,000 </v-card-text>
        <v-btn
          color="primary"
          class="white--text"
          dark
          depressed
          large
          outlined
        >
          Buy Now
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
