import styled, { css, keyframes } from 'styled-components'





 const rotate=keyframes`
 from{
    transform:rotate(0deg);
 }
 to{

transform:rotate(360deg);

 }
 
 `




 export let Container=styled.div`
 margin: 20px;


 
 `

 let common =css`
 width: 200px;

:active{
   transform:scale(0.95)
}

display: flex;
justify-content:center;
align-items:center;
border-radius: 5px;
cursor: pointer;
background: coral;
font-size: 20px;
font-family:Arial, Helvetica, sans-serif;
color:white;
height: 40px;
text-decoration:none;
outline:none;
border:1px solid white;
margin: 10px;


 
 
 
 `
 export const Button =styled.button`
  ${common}
 `
 export let ActiveButton=styled(Button)`
 
  height: 55px;
 
 
 `;


export let Rotate=styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 200px;
height: 200px;
border-radius :50%;
animation:${rotate} 2s linear infinite;
border:1px solid coral;



`





