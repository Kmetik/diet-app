import React from 'react'
import { CSSTransition } from 'react-transition-group'


import './_fade.scss'

export const FadeTransition:React.FC<{active?: any}> = ({children,active}) => {
    return (
        <CSSTransition  classNames="slide" timeout={500} in={active}>
            {children}
        </CSSTransition>
    )
}