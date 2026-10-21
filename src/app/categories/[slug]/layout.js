import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

export default function CategoryLayout({
  children,
}) {
  return <section>

<Suspense fallback={<div>Loading products with Suspense...</div>}>
<Navbar></Navbar>
  <div>
    {children}
</div>
</Suspense>

  </section>
}