const fncForm = document.querySelector("#fncForm");
if(!fncForm){
	throw new Error("not form!");
}
const page = document.querySelector("#page");
const sort_type = document.querySelector("#sort_type");
const order_by = document.querySelector("#order_by");
const listSizeSelect = document.querySelector("#listSize");
const lists = document.querySelector("#lists");
lists.querySelectorAll("tr:first-child td").forEach(function(item){
	item.addEventListener("click", function(ev){
		if(this.dataset.col){
			clickMove(this.dataset.col);
		}
	})
})

const pageMove = function(val){
	page.value = val;
	fncForm.submit();
}
const selectMove = function(val){
	page.value = 1;
	listSizeSelect.value = val;
	fncForm.submit();
}
const searchMove = function(){
	page.value = 1;
	fncForm.submit();
}
const clickMove = function(st){
	order_by.value = (sort_type.value == st && order_by.value == "desc") ? "asc" : "desc";
	sort_type.value = st;
	page.value = 1;
	fncForm.submit();
}
const detailMove = function(ev, idx){
	if(ev.dataset.idx || ev.querySelector("input[type='checkbox'][data-idx]")){
		return false;
	}
	location.href = "detail.php?idx="+idx;
}
const enterChk = function(ev){
	if(ev.keyCode == 13){
		searchMove();
	}
}
document.addEventListener("DOMContentLoaded", function(){

});

const allChk = function(checked){
	const target = document.querySelectorAll("#lists input[type='checkbox'][data-idx]");
	for(let i=0; i < target.length; i++){
		if(checked === true){
			target[i].checked = true;
		}else{
			target[i].checked = false;
		}
	}
}
