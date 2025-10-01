import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(12) 98113-2000",
      link: "tel:+5512981132000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "atendimento@cristinasoraia.com.br",
      link: "mailto:atendimento@cristinasoraia.com.br",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Jurema Vieira Medrado, 88. Jardim Aquárius, São José dos Campos / SP",
      link: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg a Sex, 8h às 19h",
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wide mb-4">
              Entre em Contato
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Dê o primeiro passo para uma vida mais equilibrada e feliz. Entre
              em contato e vamos juntos iniciar essa jornada de transformação.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12 animate-scale-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-card transition-all duration-300 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-hero border-0 shadow-card animate-fade-in">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Agende sua primeira consulta e descubra como a terapia pode
                ajudar você a alcançar seus objetivos e viver com mais
                qualidade.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-4 py-6 shadow-lg w-full sm:w-auto text-center whitespace-normal min-h-[80px] sm:min-h-0 sm:whitespace-nowrap"
                onClick={() => window.open("https://wa.me/5512982669661?text=Olá%20vim%20pelo%20site%20e%20quero%20agendar%20um%20consulta.", "_blank")}
              >
                Agendar Consulta via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
