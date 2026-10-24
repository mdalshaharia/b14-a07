import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function signUpPage({
    children,
}) {
    return <section>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </section>
}