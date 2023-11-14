import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LetsConnect from '../components/LetsConnect';
import ContactInfo from '../components/ContactInfo';
import Form from '../components/Form';
import Map from '../components/Map';
import Links from '../components/Links';

const Contacts = () => {
  return (
    <>
      <Header />
      <LetsConnect />
      <ContactInfo />
      <Form />
      <Map />
      <Links />
      <Footer />
    </>
  )
}

export default Contacts