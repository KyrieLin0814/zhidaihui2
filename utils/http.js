const baseUrl = 'http://test.51meilun.com:9102/api'
import tools from './tools.js'
const request = (url = '', data = {}, type = 'GET', header) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		let token =  uni.getStorageSync('token');
		uni.request({
			method: type,
			url: baseUrl + url,
			data: data,
			header: {
				...header,
				...{
					'content-type': "application/json",
					'token': token
				}
			},
			dataType: 'json',
		}).then((response) => {
			let [error, res] = response;
			// console.log(res)
			//请求成功
			if(res.data.code == 0){
				uni.hideLoading();
				if(!res.data.data){
					res.data.data = {
						msg: '成功'
					};
				}
				console.log(res.data.data)
				resolve(res.data.data);
			}else if(res.data.code == 10020 || res.data.code == 10021 ){ //token失效重新登陆
				console.log('token失效')
				uni.hideLoading();
				tools.loginFunc();
			}else{
				uni.showToast({
				    title: res.data.msg,
				    duration: 1500,
					icon : 'none'
				});
				uni.hideLoading();
			}
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
