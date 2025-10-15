import Link from "next/link";
import * as React from "react";

export interface INavButtonProps {
  id: number;
  label: string;
  link: string;
  onClick?: () => void;
}

export function ButtonNav({ id, label, link, onClick }: INavButtonProps) {
  return <li key={id}><Link href={link} onClick={onClick}>{label}</Link></li>;
}
