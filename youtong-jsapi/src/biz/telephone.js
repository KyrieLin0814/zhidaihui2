/**
 * 拨打电话
 */
import channel from '../channel/channel.js'
 
export default {
	/**
	 * 通用电话拨打
	 * @param {Object} request
	 */
	showCallMenu: function(request){
		var params = Object.assign({
			command: 'biz.telephone.showCallMenu',
			phoneNumber: '', // 期望拨打的电话号码
			code: '+86', // 国家代号，中国是+86
			onSuccess : function() {},
			onFail : function() {}
		}, request);
		
		if(!phoneNumber){
			params.onFail({
				code: 4006,
				message: '电话为空'
			});
			return;
		}
		channel.sendMessage(params);
	}
}