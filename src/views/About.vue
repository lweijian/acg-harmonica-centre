<template>
    <div class="about">
        <Header></Header>
        <div class="contain">
            <div class="resources">
                <h2>资源来源</h2>
                <p>部分资源来源于简谱小站，如有侵权，请立即联系，qq：760560917 Q群：374437595</p>
                简谱小站:<a href="https://www.skizhou.com/">https://www.skizhou.com/</a>
            </div>
            <!--            网站介绍-->
            <div class="website">
            <h2>网站介绍</h2>
                <p>ACG口琴小苑网站，基于vue和springboot实现的单页面网站，采用jwt实现无状态登录，主要有登录模块，曲谱管理模块，提供口琴的教学资源等功能等功能 ，网站为众多口琴爱好者服务。而ACG口琴小苑是一个ACG口琴爱好者组织，每年都会举行大量口琴活动，组织内也有很多的口琴大牛。</p>
            </div>

            <!--口琴介绍-->
            <div class="harmonica" id="harmonica">
                <div class="introduce">

                    <h2>什么是口琴？</h2>
                    <p>
                        口琴，是一种小型吹奏乐器，(英文Harmonica），用嘴吹或吸气，使金属簧片振动发声的多簧片乐器；在乐器分类上属于自由簧的吹奏乐器。其发声源是长度介于1.5～3.5cm的簧片而非空气柱（如长笛）。
                        口琴主要分为独奏口琴和合奏口琴，各自又有不同种类。其音域依种类、调性不同而略有差异。作为旋律性乐器，口琴可以吹奏至少两种和弦，高水平的乐手可以在口琴在遵循口琴结构的前提下同时吹出两个相对独立的声部。因其小巧的体积被称为“口袋里的钢琴”。按用途，口琴大体可以分为独奏用口琴和合奏用口琴两大类。前者主要包括布鲁斯口琴，半音阶口琴和复音类口琴（包括重音、回声口琴）等；后者则有贝司口琴、和弦口琴、铜角口琴等。
                    </p>
                    <div class="pro">
                        <div class="bg"></div>
                        <ul>
                            <li v-for="(item,index) in harmonicas" :key="index"><span> <b>{{item.name}}</b>{{item.info}}</span>
                                <img :src="item.img"/></li>


                        </ul>

                    </div>
                </div>
            </div>



        </div>
        <Footer/>
    </div>
</template>
<script>
    import Header from "../components/common/Header";
    import Footer from "../components/common/Footer";

    export default {
        name: "About",
        components: {
            Header, Footer
        },
        data() {
            return {
                harmonicas: [
                    {
                        name: "全音阶口琴(Diatonic Harmonica)",
                        info: "这是欧美十分流行的一类口琴。由于最常见的类型具有十个孔的缘故，十孔口琴「10-Holes Harp」又叫布鲁斯口琴/蓝调口琴。此类口琴一孔两个音，多使用Ritcher调音方式——低音没有4和6，却又有两个5。这样的设计原本是考虑到民族音乐的需要同时可以演奏一些和弦而产生。但是压音（Bending）技术的出现，使得原本缺失的音能够演奏，同时也给布鲁斯口琴增添了独有的魅力，甚至可以说，这是布鲁斯口琴之所以成为布鲁斯口琴的原因。这恐怕是设计者当初万万没有想到的。此类口琴的特色在于它的小巧和独特的音色，是一种极为“人性化”的乐器。在布鲁斯音乐中，此类口琴具有和吉他比肩的地位。除此之外，布鲁斯口琴还很适合演奏一些具有民族风味的曲子。此类口琴学习的难度比复音也要大一些，一个重要的原因是压音技术的灵活运用需要长期的练习，同时布鲁斯口琴独特的乐理也需要花一些精力来学习。",
                        img: require("@/assets/img/harmonica/布鲁斯口琴.png")
                    }, {
                        name: "半音阶口琴(Chromatic Harmonica)",
                        info: "这种口琴包含完整的半音音阶，可以用一只口琴演奏任何调的乐曲。半音阶口琴包括所有升降半音的12个音的半音音阶。半音阶口琴每个孔4个簧片，其中两个正常音高，两个为半音。通过在口琴一边的按钮切换正常音与半音。半音阶口琴适合演奏爵士乐（jazz），古典音乐(classic)，布鲁斯音乐(blues)与流行音乐。半音阶口琴是比十孔口琴更加严肃一些的乐器。完整的半音阶，最大可达四个八度以上的音域，使得诞生时间并不算长的半音阶口琴在正规乐器中占有一席之地。虽然不是传统交响乐团中的正式成员，但在许多口琴大师的努力下，半音阶口琴在室内乐等领域已有一定地位，国内外亦有以半音阶口琴为主音，由和弦、贝司口琴等组成的乐团活跃。常见的半音阶口琴为一孔四音，吹吸音成二度关系，按下变音键则每个音都升高半音。至于孔数则有8、10、12、14、16等多种，音域为二到四个八度，大部分为C调。由于可以演奏音域内的所有半音，此类口琴适合演奏比较复杂的乐曲。",
                        img: require("@/assets/img/harmonica/cx12.png")
                    }, {
                        name: "复音口琴(Tremolo)",
                        info: "又称震音口琴，是由双排吹孔构成的全音阶口琴，其上排簧片和下排簧片的音高（pitch）会被调整至有些微差距，每个音由相同音高的两个簧片发出。由于这两个簧片同时为吹孔或吸孔，演奏时两个簧片同时共鸣震动，两个簧片音高的细微差别会产生一种动听的震音效果。复音口琴一般有16到28孔，其中以24孔为国内最常见。日本复音琴又常见21孔。复音琴孔分为上下两排，一般吹奏时，同一孔中上下两个簧片同时发声。由于两个簧片振动频率有细微差别，同时振动会产生物理上叫做“拍”的现象，表现为声音强弱的周期性变化，也就是所谓的“震音”。复音口琴的优点是结构简单而固定，也不需要复杂的技巧，且复音口琴种类、调性齐全，音色清脆嘹亮，音量大，具有很强的穿透力，适合一些民族风格，是初学者的一个好选择。",
                        img: require("@/assets/img/harmonica/复音口琴.png")
                    },
                ]
            }

        }
    }
</script>

<style scoped lang="less">


    .contain {
        margin:30px 10%;
        width: 80%;
        /*margin: 20px;*/
        h2 {
            font-family: PT Serif,Serif;
            text-align: center;
            font-size: 35px;
            margin: 10px;

        }
        p {
            font-size: 18px;
            line-height: 25px;
            text-indent: 2em;
        }
    }

    .website{

    }
    //口琴介绍部分
    .harmonica {
        margin: 5px 0;
        .introduce {
            p {
                line-height: 25px;
                text-indent: 2em;
            }


            .pro {

                .bg {
                    background: #d7cfc5;
                    filter: blur(200px);
                    position: absolute;
                    height: 110%;
                    width: 100%;
                    z-index: -1;
                }


                ul {
                    overflow: hidden;
                    color: black;
                    zoom: 1;

                    img {
                        height: 240px;
                        width: 25%;

                        margin-top: 25px;
                    }

                    span {
                        margin-top: 25px;
                        display: inline-block;
                        font-size: 20px;

                        width: 75%;
                        line-height: 25px;
                        text-indent: 2em;

                    }


                }
            }

        }

    }
    .resources{
        text-align: center;
        line-height: 30px;
        color: red;
        font-size: 25px;
        a{
            color: red;
            &:hover{
                opacity: .7;
            }
        }
    }
</style>
