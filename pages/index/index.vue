<template>
	<view class="page" :style="{minHeight:windowHeight+'px'}" @touchmove="touchmove" @touchstart="touchStart"
	 @touchend="touchEnd">
		<rich-text class="richtext" :nodes="article.content"></rich-text>
	</view>
</template>

<script>
	import {
		HTTP
	} from '../../common/util.js'
	export default {
		data() {
			return {
				nodes: "加载中...",
				article: {
					aid: 100,
					title: "",
					content: "",
					opennumber: 0,
					collection: 0
				},
				windowHeight: 0,
				nowArticle: 100,
				prevArticle: 99,
				nextArticle: 101,
				touchDot: null,
				time: 0,
				interval: null,
				touchFlasg: true
			}
		},
		methods: {
			getNextArticle() {
				var that = this;
				HTTP.post({
					method: "article.article.detail",
					article: '0'
				}, function(rest) {
					that.article = rest.data.data;
					console.log(JSON.stringify(that.article))
				})
				if (this.nextArticle) {} else {
					uni.showToast({
						title: '已经没有更多了',
						duration: 2000
					})
				}
			},
			getPrevArticle() {
				if (this.prevArticle) {} else {
					uni.showToast({
						title: '已经没有更多了',
						duration: 2000
					})
				}
			},
			touchStart(e) {
				this.touchDot = e.touches[0].pageX;
				this.interval = setInterval(() => {
					this.time++;
				}, 100)
			},
			touchEnd(e) {
				clearInterval(this.interval);
				this.touchFlasg = true;
				this.time = 0;
			},
			touchmove(e) {
				const touchMove = e.touches[0].pageX;
				if (touchMove - this.touchDot <= -80 && this.time < 10) {
					if (this.touchFlasg) {
						this.touchFlasg = false;
						this.getNextArticle();

					}
				} else if (touchMove - this.touchDot >= 80 && this.time < 10) {
					if (this.touchFlasg) {
						this.touchFlasg = false;
						this.getPrevArticle();

					}
				}
			},
		},
		onLoad() {
			const that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight;
				}
			});
		},
		onNavigationBarButtonTap(e) {
			if (e.type === 'back') {
				this.getPrevArticle();
			} else {
				this.getNextArticle();
			}
		}
	}
</script>

<style scoped>
	.xinyicontentimg img {
		width: 100%;
		height: auto;
	}
</style>
