//your JS code here. If required.

document.addEventListener("DOMContentLoaded",function(){
  if(localStorage.length>0){
    document.getElementById("existing").style.display="block";
  }
  document.getElementById("submit").addEventListener("click",function () {
    let name = document.getElementById("username");
    let pass = document.getElementById("password");
    let chek = document.getElementById("checkbox");
  
    console.log(chek.checked);
    alert(`Logged in as ${name.value}`);
    if(chek.checked){
      //store in local storage
      localStorage.setItem("username",name.value);
      localStorage.setItem("password",pass.value);
      document.getElementById("existing").style.display="block";
    }
    else{
  
      localStorage.clear();
      document.getElementById("existing").style.display="none";
    }
    
    
  })
  
  
  document.getElementById("existing").addEventListener("click",function () {
    let name = document.getElementById("username");
    
  
    console.log(name.value);
    alert(`Logged in as ${name.value}`);
   
    
    
  })

})


