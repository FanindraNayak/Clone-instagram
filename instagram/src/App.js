import './styles/App.scss';
import Navigation from './components/Navigation/Navigation';
import Cards from './components/Cards/Cards'
import Sidebar from './components/Cards/Sidebar'

import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider >
    <div className="App">    
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
    </ChakraProvider> 
  );
}

export default App;
