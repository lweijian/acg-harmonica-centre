<template>
    <div class='activity'>
        <Header/>
        <div class='activity-video'>
            <Video :videos='videos'/>
        </div>
        <!--        分页导航-->
        <Pagination :page-size='12' :total='total' :current-function='handleCurrentChange'/>
        <Footer/>
    </div>

</template>

<script>
    import Header from '../components/common/Header';
    import Video from '../components/common/Video';
import Footer from '../components/common/Footer';
import Pagination from '../components/common/Pagination';
    import {httpVideoPage} from '../request/api';

    export default {
        name: 'Activity',
        components: {
            Header,
            Video,
        Pagination,
            Footer,
        },
        data() {
            return {
                videos: [
                ],
                total:0,
            }
        },
        methods:{
            handleCurrentChange(val) {
                httpVideoPage({'current':val,'size':12}).then(res=>{
                    this.videos=res.videos;
                    this.total=res.total;
                })
            }
        },
        mounted() {
            httpVideoPage({'current':1,'size':12}).then(res=>{
                this.videos=res.videos;
                this.total=res.total;
            }).catch(err=>{
                console.log(err)
            })
        },
    }
</script>

<style scoped lang='less'>
    .activity-video{
        margin: 0 10%;
        width: 80%;
        position: relative;
    }
    /deep/ .el-pagination {
    margin-top: 40px;
        text-align: center;
        button {
            background: #252830;
            color: white;
        }
        input{
            border: none;
            background: #252830;
            color: white;
        }
    }

    /deep/ .el-pager {
        li {
            background: #252830;
            color: white;
        }

        .active {
            color: mediumpurple;
        }

    }
</style>
