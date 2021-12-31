<template>
    <div class="activity-video">
        <div>

            <router-link to="/activity_page"><h3>活动回顾</h3></router-link>
            <router-link to="/activity_page"><span class="to-more">更多活动</span></router-link>
            <Video :videos="videos"></Video>
        </div>
    </div>
</template>

<script>
    import Video from "./common/Video";
    export default {
        name: "ActivityVideo",
        data() {
            return {
                videos: [
                    {
                        videoUrl: "//www.bilibili.com/video/BV1Gx411p7YB",
                        imgSrc: require("../assets/img/video/video1.png"),
                        lenTime: "51:31",
                        info: "【口琴合辑】ACG口琴小苑年度企划第二辑【以琴为契，于茫茫人海中遇见你】",
                        date: "2017-8-5"
                    },
                    {
                        videoUrl: "//www.bilibili.com/video/BV1Ds411E7WQ",
                        imgSrc: require("../assets/img/video/video2.png"),
                        lenTime: "03:57",
                        info: "A苑成都线下交流",
                        date: "2018-6-14"
                    },
                    {
                        videoUrl: "//www.bilibili.com/video/BV1T7411i7Uq",
                        imgSrc: require("../assets/img/video/video3.png"),
                        lenTime: "65:56",
                        info: "Re: Monico の 异世界音乐会——2020口琴拜年祭",
                        date: "2020-1-24"
                    },
                    {
                        videoUrl: "//www.bilibili.com/video/BV11W411t7vi",
                        imgSrc: require("../assets/img/video/video4.png"),
                        lenTime: "193:07",
                        info: "【口琴合辑】年度巨制！B站史上最大口琴演奏策划——ACG口琴小苑圣诞祭踏雪相迎！",
                        date: "2017-12-26"
                    }

                ]
            }
        },
        components:{Video}
    }
</script>

<style scoped lang="less">
    .activity-video {
        margin: 0 10%;
        width: 80%;
        position: relative;
        //标题
        h3 {
            font-family: PT Serif,Serif;
            margin: 25px 0 0 0;
            text-align: center;
            font-size: 25px;
        }

        //更多
        .to-more {
            color: mediumpurple;
            position: absolute;
            right: 4%;
            top: 8px;

            &:hover {
                opacity: 0.5;
            }
        }

    }
</style>
