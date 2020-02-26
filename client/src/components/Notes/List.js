import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table, Button } from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'
class NotesList extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
        }
    }
    componentDidMount(){

        axios.get('http://localhost:3035/notes', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const notes=response.data
            this.setState({notes})
            console.log(notes)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleRemove=(id)=>{
        axios.delete(`http://localhost:3035/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            this.setState((prevState)=>({
                notes:prevState.notes.filter(note=>note._id!==response.data._id)
               
            }))

        })
    }
    
    render(){
       
        return(
            // <Container>
            <div className="col-md-8">
                <h1>Listing notes-{this.state.notes.length}</h1>
               <Table className="table table-hover">
                   <thead>
                       <th>Sl.No</th>
                       <th>Title</th>
                       <th>Description</th>
                       <th>Category</th>
                       <th>Detail</th>
                       <th>Remove</th>
                   </thead>
                   <tbody>
                   {this.state.notes.map((note,i)=>{
                       console.log(note.category.name, 'note')
                       return (
                           <tr>
                               <td>{i+1}</td>
                               <td>{note.title}</td>
                               <td>{note.description}</td>
                               <td>{note.category.name}</td>
                               <td><Link to={`/notes/${note._id}`}><Button color="success">Show</Button>{' '}</Link></td>
                               <td> <button className="btn btn-danger" onClick={()=>{this.handleRemove(note._id)}}>Remove</button>{' '}</td>
                           </tr>
                       )
                   })}
                   </tbody>
               </Table>
               {/*
                <ul>
                    {this.state.notes.map(note=>{
                        return <li key={note._id}>{note.title}
                        <Link to={`/notes/${note._id}`}>Show</Link>
                        <button onClick={()=>{this.handleRemove(note._id)}}>Remove</button>
                    
                        </li>
                    })}
                </ul>
                */}
                <br/>
                <Link to="notes/new">Add Notes</Link>
            </div>
             // </Container> 
        )
    }

}
export default NotesList