import JsonLd from "@/components/JsonLd";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { contactSchemas } from "@/data/contactSchemas";

export default function Contact(){
    return(
        <div>
            <JsonLd schemas={contactSchemas} />
            <Header/>
            <ContactHero/>
            <ContactDetails/>
            <Footer/>
        </div>
    )
}