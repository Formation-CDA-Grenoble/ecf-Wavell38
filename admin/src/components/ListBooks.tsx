import React from 'react'
import Axios from 'axios'
import { URL } from '../constante'

import ListBookItem from './ListBookItem'

export default class AddBook extends React.Component<any,any,any> {

	public constructor(props:any) {
		super(props)

		this.state = {
			books: null
		}
	}

    public componentDidMount = () => {
        this.getBooks()
    }


  	private getBooks = () => {
  		
  		Axios.get(URL).then(res => {
  			console.log(res.data)
            this.setState({
                books: res.data
            })
  		}).catch(err => {
  			console.log(err)
  		})
  	}


	render() {
			
        const { books } = this.state
        if(books === null) {
            return <p>Chargement en cours...</p>
        }


        return(
            <div>
                { books.map((item:any, index:number) => {
                    return(
                        <ListBookItem book={ item } key={ `itembook${index}` } goTo={ this.props.goTo }/>
                    )
                }) }
            </div>
		)
	}
}