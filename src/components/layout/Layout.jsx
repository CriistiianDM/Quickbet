// React
import React from 'react'

// Componets
import Header from '../header/Header.tsx'

/***
 * Layout
 */
export default ({ children }) => {
    return (
        <React.Fragment>
            <Header />
        </React.Fragment>
    )
}