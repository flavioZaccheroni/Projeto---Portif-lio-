"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Flávio H. Zaccheroni — página inicial"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <BrandLogo className="text-sm sm:text-base" />
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Navegação principal" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:bg-slate-800 dark:hover:text-white",
                        active
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-300",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeToggle />
          <details className="relative sm:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-slate-100">
              Menu
            </summary>
            <nav
              aria-label="Navegação para celular"
              className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800",
                      active
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-200",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
