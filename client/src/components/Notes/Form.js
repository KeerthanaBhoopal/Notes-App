import React from 'react'
import axios from '../../config/axios'
import './Note.css'
import { FormGroup } from 'reactstrap'
//import {Button,Form,FormGroup,Label,Input} from 'reactstrap'
//import {FacebookLoginButton} from 'react-social-login-buttons'
class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            description:props.description?props.description:'',
            categories:[],
            category:props.category?props.category:'',
            noteImage:props.noteImage?props.noteImage:''
        }
        }
        componentDidMount(){
            console.log('component Did mount')
            // axios.get('http://localhost:3035/category', {
                axios.get('/category', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then(response=>{
                const categories=response.data
                console.log(categories)

                this.setState({categories})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            category:this.state.category,
        }
        // const form=new FormData()
        // for(let key in formData){
        //     form.append(key,formData[key])
        // }
        // form.append('noteImage',this.state.noteImage)
         console.log(formData)

        this.props.handleSubmit(formData)
    }
    handleOnFile=(e)=>{
        console.log(e.target.files)
        this.setState({
            noteImage:e.target.files[0]//?
        })

    }
        render(){
            console.log('render form')
            return(
                <div className=" form-group col-md-4">
                {/* <form  onSubmit={this.handleSubmit} enctype="multipart/form-data" className="Note"> */}
                <form  onSubmit={this.handleSubmit} >
                    <div>
                    <FormGroup row>
                    {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={this.state.title} name="title" onChange={this.handleChange} id="title"/><br/>
                    {/* </div> */}
                    </FormGroup>
                    <FormGroup row>
                    {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} id="description"/><br/>
                  {/* <input type="file" name="noteimage" id="noteimage" onChange={this.handleOnFile}/> */}
                  {/* </div> */}
                  </FormGroup>
                  <FormGroup row>
                  {/* <div className="form-group col-md-5"> */}
                    <label htmlFor="category">Category</label>
                    <select name="category" className="form-control" value={this.state.category} onChange={this.handleChange}>
                    <option value="">select</option>   
                    {this.state.categories.map((category)=>{
                        return(
                            <option key={category._id} value={category._id}>{category.name}</option>
                        )
                    })
                }
                </select>
                {/* </div> */}
                <br/><br/><br/>
                <input className="btn btn-primary" type="submit"/>
                </FormGroup>
               
                </div>
                
                </form>
                </div>
            )
        }
    }
export default NotesForm