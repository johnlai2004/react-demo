import { useState } from 'react';
import { SomeProvider } from './MyContext';
import C1 from './C1';

function App() {

  const [ someObject, setState ] = useState({myVar:"hello"});
  
  return (
  <SomeProvider value={{...someObject,setState:setState}}>
    <C1 />
  </SomeProvider>
  );
}

export default App;
