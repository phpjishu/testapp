<template>
	<view class="page">
		<web-view :src="url"></web-view>
		<view class="uni-icon uni-icon-arrowdown test"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: "http://uniapp.dcloud.io"
			}
		}
	}
</script>

<style scoped>
	.test {
		position: fixed;
		left: 100px;
		top: 100px;
		z-index: 9999;
	}
</style>
