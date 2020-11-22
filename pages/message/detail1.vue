<template>
	<view class="container">
		<view class="item time">
			<p>开始时间</p>
			<div class="icon">{{data.startTime}}</div>
		</view>
		<view class="item time">
			<p>截止时间</p>
			<div class="icon">{{data.endTime}}</div>
		</view>
		<view class="item content">
			<p>通知内容</p>
			<div>{{data.text}}</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					startTime: '2020-05-05',
					endTime: '2020-05-06',
					text: '小孩子的情绪转变有多快看看这个被老师训话小男孩你就知道了老师训别的同学时，他在旁偷笑，轮到自己时瞬间变脸，一秒哭出声连连点头乖乖道歉。老师不注意，'
				},
			}
		},
		onLoad() {
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
