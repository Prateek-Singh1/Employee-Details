    import React, { Component } from 'react'
    import './ComponentsStyle.css'
    
 class ClassComponent extends Component {
    state = {
        divcontainer:false,
    }
      render() 
        {
            var change = () => {
                this.setState({divcontainer:!this.state.divcontainer});
            }
            const showText=this.state.divcontainer;
            
        return (
          <>   
           <button id='button2' onClick={change} >To see styling in Class Component</button>
           {
               showText &&( <div className='box2'>
                            <h2>This is created using class component</h2>
                            <p>This is done using external CSS</p>
                            <p style={{color: 'blue'}}>This is done using inline CSS</p>
                            </div>)
           }
          </>
        )
      }
    }
    

    export default ClassComponent;