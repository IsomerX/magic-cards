import Cards from "~/components/Cards";
import Footer from "~/components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <div className="heading">MAGIC CARDS</div>
            <div className="subheading">(hover to start)</div>
            <Cards />
            <Footer />
        </div>
    );
}

