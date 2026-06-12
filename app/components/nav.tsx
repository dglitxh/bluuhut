"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const menuItems: { label: string; href: string }[] = [
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
];

function Wordmark() {
  return (
    <Link href="/#" className="flex items-center" aria-label="BlueHut Solutions — home">
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-ink">
          BlueHut
        </span>
        <span className="mt-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.28em] text-muted">
          Engineering
        </span>
      </span>
    </Link>
  );
}

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      height="4.5rem"
      isBlurred={false}
      className={`fixed top-0 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
      classNames={{
        wrapper: "px-5 sm:px-6",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-ink"
        />
        <NavbarBrand>
          <Wordmark />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="tel:+14346025401"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft hover:text-accent transition-colors"
          >
            +1 434 602 5401
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
          >
            Request a quote
            <span aria-hidden>→</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-paper pt-10 gap-1">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href} className="border-b border-line py-1">
            <Link
              href={item.href}
              size="lg"
              className="w-full py-3 font-serif text-2xl text-ink"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-6">
          <Link
            href="/#contact"
            className="inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper"
            onPress={() => setIsMenuOpen(false)}
          >
            Request a quote <span aria-hidden>→</span>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
