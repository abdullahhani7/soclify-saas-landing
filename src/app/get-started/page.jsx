// app/get-started/page.jsx
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export default function GetStartedPage() {
  return (
    <main className="bg-[#161616] py-30 px-6 flex items-center justify-center">
      <Suspense>
        <ContactForm />
      </Suspense>
    </main>
  );
}
