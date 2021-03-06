import React from 'react'
import Axios from 'axios'
import { URL } from '../constante'

import ListBooks from '../components/ListBooks'
import AddChapter from '../components/AddChapter'
import AddBook from '../components/AddBook'

export default class HomePage extends React.Component<any,any,any> {

	public constructor(props:any) {
		super(props)

		this.state = {
			books: null,
            book: null,
            component: "listBooks"
		}
	}

    componentDidMount = () => {
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


    private goTo = (component:string, book?:any) => {
        console.log("s")
        this.setState({
            component,   
            book
        })
        if(component === "listBooks") {
            this.getBooks()
        }
    } 

	render() {
        console.log(this.state)
        const { books } = this.state
        const { book } = this.state

        const components:any = {
            addChapter: <AddChapter book={ book } goTo={ this.goTo } />,
            listBooks: <ListBooks books={ books } goTo={ this.goTo }/>,
            addBook: <AddBook goTo={ this.goTo }/>
        }
        const ComponentName = components[this.state.component]

        if(books === null) {
            return(
                <button onClick={ () => this.goTo('addBook') }>Ajouter un livre</button>
            )
        }

		return(
            <div>
    			<button onClick={ () => this.goTo('addBook') }>Ajouter un livre</button>
                { ComponentName }
            </div>
		)
	}
}