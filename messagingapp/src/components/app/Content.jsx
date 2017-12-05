import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Profile } from '../profile/Profile.jsx';
import {ChannelListRedux} from "../../containers-redux/messenger/ChannelList";

const Content = () => [
  <Route exact path={routes.ROOT} component={ChannelListRedux} key="default"/>,
  <Route path={routes.PROFILE} component={Profile} key="profile" />,
];

export { Content };