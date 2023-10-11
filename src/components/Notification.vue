<template>
    <div class="box">
        <h2 class="msg">The provided IP Address or domain is not found </h2>
    </div>
</template>
<script lang="ts">
</script>
<style lang="scss" scooped>
    $error-color: #de7f7f;
    $border-color: #464646;
    $text-color: #464646;

    .box{
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: $error-color;
        border: $border-color 1px solid;
        border-radius: 10px;
        animation: slide .7s ease-out;
        .msg{
            font-size: .9rem;
            color: $text-color;
            padding: 15px 20px;
        }
    }
    @keyframes slide {
        from{
            right: -400px;
            opacity: 0;
        }
        to{
            right: 10px;
            opacity: 1;
        }
    }
</style>