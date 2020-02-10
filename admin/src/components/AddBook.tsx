import React from 'react'
import Axios from 'axios'
import { URL } from '../constante'

export default class AddBook extends React.Component<any,any,any> {

	public constructor(props:any) {
		super(props)

		this.state = {
			title: "",
			categories: []
		}
	}

	private handleChange = () => (event:any) => {
		this.setState({
		 	title: event.target.value
		})
	}
	

	private handleSubmit = () => (event:any) => {
    	event.preventDefault()

    	this.addBook()
  	}

  	private addBook = () => {
  		let data:any = {
  			title: this.state.title,
  			categories: this.state.categories,
    		chapters: []
  		}

  		Axios.post(URL, data).then(res => {
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
          			<input type="text" value={ this.state.title } onChange={ this.handleChange } placeholder="Un titre..." />
        		</label>
        		<input type="submit" value="Ajouter un livre" />
      		</form>
		)
	}
}