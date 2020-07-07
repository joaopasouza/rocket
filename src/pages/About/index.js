import React from 'react';

import Layout from '../../layouts/Main';
import Header from '../../components/Header';

const About = () => {
  return (
    <Layout>
      <Header title="About" />

      <section className="content container-fluid">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          accusantium.
        </p>
      </section>
    </Layout>
  );
};

export default About;
