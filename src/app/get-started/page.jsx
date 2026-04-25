// app/get-started/page.jsx
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export default function GetStartedPage() {
  return (
    <main className="mt-10  bg-[#161616] py-20 px-6 flex items-center justify-center">
      <Suspense>
        <ContactForm />
      </Suspense>
    </main>
  );
}
