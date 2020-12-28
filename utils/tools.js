import global from './global.js'
import http from './http.js'
import youtong from 'youtong-jsapi'

// 路由跳转
function goToPage(path) {
	uni.navigateTo({
		url: path
	});
}

//路由替换
function redirectTo(path) {
	uni.redirectTo({
		url: path
	});
}

//路由后退
function backRoute(num,time){
	if(time){
		setTimeout(()=>{
			uni.navigateBack({
			    delta: num || 1
			});
		},time)
	}else{
		uni.navigateBack({
		    delta: num || 1
		});
	}
}

//登录
function loginFunc(){
	//登录
	// http('/huiyi/user/login', {
	// 	userId:  '02f9544d234940358ce679a02dc366d2'
	// }, 'POST').then(res => {
	// 	uni.setStorageSync('token', res.token);
	// 	uni.setStorageSync('userId', res.userId);
	// })
	// return
	youtong.runtime.user.getUserInfo({
		corpId: '1314506865699696641',
		onSuccess: function(result) {
			//登录
			http('/huiyi/user/login', {
				userId: result.id
			}, 'POST').then(res => {
				uni.setStorageSync('token', res.token);
				uni.setStorageSync('userId', res.userId);
			})
		},
		onFail: function(err) {
			console.log(err)
		}
	});
}

export default {
	goToPage,
	redirectTo,
	backRoute,
	loginFunc
}
