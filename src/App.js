import react from 'react'
import {useState , useEffect} from 'react'
const initialstate =["","","","","","","","",""]

function App() {
const [gamestate,setGamestate]=useState(initialstate);
const [isXchance,setIsXchance]=useState(true);

const dostate=(index)=>{

   let strings=Array.from(gamestate);
   if(strings[index]==""){
   strings[index]= isXchance ? "X" : "0";
   }

   setIsXchance(!isXchance);
   setGamestate(strings);
  }

  const clr=()=>{
   
    setGamestate(initialstate)
    setIsXchance(true)
  }

  useEffect(() => {
   const winner=checkwinner();
   if(winner){
     alert(`Congo ${winner} has won the game`)
     setGamestate(initialstate);
     setIsXchance(true)
   }
   else if(!winner && !initialstate){
    alert("THE GAME IS DRAWN")
     setGamestate(initialstate);
     setIsXchance(true)
   }
  }, [gamestate])
  
  const checkwinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  console.log('Class: App, Function: checkWinner ==', gamestate[0], gamestate[1], gamestate[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gamestate[a] && gamestate[a] === gamestate[b] && gamestate[a] === gamestate[c]) {
          return gamestate[a];
      }
  }
  return null;
  }

  return (
    <>
   <div>
     <h1 id='top'>Tic Tac Toe</h1>
   </div>
   <div className='div'>
     
     <div className='div1'>
       <div className='div11' onClick={()=>dostate(0)}>
        <p className='div12'>{gamestate[0]}</p>
       </div>
       <div id='div3' className='div11' onClick={()=>dostate(1)}>
       <p className='div12'>{gamestate[1]}</p>
       </div>
       <div className='div11' onClick={()=>dostate(2)}>
       <p className='div12'>{gamestate[2]}</p>
       </div>
     </div>
     <div className='div1'>
       <div className='div11' onClick={()=>dostate(3)}>
       <p className='div12'>{gamestate[3]}</p>
       </div>
       <div id='div2' className='div11' onClick={()=>dostate(4)}>
       <p className='div12'>{gamestate[4]}</p>
       </div>
       <div className='div11' onClick={()=>dostate(5)}>
       <p className='div12'>{gamestate[5]}</p>
       </div>
     </div>

     <div className='div1'>
       <div className='div111' onClick={()=>dostate(6)}>
       <p className='div12'>{gamestate[6]}</p>
       </div>
       <div id='div1' className='div111' onClick={()=>dostate(7)}>
       <p className='div12'>{gamestate[7]}</p>
       </div>
       <div className='div111' onClick={()=>dostate(8)}>
       <p className='div12'>{gamestate[8]}</p>
       </div>
     </div>
     <div>
       <button className='but' onClick={clr}>
         <p id='butp'>Clear Game</p>
       </button>
     </div>


   </div>
   </>
  );
}

export default App;
