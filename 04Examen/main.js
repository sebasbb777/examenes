let res=document.querySelector("#res")
let n1=document.querySelector("#n1")
let n2=document.querySelector("#n2")


 
const calculo=()=>{
  
  if(n1.value=="" && n2.value=="") {
    res.innerHTML="ERROR"
    return
  }
    res.innerHTML="<img src='spinner.gif.gif' width='400px' height='400px'>"
    setTimeout(()=>{
    let nn1=parseInt(n1.value)
    let nn2=parseInt(n2.value)
    csuma = (nn1 * nn2)/2;
    res.innerHTML = ` <h1>Resultado:</h1>
      <h2>${csuma.toFixed(2)}</h2>`
    },2000)
if(n1=="" && n2==""){
  res.innerHTML ="no "
    
}

}