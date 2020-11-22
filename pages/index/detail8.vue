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
					title: '大会须知',
					text: "与会人员遵守油田公司《企业文化手册》、《员工行为准则》</br></br>1、会议代表请着工装，提前15分钟进入会场；</br>2、会议进行期间，须关闭手机，遵循会场秩序；</br>3、与会议人员须遵守保密规定，妥善保管好会议文件、资料</br>4、与会议人员须遵守会议时间和有关规定，确有特殊情况，须所在分团团长和会务组请假 </br>5、会议不配发文具，请自备纸笔"
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
					background: url(../../static/image/message_tian_icon5.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
		}
	}
</style>
