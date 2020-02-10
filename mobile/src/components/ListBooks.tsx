import React from 'react'
import { View } from 'react-native'
import ListBooksItem from './ListBooksItem'

export default (props:any) => {
	return(
		<View>
			{ props.books.map((item:any, index:number) =>{
				return(
					<ListBooksItem 
						key={ `listbook-item${index}` } 
						book={ item }
						goTo={ this.goTo }/>
				)
			}) }
		</View>
	)
}