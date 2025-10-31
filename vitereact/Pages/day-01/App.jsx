import React from 'react';

function App() {
  const user = {
    name: "Poushie",
    age: 21,
    hobby: "coding",
  };

 
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Hello, {user.name}</p>
      <p>You are {user.age} years ur hobby {user.hobby}.</p>
     
    </div>
  );
}

export default App;
