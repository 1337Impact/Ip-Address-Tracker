<template>
  <div class="bg">
    <img src="/images/pattern-bg-desktop.png" alt="background" />
    <div class="map">
      <l-map ref="map" v-model:zoom="zoom" :center="[location.lat, location.lng]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { location } from "./location-data";

export default {
  components: {
    LMap,
    LTileLayer,
    Notification,
  },
  data() {
    return {
      location,
      zoom: 13
    };
  },
};
</script>

<style lang="scss">
.bg {
  height: 100vh;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 30%;
  }
  .map {
    width: 100%;
    height: 70%;
  }
}
</style>