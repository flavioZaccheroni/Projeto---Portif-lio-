export function CodeWindow() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2a] shadow-2xl shadow-blue-950/50">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
        <span className="ml-3 font-mono text-xs text-slate-400">
          perfil.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
        <code>
          <span className="text-purple-400">type</span>{" "}
          <span className="text-sky-300">Perfil</span> = {"{"}
          {"\n  "}
          <span className="text-blue-300">nome</span>
          {": "}
          <span className="text-emerald-300">
            &quot;Flávio H. Zaccheroni&quot;
          </span>
          {";\n  "}
          <span className="text-blue-300">origem</span>
          {": "}
          <span className="text-emerald-300">&quot;Logística&quot;</span>
          {";\n  "}
          <span className="text-blue-300">foco</span>
          {": "}
          <span className="text-emerald-300">
            &quot;Desenvolvimento de Sistemas&quot;
          </span>
          {";\n  "}
          <span className="text-blue-300">abordagem</span>
          {": [\n    "}
          <span className="text-emerald-300">&quot;Entender&quot;</span>
          {", "}
          <span className="text-emerald-300">&quot;Organizar&quot;</span>
          {",\n    "}
          <span className="text-emerald-300">&quot;Desenvolver&quot;</span>
          {", "}
          <span className="text-emerald-300">&quot;Validar&quot;</span>
          {"\n  ];\n"}
          {"}"}
          {";\n\n"}
          <span className="text-slate-500">
            {"// pronto para o próximo desafio"}
          </span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-blue-400"
          />
        </code>
      </pre>
    </div>
  );
}
