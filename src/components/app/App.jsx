import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import Connecting from '../Connecting';
import FAQs from '../FAQS';
import Rules from '../Rules';
import BCNM from '../BCNM';
import Support from '../Support';
import Sidebar from '../../containers/SideBar';
import ServerInfo from '../ServerInfo';
import backgroundFunction from '../../services/utils';
import styles from '../app/styles.css';

export default function App() {

  useEffect(() => {
    backgroundFunction();
  });
  
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.main}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/info"
              exact
              render={(routerProps) => <ServerInfo {...routerProps} />}
            />
            <Route
              path="/connecting"
              exact
              render={(routerProps) => <Connecting {...routerProps} />}
            />
            <Route
              path="/FAQs"
              exact
              render={(routerProps) => <FAQs {...routerProps} />}
            />
            <Route
              path="/rules"
              exact
              render={(routerProps) => <Rules {...routerProps} />}
            />
            <Route
              path="/BCNM-KSNM-ENM"
              exact
              render={(routerProps) => <BCNM {...routerProps} />}
            />
            <Route
              path="/support"
              exact
              render={(routerProps) => <Support {...routerProps} />}
            />
          </Switch>
          <Sidebar />
        </Router>
      </section>
      <Footer />
    </section>
  );
}
