import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(0);

  type MenuType = {
    [key: string]: string;
  };
  const menuItems: MenuType = {
    Home: "/#",
    About: "/#about",
    Services: "/#services",
    Pricing: "/#pricing",
    Contact: "/#contact",
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* Logo goes here */}
          <p className="font-bold text-xl">BlueHut</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {Object.keys(menuItems).map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={index + 1 === activeLink ? "primary" : "foreground"}
              className="w-full"
              href={menuItems[item]}
              size="lg"
              onPress={() => setActiveLink(index + 1)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {Object.keys(menuItems).map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index + 1 === activeLink ? "primary" : "foreground"}
              className="w-full"
              href={menuItems[item]}
              size="lg"
              onPress={() => {
                setActiveLink(index + 1);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
