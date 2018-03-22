var html = '<li class="mui-table-view-cell mui-media">\
		        <a href="javascript:;">\
		            <img class="mui-media-object mui-pull-left" :src="list.imgUrl" width="60" height="60">\
		            <div class="mui-media-body">\
		                <span class="nickname">{{list.chatName}}</span><span class="time mui-pull-right">{{list.time}}</span>\
		                <p class="mui-ellipsis">{{list.lastMsg}}</p>\
		            </div>\
		        </a>\
		    </li>';


// 组件只能由一个容器包裹
var chatList = {
	template: html,
	props: ['list'],
	created: function() {

	}
}
