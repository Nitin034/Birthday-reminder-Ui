import React,{ useState } from 'react'
import  data  from './data';
 

function List() {
  const [people, setPeople] = useState(data);
  return (
    <>
    {
        people.map((person)=>{
            const{id, name, msg,image} = person;
            return(
                <article key={id} className='chat-list'>
                <img className='user-img' src={image} alt='/'></img>
                <a className='user-name'>{name}</a>
    <a className='user-msg'><ion-icon  className="tik" name="checkmark-done-outline"></ion-icon>{msg}</a>
    <div className='crous'> 
    <button style={{borderRadius:"50%" , padding:"2px" , background:"red" , border:"none"}} onClick={()=> setPeople([])}><ion-icon style={{fontWeight:"800"}} name="close-outline"></ion-icon></button>
    </div>
                </article>
            )

        })
    }

     
     
    </>
  )
}

export default List
