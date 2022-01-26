import * as Realm from "realm-web";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from './pages/Home/HomePage';
import CommunitiesPage from "./pages/Communities/CommunitiesPage";
import LoginPage from "./pages/Login/Login";
import RegistrationPage from "./pages/registration/RegistrationPage";
import AuthenticationProvider from "./contexts/authentication/AuthenticationContext";
//import Login from "./pages/Login/Login";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <AuthenticationProvider>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/page/Home"
               component={HomePage} 
               exact />
              <Route
                path="/page/Communities"
                component={CommunitiesPage}
                exact
              />
              <Route path="/page/Login" 
              component={LoginPage} 
              exact />
              <Route
                path="/page/Registration"
                component={RegistrationPage}
                exact
              />
              <Redirect from="/" to="/page/Home" exact />
            </IonRouterOutlet>
          </IonSplitPane>
        </AuthenticationProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
