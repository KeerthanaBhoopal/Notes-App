import React from 'react'
import { FormGroup } from 'reactstrap'
class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name?props.name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div >
                <h3>Add Category</h3>
              <form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                  <div className="form-group col-md-8">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                  </div>
                  <br/>
                  </FormGroup>
                  <input className="btn btn-primary" type="submit" value="Add"/>
                  </form>  
            </div>

        )
    }

}
export default CategoryForm