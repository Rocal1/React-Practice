import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header 
        titulo='Cotizador de Prestamos'
      />
      

      <div className='container'>
      <Formulario/>
      </div>

    </Fragment>
  );
}

export default App;
