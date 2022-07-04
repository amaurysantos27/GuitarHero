import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Layout pagina="Inicio">
        <h1 className="text-4xl">Desde Inicio</h1>
      </Layout>
    </div>
  );
};

export default Home;
