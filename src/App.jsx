import { BrowserRouter } from "react-router-dom";
import Header from "./sections/header";
import SectionOne from "./sections/section1";
import SectionTwo from "./sections/section2";
import SectionThree from "./sections/section3";
import SectionFour from "./sections/section4";
import SectionFive from "./sections/section5";
import SectionSix from "./sections/section6";
import SectionSeven from "./sections/section7";
import Footer from "./sections/footer";
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <Footer />
            </div>
        </BrowserRouter>
    );
};
export default App;
