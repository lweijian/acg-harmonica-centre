<template>
    <footer class="footer">

        <p class="copyright">
            Copyright&copy;2030 ACG口琴小苑 All Rights Reserved Design by WeiJian
        </p>
        <p class="Q-info">ACG口琴小苑 <span>Q群：374437595</span></p>

        <nav>
                <ul class="nav-ul">
                    <li v-for="post in posts" :key="post.id" :name="post.name">
                        <router-link :to="post.href">{{post.name}}</router-link>
                    </li>
                </ul>
        </nav>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                logoImg:require("@/assets/img/logo.png"),
                posts: [
                    {id: 1, href: "/index", name: "主页"},
                    {id: 2, href: "/music_video", name: "视频"},
                    {id: 4, href: "/music", name: "曲谱"},
                    {id: 5, href: "/forum", name: "论坛"},
                    {id: 6, href: "/about", name: "关于"},
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    //页脚
    footer{

        height: 150px;
        .copyright{
            text-align: center;
            margin-top: 20px;
            box-shadow:1px 1px 10px black ;
            line-height: 50px;

        }

        ul{
            margin-top: 15px;
            display: flex;
            justify-content: center;
            li{
                margin-left: 20px;
                &:hover{
                    opacity: 0.5;
                }
            }
        }

        .Q-info {
            display: flex;
            justify-content: center;
            font-size: 20px;
            margin-top: 20px;
            span {
                margin-left: 55px;
            }
        }

    }
</style>
