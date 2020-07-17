const fichas = [
  {
    id: 1,
    valor1: 0,
    valor2: 0,
    status: "mazo",
  },
  {
    id: 2,
    valor1: 0,
    valor2: 1,
    status: "mazo",
  },
  {
    id: 3,
    valor1: 0,
    valor2: 2,
    status: "mazo",
  },
  {
    id: 4,
    valor1: 0,
    valor2: 3,
    status: "mazo",
  },
  {
    id: 5,
    valor1: 0,
    valor2: 4,
    status: "mazo",
  },
  {
    id: 6,
    valor1: 0,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 7,
    valor1: 0,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 8,
    valor1: 1,
    valor2: 1,
    status: "mazo",
  },
  {
    id: 9,
    valor1: 1,
    valor2: 2,
    status: "mazo",
  },
  {
    id: 10,
    valor1: 1,
    valor2: 3,
    status: "mazo",
  },
  {
    id: 11,
    valor1: 1,
    valor2: 4,
    status: "mazo",
  },
  {
    id: 12,
    valor1: 1,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 13,
    valor1: 1,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 14,
    valor1: 2,
    valor2: 2,
    status: "mazo",
  },
  {
    id: 15,
    valor1: 2,
    valor2: 3,
    status: "mazo",
  },
  {
    id: 16,
    valor1: 2,
    valor2: 4,
    status: "mazo",
  },
  {
    id: 17,
    valor1: 2,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 18,
    valor1: 2,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 19,
    valor1: 3,
    valor2: 3,
    status: "mazo",
  },
  {
    id: 20,
    valor1: 3,
    valor2: 4,
    status: "mazo",
  },
  {
    id: 21,
    valor1: 3,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 22,
    valor1: 3,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 23,
    valor1: 4,
    valor2: 4,
    status: "mazo",
  },
  {
    id: 24,
    valor1: 4,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 25,
    valor1: 4,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 26,
    valor1: 5,
    valor2: 5,
    status: "mazo",
  },
  {
    id: 27,
    valor1: 5,
    valor2: 6,
    status: "mazo",
  },
  {
    id: 28,
    valor1: 6,
    valor2: 6,
    status: "mazo",
  },
];
var fichasUsadas = [];
var jugador = [];
var pc1 = [];
var pc2 = [];
var nombreDelJugador = "Jugador";
var valorIzquierdo;
var valorDerecho;
var tuTurno = true;
var nuevoJugador = [];
var objetosPC3 = [];
var objetosPC2 = [];
var objetosPC1 = [];
iniciarPartida();
var pc3 = [];
var i = 28;

document.getElementById("boton").addEventListener('click', () => {
  turnoPC(3)
});

function iniciarPartida() {
  show_prompt();
  jugador = obtenerFichasAleatorias(7);
  pc1 = obtenerFichasAleatorias(7);
  pc2 = obtenerFichasAleatorias(7);
  pc3 = obtenerFichasAleatorias(7);
  cargarFichasJugadores();
  crearArregloObjetos();
}

function obtenerFichasAleatorias(numerodeFichas) {
  var fichasDelJugador = [];
  for (let index = 0; index < numerodeFichas; index++) {
    var ficha = Math.floor(Math.random() * (29 - 1) + 1);
    if (fichasUsadas.includes(ficha)) {
      index--;
    } else if (fichasDelJugador.includes(ficha)) {
      index--;
    } else {
      fichasDelJugador.push(ficha);
      fichasUsadas.push(ficha);
      fichas[ficha - 1].status = "jugador";
    }
  }
  return fichasDelJugador;
}

function show_prompt() {
  Swal.fire({
    title: "Ingresa tu nombre",
    input: 'text',
    inputPlaceholder: 'Nombre',
    inputValue: ''})
  $(".swal2-input").keyup((event) => {
    document.getElementById("nombre").innerText = event.target.value;
  });
}

function cargarFichasJugadores() {
  jugador.map((element) => {
    const ficha = document.createElement("div");
    ficha.classList.add("ficha");
    ficha.id = element;
    ficha.addEventListener("click", (event) => {
      escogerFicha(event);
    });
    ficha.style.background = `url(./images/${element}.png)`;
    ficha.style.backgroundSize = "100% 100%";
    ficha.style.cursor = "pointer";
    document.getElementById("player").appendChild(ficha);
  });
  pc1.map((element) => {
    const ficha = document.createElement("div");
    ficha.classList.add("ficha");
    ficha.id = element;
    ficha.style.backgroundColor = "black";
    // ficha.style.background = `url(./images/${element}.png)`;
    // ficha.style.backgroundSize = "100% 100%";
    document.getElementById("pc1").appendChild(ficha);
  });
  pc2.map((element) => {
    const ficha = document.createElement("div");
    ficha.classList.add("ficha");
    ficha.id = element;
    ficha.style.backgroundColor = "black";
    // ficha.style.background = `url(./images/${element}.png)`;
    // ficha.style.backgroundSize = "100% 100%";
    document.getElementById("pc2").appendChild(ficha);
  });
  pc3.map((element) => {
    const ficha = document.createElement("div");
    ficha.classList.add("ficha");
    ficha.id = element;
    ficha.style.backgroundColor = "black";
    // ficha.style.background = `url(./images/${element}.png)`;
    // ficha.style.backgroundSize = "100% 100%";
    document.getElementById("pc3").appendChild(ficha);
  });
  $("#player").append("<a class='btn btn-primary' id='boton'>Pasar<a>")
}

function escogerFicha(event) {
  if (tuTurno) {
    jugador = jugador.filter((x) => {
      return x !== parseInt(event.target.id);
    });
    const ficha = fichas.find((x) => {
      return x.id == event.target.id;
    });
    agregarFichaAlTableroDelJugador(ficha);
  }
}

function agregarFichaAlTableroDelJugador(ficha) {
  if (document.getElementById("board").childNodes.length === 0) {
    const elemento = document.createElement("div");
    elemento.classList.add("ficha");
    elemento.id = ficha.id;
    elemento.style.background = `url(./images/${ficha.id}.png)`;
    elemento.style.backgroundSize = "100% 100%";
    if (ficha.valor1 === ficha.valor2) {
      elemento.style.transform = "rotate(0deg)";
      elemento.style.margin = "0 0";
    }
    document.getElementById("board").appendChild(elemento);
    valorDerecho = ficha.valor1;
    valorIzquierdo = ficha.valor2;
    $(`#player #${ficha.id}`).remove();
    document.getElementById("turnos").innerText = "Turno jugador derecha";
    setTimeout(() => {
      tuTurno = false;
      turnoPC(3);
    }, 1000);
  } else {
    if (ficha.valor1 === valorIzquierdo) {
      valorIzquierdo = ficha.valor2;
      const elemento = document.createElement("div");
      elemento.classList.add("ficha");
      elemento.id = ficha.id;
      elemento.style.background = `url(./images/${ficha.id}.png)`;
      elemento.style.backgroundSize = "100% 100%";
      if (ficha.valor1 === ficha.valor2) {
        elemento.style.transform = "rotate(0deg)";
        elemento.style.margin = "0 0";
      } else {
        elemento.style.transform = "rotate(90deg)";
      }
      document
        .getElementById("board")
        .insertBefore(elemento, document.getElementById("board").firstChild);
      $(`#player #${ficha.id}`).remove();
      document.getElementById("turnos").innerText = "Turno jugador derecha";
      if(jugador.length === 0){
        anunciaGanador(0);
      }else{
        setTimeout(() => {
          tuTurno = false;
          turnoPC(3);
        }, 1000);
      }
    } else if (ficha.valor2 === valorIzquierdo) {
      valorIzquierdo = ficha.valor1;
      const elemento = document.createElement("div");
      elemento.classList.add("ficha");
      elemento.id = ficha.id;
      elemento.style.background = `url(./images/${ficha.id}.png)`;
      elemento.style.backgroundSize = "100% 100%";
      if (ficha.valor1 === ficha.valor2) {
        elemento.style.transform = "rotate(0deg)";
        elemento.style.margin = "0 0";
      } else {
        elemento.style.transform = "rotate(270deg)";
      }
      document
        .getElementById("board")
        .insertBefore(elemento, document.getElementById("board").firstChild);
      $(`#player #${ficha.id}`).remove();
      document.getElementById("turnos").innerText = "Turno jugador derecha";
      if(jugador.length === 0){
        anunciaGanador(0);
      }else{
        setTimeout(() => {
          tuTurno = false;
          turnoPC(3);
        }, 1000);
      }
    } else if (ficha.valor1 === valorDerecho) {
      valorDerecho = ficha.valor2;
      const elemento = document.createElement("div");
      elemento.classList.add("ficha");
      elemento.id = ficha.id;
      elemento.style.background = `url(./images/${ficha.id}.png)`;
      elemento.style.backgroundSize = "100% 100%";
      if (ficha.valor1 === ficha.valor2) {
        elemento.style.transform = "rotate(0deg)";
        elemento.style.margin = "0 0";
      } else {
        elemento.style.transform = "rotate(270deg)";
      }
      document.getElementById("board").appendChild(elemento);
      $(`#player #${ficha.id}`).remove();
      document.getElementById("turnos").innerText = "Turno jugador derecha";
      if(jugador.length === 0){
        anunciaGanador(0);
      }else{
        setTimeout(() => {
          tuTurno = false;
          turnoPC(3);
        }, 1000);
      }
    } else if (ficha.valor2 === valorDerecho) {
      valorDerecho = ficha.valor1;
      const elemento = document.createElement("div");
      elemento.classList.add("ficha");
      elemento.id = ficha.id;
      elemento.style.background = `url(./images/${ficha.id}.png)`;
      elemento.style.backgroundSize = "100% 100%";
      if (ficha.valor1 === ficha.valor2) {
        elemento.style.transform = "rotate(0deg)";
        elemento.style.margin = "0 0";
      }
      document.getElementById("board").appendChild(elemento);
      $(`#player #${ficha.id}`).remove();
      document.getElementById("turnos").innerText = "Turno jugador derecha";
      if(jugador.length === 0){
        anunciaGanador(0);
      }else{
        setTimeout(() => {
          tuTurno = false;
          turnoPC(3);
        }, 1000);
      }
    }
  }
}

function crearArregloObjetos() {
  pc3.map((x) => {
    fichas.map((z) => {
      if (z.id === x) {
        objetosPC3.push(z);
      }
    });
  });
  pc2.map((x) => {
    fichas.map((z) => {
      if (z.id === x) {
        objetosPC2.push(z);
      }
    });
  });
  pc1.map((x) => {
    fichas.map((z) => {
      if (z.id === x) {
        objetosPC1.push(z);
      }
    });
  });
}

function turnoPC(idJugador) {
  if (idJugador === 3) {
    var ficha = objetosPC3.find((x) => x.valor1 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC3 = objetosPC3.filter((x) => x.id !== ficha.id);
      pruebaUno(ficha, 3);
      return 0;
    }
    ficha = objetosPC3.find((x) => x.valor2 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC3 = objetosPC3.filter((x) => x.id !== ficha.id);
      pruebaDos(ficha, 3);
      return 0;
    }
    ficha = objetosPC3.find((x) => x.valor1 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC3 = objetosPC3.filter((x) => x.id !== ficha.id);
      pruebaTres(ficha, 3);
      return 0;
    }
    ficha = objetosPC3.find((x) => x.valor2 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC3 = objetosPC3.filter((x) => x.id !== ficha.id);
      pruebaCuatro(ficha, 3);
      return 0;
    }
    if(ficha === undefined){
      alert(`Jugador derecha pasa`);
      turnoPC(1);
      return 0
    }
  } else if (idJugador === 2) {
    var ficha = objetosPC2.find((x) => x.valor1 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC2 = objetosPC2.filter((x) => x.id !== ficha.id);
      pruebaUno(ficha, 2);
      return 0;
    }
    ficha = objetosPC2.find((x) => x.valor2 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC2 = objetosPC2.filter((x) => x.id !== ficha.id);
      pruebaDos(ficha, 2);
      return 0;
    }
    ficha = objetosPC2.find((x) => x.valor1 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC2 = objetosPC2.filter((x) => x.id !== ficha.id);
      pruebaTres(ficha, 2);
      return 0;
    }
    ficha = objetosPC2.find((x) => x.valor2 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC2 = objetosPC2.filter((x) => x.id !== ficha.id);
      pruebaCuatro(ficha, 2);
      return 0;
    }
    if(ficha === undefined){
      alert(`Jugador izquierda pasa`);
      tuTurno = true
      return 0
    }
  } else if (idJugador === 1) {
    var ficha = objetosPC1.find((x) => x.valor1 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC1 = objetosPC1.filter((x) => x.id !== ficha.id);
      pruebaUno(ficha, 1);
      return 0;
    }
    ficha = objetosPC1.find((x) => x.valor2 === valorIzquierdo);
    if (ficha !== undefined) {
      objetosPC1 = objetosPC1.filter((x) => x.id !== ficha.id);
      pruebaDos(ficha, 1);
      return 0;
    }
    ficha = objetosPC1.find((x) => x.valor1 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC1 = objetosPC1.filter((x) => x.id !== ficha.id);
      pruebaTres(ficha, 1);
      return 0;
    }
    ficha = objetosPC1.find((x) => x.valor2 === valorDerecho);
    if (ficha !== undefined) {
      objetosPC1 = objetosPC1.filter((x) => x.id !== ficha.id);
      pruebaCuatro(ficha, 1);
      return 0;
    }
    if(ficha === undefined){
      turnoPC(2)
      alert(`Jugador superior pasa`);
      return 0
    }
  }
}

function pruebaUno(ficha, idJugador) {
  console.log('prueba1');
  valorIzquierdo = ficha.valor2;
  const elemento = document.createElement("div");
  elemento.classList.add("ficha");
  elemento.id = ficha.id;
  elemento.style.background = `url(./images/${ficha.id}.png)`;
  elemento.style.backgroundSize = "100% 100%";
  if (ficha.valor1 === ficha.valor2) {
    elemento.style.transform = "rotate(0deg)";
    elemento.style.margin = "0 0";
  } else {
    elemento.style.transform = "rotate(90deg)";
  }
  document
    .getElementById("board")
    .insertBefore(elemento, document.getElementById("board").firstChild);
  $(`#pc${idJugador} #${ficha.id}`).remove();
  if(idJugador === 3){
    document.getElementById("turnos").innerText = "Turno jugador superior";
  }else if(idJugador === 1){
    document.getElementById("turnos").innerText = "Turno jugador izquierda";
  }else if(idJugador === 2){    
    document.getElementById("turnos").innerText = "Es tu turno";
  }
  console.log('Jugador 1: '+$('#pc1').children().length);
  console.log('Jugador 2: '+$('#pc2').children().length);
  console.log('Jugador 3: '+$('#pc3').children().length);
  if(idJugador === 1){
    console.log($('#pc1').children().length)
    if($('#pc1').children().length === 0){
      anunciaGanador(1)
      return 0
    }
  } else 
  if(idJugador === 2){
    if($('#pc2').children().length === 0){
      anunciaGanador(2)
      return 0
    }
  } else if(idJugador === 3){
    if($('#pc3').children().length === 0){
      anunciaGanador(3)
      return 0
    }
  }
  setTimeout(() => {
    tuTurno = false;
    if (idJugador === 3) {
      turnoPC(1);
      return 0
    } else if (idJugador === 1) {
      turnoPC(2);
      return 0
    } else if (idJugador === 2) {
      tuTurno = true;
      return 0
    }
  }, 1000);
}

function pruebaDos(ficha, idJugador) {
  console.log('prueba2');
  valorIzquierdo = ficha.valor1;
  const elemento = document.createElement("div");
  elemento.classList.add("ficha");
  elemento.id = ficha.id;
  elemento.style.background = `url(./images/${ficha.id}.png)`;
  elemento.style.backgroundSize = "100% 100%";
  if (ficha.valor1 === ficha.valor2) {
    elemento.style.transform = "rotate(0deg)";
    elemento.style.margin = "0 0";
  } else {
    elemento.style.transform = "rotate(270deg)";
  }
  document
    .getElementById("board")
    .insertBefore(elemento, document.getElementById("board").firstChild);
  $(`#pc${idJugador} #${ficha.id}`).remove();
  if(idJugador === 3){
    document.getElementById("turnos").innerText = "Turno jugador superior";
  }else if(idJugador === 1){
    document.getElementById("turnos").innerText = "Turno jugador izquierda";
  }else if(idJugador === 2){
    
    document.getElementById("turnos").innerText = "Es tu turno";
  }
  console.log('Jugador 1: '+$('#pc1').children().length);
  console.log('Jugador 2: '+$('#pc2').children().length);
  console.log('Jugador 3: '+$('#pc3').children().length);
  if(idJugador === 1){
    console.log($('#pc1').children().length)
    if($('#pc1').children().length === 0){
      anunciaGanador(1)
      return 0
    }
  } else 
  if(idJugador === 2){
    if($('#pc2').children().length === 0){
      anunciaGanador(2)
      return 0
    }
  } else if(idJugador === 3){
    if($('#pc3').children().length === 0){
      anunciaGanador(3)
      return 0
    }
  }
  setTimeout(() => {
    tuTurno = false;
    if (idJugador === 3) {
      turnoPC(1);
      return 0
    } else if (idJugador === 1) {
      turnoPC(2);
      return 0
    } else if (idJugador === 2) {
      tuTurno = true;
      return 0
    }
  }, 1000);
}

function pruebaTres(ficha, idJugador) {
  console.log('prueba3');
  valorDerecho = ficha.valor2;
  const elemento = document.createElement("div");
  elemento.classList.add("ficha");
  elemento.id = ficha.id;
  elemento.style.background = `url(./images/${ficha.id}.png)`;
  elemento.style.backgroundSize = "100% 100%";
  if (ficha.valor1 === ficha.valor2) {
    elemento.style.transform = "rotate(0deg)";
    elemento.style.margin = "0 0";
  } else {
    elemento.style.transform = "rotate(270deg)";
  }
  document.getElementById("board").appendChild(elemento);
  $(`#pc${idJugador} #${ficha.id}`).remove();
  if(idJugador === 3){
    document.getElementById("turnos").innerText = "Turno jugador superior";
  }else if(idJugador === 1){
    document.getElementById("turnos").innerText = "Turno jugador izquierda";
  }else if(idJugador === 2){
    
    document.getElementById("turnos").innerText = "Es tu turno";
  }
  console.log('Jugador 1: '+$('#pc1').children().length);
  console.log('Jugador 2: '+$('#pc2').children().length);
  console.log('Jugador 3: '+$('#pc3').children().length);
  if(idJugador === 1){
    console.log($('#pc1').children().length)
    if($('#pc1').children().length === 0){
      anunciaGanador(1)
      return 0
    }
  } else 
  if(idJugador === 2){
    if($('#pc2').children().length === 0){
      anunciaGanador(2)
      return 0
    }
  } else if(idJugador === 3){
    if($('#pc3').children().length === 0){
      anunciaGanador(3)
      return 0
    }
  }
  setTimeout(() => {
    tuTurno = false;
    if (idJugador === 3) {
      turnoPC(1);
      return 0
    } else if (idJugador === 1) {
      turnoPC(2);
      return 0
    } else if (idJugador === 2) {
      tuTurno = true;
      return 0
    }
  }, 1000);
}

function pruebaCuatro(ficha, idJugador){
  console.log('prueba4');
  valorDerecho = ficha.valor1;
  const elemento = document.createElement("div");
  elemento.classList.add("ficha");
  elemento.id = ficha.id;
  elemento.style.background = `url(./images/${ficha.id}.png)`;
  elemento.style.backgroundSize = "100% 100%";
  if (ficha.valor1 === ficha.valor2) {
    elemento.style.transform = "rotate(0deg)";
    elemento.style.margin = "0 0";
  }
  document.getElementById("board").appendChild(elemento);
  $(`#pc${idJugador} #${ficha.id}`).remove();
  if(idJugador === 3){
    document.getElementById("turnos").innerText = "Turno jugador superior";
  }else if(idJugador === 1){
    document.getElementById("turnos").innerText = "Turno jugador izquierda";
  }else if(idJugador === 2){    
    document.getElementById("turnos").innerText = "Es tu turno";
  }
  console.log('Jugador 1: '+$('#pc1').children().length);
  console.log('Jugador 2: '+$('#pc2').children().length);
  console.log('Jugador 3: '+$('#pc3').children().length);
  if(idJugador === 1){
    console.log($('#pc1').children().length)
    if($('#pc1').children().length === 0){
      anunciaGanador(1)
      return 0
    }
  } else 
  if(idJugador === 2){
    if($('#pc2').children().length === 0){
      anunciaGanador(2)
      return 0
    }
  } else if(idJugador === 3){
    if($('#pc3').children().length === 0){
      anunciaGanador(3)
      return 0
    }
  }
  setTimeout(() => {
    tuTurno = false;
    if (idJugador === 3) {
      turnoPC(1);
      return 0
    } else if (idJugador === 1) {
      turnoPC(2);
      return 0
    } else if (idJugador === 2) {
      tuTurno = true;
      return 0
    }
  }, 1000);
}

function reiniciarPagina(){
  console.log("Jalando");
  location.reload();
}

function anunciaGanador(idJugador){
  if(idJugador === 0){
    Swal.fire({
      title: "Felicidades, ganaste!",
      html: '<button type="button" onclick="reiniciarPagina();" class="btn btn-primary">Jugar de nuevo</button>',
    })
  }else if (idJugador === 3){
    Swal.fire({
      title: "Gano jugador derecha",
      html: '<button type="button" onclick="reiniciarPagina();" class="btn btn-primary">Jugar de nuevo</button>',
    })
  }else if(idJugador === 2){
    Swal.fire({
      title: "Gano jugador Izquierda",
      html: '<button type="button" onclick="reiniciarPagina();" class="btn btn-primary">Jugar de nuevo</button>',
    })
  }else if(idJugador === 1){
    Swal.fire({
      title: "Gano jugador superior",
      html: '<button type="button" onclick="reiniciarPagina();" class="btn btn-primary">Jugar de nuevo</button>',
    })
  }
}