<template>
	<view class="container">
		<view class="tabBox flex">
			<view class="tab full" :class="{'active-1': type == 1}" @click="changeTab(1)">未读消息</view>
			<view class="tab full" :class="{'active-2': type == 2}" @click="changeTab(2)">历史消息</view>
		</view>
		<load-refresh ref="loadRefresh" :isRefresh="true" :refreshTime="800" :heightReduce="40" :backgroundCover="'#ffffff'"
		 :pageNo="currPage" :totalPageNo="totalPage" @loadMore="loadMore" @refresh="refresh">
			<view slot="content-list">
				<view class="msgList">
					<view class="con" v-for="(item,index) in messageList" :key="index" @click="toPage(item)">
						<div class="til text-1">
							<span :class="[{'meeting': item.type==1},{'tian': item.type==2}]"></span>
							{{item.title}}
						</div>
						<div class="msg text-1">
							{{item.text}}
						</div>
					</view>
				</view>
			</view>
		</load-refresh>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1, //1未读消息  2历史消息
				messageList: [],
				currPage: 1, // 当前页码
				totalPage: 1, // 总页数
			}
		},
		mounted() {
			this.$refs.loadRefresh.runRefresh()
		},
		methods: {
			// 上划加载更多
			loadMore() {
				this.getList();
			},
			// 下拉刷新数据列表
			refresh() {
				this.getList();
			},
			changeTab(e) {
				this.type = e;
			},
			getList() {
				this.$request('/huiyi/sysmessage/list').then(res => {
					
				})
				
				
				setTimeout(()=>{
					this.messageList = [...this.messageList,...[{
						type: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, {
						type: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, {
						type: 1,
						title: '会议通知标题',
						text: '国家卫生健康委员会提醒，酵米面中毒的主要原因生产'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '深圳航空ZH9247航班在四川攀枝花机场'
					}, {
						type: 2,
						title: '提案通知标题',
						text: '小孩子的情绪转变有多快？看看这个被老师训话小男孩'
					}, ]]
					
					this.currPage=1;
					this.totalPage=1;
					
					this.$refs.loadRefresh.loadOver();
				},1000)
			},
			toPage(obj){
				if(obj.type==1){
					this.$tools.goToPage('detail')
				}else{
					this.$tools.goToPage('detail1')
				}
			}
		},
		watch: {
			type() {
				this.page = 1;
				this.getList();
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.msgList {
			padding: 0 16px;
			.con {
				border-bottom: 1px solid $uni-bg-color-grey;
				padding: 12px 6px;
				line-height: 1.8;

				.til {
					font-size: 15px;
					font-weight: bold;

					span {
						width: 20px;
						height: 20px;
						display: inline-block;
						vertical-align: sub;
						margin-right: 5px;

						&.tian {
							background: url(../../static/image/message_tian_icon.png) no-repeat;
							background-size: contain;
						}

						&.meeting {
							background: url(../../static/image/message_huiyi_icon.png) no-repeat;
							background-size: contain;
						}
					}
				}

				.msg {
					font-size: 14px;
					color: $uni-text-color-grey;
					padding-left: 25px;
				}
			}
		}
	}
</style>
