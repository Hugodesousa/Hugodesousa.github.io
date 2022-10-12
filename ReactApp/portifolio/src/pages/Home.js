import React from 'react'
import Image from '../components/Image'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import '../style/Home.css'

export default function Home() {
  return (
    <div>
      <Image />
      <Header/>


      <Contacts/>
    </div>
  )
}