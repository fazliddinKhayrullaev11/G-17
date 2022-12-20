import React from "react"
import "./style.css"


 const data=[
    {id:1, title:'Fazliddin',},
    {id:2,  title:'Alves', },
    {id:3,  title:'Gerard', },
    {id:4,  title:'Ronald'},
    {id:5,  title:'Sergio', },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
    {id:6,  title:'Andres',  },
   
   
 ]


class ToDoList extends React.Component{
         constructor(props){
            super(props)
            this.state={
                tasks:data,
            }
         }


    render(){


        return(
   <div className="container">

    <div className="wrapper">

        <div className="navbar">
            <h1 className="navbar-count"> 4 Tasks</h1>
            <h1 className="navbar-count-remain"> 4 Remain</h1>
        </div>
        <div className="tasks">
         <ul className="tasks-items">
          
            {
                this.state.tasks.map((value)=>{
                    return(
                        <li className="tasks-item">
                        <label >
                        <input type="checkbox" className="checkbox"/>
                        <h3 className="tasks_title">Something</h3>
                        </label>
                        <button className="del-button">Delete</button>
                        
        
                    </li>

                    )
                })
            }
         </ul>
        </div>
        <div className="footer">
          <input type="text" className="add-input" />
          <button className="add-b">Add</button>
        </div>
       
    </div>
   </div>
        );
    }

}
export default ToDoList