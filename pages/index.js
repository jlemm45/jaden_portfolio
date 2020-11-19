import Head from 'next/head';
import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Experiments from '../components/experiments';
import Technology from '../components/technology';
import Footer from '../components/footer';
import Projects from '../components/projects';

export default () => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js" />
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
        integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
        crossorigin="anonymous"
      />
      <script src="/site.js" />
    </Head>
    <Hero />
    <About />
    <Projects />
    <Experiments />
    <Technology />
    <Footer />
  </>
);
