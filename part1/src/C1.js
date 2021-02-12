import { useContext } from 'react';
import { SomeContext } from './MyContext';
import C2 from './C2';

const C1 = () => {

  const blah = useContext(SomeContext);
  return (
    <div>
      <h1>C1: {blah.myVar}</h1>
      <C2 />
    </div>
  );
};

export default C1;
