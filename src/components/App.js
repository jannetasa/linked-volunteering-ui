import '@babel/polyfill';
import React from 'react';
import { Switch, Route } from 'react-router';
import { IntlProvider } from 'react-intl';

import messages from '../config/translations';
import { DEFAULT_LANGUAGE, SUPPORT_LANGUAGES } from '../constants';
import NewEventPage from './pages/events/containers/NewEventPageContainer';
import SubmittedPage from './pages/events/containers/SubmittedPageContainer';
import LandingPage from './pages/LandingPage';
import AdminRoutes from './Admin';
import Login from './Login';

const App = ({ locale }) => {
  const language = SUPPORT_LANGUAGES[locale.toUpperCase()] || DEFAULT_LANGUAGE;

  return (
    <IntlProvider locale={language} key={language} messages={messages[language]}>
      <Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/:locale/" component={LandingPage} />
        <Route exact path={`/:locale/event/new`} component={NewEventPage} />
        <Route exact path={`/:locale/event/submitted`} component={SubmittedPage} />
        <Route path={`/:locale/admin`} component={AdminRoutes} />
      </Switch>
    </IntlProvider>
  );
};

export default App;
