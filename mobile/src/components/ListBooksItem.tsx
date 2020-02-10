import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default (props:any) => {
	return(
		<View>
			<Text>props.book.title</Text>
			<TouchableOpacity
				onPress={ this.goTo('chapterList', props.book) }>
				<Text></Text>
			</TouchableOpacity>
		</View>
	)
}