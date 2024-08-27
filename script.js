function c(id){
  var details = document.getElementById(id);
  alert(id)
  alert(!document.getElementById(id).getAttribute("open"))
  details.setAttribute("open", false);
}