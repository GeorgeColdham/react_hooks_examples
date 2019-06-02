import React from 'react'
import { ButtonConsumer } from '../containers/App'

export default function Text (props) {
  return (
    <ButtonConsumer>
      {values => (
        <>
          <p>You clicked {values.count} times</p>
        </>

      )}
    </ButtonConsumer>

  )
}
