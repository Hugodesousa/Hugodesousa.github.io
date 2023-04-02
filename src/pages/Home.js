import React from 'react'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import { Container, Row } from 'reactstrap'
import GenericContainer from '../components/GenericContainer'
import '../style/Home.css'

export default function Home() {
  return (
    <div>
      <Container className='contFix'>
        <Row>
          <Header />
        </Row>
        <Row>
          <GenericContainer />
        </Row>
        <Row>
            <Contacts />
        </Row>
      </Container>
    </div>
  )
}
