import React from 'react'
import axios from 'axios'
import { FormGroup } from 'reactstrap'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //this.setState({submitted:true})
        const formData = {
            email: this.state.email,
            password: this.state.password,
            submitted:false
        }
        axios.post('http://localhost:3035/users/login', formData)
            .then(response => {
                if(response.data.error) {
                    alert(response.data.error)
                } else {
                    console.log(response.data)
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    this.props.history.push('/')
                    window.location.reload()
                }
            })
            .catch(err => alert(err))
    }

    render() {
        const {password, email, submitted} = this.state
        return (
            
            <div className="container col-md-6 col-md-offset-3">
                <br/>
                <h2> Login with us </h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                    <div className="form-group col-md-7">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} id="email" aria-describedby="emailHelp" />
                    {submitted && !email &&
                        <div className="help-block">Email is required </div>
                        }
                    </div>
                   
                    <br/>
                    
                    <div className="form-group col-md-7">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" />
                    {submitted && !password && 
                    <div className="help-block">password is required </div>
                    }
                    </div>
                    <br/>
                    </FormGroup>
                    <div className="form-group">
                        <input type="submit" class="btn btn-primary" />
                    </div>
                   
                </form>
            </div>
        )
    }
}


export default Login