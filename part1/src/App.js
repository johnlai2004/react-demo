import { SomeProvider } from './MyContext';
import C1 from './C1';

function App() {
  return (
  <SomeProvider value={{myVar:"hello"}}>
    <C1 />
  </SomeProvider>
  );
}

export default App;
