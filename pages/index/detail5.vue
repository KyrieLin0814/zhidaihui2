<template>
	<view class="container">
		<view class="item name">
			<p class="icon">会议坐席</p>
		</view>
		
		<view class="item content">
			<div class="title">主席台</div>
			<view class="div-table">
				<view class="thead">
					<view class="th flex">
						<view class="index"></view>
						<view class="td full" v-for="(item,index) in zhuxiData" :key="index">{{item}}</view>
					</view>
				</view>
				<view class="tbody">
					<view class="tr flex" v-for="(item,index) in data" :key="index">
						<view class="index"><span>{{index+1}}</span></view>
						<view class="td full"  v-for="(i,idx) in item" :key="idx"><span>{{i}}</span></view>
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
				zhuxiData:['张三','李四','王五','赵六'],
				data:[
					['张三','李四','王五','赵六','张三','李四','王五'],
					['张三','李四','王五','赵六','张三','李四','王五'],
					['张三','李四','王五','赵六','张三','李四','王五'],
					['张三','李四','王五','赵六','张三','李四','王五'],
					['张三','李四','王五','赵六','张三','李四','王五'],
					['张三','李四','王五','赵六','张三','李四','王五']
				],
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
			.titleCon{
				text-align: center;
				line-height: 50px;
				height:50px;
				background: #F8FBFF;
				border-radius: 25px;
				div{
					display: inline-block;
					padding-left:20px;
					background: url(../../static/image/name_icon.png) no-repeat left center;
					background-size: 14px;
				}
			}
			&.name{
				.icon{
					background: url(../../static/image/message_tian_icon6.png) no-repeat left 3px;
					background-size: 22px;
				}
			}
			
			.title{
				text-align: center;
				color: #888;
				font-size: 14px;
			}
			.index{
				width: 40px;
				span{
					background-color: #7F7F7F;
					color: #fff;
					font-size: 14px;
					line-height: 45px;
					display: inline-block;
					width: 20px;
					text-align: center;
					height: 100%;
					
				}
			}
			.tbody{
				margin-top: 15px;
				.tr{
					&:first-child{
						span{
							border-top-left-radius: 10px;
							border-top-right-radius: 10px;
						}
					}
					&:last-child{
						span{
							border-bottom-left-radius: 10px;
							border-bottom-right-radius: 10px;
						}
					}
				}
			}
			
			
		}
	}
</style>
