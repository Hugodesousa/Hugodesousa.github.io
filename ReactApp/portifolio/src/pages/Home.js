import React from 'react'
import Image from '../components/Image'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import { Container, Row, Col } from 'reactstrap'
import GenericContainer from '../components/GenericContainer'
import '../style/Home.css'

export default function Home() {
  return (
    <div>
      <Container className='contFix'>
        <Row>
          <Header />
          <Col>
            <Image />
          </Col>
          <Col>
            <GenericContainer />
            <Row>
              <Col>
                <Contacts />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
