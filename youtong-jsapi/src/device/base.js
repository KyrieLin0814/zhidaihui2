/**
 * 设备基本信息
 */
import channel from '../channel/channel.js'
import uuid from '../common/uuid.js'

export default {
	/**
	 * 获取手机基础信息
	 */
	getPhoneInfo: function(request){
		var params = Object.assign({
			command: 'device.base.getPhoneInfo',			
			onSuccess: function(){
				
			},
			onFail: function(){
				
			}
		}, request);
		
		//调用通讯层
		channel.sendMessage(params)
	},
	
	/**
	 * 获取uuid
	 */
	getUUID: function(request){
		var params = Object.assign({
			command: 'device.base.getUUID',			
			onSuccess: function(){
				
			},
			onFail: function(){
				
			}
		}, request);
		
		//调用通讯层
		var uuid = uuid.uuid(8,16);
		params.onSuccess({
			uuid: uuid
		})
	}
}