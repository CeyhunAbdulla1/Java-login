
let button=document.querySelector("#button");
button.addEventListener("click",()=>{
   let ad=document.querySelector("#ad").value;
   let soyad=document.querySelector("#soyad").value;
   let password=document.querySelector("#password").value;
    if(ad.trim()=="" && soyad.trim()=="" && password.trim()==""){
        alert("Xanalari bos saxlamayin")
    }
    else{

        data=[
            {
                ad:document.querySelector("#ad").value,
                 soyad:document.querySelector("#soyad").value,
                  password:document.querySelector("#password").value,
        
            }
        ]
        document.querySelector("#password").value="";
        document.querySelector("#soyad").value="";
        document.querySelector("#ad").value="";
    }
   
    console.log(data);
    localStorage.setItem("allinformation",JSON.stringify(data));
})
