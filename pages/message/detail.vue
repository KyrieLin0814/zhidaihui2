<template>
	<view class="container">
		<view class="item time">
			<p>会议时间</p>
			<div class="icon">{{data.time}}</div>
		</view>
		<view class="item location">
			<p>会议地点</p>
			<div class="icon">{{data.location}}</div>
		</view>
		<view class="item content">
			<p>通知内容</p>
			<div>{{data.text}}</div>
		</view>
		<view class="item content">
			<p>是否参会</p>
			<div class="radioBox">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<radio :value="item.value" :checked="index === current" />
						<span>{{item.name}}</span>
					</label>
				</radio-group>
			</div>
		</view>
		<view class="item reason" v-if="showTextarea">
			<p>请假原因</p>
			<view class="uni-textarea">
				<textarea placeholder='请输入请假原因' placeholder-style="color:#D5D5D5" v-model="reason" />
				</view>
		</view>
		<view class="bottomBtns flex">
			<button type="primary" class="full" @click="submitFunc">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:{
					title: '会议通知标题',
					time: '2020-05-05',
					location: '第三会议室',
					text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
				},
				showTextarea: false,
				items:[{
					value: '1',
					name: '是'
				},{
					value: '0',
					name: '否'
				}],
				current: 0,
				reason:'',
			}
		},
		onLoad(options) {
			this.$request(`/huiyi/sysmessage/${options.id}`).then(res => {
				console.log(res)
			})
		},
		methods: {
			submitFunc(){
				uni.showModal({
					title: '提示',
					content: '是否确认提交?',
					success: function (res) {
						if (res.confirm) {
							
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
				if(this.current == 1){
					this.showTextarea = true;
				}else{
					this.showTextarea = false;
					this.reason = "";
				}
			}
		},
		watch: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.item {
			padding:10px 16px;
			line-height:2.2;
			>p{
				font-weight: bold;
				font-size:15px;
			}
			>div{
				font-size:14px;
			}
			.icon{
				padding-left:20px;
			}
			&.time{
				.icon{
					background: url(../../static/image/date_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.location{
				.icon{
					background: url(../../static/image/location_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.content{
				div{
					line-height:1.4;
				}
			}
			&.reason{
				textarea{
					font-size:14px;
					border:1px solid #E5E5E5;
					width:calc(100% - 16px);
					padding:8px;
					border-radius: 5px;
					height:125px;
				}
			}
			
			.radioBox{
				/deep/ uni-label{
					margin-right: 20px;
					
					.uni-radio-input{
						width: 16px;
						height:16px;
						&::before{
							font-size: 16px;
						}
					}
				}
			}
		}
		
		.bottomBtns{
			margin-top: 24px;
		}
	}
</style>
