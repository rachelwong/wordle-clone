import { GameProvider } from './context/WordleContext';
import { Container } from 'react-bootstrap'
import Wordle from './components/Wordle'
function App() {

  return (
    <GameProvider>
      <Container className='text-center'>
        <Wordle />
      </Container>
    </GameProvider>
  );
}

export default App;