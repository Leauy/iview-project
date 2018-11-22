<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 120px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    div.layout-logo > img{
        height: 100%;
        width: 100%;
    }

    .layout-nav{
        width: 335px;
        margin: 0 auto;
        margin-right: 0px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img src="../images/logo-dark-1.png" alt="LOGO">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-home"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-analytics"></Icon>
                            合约扫描
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-paper"></Icon>
                            扫描报告
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <Input  autocomplete='on' enter-button="搜索" 
                @on-search="searchByKeyWord"
                autofocus search placeholder="请输入" v-model="keyword" />
            </Content>
            <Footer class="layout-footer-center">2018- &copy; noneage</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                keyword: ''
            };
        },
        methods: {
            searchByKeyWord: function(){
                console.log(this.keyword)
            }
        }
    }
</script>
