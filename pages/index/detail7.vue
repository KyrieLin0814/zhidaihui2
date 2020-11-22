<template>
	<view class="container">
		<view class="item name">
			<p class="icon">{{data.title}}</p>
		</view>
		
		<view class="item content">
			<div v-html="data.text"></div>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title: '会议提案',
					text: "1.关于新建停车场的提案</br>公司计划明年扩建，预计明年年底完工</br>2.关于增加员工技术培训的问题</br>公司计划明年开始增加10万元用于员工技能培训</br>3.关于新建停车场的提案</br>公司计划明年扩建，预计明年年底完工"
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
			&.name{
				.icon{
					background: url(../../static/image/message_tian_icon4.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
		}
	}
</style>
