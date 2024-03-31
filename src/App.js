// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {

  // const [increase,setIncrease] = useState(0);
  const count = useSelector(state=>state.count);
  const id = useSelector((state)=>state.id);
  const password = useSelector((state)=>state.password);
  const dispatch= useDispatch();

  const add=()=>{
    dispatch({  type:"INCREMENT", payload:{num:5}  });
  }

  const decrease=()=>{
    dispatch({type:"DECREMENT",payload:{num:5}});
  }
  const login=()=>{
    dispatch({
      type: "LOGIN",
      payload:{id:"LEE SANH HUN", password:"*****"}
    })
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={add}>증가</button>
      <button onClick={decrease}>감소</button>

      <h1>{id}님, 환영합니다. {password}</h1>
      <button onClick={login}>로그인</button>
      <hr />
      <Box/>
    </div>
  );
}

export default App;
