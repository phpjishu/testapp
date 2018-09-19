<template>
	<view class="page">
		<web-view :src="url"></web-view>
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

</style>
