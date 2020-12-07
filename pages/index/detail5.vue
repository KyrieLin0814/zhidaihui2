<template>
	<view class="container">
		<view class="item name">
			<p class="icon">会议坐席</p>
		</view>

		<view class="item content">
			<div class="title">主席台</div>
			<view class="div-table">
				<view class="thead">
					<view class="th flex" v-for="(item,index) in zhuxiData" :key="index">
						<view class="index"><span>{{index+1}}</span></view>
						<view class="td full" v-for="(i,idx) in item" :key="idx">
							{{i}}
						</view>
					</view>
				</view>
				<view class="tbody">
					<view class="tr flex" v-for="(item,index) in guanzhongData" :key="index">
						<view class="index"><span>{{index+1}}</span></view>
						<view class="td full" v-for="(i,idx) in item" :key="idx"><span>{{i}}</span></view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhuxiData: [['','','']],
				guanzhongData: [['','','',''],['','','',''],['','','',''],],
			}
		},
		onLoad() {
			this.$request('/huiyi/meetingdata/seatPlan').then(res => {
				this.zhuxiData = res.head;
				this.guanzhongData = res.body;
			})
		},
		methods: {},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		.item {
			padding: 10px 16px;
			line-height: 1.8;

			>p {
				font-weight: bold;
				font-size: 16px;
			}

			>div {
				font-size: 14px;
			}

			.icon {
				padding-left: 30px;
			}

			.titleCon {
				text-align: center;
				line-height: 50px;
				height: 50px;
				background: #F8FBFF;
				border-radius: 25px;

				div {
					display: inline-block;
					padding-left: 20px;
					background: url(../../static/image/name_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}

			&.name {
				.icon {
					background: url(../../static/image/message_tian_icon6.png) no-repeat left 3px;
					background-size: 22px;
				}
			}

			.title {
				text-align: center;
				color: #888;
				font-size: 14px;
			}

			.index {
				width: 20px;
				padding-right: 15px;;

				span {
					background-color: #7F7F7F;
					color: #fff;
					font-size: 14px;
					line-height: 32px;
					display: inline-block;
					width: 20px;
					text-align: center;
					height: 100%;

				}
			}

			.div-table {
				overflow-x: auto;
				.th,.td{
					flex-direction:row;
				}
				.td {
					height: 32px;
					line-height: 32px;
					padding: 0 3px;
					border-right: 1px dotted #D2D2D2;
					border-top: 1px dotted #D2D2D2;
					box-shadow: none;
					white-space :nowrap;
					min-width: 56px;
				}

				.thead {
					.th:first-child .td {
						border-top: 1px solid #0077FF;
						box-shadow: 0px 5px 5px -3px rgba(0, 119, 255, 0.4) inset;
						background-color: #F8F8F8;
					}

					.th:last-child .td {
						border-bottom: 1px dotted #D2D2D2;
					}

					.th .index {
						border-right: 1px dotted #D2D2D2;
					}

				}
				
				.tbody {
					margin-top: 28px;
					.tr:last-child .td {
						border-bottom: 1px dotted #D2D2D2;
					}
					
					.tr .index {
						border-right: 1px dotted #D2D2D2;
					}
				}
				
				.th:first-child span,
				.tr:first-child span{
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;
				}
				.th:last-child span,
				.tr:last-child span{
					border-bottom-left-radius: 10px;
					border-bottom-right-radius: 10px;
				}
			}
		}
	}
</style>
