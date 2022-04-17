import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import { Route, Routes, Navigate } from "react-router-dom";
import ShopPage from "./page/homepage/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

const HatsPage = () => (
   <div>
      <h1>Hats Page</h1>
   </div>
);

class App extends React.Component {
   componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot((snapShot) => {
               setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
               });
            });
         }

         setCurrentUser(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/shop" element={<ShopPage />} />
               <Route path="/signin" element={<SignInAndSignUpPage />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         </div>
      );
   }
}

const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
