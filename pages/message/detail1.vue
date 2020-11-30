<template>
	<view class="container">
		<view class="item time">
			<p>开始时间</p>
			<div class="icon">{{data.createDate}}</div>
		</view>
		<view class="item time">
			<p>截止时间</p>
			<div class="icon">{{data.createDate}}</div>
		</view>
		<view class="item content">
			<p>通知内容</p>
			<div>{{data.content}}</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{},
			}
		},
		onLoad(options) {
			this.$request(`/huiyi/sysmessage/${options.id}`).then(res => {
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
		.item {
			padding:10px 16px;
			line-height:2.2;
			>p{
				font-weight: bold;
				font-size:15px;
			}
			>div{
				font-size:14px;
			}
			.icon{
				padding-left:20px;
			}
			&.time{
				.icon{
					background: url(../../static/image/date_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.content{
				div{
					line-height:1.4;
				}
			}
		}
	}
</style>
