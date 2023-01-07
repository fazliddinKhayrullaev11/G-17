import React from "react";
import {Button,ActiveButton,Rotate} from './stateStyle'
 import{ThemeProvider,createGlobalStyle} from 'styled-components'



  const GlobalStyle=createGlobalStyle`
   body{
    background:${(props)=>props.theme.bg};
    color:${(props)=>props.theme.cl};

   }
  
  
  
  `




class StyledComp extends React.Component{
   state={
    light:false,
   }

    render(){

  const theme={
bg:this.state.light ? 'white' :'black',
cl:this.state.light ? 'black' :'white',
  }

        return(

            <ThemeProvider theme={theme}>
                <GlobalStyle/>
             <h1>Theme </h1>
              <Button>Click me</Button>
              <ActiveButton>Active Button</ActiveButton>
              <Rotate>  Rotate Me</Rotate>
              <button onClick={()=>this.setState({light:!this.state.light})}>change theme</button>
            </ThemeProvider>
        )
    }



}
export default StyledComp

//Styled-Components
// npm install styled-components
// create a new js file
//import styled from 'styled-components'
// function call
//common css
//