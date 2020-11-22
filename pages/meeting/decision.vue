<template>
	<view class="container flex">
		<view class="btn">
			<button type="primary" @click="voteFunc">发起投票</button>
		</view>
		<view class="list full">
			<radio-group @change="radioChange">
				<view class="item" v-for="(item, index) in dataList" :key="index">
					<view class="flex">
						<label class="content full">
							<div class="title flex">
								<radio :value="item.id" :checked="index === current" />
								<p class="full">{{item.title}}</p>
							</div>
							<div class="tip">
								<span class="time">{{item.time}}</span>
								<span class="duration">{{item.duration}}分钟</span>
							</div>
							<div class="result">
								<span>{{statusOptions[item.status]}}</span>
								<span>{{tpStatusOptions[item.tpStatus]}}</span>
							</div>
						</label>

						<!-- 如果投票进行中 显示选项 -->
						<div class="voteBox" v-if="item.status != 0">
							<!-- 已投票 -->
							<div class="voteCon" v-if="item.tpStatus == 1">
								<div class="flex">
									<div class="con full"  v-if="item.choose == '1'">
										<span class="img tg"></span>
										<span>通过</span>
									</div>
									<div class="con full" v-if="item.choose == '0'">
										<span class="img btg"></span>
										<span>不通过</span>
									</div>
								</div>
							</div>

							<!-- 未投票 -->
							<div class="voteCon" v-else>
								<div class="flex">
									<div class="con full" @click="chooseFunc(index, '1')" :class="{'choose': item.choose == '1'}">
										<span class="img tg"></span>
										<span>通过</span>
									</div>
									<div class="con full" @click="chooseFunc(index, '0')" :class="{'choose': item.choose == '0'}">
										<span class="img btg"></span>
										<span>不通过</span>
									</div>
								</div>
							</div>
						</div>
					</view>

					<!-- 如果投票已完成 显示结果 -->
					<div class="txt" v-if="item.status == 2">投票结果：{{item.result}}</div>
				</view>
			</radio-group>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: '',
				statusOptions: ['未开始', '进行中', '已终止'],
				tpStatusOptions: ['未投票', '已投票'],
				dataList: [{
					id: '1',
					title: '这是投票的标题',
					time: '2020-10-20 15:30:00',
					duration: '7',
					status: 0,
					tpStatus: 0,
					choose: '',
					result: ''
				}, {
					id: '2',
					title: '这是投票的标题',
					time: '2020-10-20 15:30:00',
					duration: 7,
					status: 1,
					tpStatus: 0,
					choose: '',
					result: ''
				}, {
					id: '3',
					title: '这是投票的标题',
					time: '2020-10-20 15:30:00',
					duration: 7,
					status: 1,
					tpStatus: 1,
					choose: '1',
					result: ''
				}, {
					id: '4',
					title: '这是投票的标题',
					time: '2020-10-20 15:30:00',
					duration: 7,
					status: 2,
					tpStatus: 1,
					choose: '0',
					result: '通过405人，不通过189人，弃权19人'
				}],
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			radioChange() {

			},
			chooseFunc(index, choose) {
				this.dataList[index].choose = choose;
				
				
				console.log(this.dataList[index].choose)
			},
			voteFunc() {

			}
		},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		flex-flow: column;

		.btn {
			padding: 5px 16px;
			text-align: right;

			uni-button {
				display: inline-block;
			}
		}

		.list {
			padding-top: 5px;
			overflow-y: auto;

			.item {
				border-bottom: 1px solid #EDEDED;
				padding: 10px 16px 0;
				display: block;
				position: relative;

				/deep/ .uni-radio-input {
					width: 16px;
					height: 16px;

					&::before {
						font-size: 14px;
					}
				}

				.content {
					margin-bottom: 10px;
					font-size: 14px;

					.title {
						font-size: 16px;
						font-weight: bold;
						margin-bottom: 10px;

						uni-radio {
							margin-top: -2px;
						}
					}

					.tip {
						margin-bottom: 12px;

						span {
							font-size: 14px;
							color: #ADADAD;
							padding-left: 20px;
							margin-right: 15px;

							&.time {
								background: url(../../static/image/time1.png) no-repeat 2px center;
								background-size: 12px;
							}

							&.duration {
								background: url(../../static/image/time2.png) no-repeat 2px center;
								background-size: 12px;
							}
						}
					}

					.result {
						margin-bottom: 10px;

						span {
							color: #3BA9FE;
							background-color: #EFF8FF;
							padding: 2px 5px;
							margin-right: 15px;
							font-size: 12px;
						}
					}
				}
			}

			.voteBox {
				margin-bottom: 10px;
				font-size: 12px;
				color: #212121;

				.voteCon {
					width: 80px;
					text-align: center;
					padding-top: 20px;
					.choose{
						span{
							color: #0077FF;
							&.img{
								border-color: #3BA9FE;
							}
						}
					}

					span {
						display: block;
						margin:0 auto;
						&.img {
							border:1px solid #EFF5FF;
							width: 30px;
							height: 30px;
							border-radius: 15px;
							background-repeat: no-repeat;
							background-position: center;
							background-color: #EFF5FF;

							&.tg {
								background-image: url(../../static/image/tongguo.png);
								background-size: 18px;
							}

							&.btg {
								background-image: url(../../static/image/butongguo.png);
								background-size: 20px;
							}
						}
					}
				}
			}

			.txt {
				margin-bottom: 10px;
				font-size: 14px;
				font-weight: bold;
				line-height: 1.2;
			}
		}
	}
</style>
