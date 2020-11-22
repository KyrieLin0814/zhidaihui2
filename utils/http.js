//接口地址
const baseUrl = 'http://zdxx.51meilun.com:10086/zdxx/dataService?switch_json=';

//带Token请求
const httpRequest = (opts, data, noLoading) => {
	//请求前后是否显示loading
	noLoading = noLoading || false;
	
	let token = "";
	//此token是登录成功后后台返回保存在storage中的
	uni.getStorage({
		key: 'token',
		success: function(ress) {
			token = ress.data
		}
	});
	if(token){
		opts.token = token;
	}
	
	//按照接口文档格式整理参数
	let param = {
		action: {
			serviceCode: "zdxxCode",
			traceID: "111111",
			...opts,
		},
		body:data?data:{}
	}
	
	// else{
	// 	if(opts.url != "user/login"){
	// 		uni.redirectTo({
	// 			url: "/pages/index/index"
	// 		});
	// 	}
	// }
	
	let httpDefaultOpts = {
		url: baseUrl + JSON.stringify(param),
		method: "POST",
		header: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		if(!noLoading){
			uni.showLoading({
				title:'加载中',
				mask:true
			})
		}
		uni.request(httpDefaultOpts).then(
			(res) => {
				if(!noLoading){
					uni.hideLoading();
				}
				console.log(res[1].data)
				resolve(res[1])
			}
		).catch(
			(response) => {
				if(!noLoading){
					uni.hideLoading();
				}
				reject(response)
			}
		)
	})
	return promise
};

export default {
	baseUrl,
	httpRequest,
}
