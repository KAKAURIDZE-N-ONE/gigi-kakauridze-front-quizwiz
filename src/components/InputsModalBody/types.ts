import { ReactNode } from "react";

export type PropsType = {
  type?: "desktop" | "mobile";
  title: string;
  titleIcon?: string | undefined;
  description?: string;
  link?: {
    name: string;
    href: string;
    text?: string;
  };
  children: ReactNode;
  actionBtn: ReactNode;
  titlePosition?: "up";
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // Keep this generic
};
