import React from 'react'

import ListBooksItem from './ListBooksItem'

export default class extends React.Component<any,any,any> {
    render() {
    return(
        <div>
            {this.props.books.map((item:any, index:number) => {
                return(
                    <ListBooksItem book={ item } key={ `itembook${index}` } goTo={ this.props.goTo }/>
                )
            }) }
        </div>
	)
    }
}