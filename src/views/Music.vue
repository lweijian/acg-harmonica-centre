<template>
    <div class='music'  >
        <Header :search='search'   />
        <div class='contain'>


            <div class='music-box'>

                <ul class='music-ul'>
                    <li class='music-li' v-for='(music,index) in musics' :key='index' @click='toReadMusic(music)'>

                        <el-image
                              @load="preloading(index)"
                                :src="music.imgSrc"
                                :preview-src-list="[music.musicHref]">

                        </el-image>

                        <div class='info'>
                            <span class='music-name'>{{music.musicName}}</span>
                            <span class='music-author'>{{music.musicAuthor}}</span>
                            <span class='eye  icon-eye2 iconfont'>{{music.readNumber}}</span>
                        </div>

                    </li>


                </ul>


            </div>


        </div>
        <!--        分页导航-->
        <Pagination :page-size='9' :total='total' :current-function='handleCurrentChange'/>
        <Footer/>


    </div>
</template>

<script>
    import Header from '../components/common/Header';
    import Footer from '../components/common/Footer';
    import Pagination from '../components/common/Pagination';
    import {httpMusicSearch, httpMusicPage} from '../request/api'
    import ReturnCode from '../assets/js/ReturnCode';

    export default {
        name: 'Music',
        components: {
            Header,
            Footer,
            Pagination,

        },
        data() {
            return {
                musics: [],
                total: 0,
                dialogVisible: false,
                dialogImg: '',
                current:1,
                size:9,
                fullscreenLoading:true,
            }
        },
        methods: {
            //loading动画加载
            openFullScreen(){
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
               return  loading;
            },
            //曲谱预加载
            preloading(index){
              let img=new Image();
              img.src=this.musics[index].musicHref

            },
            search() {
                if(this.$store.state.inputSearch===''){
                    httpMusicPage({'current': this.current, 'size': this.size}).then(res => {
                        this.musics = [...res.musics];
                        this.total = res.total;
                    }).catch(err => {
                        console.log(err)
                    })
                }else {
                    httpMusicSearch({'musicName': this.$store.state.inputSearch}).then(res=>{

                        if (res.code===ReturnCode.NOT_FIND_MUSIC){
                            this.$message({
                                type: 'error',
                                message: '没有找到相关曲谱！'
                            })
                        }else if(res.code===ReturnCode.OK){
                            this.musics = [...res.musics];

                            this.total = this.musics.length
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }

            },
            handleCurrentChange(val) {
                httpMusicPage({'current': val, 'size': this.size}).then(res => {
                    this.musics = [...res.musics];

                }).catch(err => {
                    console.log(err);
                })
            },
            toReadMusic(music) {
                this.dialogImg = music.musicHref;
                this.dialogVisible = true;
            },
        },

        mounted() {

            httpMusicPage({'current': this.current, 'size': this.size}).then(res => {
                this.musics = [...res.musics];
                this.total = res.total;
            }).catch(err => {
                console.log(err)
            }).finally(() => {

            })
        }
    }
</script>

<style scoped lang='less'>
    //曲谱文件样式

    .contain {
        width: 80%;
        margin: 2% 10%;
        position: relative;

        .music-box {


            .music-ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                height: 960px;

                li {
                    margin-top: 20px;
                    height: 300px;
                    width: 300px;
                    position: relative;

                    border-radius: 20px;
                    transition: all .3s;

                    &:hover {
                        transform: translateY(-3px);
                    }

                    .el-image {
                        height: 280px;
                        width: 300px;
                        border-radius: 20px;

                        overflow: hidden;
                        transition: all .2s;

                        &:hover {
                            opacity: 0.7;
                            box-shadow: 1px 1px 5px rgb(0, 0, 0),
                                -1px -1px 4px rgb(255, 255, 255);
                        }

                    }


                    .info {

                        .music-name {
                            position: absolute;
                            left: 10px;
                            top: 70%;
                            font-size: 16px;
                        }

                        .music-author {

                            position: absolute;
                            left: 10px;
                            top: 78%;
                            font-size: 6px;
                        }

                        .eye {
                            position: absolute;
                            top: 82%;
                            right: 10px;
                        }

                    }


                }
            }

            .music-ul:after {
                content: '';
                width: 300px;
            }

            .music-nav {
                margin: 0 40px;
                display: flex;
                justify-content: center;
                position: relative;

                //这里居中
                .active {
                    color: #745ead;
                }

                .icon {
                    cursor: pointer;

                    li {
                        &:nth-child(1) {
                            position: relative;
                            left: -70px;
                            top: 2px;


                        }

                        &:nth-child(2) {
                            position: relative;

                            right: -270px;
                            bottom: 14px;

                        }

                        &:hover {
                            opacity: 0.5;
                        }
                    }

                }

                .nav-list {
                    display: flex;
                    width: 280px;
                    position: absolute;
                    left: 38%;

                    li {
                        width: 40px;
                        cursor: pointer;

                        &:hover {
                            opacity: 0.5;
                        }
                    }

                }

                .sum {
                    position: relative;
                    left: 32%;
                }

                .go-nav {
                    position: relative;
                    left: 36%;
                    top: -6px;

                    input {
                        width: 30px;
                        border-radius: 5px;
                        outline: none;
                        height: 30px;
                        width: 40px;

                        &:focus {
                            border-color: black;
                        }
                    }
                }
            }

        }

    }


</style>
