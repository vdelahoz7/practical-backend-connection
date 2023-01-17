import React from 'react'

export interface FC<T> extends React.FC<T> {
    children: JSX.Element
}
