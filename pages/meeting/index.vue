<template>
	<view class="container">
		<view v-if="Object.keys(data).length">
			<view class="item name">
				<p>会议名称</p>
				<div class="icon">{{data.name}}</div>
			</view>
			<view class="item time">
				<p>会议时间</p>
				<div class="icon">{{data.startTime}}</div>
			</view>
			<view class="item location">
				<p>会议地点</p>
				<div class="icon">{{data.room.name || '暂无'}}</div>
			</view>
			<view class="item seat">
				<p>座位位置</p>
				<div class="icon">{{data.seatName || '暂无'}}</div>
			</view>
			
			<view class="bottomBtns flex" v-if="showBtn">
				<button type="primary" class="full" @click="submitFunc"><span>签到</span></button>
			</view>
			
			<view class="item countBox">
				<p >到会情况统计</p>
				<div class="list clearfix" v-if="dataList.length">
					<div class="item fl" v-for="(item,index) in dataList" :key="index">
						<div class="label">{{item.label}}</div>
						<div class="value">{{item.count}}人</div>
					</div>
				</div>
				<div v-else>暂无</div>
			</view>
		</view>
		
		<view class="conBtns flex">
			<view class="full">
				<div class="part" @click="$tools.goToPage('decision?id=' + data.id + '&mainUser=' + data.mainUser)">
					<div class="con">
						<img :src="require('../../static/image/biaojue.png')">
						<span>表决</span>
					</div>
				</div>
			</view>
			<view class="full">
				<div class="part" @click="$tools.goToPage('vote?id=' + data.id  + '&mainUser=' + data.mainUser)">
					<div class="con">
						<img :src="require('../../static/image/toupiao.png')">
						<span>投票</span>
					</div>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showBtn:true,
				data: {},
				dataList: []
			}
		},
		onLoad() {
		},
		onShow() {
			this.$request('/huiyi/meeting/info').then(res => {
				this.data = res;
				//签到按钮是否显示
				if(res.userJoinStatus == 4){
					this.showBtn = false;
				}
				//参会统计数据是否存在
				if(res.report){
					let obj = res.report;
					this.dataList = [{
						label: '参会人员',
						count: obj['参会']
					}, {
						label: '请假人员',
						count: obj['请假']
					}, {
						label: '迟到人员',
						count: obj['迟到']
					}, {
						label: '旷会人员',
						count: obj['旷会']
					}]
				}
				
			})
		},
		mounted() {
			
		},
		methods: {
			submitFunc() {
				this.$request('/huiyi/meeting/join',{
					meetingId: this.data.id
				},'POST').then(res => {
					uni.showToast({
						title: '签到成功',
						icon: 'success',
						mask:true
					});
					this.showBtn = false;
					// setTimeout(()=>{
					// 	this.showBtn = false;
					// },1500)
				})
				
			},
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0 16px;
		.item {
			padding: 10px 0;
			line-height: 2.2;

			>p {
				font-weight: bold;
				font-size: 15px;
			}

			>div {
				font-size: 14px;
			}

			.icon {
				padding-left: 20px;
			}

			&.name {
				.icon {
					background: url(../../static/image/tianname_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.time {
				.icon {
					background: url(../../static/image/date_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.location {
				.icon {
					background: url(../../static/image/location_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.seat {
				.icon {
					background: url(../../static/image/zuowei_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
		}

		.bottomBtns {
			margin:0 -16px;
			span {
				display: inline-block;
				padding-left: 24px;
				background: url(../../static/image/qiandao.png) no-repeat left center;
				background-size: 14px;
			}
		}

		.countBox {
			.list {
				margin: 15px 0;

				.item {
					width: 50%;

					&:nth-child(2n+1) {
						width: calc(50% - 1px);
						border-right: 1px solid #EDEDED;
					}

					margin-bottom: 14px;

					div {
						text-align: center;
						line-height: 1.5;

						&.label {
							color: $uni-text-color-grey;
						}

						&.value {
							font-size: 16px;
							color: $uni-text-color;
							font-weight: bold;
						}
					}
				}
			}
		}
		
		.conBtns{
			margin:0 -5px 30px;
			view{
				.part{
					margin:0 5px;
					height: 0;
					padding-bottom: 80%;
					background-color: #F8FBFF;
					border-radius: 8px;
					position: relative;
					.con{
						position: absolute;
						top:50%;
						width:100%;
						transform: translateY(-50%);
						img{
							display: block;
							width: 40%;
							margin:0 auto 5px;
						}
						span{
							display: block;
							font-size: 14px;
							text-align: center;
						}
					}
					
				}
			}
		}
	}
</style>
