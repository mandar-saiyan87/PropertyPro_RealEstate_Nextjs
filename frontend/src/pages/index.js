import React from 'react';
import Head from 'next/head';
import Search from '../components/Search/Search';
import HeroSection from '@/components/HomePage/HeroSection';
import PropertiesView from '@/components/HomePage/PropertiesView';


export default function Home() {
  return (
    <>
      <Head>
        <title>PropertyPro - Rent, Sell, Buy Properties</title>
        <meta name="description" content="Rent, Sell, Buy Properties" />
      </Head>
      <HeroSection />
      <Search />
      <PropertiesView/>
    </>
  )
}
