import sectionBg from "@/assets/section-bg.jpg";

const regions = [
  {
    title: "Serviços de Recrutamento e Software",
    location: "Brasil e Europa",
    period: "Desde 2013",
    description:
      "Impulsionamos inovação com profundo conhecimento do setor e tecnologia de ponta.",
  },
  {
    title: "Soluções Estratégicas de Staffing",
    location: "Estados Unidos e Canadá)",
    period: "Desde 2015",
    description:
      "Parceiro confiável para alcançar sucesso através de desenvolvimento de software escalável.",
  }
  
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-background">
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <img
          src={sectionBg}
          alt="Tecnologia"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">Sucesso</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {regions.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-base font-bold font-heading text-foreground text-blue-700 mb-1">{r.title}</h4>
              <p className="text-xs text-primary mb-1">{r.location}</p>
              <p className="text-xs text-muted-foreground mb-3">{r.period}</p>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
