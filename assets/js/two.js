let twodata=localStorage.getItem("allinformation");
let all=JSON.parse(twodata);
all.map(element=>{
    document.querySelector(".write").innerHTML=`
    <div class="java">
    <span>Ad:  ->>> ${element.ad}</span>
    <span>SoyAd:  ->>>  ${element.soyad}</span>
    <span>PassWord: ->>>  ${element.password}</span>
    </div>`
})