import { useContext } from 'react';
import { SomeContext } from './MyContext';
const C1 = () => {

  const pizza = useContext(SomeContext);
  return (
    <div>C2: {pizza.myVar}</div>
  );
};

export default C1;
