import React, { useState } from 'react'
import './ComponentsStyle.css'
import ClassComponent from './ClassComponent'


 const Components = () => {

  const [showText, setShowText] = useState(false);
  const onClic = () => {
    if (showText===false){
      setShowText(true);
    }
    else {
      setShowText(false);
    }
  }

  return (
    <>
      <div className="heading"><h1>Styling Using Functional and Class Component</h1></div>
      <div className="buttons">
      </div>
      <div className="dynamic-box">
        <div>
        <button id="button1" onClick={onClic}>To see styling in Functional Component</button>

              {showText ? <div className="box1">
                                <h2>This is created using functional component</h2>
                                <p>This is done using external CSS</p>
                                <p style={{color: 'blue'}}>This is done using inline CSS</p>
                          </div> 
                        : null}
        </div>
        
        <div>
          <ClassComponent/>
        </div>
      </div>
    
    </>
  )
}

export default Components;