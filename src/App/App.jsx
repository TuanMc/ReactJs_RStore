import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivateRoute } from "../components/PrivateRoute";
import lazyComponent from "../components/LazyComponent";
// firebase
import firebaseApp from "../firebase.config";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.min.css";
import "../assets/css/util.min.css";
import "../assets/css/common.css";
import "../styles.css";
// pages
const Home = lazyComponent(() => import("../pages/Home/Home.container"));
const ProductDetailPage = lazyComponent(() => import("../pages/ProductDetail/ProductDetailPage.container"));
const Cart = lazyComponent(() => import("../pages/Cart/Cart.container"));
const UserInfo = lazyComponent(() => import("../pages/UserInfo/UserInfo"));
const Login = lazyComponent(() => import("../pages/Login/Login"));
const Register = lazyComponent(() => import("../pages/Register/Register"));
const NotFound = lazyComponent(() => import("../pages/NotFound/NotFound"));
const EmailVerify = lazyComponent(() => import("../pages/EmailVerify/EmailVerify"));



class App extends React.Component {
  async componentDidMount() {
    // Check if user login or not
    // If user login, then save user's data to store
    await firebaseApp.auth().onAuthStateChanged(user => {
      if (user && !this.props.user) this.props.onUserCheckAuthen(user);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App__body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/email-verify" component={EmailVerify} />
              
              <PrivateRoute
                path="/product-detail/:productId"
                isLogin={this.props.isAuthenticated}
                isVerified={this.props.isVerified}
                component={ProductDetailPage}
              />
              <PrivateRoute
                path="/user-info"
                isLogin={this.props.isAuthenticated}
                isVerified={this.props.isVerified}
                component={UserInfo}
              />
              <PrivateRoute
                path="/cart"
                isLogin={this.props.isAuthenticated}
                isVerified={this.props.isVerified}
                component={Cart}
              />
              
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
