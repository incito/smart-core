/**
 * 设置未来(全局)的AJAX请求默认选项 主要设置了AJAX请求遇到Session过期的情况
 */
$.ajaxSetup({
	type : 'POST',
	complete : function(xhr, status) {
		var sessionStatus = xhr.getResponseHeader('sessionstatus');
		if (sessionStatus == 'timeout') {
			//var top = getTopWinow();
			/*
			var yes = confirm('请登录后再操作!');
			if (yes) {
				$('#loginModal').modal('show');
				//top.location.href = _path + '/login.jsp';
			}
			*/
			$('#loginModal').modal('show');
		}
	}
});

/**
 * 在页面中任何嵌套层次的窗口中获取顶层窗口
 * 
 * @return 当前页面的顶层窗口对象
 */
function getTopWinow() {
	var p = window;
	while (p != p.parent) {
		p = p.parent;
	}
	return p;
}

//在各自页面body 调用 添加导航选中 根据导航的位置 从左到右 ，从0开始 传入参数
function setnav(i){
	$("#navbar-nav li").eq(i).find("a").attr("class","menu-link mActive");
}

/**
 * 替换空字符的情况
 * @param str
 * @returns
 */
function isNull(str){
	return str == undefined ? '':str;
}

$(document).ready(function() {
	var backRight  = $('#body').offset().left-35;
	
	$('.back-top').css('right',backRight+'px');
	
	$(window).resize(function(){
		var backRight  = $('#body').offset().left-35;
		$('.back-top').css('right',backRight+'px');
	});
	
	
	//解决IE8 img 无图显示的bug
	$('img').each(function(){
		if($(this).attr('src')==null || $(this).attr('src')=="null" || $(this).attr('src')==""){
			//$(this).css('display','none');
			$(this).attr("src",_path+"/images/headImage.png");
		}
	});
	
	if(GetQueryString("type")==1){
		$('#loginModal').modal('show');
	}
    $('select.select').each(function(){
        var title = $(this).attr('title');
        if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
        $(this)
            .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
            .after('<span class="select">' + title + '</span>')
            .change(function(){
                val = $('option:selected',this).text();
                $(this).next().text(val);
                });
    });
    
    //指定车辆输出框点击显示div
    $('#assigncarno').click(function(){
    	$('.assign').css('display','block');
    });
    $('.assign span').click(function(){
    	$('.assign').css('display','none');
    	$('#assigncarno').val($(this).text());
    });

	//我的车队，找车源页面点击更多  展示全部的checkbox
	$('.more').click(function() {
		$(this).prev().toggleClass('chBoxs');
		if ($(this).children('span').hasClass(
				'glyphicon-chevron-right')) {
			$(this).children('span').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		} else {
			$(this).children('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		}
	});
	
	//我的订单 我的货源 我的车队页面详情展示
	 
		
	//登陆按钮点击
	$('#login').click(function() {
		$('#loginModal').modal('show');
	});
	
	$('#loginBtn').click(function() {
		login();
	});
	
	//找车源，我的货源，我的车队排序按钮点击
	$('.btn-group button').click(
	function() {
		if ($(this).children('span').hasClass(
				'glyphicon-arrow-down')) {
			$(this).children('span').removeClass(
					'glyphicon-arrow-down').addClass(
					'glyphicon-arrow-up');
			$("input[name='orderDirection']").val("asc");
		} else {
			$(this).children('span').removeClass(
					'glyphicon-arrow-up').addClass(
					'glyphicon-arrow-down');
			$("input[name='orderDirection']").val("desc");
		}
		$("input[name='orderType']").val($(this).attr("vorder"));
		$("#carsForm").submit();
	});
	
	//首页，找车源，我的车队‘当前位置’点击事件
	$('.glyphicon-map-marker').parent().css('cursor','pointer');
	/*
	$('.glyphicon-map-marker').parent().click(function() {	
		$('#mapModal').modal('show');
	});
	*/

	$('#loginModal').keyup(function(event) {
		if (event.keyCode == 13) {
			login();
		}
	});
	
	//首页tabset box 兼容问题解决
	if (Sys.chrome||Sys.firefox||Sys.safari||Sys.opera){
		$('.tabset').css('width','268.3px');
	}
	
	$('.datetimepicker').datetimepicker({
		"autoclose" : true,
		"minView" : 2,
		"maxView" : 4,
		"format" : 'yyyy-mm-dd',
		"language" : 'zh-CN'
	});
		
	//分页配置和初始化
	var options = {
		currentPage : 1,
		totalPages : 10,
		numberOfPages : 5
	};
	
	$('.pagination').bootstrapPaginator(options);
	//起始城市input点击
	$('.departCity').click(function(){
		$('.citySelect').css({'display':'block','top':'32px'});
		
	});
	
	//城市选择后颜色变化
	$('.city-spacing').click(function(){
		$(this).toggleClass('cityColor');
	});
	
	//城市选择div  确定按钮点击
	$('#cityOK').click(function(){
		$('.citySelect').css('display','none');
	});
	
	//城市选择div  取消按钮点击
	$('#cityCancle').click(function(){
		$('.citySelect').css('display','none');
	});
	
	//已选城市mouse over 和mouse out样式
	$(document).on('mouseover','.sCity',function(){
		$(this).children('i').addClass('icon-remove');
	});
	
	$(document).on('mouseout','.sCity',function(){
		$(this).children('i').removeClass('icon-remove');
	});
	
});

//登录接口
function login() {
	 
	// 表单验证
	$.ajax({
		type : "POST",
		url : $('#loginform').attr("action"),
		data : $('#loginform').serialize(),
		dataType : "json",
		success : function(data) {
			if (data.status == 0) {
				location.href = _path+"/index";
			} else {
				 
				alert(data.msg);
			}
		}
	});
}
 
/**
 * 获取url后面的参数
 * */
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}
