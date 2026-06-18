import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact(){
    return(
        <div>
            <Header/>
            <ContactHero/>
            <ContactDetails/>
            <Footer/>
        </div>
    )
}