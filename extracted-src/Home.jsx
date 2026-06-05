import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BlurbSection from '../components/home/BlurbSection';
import BooksShowcase from '../components/home/BooksShowcase';
import AuthorTeaser from '../components/home/AuthorTeaser';

export default function Home() {
  return (
    <>
      <HeroSection data-source-location="pages/Home:10:6" data-dynamic-content="false" />
      <BlurbSection data-source-location="pages/Home:11:6" data-dynamic-content="false" />
      <BooksShowcase data-source-location="pages/Home:12:6" data-dynamic-content="false" />
      <AuthorTeaser data-source-location="pages/Home:13:6" data-dynamic-content="false" />
    </>);

}