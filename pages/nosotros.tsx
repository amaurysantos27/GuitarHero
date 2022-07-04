import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

const nosotros = () => {
  return (
    <div>
      <Layout pagina="nosotros">
        <main className="md:container md:mx-auto">
          <h2 className="p-5 m-5 text-3xl font-bold text-center text-orange-500">
            Nosotros
          </h2>

          <div className="grid items-center gap-4  md:grid-cols-2">
            <div className="m-10 ">
              <Image
                src="/img/nosotros.jpg"
                alt="Nosotros"
                layout="responsive"
                width={500}
                height={450}
              />
            </div>
            <div className="md:mt-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos
                esse repellendus aut eligendi ratione corporis tempore ducimus
                perferendis reiciendis distinctio suscipit aliquam architecto
                obcaecati, ullam natus error magnam tenetur. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Earum reprehenderit
                cumque rem eum ratione repellat, amet ad minima ipsum
                exercitationem incidunt nulla totam pariatur architecto fuga
                distinctio alias sunt ullam nisi hic? Veniam nihil, consequatur
                labore atque iure dicta inventore sed hic nesciunt obcaecati
              </p>

              <p className="mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos
                esse repellendus aut eligendi ratione corporis tempore ducimus
                perferendis reiciendis distinctio suscipit aliquam architecto
                obcaecati, ullam natus error magnam tenetur. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Earum reprehenderit
                cumque rem eum ratione repellat, amet ad minima ipsum
                exercitationem incidunt nulla totam pariatur architecto fuga
                distinctio alias sunt ullam nisi hic? Veniam nihil
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default nosotros;
