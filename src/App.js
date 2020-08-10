import React, { useState, useEffect } from 'react';
import {Apicall} from './Apicall/Apicall'
import Banner from './components/banner';



const App = () =>{

  const [currentQuote, setCurrentQuote] = useState("Say my name.")
  const [author, setAuthor] = useState("- Hesinberg")

  
  const callapi = () =>(
    Apicall().then(response => {

      setCurrentQuote(response[0].quote)
      setAuthor(response[0].author)

    })
  )

  useEffect(() => {
     setInterval(() => {
    callapi();
  }, 10000);
  },[]);


  return(
    <div>
      <Banner quote={currentQuote} Author={author} nextquote={callapi}/>
      </div>
    
    
      )
}

export default App;
