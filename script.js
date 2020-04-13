function formataMoeda(numero){
  return numero.tofixed(2).replace(".", ".");
}

function calcular(){  
  distancia_km = inputDistancia.value;
  tempo_min = inputTempo.value;
  valor_da_corrida = 2 + distancia_km * 1.4 + tempo_min * 0.26;

  botaoCalcular.innerHTML = 'Total: R$ ' + formataMoeda(valor_da_corrida);
}

