import Feed from '@/components/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubre & Comparte
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          El Poder de los IA-Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia es un sitio web que te permite descubrir y compartir prompts
        creativos
      </p>

      <Feed />
    </section>
  );
}
