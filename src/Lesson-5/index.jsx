import { Component } from "react";
import people from "../Lesson-5/data";
import "../Lesson-5/style.css";
import { BiTrash ,BiPencil,BiTask,BiBookAdd} from "react-icons/bi";




class ToDoList extends Component{
   constructor(props){
    super(props)
    this.state={
        name:'',
        surname:'',
        status:'',
        nation:'',
        hobby:'',
        search:'id',
       people:data,
        active:null,
    }
   }


    render(){

 let onSearch=(e)=>{
    const{value}=e.target;
    let fil=people.filter((item)=>
    `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
  );
  this.setState({
    people:fil
  })

 };
 let onSelect=(e)=>{
    this.setState({
        search:e.target.value
    })

 };
  let onChange =(e)=>{
    const{name,value}=e.target;
    this.setState({
        [name]:value
    })

  };
  let onAdd=()=>{
    let user={

        
        id:Date.now(),
        name:this.state.name,
        surname:this.state.surname,
        status:this.state.status,
        nation:this.state.nation,
        hobby:this.state.hobby,
    }
       
    
    this.setState({
        data:[user, ...this.state.people],
        name:'',
        surname:'',
        status:'',
        nation:'',
        hobby:'',
    })

  };
  let onDelete=(id)=>{
    let del=this.state.data.filter((value)=>value.id!==id);
    this.setState({
        data:del

    })

  };
  let onEdit=({id,name,surname,status,nation,hobby},IsSave)=>{

    let res=this.state.data.map((value)=>value.id=== this.state.active?.id?
    {
...value,
name:this.state.name,
surname:this.state.surname,
status:this.state.status,
nation:this.state.nation,
hobby:this.state.hobby,

    }:value
    
    )
    if(IsSave){
        this.setState({
            active:null,
            data:res,
        })

    } else {
        this.setState({
            active:{id,name,surname,status,nation,hobby},
            name:name,
            surname:surname,
            status:status,
            nation:nation,
            hobby:hobby,
        })
    }

  }

        return(
            <div className="main-c">
                            <div className="container">

<br />
 <br />
 <br />
 <br />
 <div className="navbars">
 <input className="search-inp" onChange={onSearch} type="text"  placeholder="search"/> 
 <select className="sel-opt" onChange={onSelect} name="" id="">
    <option value="id">ID</option>
    <option value="name">Name</option>
    <option value="surname">Surame</option>
    <option value="status">Status</option>
    <option value="nation">Nation</option>
    <option value="hobby">Hobby</option>
    
 </select>
 </div>

 
 <table  className="table" >
    <thead>
        <tr>
            <td><h1>ID</h1></td>
            <td><h1>Name</h1></td>
            <td><h1>Surname</h1></td>
            <td><h1>Status</h1></td>
            <td><h1>Nation</h1></td>
            <td><h1>Hobby</h1></td>
            <td><h1>Delete</h1></td>
            <td><h1>Edit</h1></td>
            
        </tr>
    </thead>
    <tbody>
    {
        this.state.people.length?
    this.state.data.map(({id,name,surname,status,nation,hobby})=>{
        return(
            <tr key={id}>
            <td>{id}</td>
            <td>{
                 this.state.active?.id===id? <input value={this.state.name} onChange={onChange}  name="name" type="text" />:
                 (
                    name
                 )
                
                
                }</td>
            <td>{
                  this.state.active?.id===id? <input value={this.state.surname} onChange={onChange}  name="surname" type="text" />:
                  (
                     surname
                  )
                 
                
                }</td>
            <td>{
                  this.state.active?.id===id? <input value={this.state.status} onChange={onChange}  name="status" type="text" />:
                  (
                     status
                  )
                 
                }</td>
            <td>{
                  this.state.active?.id===id? <input value={this.state.nation} onChange={onChange}  name="nation" type="text" />:
                  (
                     nation
                  )
                 
                }</td>
            <td>{
                  this.state.active?.id===id? <input value={this.state.hobby} onChange={onChange}  name="hobby" type="text" />:
                  (
                     hobby
                  )
                 
                }</td>
                <td><div onClick={()=>onDelete(id)}><BiTrash className="del-btn" /></div></td>
            {/* <td><button onClick={()=>onDelete(id)}>delete</button></td> */}
            <td><div onClick={()=>onEdit({id,name,surname,status,nation,hobby}, this.state.active?.id===id)}>
                 {
                    this.state.active?.id===id?   <BiTask className="save-btn"  />   :  <BiPencil className="edit-btn"  />
                 }
                
                
                </div></td>
            
            </tr>
        
        )
    }) : <tr>
        <th colSpan={8}>No Data</th>
    </tr>
 }
    </tbody>

 </table>
 <div className="footers">
 <input className="name-inp"  value={this.state.name} onChange={onChange} name="name" type="text" placeholder="name" />
 <input className="surname-inp" value={this.state.surname} onChange={onChange} name="surname" type="text" placeholder="surname" />
 <input className="status-inp" value={this.state.status} onChange={onChange} name="status" type="text" placeholder="status" />
 <input className="nation-inp" value={this.state.nation} onChange={onChange} name="nation" type="text" placeholder="nation" />
 <input className="hobby-inp" value={this.state.hobby} onChange={onChange} name="hobby" type="text" placeholder="hobby" />
 <span onClick={onAdd}> < BiBookAdd className="add-btn"/> </span>
 </div>




 </div>
            </div>



        
        )
    }
}
export default ToDoList


//CRUD  C-create, R-read , U- update , D-delete,