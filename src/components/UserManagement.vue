<template>
    <div class="user_management">
        <div class="new-user">
            <el-button
                    @click="newDialogVisible = true" size="mini">注册
            </el-button>
            <el-dialog
                    title="注册用户"
                    :visible.sync="newDialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <form id="form">
                    <div class="item">
                        <label for="username">用户名:</label>
                        <input id="username" type="text" required autocomplete="off" v-model="user.username">
                    </div>
                    <div class="item">
                        <label for="password">密码:</label>
                        <input id="password" :type="[isSee?'text':'password']" required v-model="user.password">

                        <span class="eye iconfont" @click="toggleSee"
                              :class="[isSee? 'icon-eye2' : 'icon-eye3' ]"></span>
                    </div>
                    <div class="item">
                        <label>确认密码:</label>
                        <input :type="[isCheckSee?'text':'password']" required
                               v-model="user.checkPassword">
                        <span class="eye iconfont" @click="toggleCheckSee"
                              :class="[isCheckSee? 'icon-eye2' : 'icon-eye3' ]"></span>
                    </div>
                </form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="handleCancel">取 消</el-button>
    <el-button type="primary" @click="register">注册</el-button>
  </span>
            </el-dialog>
        </div>
        <div class="edit-user">
            <el-dialog
                    title="修改用户"
                    :visible.sync="editDialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <form>
                    <div class="item">
                        <label>用户名:</label>
                        <input type="text" required autocomplete="off" v-model="user.username">
                    </div>
                    <div class="item">
                        <label>密码:</label>
                        <input :type="[isSee?'text':'password']" required v-model="user.password">
                        <span class="eye iconfont" @click="toggleSee"
                              :class="[isSee? 'icon-eye2' : 'icon-eye3' ]"></span>
                    </div>

                    <div class="item">
                        <label>角色:</label>
                        <el-select size="mini" v-model="user.roleName">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                </form>
                <span slot="footer" class="dialog-footer">
    <el-button @click="handleCancel">取 消</el-button>
    <el-button type="primary" @click="editUser">修改</el-button>
  </span>
            </el-dialog>
        </div>

        <div class="table-box">
            <el-table
                    :data="tableData"
                    :cell-style="cellStyleFun" :header-cell-style="headerStyle"
                    style="width: 100%;">
                <el-table-column
                        label="userId"
                        prop="userId">
                </el-table-column>
                <el-table-column
                        label="username"
                        prop="username">
                </el-table-column>
                <el-table-column
                        label="roleName"
                        prop="roleName">
                </el-table-column>
                <el-table-column
                        align="right">
                    <!-- eslint-disable-next-line -->
                    <template slot="header" slot-scope="scope">
                        <el-input
                                @keyup.enter.native="searchUser"
                                v-model="search"
                                size="mini"
                                placeholder="搜索一下"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">修改
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {httpFindUser, httpRegister, httpRemoveUser, httpEditUser, httpFindUserByName} from "../request/api";
    import ReturnCode from "../assets/js/ReturnCode";

    export default {
        data() {
            return {
                tableData: [],
                search: '',
                newDialogVisible: false,
                editDialogVisible: false,

                isSee: false,
                isCheckSee: false,
                options: [{
                    value: 'admin',
                    label: 'admin'
                }, {
                    value: 'user',
                    label: 'user'
                }, {
                    value: 'test',
                    label: 'test'
                },],
                // 被选中的uesr
                user: {
                    userId: "",
                    username: "",
                    password: "",
                    checkPassword: "",
                    roleName: ""
                },


            }
        },
        methods: {
            //刷新数据
            refreshUser: function () {
                this.user.userId = "";
                this.user.password = "";
                this.user.roleName = "";
                this.user.username = "";
                this.user.checkPassword = "";
            },
            refreshData: function () {
                httpFindUser().then(res => {
                    this.tableData = [...res.users];
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                })
            },
            //组件样式控制
            cellStyleFun() {
                return 'background: #2a2f3c;color:white;border:none;'
            },
            headerStyle() {
                return 'background: #2a2f3c;color:white;border:none;'
            },

            //修改user和删除user
            handleEdit(index, row) {
                this.user.userId = row.userId;
                this.user.username = row.username;
                this.user.RoleName = row.roleName;
                this.user.password = "";
                this.editDialogVisible = true
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    httpRemoveUser({username: row.username}).then(() => {
                        this.refreshData();
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(err => {
                        this.$message({
                            type: 'error',
                            message: '失败删除'
                        });
                        console.log(err);
                    })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(() => {
                        done();
                        this.$message({
                            type: 'success',
                            message: '已取消操作'
                        });
                        this.refreshUser();
                    })
                    .catch(() => {
                        this.refreshUser();
                    });
            },
            handleCancel() {
                this.newDialogVisible = false
                this.editDialogVisible = false
                this.refreshUser();
            },
            //注册用户相关方法
            toggleSee: function () {
                this.isSee = !this.isSee;
            },
            toggleCheckSee: function () {
                this.isCheckSee = !this.isCheckSee;
            },

            //检验格式
            checkFormat: function () {
                if (this.user.username == null || this.user.username === "" || this.user.password == null || this.user.password === "") {
                    this.$message({
                        type: 'error',
                        message: '用户名或密码不能为空!'
                    });
                    return false;
                }
                if (this.user.username.length < 3 || this.user.username.length > 12) {
                    this.$message({
                        type: 'error',
                        message: '用户名字符长度不能小于3个字符且不能大于12个字符!'
                    });
                    return false;
                }
                if (this.user.password.length < 6 || this.user.password.length > 12) {
                    this.$message({
                        type: 'error',
                        message: '密码字符长度不能小于6个字符且不能大于12个字符!'
                    });
                    return false;
                }
                if (this.user.password !== this.user.checkPassword) {
                    this.$message({
                        type: 'error',
                        message: '确认密码和密码不一致!'
                    });
                    return false;
                }
                return true;

            },
            //到后台注册
            register: function () {
                if (this.checkFormat()) {
                    httpRegister({
                        username: this.user.username,
                        password: this.user.password
                    }).then(res => {
                        if (res.code === ReturnCode.OK) {
                            this.$message({
                                type: 'success',
                                message: '注册成功!'
                            });
                            this.newDialogVisible = false
                            this.refreshData();
                            this.refreshUser();
                        } else {
                            this.$message({
                                type: 'error',
                                message: '注册失败!用户名已存在'
                            });
                            this.refreshUser();
                            console.log(res)
                        }

                    })
                }
            },
            //发送修改用户信息请求
            editUser: function () {
                this.editDialogVisible = false;
                httpEditUser({
                    userId: this.user.userId,
                    username: this.user.username,
                    password: this.user.password,
                    roleName: this.user.roleName
                }).then(res => {
                    if (res.code === ReturnCode.OK) {
                        this.$message({
                            type: 'success',
                            message: '用户修改成功!'
                        });
                        this.newDialogVisible = false
                        this.refreshData();
                        this.refreshUser();
                    } else {
                        this.$message({
                            type: 'error',
                            message: '用户修改失败'
                        });
                        this.refreshUser();
                        console.log(res)
                    }

                })

            },
            searchUser: function () {
                if (this.search === "" || this.search == null) {
                    this.refreshData()
                } else {
                    httpFindUserByName({username: this.search}).then(res => {
                        if (res.code === ReturnCode.OK) {
                            this.$message({
                                type: 'success',
                                message: '用户查询成功!'
                            });
                            this.tableData=[res.user]

                        } else {
                            this.$message({
                                type: 'error',
                                message: '用户查询失败'
                            });
                            console.log(res)
                        }
                    }).catch(err => {
                        this.$message({
                            type: 'error',
                            message: '用户查询失败'
                        });
                        console.log(err)
                    })
                }

            }
        },

        //初始化
        mounted() {
            this.refreshData();
        }
    }
</script>

<style scoped lang="less">
    .table-box {
        margin: 10px;
        width: 70%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .8),
            -1px -1px 3px rgba(255, 255, 255, 1);
    }

    .new-user {
        margin: 10px;
    }


    .el-table, .el-table__expanded-cell, .el-table--border::after, .el-table--group::after, .el-table::before {
        background: transparent;
    }

    .item {
        height: 20px;
        margin-bottom: 10px;
        border-bottom: 1px solid #fff;
        position: relative;

        label {
            width: 80px;
            display: inline-block;
            margin-right: 20px;
        }

        .eye {

            font-size: 20px;
            cursor: pointer;
        }


    }
   /deep/ .el-select .el-input__inner{
        width: 170px;
    }

</style>
