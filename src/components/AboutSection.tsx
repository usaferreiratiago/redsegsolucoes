import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-6">
            Líder em Serviços de TI
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A RedSegSoluções se destaca na entrega de soluções de software customizadas para atender às necessidades específicas dos nossos clientes. Nossa equipe dedicada de especialistas combina profundo conhecimento do setor com tecnologia de ponta para impulsionar inovação e aumentar a eficiência empresarial.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Equipe trabalhando"
            className="rounded-lg w-full max-w-md object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-wrap gap-12 justify-center">
        <div className="text-center">
          <span className="text-4xl font-extrabold font-heading text-primary">150+</span>
          <p className="text-sm text-muted-foreground mt-1">Projetos Entregues</p>
        </div>
        <div className="text-center">
          <span className="text-4xl font-extrabold font-heading text-primary">13</span>
          <p className="text-sm text-muted-foreground mt-1">anos de Experiência</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
