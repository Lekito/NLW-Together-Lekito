import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

/* a propriedade exact serva para somente deixar exatamente a pagina unica. Ou seja, 
 se não tivesse exact dentro do 'Route path="/" ' quando fosse utilizar path abaixo apareciria as duas telas. Outr a forma de utilizar esse parametro é só escrever 'exact' , pois
 o true já fica implicito. */
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
