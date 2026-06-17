import "./globals.css";
import { Jost, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jost = Jost({
  subsets:["latin"],
  variable:"--font-jost",
});
export default function RootLayout({children}) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body>
        className={jost.variable}
        {children}</body>
    </html>
  );
}
