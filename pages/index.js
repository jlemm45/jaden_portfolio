import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Experiments from "../components/experiments";
import Technology from "../components/technology";
import Footer from "../components/footer";
import "../scss/style.scss";
import Projects from "../components/projects";

const Index = () => (
  <div>
    <Head />
    <Nav />
    <Hero />
    <About />
    <Projects />
    <Experiments />
    <Technology />
    <Footer />
  </div>
);

export default Index;
