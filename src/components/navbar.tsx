import Link from "next/link";
import { FloatingNav } from "./ui/floating-nav";

interface LinkProps {
  url: string;
  title: string;
}

async function fetchLinks(): Promise<any> {
  const res = await fetch(`http://localhost:3000/nav.json`);
  if (!res.ok) {
    throw new Error('Failed to fetch links');
  }
  return res.json();
}

export default async function Navbar() {
  const links = await fetchLinks();
  console.log('Links',links)
  return (
    <FloatingNav navItems={links} />
  );
}
