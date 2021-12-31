<template>
    <div class="video">


        <ul class="video-ul">
            <li v-for="(video,index) in videos" :key="index">
                <a :href="video.videoUrl" target="_blank" class="videoImg">
                    <img :src="video.imgSrc">
                    <i class="iconfont icon-shichang"></i>
                    <span class="length">{{video.lenTime}}</span>
                </a>
                <div class="videoPro">
                    <a :href="video.videoUrl" target="_blank">
                        {{video.info}}
                    </a>
                    <span class="time">
                                <i class="iconfont icon-shichang"></i>
                                {{video.date}}
                            </span>
                </div>

            </li>

        </ul>

    </div>
</template>

<script>
    export default {
        name: "Video",
        props:["videos"],
        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="less">
    //活动视频
    .video {
        ul {
            display: flex;
            justify-content: space-between;

            flex-flow: row wrap;

            li {
                overflow: hidden;
                zoom: 1;
                margin-top: 25px;

                .videoImg {
                    position: relative;
                    height: 200px;
                    width: 270px;

                    img {

                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        height: 200px;
                        width: 270px;
                        overflow: hidden;
                        zoom: 1;

                    }

                    .length {
                        color: rosybrown;
                        line-height: 25px;
                        height: 25px;
                        font-size: 17px;
                        border-top-left-radius: 5px;
                        position: absolute;
                        top: -10px;
                        right: 5px;
                    }

                    .iconfont {
                        line-height: 25px;
                        height: 25px;
                        font-size: 17px;
                        color: mediumpurple;

                        border-top-left-radius: 5px;
                        position: absolute;
                        top: -10px;
                        right: 60px;
                    }

                }

                .videoPro {
                    font-size: 17px;
                    height: 100px;
                    width: 268.5px;
                    background-color: #3f434c;
                    position: relative;
                    top: -1.5px;
                    left: 0.5px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;

                    a {
                        margin-left: 5px;
                        position: relative;
                        top: 5px;

                        &:hover {
                            opacity: 0.5;
                        }
                    }

                    .time {
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                    }


                }
            }
        }
        ul:after {
            content: "";
            width: 270px;
        }
    }

</style>
