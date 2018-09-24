<template>
	<view class="page" :style="{minHeight:windowHeight+'px'}" @touchmove="touchmove" @touchstart="touchStart" @touchend="touchEnd">
		<view class="tools pervbutton" @tap="getPrevArticle">
			<view class="uni-icon uni-icon-arrowleft"></view>
		</view>
		<view class="tools nextbutton" @tap="getNextArticle">
			<view class="uni-icon uni-icon-arrowright"></view>
		</view>
		<view class="tools likebutton">
			<view class="uni-icon uni-icon-star-filled"></view>
		</view>
		<view class="tools collectionbutton">
			<view class="uni-icon uni-icon-chatbubble-filled"></view>
		</view>
		<view style="padding: 20px;">
			<rich-text class="richtext" v-if="article.content" :nodes="article.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import {
		HTTP
	} from '../../common/util.js'
	export default {
		data() {
			return {
				article: {},
				windowHeight: 0,
				nowArticle: 0,
				touchDot: null,
				time: 0,
				interval: null,
				touchFlasg: true
			}
		},
		watch: {
			article: {
				handler(val, oldVal) {
					uni.setNavigationBarTitle({
						title: val.title
					});
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 0
					});
				},
				deep: true
			}
		},
		methods: {
			getArticle(id, callback) {
				var that = this;
				callback = callback || function(e) {};
				if (id !== '0') {
					var cache = uni.getStorageSync('news' + id);
					if (cache) {
						that.article = cache;
						callback(cache);
						return true;
					}
				}
				HTTP.post({
					method: "article.article.detail",
					id: id
				}, function(rest) {
					if (rest.data.code == 1) {
						that.article = rest.data.data;
						uni.setStorage({
							key: 'news' + rest.data.data.aid,
							data: rest.data.data
						})
						callback(rest.data.data);
					}
				})
			},
			getArtilceToCache(id,reload) {
				var cache = uni.getStorageSync('news' + id);
				if (reload || !cache) {
					HTTP.post({
						method: "article.article.detail",
						id: id
					}, function(rest) {
						if (rest.data.code == 1) {
							uni.setStorage({
								key: 'news' + rest.data.data.aid,
								data: rest.data.data
							})
						}
					})
				}
			},
			getNextArticle() {
				var next = this.article.next;
				var that = this;
				if (next) {
					this.getArticle(next, function(newsdata) {
						console.log(JSON.stringify(newsdata))
						if (newsdata.next) {
							that.getArtilceToCache(newsdata.next)
						}
					})
				} else {
					uni.showToast({
						title: '已经没有更多了',
						duration: 1000
					})
				}
			},
			getPrevArticle() {
				var perv = this.article.perv;
				var that = this;
				if (perv) {
					this.getArticle(perv, function(newsdata) {
						if (newsdata.perv) {
							that.getArtilceToCache(newsdata.perv)
						}
					})
				} else {
					uni.showToast({
						title: '往前没有更多了',
						duration: 1000
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
				if (touchMove - this.touchDot <= -60 && this.time < 10) {
					if (this.touchFlasg) {
						this.touchFlasg = false;
						this.getNextArticle();

					}
				} else if (touchMove - this.touchDot >= 60 && this.time < 10) {
					if (this.touchFlasg) {
						this.touchFlasg = false;
						this.getPrevArticle();

					}
				}
			},
		},
		onLoad() {
			const that = this;
			uni.clearStorage()
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight - 60;
					// 获取数据
					that.getArticle('0', function(newsdata) {
						if (newsdata.next) {
							that.getArtilceToCache(newsdata.next)
						}
						if (newsdata.perv) {
							that.getArtilceToCache(newsdata.perv)
						}
					});
				}
			});
		},
		onNavigationBarButtonTap(e) {
			if (e.type === 'favorite') {
				uni.showToast({
					title: "收藏成功",
					icon: "success"
				})
			}
		}
	}
</script>

<style scoped>
	.tools {
		position: fixed;
		height: 80px;
		width: 80px;
		right: 20px;

	}

	.tools .uni-icon {
		color: #fff;
		text-shadow: #000 0px 0px 5px;
		font-size: 80px;
	}

	.pervbutton {
		bottom: 360px;
	}

	.nextbutton {
		bottom: 260px;
	}

	.likebutton {
		bottom: 160px;
	}

	.collectionbutton {
		bottom: 60px;
	}
</style>
