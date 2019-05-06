<template>
    <div>
        <el-form :inline="true" :model="shopData">
            <el-form-item label="门店名称">
                <el-input v-model="shopData.shopName"></el-input>
            </el-form-item>
            <el-form-item label="门店地址">
                <el-input v-model="shopData.shopAdd"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="shopData.shopTel"></el-input>
            </el-form-item>
            <el-form-item label="特色">
                <el-input v-model="shopData.shopFeature"></el-input>
            </el-form-item>
            <el-form-item label="法人">
                <el-input v-model="shopData.shopCorporate"></el-input>
            </el-form-item>
            <el-form-item label="营业执照号码">
                <el-input v-model="shopData.shopLicenceNum"></el-input>
            </el-form-item>
            <el-form-item label="营业执照图片">
                <el-upload class="upload-demo" action="http://localhost:8080/" multiple
                    :limit="3" :auto-upload="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="头图">
                <el-upload class="upload-demo" action="http://localhost:8080/" multiple
                    :limit="3">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品">
                <el-select v-model="shopData.goods" placeholder="商品">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="服务">
                <el-select v-model="shopData.service" placeholder="服务">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="宠物">
                <el-select v-model="shopData.pets" placeholder="宠物">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleClick">新增</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex';
    const { mapState, mapActions, mapMutations } = createNamespacedHelpers('shop');
    export default {
        name: "addShop",
        computed: {
            ...mapState(["shopData"])
        },
        methods: {
            ...mapActions(["addShopAsync"]),
            handleClick() {
                this.addShopAsync(this.shopData)
            }
        },
        mounted() {
            // 该生命周期发生时，页面所有节点都已经加载完毕，此时需要向后台获取数据
            // this.getMessageAsync();
        }
    }
</script>

<style scoped>

</style>