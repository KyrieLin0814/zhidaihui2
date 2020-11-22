// 全局变量

//图片地址
//上传格式 http://localhost:10086/zdxx/h5/file?token=d10d64467bdf485ea0a66b558695c383
//显示格式 http://localhost:10086/zdxx/h5/file?token=d10d64467bdf485ea0a66b558695c383&path=/img/75a4143cc0014db593b51a28b1a4c1f9.jpg
const imgBaseUrl = 'http://zdxx.51meilun.com:10086/zdxx/h5/file'
//水印地址基础路径
const waterImgBaseUrl = 'http://zdxx.51meilun.com:10086/zdxx/h5/water?token='

//字段对照
const textList = {
	GAME_STATUS:['未开始','进行中','结算中','已结束'],
	GAME_TYPE:['日常赛事','专项赛事'],
	QUESTION_TYPE:['单选题','多选题','判断题'],
	STUDY_STATUS:['未开始','学习中','已完成'],
}

export default{
	textList,
	imgBaseUrl,
	waterImgBaseUrl
}
