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
							<span :class="[{'meeting': item.type=='会议通知'},{'tian': item.type=='提案征集通知'}]"></span>
							{{item.title ||  item.type +'标题'}}
						</div>
						<div class="msg text-1">
							{{item.content}}
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
				if(this.currPage < this.totalPage){
					this.currPage ++
					this.getList();
				}
			},
			// 下拉刷新数据列表
			refresh() {
				this.messageList =[]
				this.currPage = 1;
				this.getList();
			},
			changeTab(e) {
				this.type = e;
			},
			getList() {
				let url = '';
				if(this.type == 1){ //未读消息
					url ='/huiyi/sysmessage/list';
				}
				if(this.type == 2){ //历史消息
					url ='/huiyi/sysmessage/history';
				}
				this.$request(url,{
					limit: 10,
					page: this.currPage
				}).then(res => {
					console.log(res)
					this.totalPage = Math.ceil(res.total / 10);
					this.messageList = [...this.messageList,...res.list]
					this.$refs.loadRefresh.loadOver();
				})
			},
			toPage(obj){
				if(obj.type=='会议通知'){
					this.$tools.goToPage('detail?id=' + obj.id)
				}else{
					this.$tools.goToPage('detail1')
				}
			}
		},
		watch: {
			type() {
				this.currPage = 1;
				this.messageList = [];
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
