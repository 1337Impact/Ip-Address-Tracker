<template>
  <div class="info-bar">
    <div class="container">
      <div class="block">
        <h1 class="title">IP ADDRESS</h1>
        <h2 class="content">{{ location.ipAddress }}</h2>
      </div>
      <div class="sep"></div>
      <div class="block">
        <h1 class="title">LOCATION</h1>
        <h2 class="content">{{ location.location }}</h2>
      </div>
      <div class="sep"></div>
      <div class="block">
        <h1 class="title">TIMEZONE</h1>
        <h2 class="content">{{ location.timezone }}</h2>
      </div>
      <div class="sep"></div>
      <div class="block">
        <h1 class="title">ISP</h1>
        <h2 class="content">{{ location.isp }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { location } from "./location-data";
</script>

<style lang="scss" scoped>
$grey-color: #8d8d8d;
$black-color: #222222;

.info-bar {
  position: absolute;
  top: 350px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 200px;
  z-index: 1000;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;

    .block {
      padding-left: 30px;
      padding-right: 10px;
      width: 25%;

      .title {
        color: $grey-color;
        font-size: 1rem;
      }

      .content {
        padding-top: 15px;
        font-size: 1.5rem;
        color: $black-color;
      }
    }
    .sep {
      width: 1px;
      height: 80px;
      margin-top: 5px;
      background-color: $grey-color;
    }
  }
}
</style>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .info-bar {
    position: absolute;
    top: 150px;
    height: 350px;
    widows: 1000%;

    .container {
      height: 100%;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .block {
        padding: 0px;
        width: 100%;

        .title {
          text-align: center;
          font-size: .85rem;
        }
        
        .content {
          text-align: center;
          padding-top: 15px;
          font-size: 1.5rem;
        }
      }
      .sep {
        display: none;
      }
    }
  }
}

</style>
