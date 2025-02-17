import { Link, useLocation, type LinkProps } from "react-router";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active]:text-primary"
      data-active={pathname === props.to ? "" : undefined}
      {...props}
    />
  );
}
