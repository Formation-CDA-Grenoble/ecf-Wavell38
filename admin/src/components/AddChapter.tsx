import React from 'react'
import Axios from 'axios'
import { URL } from '../constante'

export default class AddChapter extends React.Component<any,any,any> {

	public constructor(props:any) {
		super(props)

		this.state = {
			title: "",
			text: ""
		}
	}

	private handleChange = (event:any) => {
        const name:string = event.target.name
        const value:string  = event.target.value
		this.setState({
		    [name]: value
		})
	}
	

	private handleSubmit = (event:any) => {
    	event.preventDefault()

    	this.addChapter()
  	}

  	private addChapter = () => {
  		let data:any = {
  			...this.props.book,
    		chapters: [
                ...this.props.book.chapters,
                {
                    title: this.state.title,
                    text: this.state.text
                }
            ]
  		}
          console.log(data)

  		Axios.put(URL+`/${this.props.book._id}`, data).then(res => {
  			console.log(res.data)
            this.props.goTo('listBooks', res.data)
  		}).catch(err => {
  			console.log(err)
  		})
  	}


	render() {
		return(
			<form onSubmit={ this.handleSubmit }>
        		<label>
          			Titre :
          			<input 
                        type="text" 
                        value={ this.state.title } 
                        onChange={ this.handleChange } 
                        placeholder="Un titre..." 
                        name="title"/>
        		</label>

                <label>
                    Chapitre :
                    <textarea 
                        value={ this.state.text } 
                        onChange={ this.handleChange } 
                        name="text"/>
                </label>
        		<input type="submit" value="Ajouter un chapitre" />
      		</form>
		)
	}
}