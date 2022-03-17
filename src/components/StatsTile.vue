<template>
  <v-container class="text-center StatsTile">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="3"
        lg="3"
        md="3"
        class="ma-2 pa-2"
        v-for="stat in stats"
        :key="stat.id"
      >
        <v-icon color="white" large>{{ stat.icon }} </v-icon>
        <div class="text-h4 white--text font-weight-bold ma-2">
          {{ stat.title }}
        </div>
        <div class="text-p white--text">{{ stat.content }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StatsTile",
  data() {
    return {
      stats: [
        {
          id: 1,
          icon: "fa-check",
          title: "15",
          content: "Years Experience",
        },
        {
          id: 2,
          icon: "fa-users",
          title: "500",
          content: "Satisfied Clients",
        },
        {
          id: 3,
          icon: "fa-car",
          title: "300",
          content: "Cars Holding",
        },
      ],
    };
  },
};
</script>

<style scoped>
.StatsTile {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/images/carousel-01.jpg") center center no-repeat;
  /* background: url("@/assets/images/carousel-01.jpg") no-repeat center center
    fixed !important; */
  background-size: cover;
  opacity: 0.7;
}
</style>
