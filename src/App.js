import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'
import { Fragment , useState } from 'react';
import Spinner from './componentes/Spinner';

function App() {
  //Definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false)

  let componente;
  
  if(cargando===true){
    componente = <Spinner/>

  } else if(total === 0){
    componente = <Mensaje/>
    
  }else{
    componente = <Resultado
                plazo={plazo}
                cantidad={cantidad}
                total={total}
                />
  }

  return (
    <Fragment>
      <Header 
        titulo='Cotizador de Prestamos'
      />
      

    <div className='container'>
      <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        />

      <div className= "mensajes">
        {componente}
      </div>
      
    </div>

    </Fragment>
  );
}

export default App;
