
function resetValues(){
  document.getElementById("myForm").reset()
}
var danhmuc=[{tenqg:"countrylist"}];
var CountryList=[
  {tenqg:"VietNam"},
  {tenqg:"Singapore"},
  {tenqg:"Malay"},
  {tenqg:"Indonesia"},
  {tenqg:"Combodia"},
  {tenqg:"Lao"},

]
loaddm();
function loaddm(){
  var objselect=document.getElementById('dmqg');
  var htmlarrray=CountryList.map(convertohtml);
  console.log(htmlarrray);
  objselect.innerHTML='<option value="CountryList">CountryList</option>'+htmlarrray.join('');
}
function convertohtml(item){
  return  '<option value="'+item.tenqg+'">'+item.tenqg+'</option>';
}
function validationFeild(){
    var firstname=document.getElementById("firstName").value;
    var LastName=document.getElementById("lastName").value;
    var Email=document.getElementById("email").value;
    var mailformat=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneformat=/^(\d{3})(\d{3})(\d{4})$/;
    var Phone=document.getElementById("phone").value;
    var country=document.getElementById("country").value;
    var position=document.getElementById("position").value;
    if(firstname.trim==="")
    {
        alert("The First Name should not be blank");
        return false;
    }
    else if(Lastname.trim==="")
    {
        alert("The Last Name should not be blank");
        return false;
    }
    else if(Phone.trim==="")
    {
        alert("The Phone should not be blank");
        return false;
    }
    else if(Email.trim==="")
    {
        alert("The Email should not be blank");
        return false;
    }
    else if(!Email.match(mailformat)==="")
    {
        alert("Please input you are correct Email");
        return false;
    }
    else if(!Phone.match(phoneformat)==="")
    {
        alert("Please correct phone format:###-###-####");
        return false;
    }
    else if(country==="none")
    {
        alert("Please select your country");
        return false;
    }
    else if(positon==="none")
    {
        alert("Please select your position");
        return false;
    }
}
