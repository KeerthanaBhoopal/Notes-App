import React from 'react'
import axios from 'axios'
import {FormGroup} from 'reactstrap'

class Register extends React.Component {
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
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3035/users/register', formData)
            .then(response => {
                if(response.data.errors) {
                    alert(response.data.message)
                } else {
                    this.props.history.push('/users/login')
                }
            })
            .catch(err => alert(err))
    }

    render() {
        return (
            <div className="container col-md-7 col-md-offset-3">
                <br/>
                <h2> Register with us </h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <div className="form-group col-md-7">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange} id="username" />
                    </div>
                    <br/>
                    <div className="form-group col-md-7">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} id="email" />
                    </div>
                    <br/>
                    <div className="form-group col-md-7">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} id="password" />
                    </div>
                    <br/>
                    
                    </FormGroup>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        )
    }
}


export default Register