/**
 * 当前登录用户信息
 */
import channel from '../channel/channel.js'

export default {
	getUserInfo: function(request){
		var params = Object.assign({
			command: 'runtime.user.getUserInfo',
			corpId: '',
			onSuccess: function(){
				
			},
			onFail: function(){
				
			}
		}, request);
		
		if(!params.corpId){
			params.onFail({
				code: 4003,
				message: 'corpId请求参数不存在'
			});
			return;
		}
		//调用通讯层
		channel.sendMessage(params)
	}
}