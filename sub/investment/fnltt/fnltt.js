var makeList = function(json, id){
	var cont = document.getElementById(id);
	var table = document.createElement("table");
	var year_last1 = json[0].thstrm_dt.replace("현재", "");
	var year_last2 = json[0].frmtrm_dt.replace("현재", "");
	var year_last3 = json[0].bfefrmtrm_dt.replace("현재", "");

	var colgroup = '<colgroup><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"></colgroup>';
	
	/* 연도 */
	var thead = '<thead>';
	thead += '<tr>';
	thead += '<th><strong>CFS</strong></th>';
	thead += '<th><strong>'+year_last3+'</strong></th>';
	thead += '<th><strong>'+year_last2+'</strong></th>';
	thead += '<th><strong>'+year_last1+'</strong></th>';
	thead += '<th><strong>OFS</strong></th>';
	thead += '<th><strong>'+year_last3+'</strong></th>';
	thead += '<th><strong>'+year_last2+'</strong></th>';
	thead += '<th><strong>'+year_last1+'</strong></th>';
	thead += '</tr>';
	thead += '</thead>';
	/* 연도 END */

	/* 내용 */
	var a = '<tr>';	//자산총계
	var b = '<tr>';	//유동자산
	var c = '<tr>';	//비유동자산
	var d = '<tr>';	//부채총계
	var e = '<tr>';	//유동부체
	var f = '<tr>';	//비유동부체
	var g = '<tr>';	//자본총계
	var h = '<tr>';	//매출액
	var i = '<tr>';	//영업이익
	var j = '<tr>';	//당기순이익
	for(var num = 0; num < json.length; num++){
		dat = json[num];
		var nm = json[num].account_nm;
		if(nm == "자산총계"){
			a += '<td><p>'+nm+'</p></td>';
			a += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			a += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			a += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "유동자산"){
			b += '<td><p>'+nm+'</p></td>';
			b += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			b += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			b += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "비유동자산"){
			c += '<td><p>'+nm+'</p></td>';
			c += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			c += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			c += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "부채총계"){
			d += '<td><p>'+nm+'</p></td>';
			d += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			d += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			d += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "유동부채"){
			e += '<td><p>'+nm+'</p></td>';
			e += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			e += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			e += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "비유동부채"){
			f += '<td><p>'+nm+'</p></td>';
			f += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			f += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			f += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "자본총계"){
			g += '<td><p>'+nm+'</p></td>';
			g += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			g += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			g += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "매출액"){
			h += '<td><p>'+nm+'</p></td>';
			h += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			h += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			h += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "영업이익"){
			i += '<td><p>'+nm+'</p></td>';
			i += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			i += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			i += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
		if(nm == "당기순이익"){
			j += '<td><p>'+nm+'</p></td>';
			j += '<td><p>'+calc(dat.bfefrmtrm_amount)+'</p></td>';
			j += '<td><p>'+calc(dat.frmtrm_amount)+'</p></td>';
			j += '<td><p>'+calc(dat.thstrm_amount)+'</p></td>';
		}
	}
	a += '</tr>';
	b += '</tr>';
	c += '</tr>';
	d += '</tr>';
	e += '</tr>';
	f += '</tr>';
	g += '</tr>';
	h += '</tr>';
	i += '</tr>';
	j += '</tr>';
	/* 내용 END */

	table.innerHTML = colgroup + thead + '<tbody>' + a + b + c + d + e + f + g + h + i + j + '</tbody>';
	cont.appendChild(table);
}

//숫자 단위
var calc = function(str){
	var data = str.replace(/,/gi, '');
	var dan = 1000 * 1000;	//백만
	return intToComma(Math.round(data/dan));
}
//숫자 (,) 추가
var intToComma = function(num){
	var regexp = /\B(?=(\d{3})+(?!\d))/g;
	return num.toString().replace(regexp, ',');
}