import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Flávio Henrique.",
};

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "Adicionar e-mail profissional",
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Adicionar perfil do LinkedIn",
    href: undefined,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Adicionar perfil do GitHub",
    href: undefined,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Três Lagoas, MS",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos transformar uma necessidade em uma solução"
          description="Estou aberto a oportunidades, colaboração e conversas sobre desenvolvimento de sistemas e processos operacionais."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <contact.icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-bold text-slate-950">{contact.label}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          <strong>Conteúdo pendente:</strong> os links profissionais e o
          currículo serão adicionados quando os endereços oficiais forem
          confirmados. Nenhum dado foi inventado.
        </div>
      </Container>
    </main>
  );
}
