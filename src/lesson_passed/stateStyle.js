import styled, { css } from 'styled-components'


 export const Container=styled('div')`

width: 100%;
height: 100vh;
display: flex;

background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);


`
let common =css`
font-size:55px;


`
export let Child=styled.h1`
${common}

font-family: cursive;





`
const getSize=(props)=>{
    switch(props.type){
        case 'large':
            return '200px';
        case 'medium':
            return '150px';
        case 'small':
            return '100px';
            default:
                return '100px'
    }
}
export let Box =styled.div`
${common}
 border-radius:${(props)=>props.br};
width:${getSize};
height:${getSize};
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,43,1) 50%, rgba(252,176,69,1) 100%);

`
export let Child1=styled.h1`
${common}
font-family: cursive;






`






