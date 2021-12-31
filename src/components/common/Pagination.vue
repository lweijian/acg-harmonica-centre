<template>
    <!--        分页导航-->
    <div class="block">
        <el-pagination
                @current-change="currentFunction"

                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {

        name: "Pagination",
        props: {
            pageSize: {
                type: Number,
                default: 10
            },
          currentFunction:Function,
            total: Number,

        },

    }
</script>

<style scoped lang="less">

    /deep/ .el-pagination {

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
