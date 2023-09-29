import React from 'react';
import Head from 'next/head';
import Search from '../components/HomePage/Search/Search';
import HeroSection from '@/components/HomePage/HeroSection';
import PropertiesView from '@/components/HomePage/PropertiesView';


export default function Home() {
  return (
    <>
      <HeroSection />
      <Search />
      <PropertiesView/>
    </>
  )
}
