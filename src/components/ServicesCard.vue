<template>
  <v-card elevation="5" class="ma-2 pa-2">
    <v-list-item three-line>
      <v-list-item-avatar tile right>
        <v-icon color="primary" large> {{ icon }} </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5 font-weight-bold">{{
          title
        }}</v-list-item-title>
        <v-list-item-content class="text-p">
          {{ content }}
        </v-list-item-content>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "ServicesCard",
  props: {
    title: String,
    content: String,
    icon: String,
  },
};
</script>
<style scoped>
.text-p {
  line-height: 1.3 !important;
}
</style>
