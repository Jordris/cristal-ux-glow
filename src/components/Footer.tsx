import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Cristina Soraia
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Psicóloga especialista em Terapia Cognitivo-Comportamental.
              Ajudando pessoas a desenvolverem seu potencial emocional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Quem Sou
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("servicos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("especialidades");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Especialidades
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>São Paulo, SP</li>
              <li>
                <a
                  href="tel:+5511987654321"
                  className="hover:text-primary-foreground transition-colors"
                >
                  (11) 98765-4321
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@cristinasoraia.com.br"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contato@cristinasoraia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            © {currentYear} Cristina Soraia. Feito com{" "}
            <Heart className="h-4 w-4 text-accent fill-accent" /> para ajudar
            pessoas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
