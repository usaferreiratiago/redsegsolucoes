import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Globo digital de rede"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 max-w-2xl text-center px-6 md:text-right md:ml-auto md:mr-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground font-heading leading-tight text-yellow-700 mb-6">
          Líder em Soluções de TI
        </h1>
        <p className="text-base md:text-lg text-muted-foreground text-yellow-500 mb-8 max-w-lg md:ml-auto">
          Especializada em desenvolvimento de software, recrutamento e alocação de profissionais para impulsionar inovação e eficiência empresarial.
        </p>
        <a
          href="#servicos"
          className="inline-block bg-primary text-primary-foreground font-heading font-semibold text-base px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Explorar
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
