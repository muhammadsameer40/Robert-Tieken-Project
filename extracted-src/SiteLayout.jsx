import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div data-source-location="components/layout/SiteLayout:8:4" data-dynamic-content="false" className="min-h-screen flex flex-col">
      <Navbar data-source-location="components/layout/SiteLayout:9:6" data-dynamic-content="false" />
      <main data-source-location="components/layout/SiteLayout:10:6" data-dynamic-content="false" className="flex-1">
        <Outlet data-source-location="components/layout/SiteLayout:11:8" data-dynamic-content="false" />
      </main>
      <Footer data-source-location="components/layout/SiteLayout:13:6" data-dynamic-content="false" />
    </div>);

}