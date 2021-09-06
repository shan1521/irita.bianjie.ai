<template>
    <div class="wenchang_container">
        <Wenchang></Wenchang>
    </div>
</template>

<script>
import Wenchang from '../components/Wenchang.vue';
export default {
    name: 'WenchangLay',
    components: {
        Wenchang
    }
}
</script>

<style lang="stylus">
.wenchang_container {
    box-sizing: border-box;
    padding: 150px 0;
    width: 100%;
    height: 100%;
    a {
        color: #7065ff;
    }
}
</style>