import { Footer } from "../../componets/footer/Footer";
import { NavBar } from "../../componets/navBar/NavBar";
import {Products} from "../../componets/products/Products"

export function Home() {
    return (
        <>
            <NavBar />
            <Products />
            <Footer />
        </> 
    )
}