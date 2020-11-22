import global from './global.js'

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

export default {
	goToPage,
	redirectTo,
	backRoute
}
