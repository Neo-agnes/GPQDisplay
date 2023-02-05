//리스트생성
var makeList = function(json, cnt, now, id){
	var cont = document.getElementById(id);
	var tbody = document.createElement("tbody");
	var inner = '';
	for(var i = 0; i < json.length; i++){
		inner += '<tr>';
		inner += '<td><p>'+ ((cnt - ((now-1)*20)) - i) +'</p></td>';
		inner += '<td><p>'+ dateFormat(json[i].rcept_dt) +'</p></td>'; 
		inner += '<td><p><a href="javascript:dartViewer('+json[i].rcept_no+');">'+ json[i].report_nm +'</a></p></td>'; 
		inner += '<td><p>'+ json[i].flr_nm +'</p></td>'; 
		inner += '</tr>';
	}
	tbody.innerHTML = inner;
	cont.querySelector("table").appendChild(tbody);
}

//페이지네이션
var makePaging = function(cnt, now, id){
	var cont = document.getElementById(id);
	var ul = document.createElement("ul");
	var page = Math.ceil(cnt/20);
	for(var i=1; i <= page; i++){
		var li = document.createElement("li");
		li.innerHTML = '<a href="javascript:pageMove('+(i)+');">'+(i)+'</a>';
		if(i == now){
			li.className = 'on';
		}
		ul.appendChild(li);
	}
	cont.appendChild(ul);
}

//날짜포맷
var dateFormat = function(date, chip){
	var c = (chip) ? chip : "-";
	var y = date.substr(0,4);
	var m = date.substr(4,2);
	var d = date.substr(6,2);
	return y +c+ m +c+ d;
}

//페이지이동
var pageMove = function(page){
	location.href = location.origin + location.pathname + "?page=" + page;
}

//공시뷰어세팅
var dartViewer = function(data){
	var UserAgent = navigator.userAgent;
	var mobChk = (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) ? "mobile" : "web";

	var url = (mobChk == "web") ? "http://dart.fss.or.kr/dsaf001/main.do?rcpNo=" : "http://m.dart.fss.or.kr/html_mdart/MD1007.html?rcpNo=";
	url += data;
	var strWindowFeatures = "width=1200,height=800,top=100,left=350";
	window.open(url, "공시정보", strWindowFeatures);
}

//<ul><li class="on"><a href="#">1</a></li></ul>