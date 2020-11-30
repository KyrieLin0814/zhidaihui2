<template>
	<view class="container">
		<!-- <view class="con" v-for="(item,index) in data" :key="index">
			<view class="item name">
				<p class="icon name">{{item.title}}</p>
			</view>
			
			<view class="item content">
				<p>会议时间</p>
				<div class="icon date">{{item.date}}</div>
			</view>
			<view class="item content">
				<p>会议内容</p>
				<div v-html="item.text"></div>
			</view>
			<view class="item content">
				<p>参加人员</p>
				<div class="icon member">{{item.member}}</div>
			</view>
			<view class="item content">
				<p>会议地点</p>
				<div class="icon location">{{item.location}}</div>
			</view>
			<view class="item content">
				<p>会议地点</p>
				<div class="icon zhuchiren">{{item.zhuchiren}}</div>
			</view>
		</view> -->
		
		<view v-html="data.content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
			}
		},
		onShow() {
			this.$request('/huiyi/meetingdata/info',{
				category: '会议日程'
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
		.con{
			margin-bottom: 24px;
		}
		.item {
			padding:10px 16px;
			line-height:1.8;
			>p{
				font-weight: bold;
				font-size:16px;
			}
			>div{
				margin-top: 6px;
				font-size:14px;
			}
			.icon{
				padding-left:24px;
				background-size: 16px;
				background-position: left center;
				background-repeat: no-repeat;
				&.name{
					background-image: url(../../static/image/tianname_icon.png);
				}
				&.date{
					background-image: url(../../static/image/date_icon.png);
				}
				&.member{
					background-image: url(../../static/image/name_icon.png);
				}
				&.location{
					background-image: url(../../static/image/location_icon.png);
				}
				&.zhuchiren{
					background-image: url(../../static/image/zhuchiren.png);
				}
			}
		}
	}
</style>
