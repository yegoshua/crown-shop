import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./page/homepage/shoppage/shoppage.component";

const HatsPage = () => (
   <div>
      <h1>Hats Page</h1>
   </div>
);

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
         </Routes>
      </div>
   );
}

export default App;
