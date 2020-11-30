<template>
	<view class="container">
		<!-- <view class="item name">
			<p class="icon">{{data.title}}</p>
		</view>
		
		<view class="item">
			<div class="titleCon">
				<div>13人，以姓氏笔划为序</div>
			</div>
		</view>
		
		<view class="item content">
			<div v-html="data.text"></div>
		</view>
		
		<view class="item content">
			<p>大会主席团</p>
			<div v-html="data.member"></div>
		</view> -->
		
		<view v-html="data.content"></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {}
			}
		},
		onShow() {
			this.$request('/huiyi/meetingdata/info',{
				category: '组织机构'
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
			padding:10px 16px;
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
			.titleCon{
				text-align: center;
				line-height: 50px;
				height:50px;
				background: #F8FBFF;
				border-radius: 25px;
				div{
					display: inline-block;
					padding-left:20px;
					background: url(../../static/image/name_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.name{
				.icon{
					background: url(../../static/image/message_tian_icon1.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
		}
	}
</style>
