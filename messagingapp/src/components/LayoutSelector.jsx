import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
    Route,
    Switch
} from 'react-router-dom';
import { ContentLayout } from './app/ContentLayout.jsx';
import { LoginLayout } from './login/LoginLayout.jsx';
import { AuthenticatedRoute } from './app/AuthenticatedRoute.jsx';
import * as routes from '../constants/routes';
import {ChannelListRedux} from "../containers-redux/ChannelList";

const LayoutSelector = ({ isAuthenticated }) => (
    <Switch>
        <Route path={routes.LOGIN} component={LoginLayout} />
        <AuthenticatedRoute path={routes.ROOT} component={ChannelListRedux} isAuthenticated={isAuthenticated} />
    </Switch>
);

LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };