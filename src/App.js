import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./page/homepage/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.util";
import React from "react";

const HatsPage = () => (
   <div>
      <h1>Hats Page</h1>
   </div>
);

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         currentUser: null,
      };
   }

   unsubscribeFromAuth = null;
   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
         this.setState({ currentUser: user });

         console.log(user);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div className="App">
            <Header currentUser={this.state.currentUser}></Header>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<ShopPage />} />
               <Route path="/signin" element={<SignInAndSignUpPage />} />
            </Routes>
         </div>
      );
   }
}

export default App;
