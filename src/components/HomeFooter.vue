<template>
  <v-container class="white--text FooterBackground" style="width: 100%">
    <div class="mt-10 mx-3">
      <v-row>
        <v-col cols="12" sm="12" lg="4" md="4">
          <div class="ma-1 pa-1">
            <div class="text-h6 white--text font-weight-bold">Address</div>
            <div class="text-p white--text ma-2">
              <v-icon color="white" small class="ma-1"
                >fa-map-marker-alt</v-icon
              >
              No 26.11A, Govindarajapuram, Adyar, Chennai
            </div>
            <div class="text-p white--text ma-2">
              <v-icon color="white" small class="ma-1">fa-phone</v-icon>
              +91 9876543210
            </div>
            <div class="text-p white--text ma-2">
              <v-icon color="white" small class="ma-1">fa-envelope</v-icon>
              crystalcars07@gmail.com
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="4" md="4">
          <div class="ma-1 pa-1">
            <div class="text-h6 white--text font-weight-bold">
              Opening Hours
            </div>
            <div class="ma-2">
              <div class="text-p white--text">Monday - Friday</div>
              <div class="text-p white--text">9:00 AM - 5:00 PM</div>
            </div>
            <div class="ma-2">
              <div class="text-p white--text">Saturday - Sunday</div>
              <div class="text-p white--text">9:00 AM - 1:00 PM</div>
            </div>
          </div>
        </v-col>
        <!-- <v-col cols="12" sm="12" lg="4" md="4">
          <div class="ma-1 pa-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.8685783389865!2d80.25201982914844!3d13.00543930613106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x342261b6a891888b!2zMTPCsDAwJzE5LjYiTiA4MMKwMTUnMDkuMiJF!5e0!3m2!1sen!2sus!4v1647508082415!5m2!1sen!2sus"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </v-col> -->
      </v-row>

      <div class="text-p text-center mt-5">
        © Crystal Cars | All Rights Reserved | Designed and Developed by
        <a href="www.deonte.in" style="color: white">Deonte.in</a>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style>
.FooterBackground {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("@/assets/images/carousel-bg-1.jpg") center center no-repeat;
}
</style>
