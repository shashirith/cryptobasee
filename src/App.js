// import Navbar from "./components/Navbar";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Home, Cryptocurrencies } from "./components/index";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import "./App.css";
// import firebase sdk
// install firebase react-firebae hooks
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // your config
  apiKey: "AIzaSyA2m2wDlAjOqfbgDETBH5owgZt5jpO-j8Q",
  authDomain: "cryptoversz.firebaseapp.com",
  projectId: "cryptoversz",
  storageBucket: "cryptoversz.appspot.com",
  messagingSenderId: "1098489364911",
  appId: "1:1098489364911:web:091404570a4131eff92f5a",
  measurementId: "G-RJHKV7QWYR",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  // firebase
  const [user] = useAuthState(auth);
  if (!user) return <SignIn />;

  return (
    <div className="extra">
      <div className="App">
        <div className="Navbar">
          <Navbar />
          <SignOut />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
              </Switch>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

function SignOut() {
  return (
    <div>
      {auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )}
    </div>
  );
}

export default App;
