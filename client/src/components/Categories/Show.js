import React from 'react'
// import axios from 'axios'
import axios from 'axios'
import {Link} from 'react-router-dom'

class CategoryShow extends React.Component{
constructor(){
    super()
        this.state={
            category:{}
    }
}
componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`http://localhost:3035/category/${id}`, {
        headers: {
            'x-auth': localStorage.getItem('authToken')
        }
    })
    .then(response=>{
        const category=response.data
        this.setState({category})
    })

}
    render(){
        return(
            <div>
                <h1>Category Show</h1>
               
                <div class="shadow-none p-3 mb-5 bg-light rounded">
                <p>{this.state.category.name}</p>
                </div>
                <Link class="badge badge-pill badge-primary" to={`/category/edit/${this.props.match.params.id}`}>Edit </Link>

                <Link class="badge badge-pill badge-primary" to="/category">back</Link>
         </div>
        )
    }

}
export default CategoryShow