import React, { Component } from 'react'

 class ClassClick extends Component {

    state = {
        message : "Welcome"
    }


        clickHandler = () => {
                this.setState({ 
                    message : "Goodbye user, Thank You :)"
                })
        }

  render() {
    return (
      <>
      <h1>{this.state.message}</h1>
        <button onClick={()=>this.clickHandler()}>Click Me</button>

      </>
    )
  }
}

export default ClassClick;