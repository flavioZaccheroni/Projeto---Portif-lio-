"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Download, KeyRound, Monitor, ShieldAlert } from "lucide-react";
import { TEST_PERIOD_DAYS } from "@/data/projects";
import type { Project } from "@/types/project";

type TestInfo = NonNullable<Project["test"]>;

/** Bloco de download: só libera o botão depois do aceite dos termos de teste. */
export function DownloadGate({ test }: { test: TestInfo }) {
  const [accepted, setAccepted] = useState(false);
  const checkboxId = useId();

  return (
    <section
      aria-labelledby="baixar-para-testar"
      className="rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-9 dark:border-blue-500/30 dark:bg-blue-500/10"
    >
      <p className="text-sm font-bold tracking-[0.16em] text-blue-700 uppercase dark:text-blue-300">
        Versão {test.version} · Windows
      </p>
      <h2
        id="baixar-para-testar"
        className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white"
      >
        Baixar para testar
      </h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100">
            Como testar
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-slate-700 dark:text-slate-300">
            {test.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {test.requirements.join(" · ")}
          </p>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <KeyRound aria-hidden="true" className="h-4 w-4" /> Acessos de
            demonstração
          </h3>
          <ul className="mt-3 space-y-2">
            {test.logins.map((login) => (
              <li
                key={login.user}
                className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm dark:border-blue-500/30 dark:bg-slate-900"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {login.profile}
                </span>
                <br />
                <span className="font-mono text-slate-700 dark:text-slate-300">
                  {login.user} / {login.password}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Os dados da base de demonstração são 100% fictícios.
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
        <ShieldAlert
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300"
        />
        <p>
          O executável <strong>ainda não é assinado digitalmente</strong>, então
          o Windows pode exibir um alerta ou bloquear a execução. Baixe apenas
          por este site ou pelo GitHub oficial do autor. Se for bloqueado, o
          código-fonte pode ser executado com Python (instruções no
          repositório).
        </p>
      </div>

      <div
        role="note"
        className="mt-8 flex gap-3 rounded-xl border border-blue-300 bg-white p-4 text-sm leading-6 text-slate-800 md:hidden dark:border-blue-500/40 dark:bg-slate-900 dark:text-slate-200"
      >
        <Monitor
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300"
        />
        <p>
          <strong>Baixe pelo computador.</strong> O aplicativo é para Windows e
          não roda no celular. Se preferir, abra esta página no PC para baixar e
          testar.
        </p>
      </div>

      <div className="mt-8">
        <label
          htmlFor={checkboxId}
          className="flex cursor-pointer items-start gap-3 leading-6 text-slate-800 dark:text-slate-200"
        >
          <input
            id={checkboxId}
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-blue-600"
          />
          <span>
            Li e aceito os{" "}
            <Link
              href="/termos-de-teste"
              className="font-bold text-blue-700 underline underline-offset-2 dark:text-blue-300"
            >
              Termos de teste
            </Link>
            : uso apenas para avaliação por {TEST_PERIOD_DAYS} dias, sem dados
            reais e sem uso comercial.
          </span>
        </label>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          {accepted ? (
            <a
              href={test.downloadUrl}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blue-600 px-6 font-bold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              <Download aria-hidden="true" className="h-5 w-5" />
              Baixar {test.fileName}
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 rounded-lg bg-slate-300 px-6 font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-400"
            >
              <Download aria-hidden="true" className="h-5 w-5" />
              Aceite os termos para baixar
            </button>
          )}
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {test.sizeLabel}
          </span>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Prefere conferir a versão no GitHub?{" "}
          <a
            href={test.releaseUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-700 underline underline-offset-2 dark:text-blue-300"
          >
            Ver release {test.version}
          </a>
        </p>
      </div>
    </section>
  );
}
