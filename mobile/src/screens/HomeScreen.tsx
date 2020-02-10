import React from 'react'
import { View, Text } from 'react-native'
import Axios from 'axios'
import ListBooks from '../components/ListBooks'
import { URL } from '../../constante'

export default class HomeScreen extends React.Component<any,any,any> {

	public constructor(props:any) {
		super(props)

		this.state= {
			component:"listBooks",
			books:null,
			book: null
		}
	}

	public componentDidMount = () => {
		this.getAllBooks()
	}

	private getAllBooks = () => {
		Axios.get(URL).then(res => {
			this.setState({
				books: res.data
			})
			console.log(res.data)
		}).catch(err => {
			console.log(err)
		})
	}

	private goTo = (component:string, book?:any) => {
		this.setState({
			component,
			book
		})
	}

	render() {
		console.log(this.state)
		const { books } = this.state
		const components:any = {
			"listBooks": <ListBooks goTo={ this.goTo }/>,
			"listChapters": <ListChapters goTo={ this.goTo }
		}
		const ComponentName:any = components[this.state.component]

		if(books===null) {
			return <Text>Chargement en cours...</Text>
		}

		return(
			<View>
				{ ComponentName }
			</View>
		)
	}
}