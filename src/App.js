import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => (
    <div className="container mx-auto px-12">
        <div className="min-h-screen -mb-10">
            <Header />
            <Body />
        </div>
        <Footer />
    </div>
)

export default App;