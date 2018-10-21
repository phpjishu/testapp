<template>
	<view class="page">
		<view class="uni-list user-header">
			<navigator url="userinfo">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image :src="userinfo.img"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{userinfo.nickname}} </view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{userinfo.content}}</view>
						</view>
					</view>
				</view>
			</navigator>
		</view>
		<view class="uni-list-cell-divider">
		</view>
		<view class="uni-card">
			<view class="uni-card-header">我的资产</view>
			<view class="uni-card-content">
				<view class="uni-grid-16">
					<navigator class="uni-grid-16-item" hover-class="uni-grid-16-item-hover" v-for="(item,index) in myAssets" :key="index"
					 :class="index % 4 === 3 ? 'no-border-right' : ''"
					 :url="item.link">
						<image class="uni-grid-16-image" :src="item.icon"></image>
						<text class="uni-grid-16-text">{{item.title}}</text>
					</navigator>
				</view>
			</view>
		</view>
		<view class="uni-list-cell-divider">
		</view>
		<view class="opennewworld">
			<button type="primary" :size="primarySize" :plain="plain"> 开启新世界 </button>
		</view>
		<view class="uni-list-cell-divider">
		</view>
		<view class="uni-card">
			<view class="uni-card-header">新世界</view>
			<view class="uni-card-content">
				<view class="uni-grid-16">
					<view class="uni-grid-16-item" hover-class="uni-grid-16-item-hover" v-for="(item,index) in newWorld" :key="index"
					 :class="index % 4 === 3 ? 'no-border-right' : ''">
						<image class="uni-grid-16-image" :src="item.icon"></image>
						<text class="uni-grid-16-text">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-list-cell-divider">
		</view>
		<view class="uni-card">
			<view class="uni-card-header">我的新世界</view>
			<view class="uni-card-content">
				<view class="uni-grid-16">
					<view class="uni-grid-16-item" hover-class="uni-grid-16-item-hover" v-for="(item,index) in myContribution" :key="index"
					 :class="index % 4 === 3 ? 'no-border-right' : ''">
						<image class="uni-grid-16-image" :src="item.icon"></image>
						<text class="uni-grid-16-text">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-list-cell-divider">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {
					uid: 11111,
					ucode: 1112211,
					sex: 1,
					city: "北京市",
					nickname: "下雨了",
					content: "这里是你的个性签名",
					img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"
				},
				myAssets: [{
					title: "我的订单",
					icon: "../../static/image/myinfo/order.png",
					link: "myorder",
				}, {
					title: "接单记录",
					icon: "../../static/image/myinfo/myorder.png",
					link: "myreceipt",
				}, {
					title: "我的钱包",
					icon: "../../static/image/myinfo/money.png",
					link: "mywallet"
				}, {
					title: "贡献值",
					icon: "../../static/image/myinfo/integrals.png",
					link: "contribution",
				}, {
					title: "我的金币",
					icon: "../../static/image/myinfo/experience.png",
					link: "empirical",
				}, {
					title: "我的VIP",
					icon: "../../static/image/myinfo/vip.png",
					link: "vip",
				}, {
					title: "新世界",
					icon: "../../static/image/myinfo/newworld.png",
					link: "newworld",
				}],
				newWorld: [{
					title: "激情视频",
					icon: "../../static/image/myinfo/videolist.png",
					link: "",
				}, {
					title: "美女服务",
					icon: "../../static/image/myinfo/girl.png",
					link: "",
				}, {
					title: "金主想约",
					icon: "../../static/image/myinfo/manager.png",
					link: "",
				}, {
					title: "激情邀请码",
					icon: "../../static/image/myinfo/mycode.png",
					link: "",
				}],
				myContribution: [{
					title: "贡献视频",
					icon: "../../static/image/myinfo/video.png",
					link: ""
				}, {
					title: "我要服务",
					icon: "../../static/image/myinfo/ico-sex.png",
					link: "",
				}, {
					title: "我是金主",
					icon: "../../static/image/myinfo/isjinzhu.png",
					link: "",

				}, {
					title: "我的视频",
					icon: "../../static/image/myinfo/videos.png",
					link: ""

				}, {
					title: "我的好评",
					icon: "../../static/image/myinfo/pingjiaicon.png",
					link: "",
				}]
			};
		}
		,onNavigationBarButtonTap(e){
			console.log(JSON.stringify(e))
		}
	}
</script>

<style scoped>
	.opennewworld {
		padding: 20px;
	}
</style>
