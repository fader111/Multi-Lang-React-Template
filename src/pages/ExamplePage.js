import React from 'react';
import Container from '@material-ui/core/Container'

export default function ExamplePage(props) {
  const { t } = props
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Example Page</h1>  
    </Container>
  )
}