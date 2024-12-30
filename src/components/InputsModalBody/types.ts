import { ReactNode } from "react";

export type PropsType = {
  type?: "desktop" | "mobile";
  title: string;
  titleIcon?: string | undefined;
  description: string;
  link?: {
    name: string;
    href: string;
  };
  children: ReactNode;
  actionBtn: ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Keep this generic
};
