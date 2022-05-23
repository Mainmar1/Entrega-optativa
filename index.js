function acumular_productos(producto){
  

    if(isNaN(producto) === true && producto != " "){
      lista_compras[i] = producto;
      i = i+1;
    }
    else {
      alert("Solo debes ingresar palabras!");
    }
    
  
  rta = parseInt(prompt("Desea ingresar otro producto? 1 = SI -- 2 = NO"));
  
  }
  
  const lista_compras = [];
  let precio = 0;
  let rta = parseInt(prompt("Desea ingresar un producto? 1 = SI -- 2 = NO"));
  let i=0;
  while (rta === 1){
      producto =  prompt("Ingresar producto: ");
      acumular_productos(producto);
  };
  
  alert("La lista de las compras es: \n" + lista_compras.join("\n"));