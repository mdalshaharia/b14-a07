import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function signInPage({
    children,
}) {
    return <section>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </section>
}