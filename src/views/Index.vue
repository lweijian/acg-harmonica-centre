<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <IndexActivityVideo></IndexActivityVideo>
        <CardBanner></CardBanner>
        <IndexForum></IndexForum>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from "../components/common/Header";
    import Banner from "../components/Banner";
    import IndexActivityVideo from "../components/IndexActivityVideo";
    import CardBanner from "../components/CardBanner";

import IndexForum from "../components/IndexForum";
    import Footer from "../components/common/Footer";
    export default {
        name: "index",
        components: {
            Header,
            Banner,
            IndexActivityVideo,
            CardBanner,
            IndexForum,

            Footer,
        }
    }
</script>

<style scoped lang="less">



</style>
