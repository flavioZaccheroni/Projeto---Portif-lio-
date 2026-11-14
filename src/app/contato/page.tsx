import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Flávio H. Zaccheroni.",
};

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@flaviozaccheroni.com.br",
    href: "mailto:contato@flaviozaccheroni.com.br",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/flavio-h-zaccheroni-99101365",
    href: "https://www.linkedin.com/in/flavio-h-zaccheroni-99101365",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/flavioZaccheroni",
    href: "https://github.com/flavioZaccheroni",
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
          description="Aberto a oportunidades de trabalho e a projetos sob medida. Se testou algum projeto e quer conversar, escreva."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {contacts.map((contact) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                  <contact.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-bold text-slate-950 dark:text-white">
                    {contact.label}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {contact.value}
                  </p>
                </div>
              </>
            );

            if (contact.href) {
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(contact.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noreferrer" })}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={contact.label}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
