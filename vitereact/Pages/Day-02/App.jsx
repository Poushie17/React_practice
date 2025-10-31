import React from 'react';

function F1(){
  const name="poushie"
  return(
    <h1> Hi {name}</h1>
  )
}

function F2(){
  const age=20
  return(
    <p>Age: {age}</p>
  )
}

function App(){
  return(
    <div>
     <F1/>
     <F2/>

    </div>
  )
}
export default App;
