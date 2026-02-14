import { Mail, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-bold font-heading text-foreground text-blue-700 mb-1">Inovação</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Provedor líder de serviços completos de TI e soluções de consultoria.
          </p>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground text-blue-700 ">Para Vendas e Consultas</span>
            </p>
            <a
              href="mailto:tiago@infodatamatrix.com"
              className="text-primary hover:underline text-sm"
            >
              tiago@infodatamatrix.com
            </a>
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-lg font-bold font-heading text-blue-700 mb-1">
            Fale Conosco
          </h4>

          <p className="text-sm text-muted-foreground mb-4">
            Entre em contato para soluções personalizadas. Envie sua consulta agora.
          </p>

          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/aiapplicationtracking/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:tiago@infodatamatrix.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2013. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground text-center mt-2">
          <span className="font-semibold text-blue-700">Sede:</span> Brasil
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;