import { Link, useMatch, useMatches } from "react-router-dom";

import {
  HomeIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  Users2Icon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";

const links = [
  {
    href: "/",
    icon: HomeIcon,
    label: "Dashboard",
  },
  {
    href: "/orders",
    icon: ShoppingCartIcon,
    label: "Orders",
  },
  {
    href: "/product",
    icon: PackageIcon,
    label: "Products",
  },
  {
    href: "/customers",
    icon: Users2Icon,
    label: "Customers",
  },
  {
    href: "/analytics",
    icon: LineChartIcon,
    label: "Analytics",
  },
  {
    href: "/settings",
    icon: SettingsIcon,
    label: "Settings",
  },
];

const Sidebar = () => {
  const currentPath = useMatches();

  function getCurrentActiveLink() {
    if (currentPath.length < 3) return "";

    const activeLink = links.findLast((link) => {
      return link.href === currentPath[2].pathname;
    });

    return activeLink?.href ?? "";
  }

  return (
    <aside className="z-10 hidden w-14 flex-col border-r bg-background sm:flex h-full">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4 h-full">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2Icon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Seller Spot</span>
        </Link>
        <TooltipProvider>
          {links.map((link, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <Link
                  to={link.href}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                    i == links.length - 1 ? "mt-auto" : "",
                    getCurrentActiveLink() === link.href ||
                      (currentPath == null && i === 0)
                      ? "bg-accent text-accent-foreground"
                      : ""
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{link.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;
