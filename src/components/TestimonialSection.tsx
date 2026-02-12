const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
          Parceiro Confiável para o Sucesso
        </h2>
        <a
          href="mailto:contato@redsegsolucoes.com.br"
          className="inline-block bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4 mb-12"
        >
          Contato
        </a>

        <blockquote className="bg-card border border-border rounded-lg p-8 text-left max-w-2xl mx-auto">
          <p className="text-muted-foreground italic leading-relaxed text-sm">
            "Serviço incrível! A equipe da RedSeg Soluções tem superado expectativas consistentemente com sua expertise excepcional em recrutamento e suporte eficiente de staffing. Trabalho com eles desde 2021 e entregaram profissionais de alto nível para minha organização nos EUA, Brasil e Polônia. Altamente recomendado!"
          </p>
          <div className="mt-6">
            <p className="font-bold text-foreground font-heading text-sm">
              Tiago Henrique Ribeiro Ferreira
            </p>
            <p className="text-xs text-muted-foreground">
              Fundador RedSeg Soluções IT &{" "}
              <a href="https://www.aiapplicationtracking.com/" className="text-primary hover:underline">
                AIApplicationTracking.com
              </a>
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;
