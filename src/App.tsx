import Programers from './component/Programers'
import Companies from './component/Companies'

import './App.css'

function App() {
 

  return (
    <>
    <div className='app'>
    <div className='dd'>
    <Companies   ComName='A' EmpCo={100} yerEx={30} Serv='clen' Amont={50}/>
     <Programers name='ahmad' langProgr='html' yerEx={6} comp='a'/>
   
     </div>
     <div className='dd'>
    <Companies   ComName='B' EmpCo={50} yerEx={35} Serv='TECH' Amont={5000}/>
     <Programers name='MHMAD' langProgr='CSS' yerEx={7} comp='B'/>

     </div>
     <div className='dd' >
    <Companies   ComName='C' EmpCo={20000} yerEx={100} Serv='FOOD' Amont={50}/>
     <Programers name='KALD' langProgr='JS' yerEx={8} comp='C'/>
     
     </div>
     <div className='dd' >
    <Companies   ComName='D' EmpCo={500} yerEx={70} Serv='FIX' Amont={50} />
     <Programers name='SAD' langProgr='C++' yerEx={1} comp='D'/>
    
     </div>
     </div>
    </>
  )
}

export default App
