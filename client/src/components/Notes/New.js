import React from 'react'
import axios from '../../config/axios'
import NoteForm from './Form'

class NoteNew extends React.Component{
    handleSubmit=(formData)=>{
        
        // axios.post(`http://localhost:3035/notes`, formData, {
            axios.post(`/notes`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                this.props.history.push('/notes')
            }
        })
    }
    render(){
        return(
            <div className="container">
                <br/>
                <h3>Add Note</h3>
                <NoteForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default NoteNew