<template>
	<view class="container">
		<!-- <view class="item name">
			<p class="icon">{{data.title}}</p>
		</view>
		
		<view class="item content">
			<div v-html="data.text"></div>
		</view> -->
		<view v-html="data.content"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{},
			}
		},
		onShow() {
			this.$request('/huiyi/meetingdata/info',{
				category: '会议提案'
			}).then(res => {
				this.data = res;
			})
		},
		methods: {
		},
		watch: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding:10px 16px;
		.item {
			line-height:1.8;
			>p{
				font-weight: bold;
				font-size:16px;
			}
			>div{
				font-size:14px;
			}
			.icon{
				padding-left:30px;
			}
			&.name{
				.icon{
					background: url(../../static/image/message_tian_icon4.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
		}
	}
</style>
