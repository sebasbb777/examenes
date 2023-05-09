const generar = () => {
    let n = parseInt(document.querySelector("#n").value);
    document.querySelector("#vn").innerHTML = n
    let div = document.querySelector("#res");
    
    let a = parseInt(document.querySelector("#a").value);
    document.querySelector("#va").innerHTML = a
   
   
    setTimeout(() => {
      let r = imc = peso / pow(estatura / 100,2);
      div.innerHTML = r.toFixed(2);
    }, 1000);
    const borrar = () => {
      let borrarT = document.querySelector("#res").innerHTML = "";
    }
  }