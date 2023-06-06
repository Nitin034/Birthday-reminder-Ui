import React, { useState } from 'react'
import List from './List'
import  data  from './data';
 
 function App() {
    const [people, setPeople] = useState(data);
   return (
    <main> 
    <div className='chat-windo'>
    <div className='had'>Today {people.length} Birthady</div>
     <List people={people}/>
     <div className='buton'> 
     <button className='butonl'  onClick={()=> setPeople([])}> Clear chat</button>
     </div>
    </div>
    </main>
   )
 }
 
 export default App
 