const App= () => {
  const persona={
    nombre:"Shinji",
    Apellido:"Ikari",
    Edad:14,
    
    direccion:{
      Calle:"Geo-Fornter",
      numExt:88,
      numIn:"",
      ciudad:"Tokyo 3",
    }
  };

const contactoPersona={
  telefono:"2871823962",
  email:"isaacj259@gmail.com",
  web:"www.NERV-c137.com",
};

const infoPersona = {...persona, ...contactoPersona, empresa: "NERV"};
infoPersona.apodo="Piloto 01"

//console.table(infoPersona);


  const {Edad, nombre, Apellido}= persona;
  const {Calle, numExt, ciudad}= persona.direccion;
  const humanos=["Gendo", "Yui", "Kaworu", "Rei"];
  const [padre, madre, hermano, hermana]=humanos;
  const mascotas = ["Santa's helper", "Snow Ball"];

  const familia =[...humanos, ...mascotas, "Ikari"];
  console.log(familia)


  return(
  <div className="App">
    {/*ECMAScript 6*/}
    <h3>{`Mi nombre es ${nombre} ${Apellido}, tengo ${Edad} años y vivo en ${Calle} número ${numExt}, ${ciudad}`}</h3>
   <br />
   {"Mi familia lo conforman: "}
   <ul>
     <li>{`Mi padre: ${padre}`}</li>
     <li>{`Mi madre: ${madre}`}</li>
     <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>

   </ul>
  </div>
);

}

export default App;