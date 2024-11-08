import React from 'react';
import 'App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserBehaviorNavigation from './pages/UserBehaviorNavigation';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import useClickTracker from './hooks/useClickTracker';
export const AppRoute = {
  home: { name: 'Home', path: '/' },
  userBehaviorNavigation: { name: 'User Behavior Navigation', path: '/user-behavior-navigation' },
  notFound: { name: 'Home', path: '*' },
}
const App = () => {
  useClickTracker();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={AppRoute.home.path} element={<Home />} />
          <Route path={AppRoute.userBehaviorNavigation.path} element={<UserBehaviorNavigation />} />
          <Route path={AppRoute.notFound.path} element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>

  );
};

export default App;
