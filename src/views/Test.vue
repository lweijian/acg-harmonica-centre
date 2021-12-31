<template>
<div class="test">
<!--    <template>-->
<!--        <div style="width: 240px">-->
<!--            <p>-->
<!--                <label style="margin-right: 16px;">切换 Loading</label>-->
<!--                <el-switch v-model="loading" />-->
<!--            </p>-->
<!--            <el-skeleton style="width: 240px" :loading="loading" animated>-->
<!--                <template slot="template">-->
<!--                    <el-skeleton-item-->
<!--                            variant="image"-->
<!--                            style="width: 240px; height: 240px;"-->
<!--                    />-->
<!--                    <div style="padding: 14px;">-->
<!--                        <el-skeleton-item variant="h3" style="width: 50%;" />-->
<!--                        <div-->
<!--                                style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"-->
<!--                        >-->
<!--                            <el-skeleton-item variant="text" style="margin-right: 16px;" />-->
<!--                            <el-skeleton-item variant="text" style="width: 30%;" />-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </template>-->

<!--            </el-skeleton>-->
<!--        </div>-->
<!--    </template>-->

</div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                fileList: []
            };
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }

    }

</script>

<style scoped>

</style>
