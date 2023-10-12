<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { location } from "./location-data";

const searchInput = ref<string>("");

const submited = () => {
  console.log("submited: ", searchInput.value);

  axios({
    method: "get",
    url: `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPFY_API_KEY}&ipAddress=${searchInput.value}`,
  }).then((res) => {
    console.log("res: ", res.data.location);
    if (res.data.location.city) {
      location.lat = res.data.location.lat;
      location.lng = res.data.location.lng;
      location.ipAddress = res.data.ip;
      location.location = `${res.data.location.city}, ${res.data.location.region} ${res.data.location.postalCode}`;
      location.isp = res.data.isp;
      location.timezone = `UTC ${res.data.location.timezone}`;
    }
  });
  searchInput.value = "";
};
</script>

<template>
  <div class="search">
    <h1 class="title">IP Address Tracker</h1>
    <form @submit.prevent="submited">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        v-model="searchInput"
      />
      <button>
        <img src="/images/icon-arrow.svg" />
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
$white-color: #fffdff;
$input-color: #999999;
$dimmed-black-color: #3f3f3f;
$dimmed-white-color: #e8e8e8;

.search {
  position: absolute;
  height: 150px;
  width: 40%;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .title {
    color: $white-color;
  }
  form {
    width: 100%;
    height: 60px;
    display: flex;
  }
  input {
    all: unset;
    width: 85%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    border: 0;
    border-radius: 20px 0px 0px 20px;
    background-color: $white-color;
    font-size: 20px;
    color: $input-color;
  }
  button {
    height: 100%;
    width: 15%;
    border: 0;
    border-radius: 0px 20px 20px 0px;
    background-color: black;
    &:hover {
      background-color: $dimmed-black-color;
    }
  }

}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .search {
    position: absolute;
    top: 20px;
    width: 80%;
    height: 100px;
    .title {
      font-size: 1.6rem;
    }
    form {
      height: 50px;
    }
    input {
      font-size: 15px;
    }
  }
}
</style>
