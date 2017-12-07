import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import {ChannelListRedux} from "../../containers-redux/messenger/ChannelList";
import { Profile } from '../../containers-redux/profile/Profile.jsx';

const Content = () => [
  <Route exact path={routes.ROOT} component={ChannelListRedux} key="default"/>,
    <Route path={routes.PROFILE} component={Profile} key="profile" >
      <button>
      </button>
    </Route>,
];

export { Content };