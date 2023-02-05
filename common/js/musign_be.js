var muAjax = function(json, form){
	var formData = (form && form.tagName == "FORM") ? new FormData(form) : new FormData();
	var url = json.url;
	var method = (json.method) ? json.method : "GET";
	var data = json.data;
	for(key in data){
		formData.append(key, data[key]);
	}
	var option = (method.toLowerCase() == "post") ? { method: method, body: formData } : { method: method };
	return fetch(url, option)
	.then(function(response){
		if(response.ok){
			return response.text();
		}
	}).catch(function(error){
		throw new Error("ajax error!");
	});
}

var downFile = function(filename){
	var upPath = "news";
	if(location.href.indexOf("scout") > -1){
		upPath = "scout";
	}else if(location.href.indexOf("notif") > -1){
		upPath = "notif";
	}else if(location.href.indexOf("report") > -1){
		upPath = "report";
	}
	var link = "/downFile.php?file=/upload/"+upPath+"/"+filename;
	location.href = link;
}


// var asdf = "dudwo1830@musign.net", i = 0;
// var res_arr = [];
// for(i=0; i < asdf.length; i++){
// 	res_arr.push("&#"+asdf.charCodeAt(i)+";");
// }
// console.log(res_arr);