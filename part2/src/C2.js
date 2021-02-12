import { useContext } from 'react';
import { SomeContext } from './MyContext';
const C1 = () => {

  const pizza = useContext(SomeContext);
  return (
    <div onClick={()=>pizza.setState({myVar:'called from c2'})}>C2: {pizza.myVar}</div>
  );
};

export default C1;
