<template>
	<view class="container flex">
		<view class="btn" v-if="isMine">
			<button type="primary" @click="voteStart">发起表决</button>
			<button type="primary" @click="voteEnd">结束表决</button>
			<!-- <button type="primary" @click="voteFunc">确认投票</button> -->
		</view>
		<view class="list full">
			<radio-group @change="radioChange">
				<view class="item" v-for="(item, index) in dataList" :key="index">
					<view class="flex">
						<label class="content full">
							<div class="title flex">
								<radio :value="item.id" :checked="item.id == current" :disabled="item.status == 3"/>
								<p class="full">{{item.title}}</p>
							</div>
							<div class="tip">
								<span class="time">{{item.startVoteTime || '--'}}</span>
								<span class="duration">{{item.answerTime}}分钟</span>
							</div>
							<div class="result">
								<span>{{item.statusName}}</span>
								<span>{{item.userVoteStatus || '未投票'}}</span>
							</div>
						</label>

						<!-- 如果投票进行中 显示选项 -->
						<div class="voteBox" v-if="item.status != 1 ">
							<!-- 已结束 -->
							<div class="voteCon" v-if="item.status == 3 ">
								<div class="flex">
									<div class="con full"  
										v-for="(i, idx) in item.answerList" :key="idx"
										v-show="item.userVoteAnswer == i.id">
										<span class="img" :class="[{'tg': i.content == '通过'},{'btg': i.content == '不通过'}]"></span>
										<span>{{i.content}}</span>
									</div>
								</div>
							</div>

							<!-- 进行中 -->
							<div class="voteCon" v-if="item.status == 2 ">
								<!-- 已投 -->
								<div class="flex" v-if="item.userVoteAnswer">
									<div class="con full"
										v-for="(i, idx) in item.answerList" :key="idx"
										v-show="item.userVoteAnswer == i.id">
										<span class="img" :class="[{'tg': i.content == '通过'},{'btg': i.content == '不通过'}]"></span>
										<span>{{i.content}}</span>
									</div>
								</div>
								<!-- 未投 -->
								<div class="flex" v-else>
									<div class="con full"
										v-for="(i, idx) in item.answerList" :key="idx"
										@click="chooseFunc(i.id)"
										:class="{'choose': chooseCurrent == i.id}">
										<span class="img" :class="[{'tg': i.content == '通过'},{'btg': i.content == '不通过'}]"></span>
										<span>{{i.content}}</span>
									</div>
								</div>
							</div>
						</div>
					</view>

					<!-- 如果投票已完成 显示结果 -->
					<div class="txt" v-if="item.status == 3">投票结果：{{item.result}}</div>
				</view>
			</radio-group>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				questionId:'',
				isMine: false,
				currentStatus: 0, //当前题目的状态
				current: '', //选中将要发起的题目ID
				
				chooseCurrent : '', //选中投票选项的ID
				chooseName: '', //选中投票选项的名字
				chooseAnswer : '', //选中投票的选项的题目ID
				dataList: []
			}
		},
		computed: {

		},
		onLoad(options) {
			this.questionId = options.id;
			if(options.mainUser == uni.getStorageSync('userId')){
				this.isMine = true;
			}
			this.getList();
		},
		methods: {
			getList(){
				this.$request('/huiyi/meetingquestion/list',{
					meetingId: this.questionId,
					type: 1
				}).then(res => {
					let arr = [];
					res.forEach(item=>{
						if(item.status == 3){
							let resultArr = [];
							item.answerList.forEach(j=>{
								resultArr.push(j.content + j.count + '人');
							})
							item.result = resultArr.join('，');
						}
						item.result += '。';
						arr.push(item);
					})
					this.dataList = arr;
					this.currentStatus=0;
					this.current = '';
				})
			},
			radioChange(evt) {
				this.current = evt.target.value;
				
				this.dataList.forEach(item=>{
					if(item.id == this.current){
						this.currentStatus = item.status;
					}
				})
			},
			chooseFunc(id) {
				this.chooseCurrent = id;
				this.dataList.forEach(i=>{
					i.answerList.forEach(j=>{
						if(j.id == this.chooseCurrent){
							this.chooseAnswer = i.id;
							this.chooseName = j.content;
						}
					})
				})
			},
			voteFunc(){
				// if(!this.chooseCurrent){
				// 	uni.showToast({
				// 	    title: '请选择将要表决的对象',
				// 	    duration: 1000,
				// 		icon : 'none'
				// 	});
				// 	return
				// }
				uni.showModal({
					title: '提示',
					content: '是否确定要选择' + this.chooseName + '？',
					success: (res) => {
						if (res.confirm) {
							this.$request('/huiyi/meetingquestion/vote',{
								questionId: this.chooseAnswer,
								answerId: this.chooseCurrent
							},'POST').then(res => {
								uni.showToast({
								    title: res.msg,
								    duration: 1000,
								});
								setTimeout(()=>{
									this.getList();
								},1000)
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							this.chooseAnswer = '';
							this.chooseName = '';
							this.chooseCurrent = '';
						}
					}
				})
			},
			voteStart(){
				if(!this.current){
					uni.showToast({
					    title: '请选择将要发起的表决',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				if(this.currentStatus == 2){
					uni.showToast({
					    title: '该表决已开始',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				if(this.currentStatus == 3){
					uni.showToast({
					    title: '该表决已结束',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				uni.showModal({
					title: '提示',
					content: '是否确定要发起表决？',
					success: (res) => {
						if (res.confirm) {
							this.$request('/huiyi/meetingquestion/vote/start',{
								questionId: this.current
							},'POST').then(res => {
								uni.showToast({
								    title: res.msg,
								    duration: 1000,
								});
								setTimeout(()=>{
									this.getList();
								},1000)
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			voteEnd(){
				if(!this.current){
					uni.showToast({
					    title: '请选择将要结束的表决',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				
				if(this.currentStatus == 1){
					uni.showToast({
					    title: '该表决未开始',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				if(this.currentStatus == 3){
					uni.showToast({
					    title: '该表决已结束',
					    duration: 1000,
						icon : 'none'
					});
					return
				}
				uni.showModal({
					title: '提示',
					content: '是否确定要结束表决？',
					success: (res) => {
						if (res.confirm) {
							this.$request('/huiyi/meetingquestion/vote/end',{
								questionId: this.current
							},'POST').then(res => {
								uni.showToast({
								    title: res.msg,
								    duration: 1000,
								});
								setTimeout(()=>{
									this.getList();
								},1000)
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			}
		},
		watch: {
			chooseCurrent(newV,oldV){
				if(newV){
					this.voteFunc();
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		flex-flow: column;

		.btn{
			padding:5px 16px; 
			text-align: right;
			uni-button{
				margin-left: 12px;
				font-size: 14px;
				line-height: 36px;
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
