import ProductGridSkeleton from "@/components/Card/Skeleton";
import EmptyState from "@/components/EmptyState/EmptyState";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

export default function CategoryLayout({
  children,
}) {
  return <section>

    <Suspense fallback={<ProductGridSkeleton></ProductGridSkeleton>}>
      <Navbar></Navbar>
      <div>
        {children}
      </div>
      <Footer></Footer>
    </Suspense>

  </section>

}