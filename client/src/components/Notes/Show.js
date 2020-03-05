import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import { Table} from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css'

class NotesShow extends React.Component{
constructor(){
    super()
        this.state={
            note:[]
    }
}
componentDidMount(){
    const id=this.props.match.params.id
    // axios.get(`http://localhost:3035/notes/${id}`, {
        axios.get(`/notes/${id}`, {
        headers: {
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then(response=>{
        const note=response.data
        //console.log(note)
        this.setState({note})
    })

}
    render(){
        console.log(this.state.note.category?this.state.note.category.name:"null", 'show1')
        return(
            // <Container>
            <div className="container">
                <br/>
                 <h2>Notes Show</h2>
                 <Table className="table table-hover">
                   <thead>
                       <tr key={1}>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                       </tr>
                   </thead>
                   <tbody>
                       {/* {
                           this.state.note.map((n,i)=>{
                               return (
                                <tr>
                                    <td>{i}</td>
                                    <td>{n.title}</td>
                                    <td>{n.description}</td>
                                    {/* <td>{this.state.note.category}</td> */}
                                {/* </tr>
                               )
                            
                           })
                       } */}
                           <tr>
                               <td>1</td>
                               <td>{this.state.note.title}</td>
                               <td>{this.state.note.description}</td>
                               <td>{this.state.note.category?this.state.note.category.name:"null"}</td>
                           </tr>
                       
                   </tbody>
                   </Table>
              {/*  <h1>Notes Show</h1>
                <p>{this.state.note.title}--{this.state.note.description}</p>
        <Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
              <Link to="/notes">back</Link>*/}
              <Link className="badge badge-pill badge-primary" to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link>
              <Link className="badge badge-pill badge-primary" to="/notes">back</Link>
         </div>
        
        )
    }

}
export default NotesShow