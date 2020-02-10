import React from 'react'

import ListBooksItem from './ListBooksItem'

export default (props:any) => {
    return(
        <div>
            { props.books.map((item:any, index:number) => {
                return(
                    <ListBooksItem book={ item } key={ `itembook${index}` } goTo={ props.goTo }/>
                )
            }) }
        </div>
	)
}