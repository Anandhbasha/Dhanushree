// // import Button from './Button'
// // function App(){
// //   const btnValues = ["Click","Login","Delete","Update","Submit"]
// //   const persons = [
// //     {personName:"xyz",
// //       age:30
// //     },{
// //       personName:"abc",
// //       age:40
// //     }
// //   ]
// //   return(
// //     <div className="App">
// //       {/* {btnValues.map((btn)=>(
// //         <button>{btn}</button>
// //       ))} */}
// //       {/* <button>Login</button>
// //       <button>Delete</button>
// //       <button>Update</button>
// //       <button>Submit</button> */}
// //       {btnValues.map((btnValues)=>(
// //         <Button values={btnValues} />
// //       ))}
// //       {persons.map((item)=>(
// //         <Button {...item} />
// //       ))}


      
// //     </div>
// //   )
// // }

// // export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,setCount] = useState(0)
//   let [bg,setBg] = useState("dark")
//   const handleAdd = ()=>{
//     setCount(++count)
//     console.log(count);
    
//   }
//   const handlebg = ()=>{
//     setBg(bg==="light"?"dark":"light")
//   }


//   useEffect(()=>{
//     console.log("UseEffect");
    
//   },[count])
//   return (
//     <div className='App'>
//       <button onClick={handleAdd}>{count}</button>
//       <button onClick={handlebg} style={{backgroundColor:bg==="light"?"black":"white",color:bg==="light"?"white":"black"}}>{bg}</button>
//     </div>
//   )
// }

// export default App














//Router DOM
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProduct from './Pages/AllProduct/AllProduct'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AllProduct/>} />
          <Route path='/mens' element={<Mens/>} />
          <Route path='/womens' element={<Womens/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App







