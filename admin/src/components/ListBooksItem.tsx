import React from 'react'
import Axios from 'axios'
import { URL } from '../constante'

export default (props:any) => {
    return(
        <div>
            <p>{ props.book.title }</p>
            <a onClick={ props.goTo("addChapter", book) }>+</a>
        </div>
	)
}