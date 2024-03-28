import Features from "./components/features/features"
import Header from "./components/header/header"
import OrderP from "./components/order-place/op"
import About from "./components/about/about"
import Users from "./components/users/users"
import Opt from "./components/op-two/opt"
import Footer from "./components/footer/footer"

function App() {
    return(
        <div className="App">
            <Header />
            <OrderP />
            <Features />
            <About />
            <Users />
            <Opt />
            <Footer />
        </div>
    )
};

export default App