import './App.css';
import { MisRutas } from './router/MisRutas';

function App() {
  return (

    <div className='layout'>
      <MisRutas/>
    </div>    

    /* COMENTADO PORQUE SE USO OTRA OPCION
    // utilizamos un un fragmento vacio para llamar a las rutas
    <>
      <MisRutas/>
    </>
    */

  );
}

export default App;
