<template>
  <div class="app-container">
    <!-- 顶部区域 -->
    <mt-header fixed title="不饿了商城"></mt-header>

    <!-- 中间区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		
    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-ysy" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-ysy" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-ysy" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge" v-show="shopCarFlag">{{ shopCarCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-ysy" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
	data () {
		return {
			shopCarFlag: false,
			shopCarCount: 0
		}
	},
	created () {
		if (this.$store.getters.getAllCount > 0) {
			this.shopCarFlag = true
			this.shopCarCount = this.$store.getters.getAllCount
		}
	}
}
</script>

<style lang="scss" scoped>
.app-container {
	padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}

.mint-header {
	z-index:1000;
}

.v-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all .5s ease;
}

.mui-bar-tab .mui-tab-item-ysy.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-ysy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-ysy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-ysy .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
