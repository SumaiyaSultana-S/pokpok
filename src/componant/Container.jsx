import React from 'react'

const Container = ({children, className }) => {
    return (
        <>
        <div className={`Container max-auto px-4 ${className}`}>
            {children}
        </div>
            
        </>
    )
}
export default Container
