/**
 * 聊天
 */
import channel from '../channel/channel.js'

export default {
	/**
	 * 打开与某个用户的单聊会话
	 * @param {Object} request
	 */
	openSingleChat: function(request){
		var parmas = Object.assign({
			command: 'biz.chat.openSingleChat',
			corpId: '', // 企业id,必须是用户所属的企业的corpid
			username: '', //用户账户
			onSuccess : function() {},
			onFail : function() {}
		},request);
		
		if(!params.corpId){
			params.onFail({
				code: 4003,
				message: 'corpId请求参数不存在'
			});
			return;
		}
		if(!params.username){
			params.onFail({
				code: 4003,
				message: 'username请求参数不存在'
			});
			return;
		}
		
		channel.sendMessage(params)
	}
}