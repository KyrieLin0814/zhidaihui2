/**
 * 工具类
 */
import channel from '../channel/channel.js'

export default {
	/**
	 * 扫条形码、二维码
	 * @param {Object} request
	 */
	scan: function(request){
		var params = Object.assign({
			command: 'biz.util.scan',
			type: 'all', //all、qrCode、barCode
			onSuccess : function(data) {
			       
			},
			onFail : function(err) {}
		},request);
		
		//调用接口
		channel.sendMessage(params);
	},
	
	/**
	 * 扫名片
	 * @param {Object} request
	 */
	scanCard: function(request){
		var params = Object.assign({
			command: 'biz.util.scanCard',
			onSuccess : function(data) {
			       
			},
			onFail : function(err) {}
		},request);
		
		//调用接口
		channel.sendMessage(params);
	}
}