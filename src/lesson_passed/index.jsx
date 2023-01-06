import React from "react";
import {Container,Child,Child1,Box} from './stateStyle'




class StyledComp extends React.Component{
 

    render(){



        return(

            <Container>
              <Child>Hi, I'm Fazliddin Khayrullaev</Child>
              <Child1>Meeeeeesssiiiiii</Child1>
              <Box br='50%' type='large'>Large</Box>
              <Box br='20px' type='medium'>Medium</Box>
              <Box  br='35px' type='small'>Small</Box>
              
            </Container>
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