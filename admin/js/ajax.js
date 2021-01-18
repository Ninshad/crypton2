function sidebar(i)
{ 
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("cont").innerHTML=xmlhttp.responseText;
	if(i==6 || i==10){
		CKEDITOR.replace('ckedit');
		}
    }
  }
xmlhttp.open("GET","include/ajax-board.php?id=" + i ,true);
xmlhttp.send();
}


// sidebar 2
function side2(i,j)
{ 
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("cright").innerHTML=xmlhttp.responseText;
	if(i==10 && j==1){
		CKEDITOR.replace('ckedit');
		}
    }
  }
xmlhttp.open("GET","include/ajax-board2.php?id=" + i + "&idd=" + j,true);
xmlhttp.send();
}



<!-- validation -->
function validateForm()
{
var x=document.getElementById('check').value;
if (x==null || x=="")
  {
  alert("Field Must Be fillled");
  return false;
  }
}



// delete Function
function deletefunction(id,i){ 

		var bb= confirm("Continue Deleting ");
	if(bb!==true) { Return;}
else {	
	var ajaxRequest; 
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert("Your browser broke!");
				return false;
			}
		}
	}
	
						
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('cright');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
var queryString = "?id=" + id + "&type=" + i;
ajaxRequest.open("GET", "include/deletefunction.php" + queryString, true);
	ajaxRequest.send(null); 
}
}




// edit Function
function editfunction(id,i){
	var ajaxRequest; 
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				alert("Your browser broke!");
				return false;
			}
		}
	}
	
						
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('cright');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
		if(i==6 || i==10){
		CKEDITOR.replace('ckedit');
		}
	}
var queryString = "?id=" + id + "&type=" + i;
ajaxRequest.open("GET", "include/editfunction.php" + queryString, true);
	ajaxRequest.send(null); 
}

