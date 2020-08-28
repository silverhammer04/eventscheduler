import React from 'react';

export default class UpdateEvent extends React.Component {
    state = {
        title: this.props.event.title,
        date: this.props.event.date
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/scheduler/${this.props.event._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state) 
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(this.props.toggleForm)
            .then(this.props.refresh)            
    }
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="title"
                    type="text"
                    placeholder="Event Title"
                    value={this.state.title}
                    onChange={this.handleChange} 
                    required/>
                <input name="date"
                    type="text"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.handleChange} />
                                
                <input type="submit"
                    value="Update Event"/>
            </form>           
        ) 
    }
}
