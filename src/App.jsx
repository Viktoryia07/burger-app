import {Header} from "./components/Header/Header.jsx";
import {Nav} from "./components/Nav/Nav.jsx";
import {Catalog} from "./components/Catalog/Catalog";


export const App = () => {
    return <>
        <Header/>
        <main>
            <Nav/>
            <Catalog/>
        </main>
        <footer></footer>
    </>
}


