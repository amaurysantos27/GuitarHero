import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  pagina: string;
}

const Layout = ({ children, pagina }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarra" />
      </Head>
      <Header />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
