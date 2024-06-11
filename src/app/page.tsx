import "@/styles/app.module.css";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Home Page",
  description: 'Blog',
}

export default function Home() {
  return (
    <main>
      Hello World
    </main>
  );
}
