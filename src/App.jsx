import './App.css'
import Users from './Users';
import Count from './count';

function App() {

  function xx()
  {
    alert('OKK');
  }

  let yy=()=>
  {
    alert('click2');
  }

  let zz=(pp)=>
  {
    alert(pp*5);
  }
  return (
    <>
      <Users></Users>
      <Count></Count>
      <h4>Vite + React</h4>
      <button onClick={xx}>Click</button>
      <button onClick={yy}>Click2</button>
      <button onClick={()=>alert('click3')}>Click3</button>
      <button onClick={()=>zz(5)}>Click4</button>
    </>
  )
}

export default App
