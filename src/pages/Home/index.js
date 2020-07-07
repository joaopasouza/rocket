import React, { useEffect, useState } from 'react';

import Layout from '../../layouts/Main';
import Header from '../../components/Header';

import { getData } from '../../services/nasaService';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then((resp) => {
      setData(resp);
    });
  }, []);

  return (
    <Layout>
      <Header title="Nasa Picture of the Day" />

      <section className="content container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">{data.title}</h3>
              </div>
              <div className="box-body">
                <img
                  src={data.url}
                  alt={data.title}
                  className="img-responsive pad"
                />

                <p>{data.explanation}</p>

                <span className="pull-right text-muted">{data.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
