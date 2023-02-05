//쿠키저장
const setCookie = function(id, val, day){
	if(!parseInt(day)){
		return false;
	}
	day = parseInt(day);
	const expire = day * 24 * 60 * 60 * 1000; 
	const date = new Date();
	date.setTime(date.getTime() + expire);
	const expires = date.toUTCString();
	document.cookie = id+val + '=' + val + ';expires=' + expires + ';path=/';
}

//쿠키수
const getCookieCnt = function(){
	return document.cookie.split(";").length;
}

//쿠키불러오기
const getCookie = function(id){
	const cont = document.cookie.split(";").map(function(item){
		return item.trim();
	}).filter(function(item){
		return item.split("=")[0] == id;
	});
	let res = {};
	if(cont.length > 0){
		res.name = cont[0].split("=")[0];
		res.val = cont[0].split("=")[1];
	}else{
		res = null;
	}
	return res;
}

//쿠키제거
const delCookie = function(id){
	const date = new Date();
	const expires = date.toUTCString();
	document.cookie = id + "=;" + "expires=" + expires + ";path=/";
}