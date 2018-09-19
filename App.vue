<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			uni.getProvider({
				service: 'push',
				success: function (res) {
					console.log(res.provider)

					// 个推的名称为 igexin
					if (~res.provider.indexOf('igexin')) {
						uni.subscribePush({
							provider: 'igexin',
							success: function (res) {
								console.log('success:' + JSON.stringify(res));

							},
							complete: function (res) {
								console.log('complete:' + JSON.stringify(res));
							}
						});
						uni.onPush({
							provider: 'igexin',
							success: function () {
								console.log('监听透传成功');
							},
							callback: function (data) {
								console.log("接收到透传数据：" + JSON.stringify(data));
							}
						});
					}
				}
			});
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	@import "common/uni.css";
	@import "common/icon.css";
	.button-hover[type=primary] {
		color: rgba(255, 255, 255, 0.6);
		background-color: #179B16;
	}
</style>
