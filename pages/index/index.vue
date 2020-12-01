<template>
	<view class="container">
		<view class="content clearfix">
			<view class="banner"></view>
			<view class="item fl" v-for="(item,index) in dataList" :key="index" @click="$tools.goToPage(item.path)">
				<div class="con">
					<img :src="item.img">
					<span>{{item.name}}</span>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[{
					name:'会议议程',
					img: require('../../static/image/tian_zhengji_icon.png'),
					path: 'detail1'
				}, {
					name:'会议日程',
					img: require('../../static/image/tian_faqi_icon.png'),
					path: 'detail2'
				}, {
					name:'会议机构',
					img: require('../../static/image/tian_shenhe_icon.png'),
					path: 'detail3'
				}, {
					name:'参会人员',
					img: require('../../static/image/tian_chuli_icon.png'),
					path: 'detail4'
				}, {
					name:'坐席安排',
					img: require('../../static/image/tian_huifu_icon.png'),
					path: 'detail5'
				}, {
					name:'工作报告',
					img: require('../../static/image/tian_chuli_icon1.png'),
					path: 'detail6'
				}, {
					name:'会议提案',
					img: require('../../static/image/tian_huifu_icon1.png'),
					path: 'detail7'
				}, {
					name:'会议须知',
					img: require('../../static/image/tian_chuli_icon2.png'),
					path: 'detail8'
				}]
			}
		},
		onLoad(options) {
			let id = options.id;
			if(!id){
				uni.showToast({
				    title: '请登录',
				    duration: 1500,
					icon : 'none'
				});
				return
			}
			//登录
			this.$request('/huiyi/user/login', {
				userId:id
			},'POST').then(res => {
				uni.setStorageSync('token', res.token);
				uni.setStorageSync('userId', res.userId);
			})
		},
		mounted() {
			
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.content{
			padding:16px;
			.banner{
				width: 100%;
				height: 0;
				padding-bottom: 20%;
				background: url(../../static/image/banner.png) no-repeat center;
				background-size: 80%;
			}
			.item{
				width:50%;
				height:0;
				padding-bottom:50%;
				position: relative;
				.con{
					position: absolute;
					top:8px;
					left:8px;
					right:8px;
					bottom:8px;
					background-color: #F8FBFF;
					border-radius: 7px;
					img{
						display: block;
						margin: 24% auto 0;
						width:36%;
					}
					span{
						margin-top:8px;
						display: block;
						text-align: center;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
