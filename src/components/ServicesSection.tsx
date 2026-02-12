import servicesSoftware from "@/assets/services-software.jpg";
import servicesStaffing from "@/assets/services-staffing.jpg";

const services = [
  {
    title: "Soluções de Software",
    description:
      "Provedor líder de serviços completos de TI e consultoria, especializado em desenvolvimento de software sob medida.",
    image: servicesSoftware,
  },
  {
    title: "Alocação Estratégica de Profissionais",
    description:
      "Equipe dedicada de especialistas que combina profundo conhecimento do setor com tecnologia de ponta.",
    image: servicesStaffing,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          Soluções de Software
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Provedor líder de serviços completos de TI e consultoria, especializado em desenvolvimento de software.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
            Soluções Inovadoras
          </h3>
          <p className="text-muted-foreground max-w-xl">
            Entregamos soluções de software customizadas para atender às necessidades específicas de cada cliente. Aprimore a eficiência do seu negócio através da inovação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
