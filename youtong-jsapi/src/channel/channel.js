/**
 * 与客户端通讯
 */

import uuid from '../common/uuid.js';	
	/**
	 * 事件注册器
	 */	
let eventHandlers = new Object();
function getRequestId(){
	var count = 0;
	var requestId = uuid.uuid(8,16);
	while(eventHandlers[requestId]){
		count++;
		if(count > 5){
			return "";
		}
		requestId = uuid.uuid(8,16);		
	}
	return requestId;
}

/**
 * 事件回调 event_callback
 * @param {Object} requestId
 * @param {Object} success
 * @param {Object} message
 * @param {Object} data
 */
window.event_callback = function(response){
	var obj = JSON.parse(response);
	let {requestId, code, message, data} = obj;
	if(requestId && eventHandlers[requestId]){
		if(code == 0){
			eventHandlers[requestId].onSuccess(data);
		}else{
			eventHandlers[requestId].onFail({
				code: code,
				message: message
			});
		}
		delete eventHandlers[requestId];
	}
}
	
export default {
	/**
	 * 发送请求消息
	 * @param {Object} params
	 */
	sendMessage(params){
		
		params = Object.assign({
			requestId: '',
			onSuccess: function(){},
			onFail: function(){}
		}, params);
		
		var requestId = getRequestId();
		if(!requestId){
			params.onFail({
				code: 5001,
				message: '请求组装失败'
			})
			return;
		}
		
		params.requestId = requestId;
		eventHandlers[params.requestId] = params;
		try{
			// RCFlutterCommand -- flutter端注入的channel name		
			RCFlutterCommand.postMessage(JSON.stringify(params));			
		}catch(err){
			console.error(err);
			params.onFail({
				code: 5000,
				message: err.message
			})
		}
	}
	
}