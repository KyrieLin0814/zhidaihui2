<template>
	<view class="container">

		<view class="item">
			<div class="titleCon">
				<div>附件1：参会人员表单</div>
			</div>
		</view>
		
		<view class="item">
			<view class="div-table">
				<view class="thead">
					<view class="th flex">
						<view class="td index">序号</view>
						<view class="td full">姓名</view>
						<view class="td full">性别</view>
						<view class="td full">民族</view>
						<view class="td zhiwu">职务</view>
					</view>
				</view>
				<view class="tbody">
					<view class="tr flex" v-for="(item,index) in data" :key="index">
						<view class="td index"><span>{{index+1}}</span></view>
						<view class="td full"><span>{{item.name}}</span></view>
						<view class="td full"><span>{{item.rex}}</span></view>
						<view class="td full"><span>{{item.mz}}</span></view>
						<view class="td zhiwu"><span>{{item.zw}}</span></view>
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
				data:[ {
					name:'张晓航',
					rex: '男',
					mz: '汉族',
					zw: "公司经理"
				},{
					name:'张晓航',
					rex: '男',
					mz: '汉族',
					zw: "公司经理"
				},{
					name:'张晓航',
					rex: '男',
					mz: '汉族',
					zw: "公司经理"
				},{
					name:'张晓航',
					rex: '男',
					mz: '汉族',
					zw: "公司经理"
				}],
			}
		},
		onLoad() {},
		methods: {},
		watch: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		padding: 0 16px;

		.item {
			margin-top: 10px;

			.titleCon {
				line-height: 30px;
				height: 30px;
				background: #F8FBFF;
				border-radius: 15px;

				div {
					padding-left: 20px;;
					font-size: 14px;
					color: #3A8EFF;
					display: inline-block;
				}
			}
		}
	}
	
</style>
