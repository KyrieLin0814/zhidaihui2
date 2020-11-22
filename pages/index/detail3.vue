<template>
	<view class="container">
		<view class="item name">
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
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title: '大会主席团',
					text: '丁化礼、丁得祥、于可国、万萨星、万说湘、王食明、王峰东、王亚光、王刚、王拉民、王飞宁、王爱生、王索蒙（女）',
					member: '秘书长：陈国郎</br>副秘书长：李红（女） 刘胜利'
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
