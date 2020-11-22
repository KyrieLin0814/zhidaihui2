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
					title: '2020年职工代表大会议程',
					text: '1、听取和审议公司经理工作报告 ,</br>2、听取和审议公司职代会工作报告</br>3、通报公司财务状况</br>4、通报公司质量健康安全环境情况</br>5、通报公司党风廉政建设和反腐败工作情况</br>6、颁发业绩合同，党风廉政建设责任书、QHSE管理职责书及综合治理、维稳信访安保防恐</br>7、通过大会决议</br>8、公司党委书记讲话',
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
					background: url(../../static/image/message_tian_icon2.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
		}
	}
</style>
