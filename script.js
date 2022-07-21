function resultado(){  
    circunferencia = document.getElementById("iptCirc");
    quadrado = document.getElementById("quad");
    valor = parselnt(document.querySelector("#wir"));
    resultado = document.querySelector("#resultado");
    
    if(radio.checked = true){
      pi = 3.14;
      conta = pi * (valor*valor);
      resultado.innerHTML = conta;
      quadrado.checked = false;
      
    }
    else if(circunferencia.checked = false){
      conta = valor * valor;
      resultado.innerHTML = "o resultado aparecerá aqui"+"<br>"+ conta;
    }   

  }
