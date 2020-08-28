import React from 'react';

export default class NewEvent extends React.Component {
    state = {
        title: "",
        date: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/scheduler`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state) 
        }) .then(response => response.json())
            .then(data => console.log(data))
            .then(() => {
                this.setState({
                    title: "",
                    date: ""
                })
            }) .then(this.props.refresh)            
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
                    value="Add Event"/>
            </form>           
        ) 
    }
}
