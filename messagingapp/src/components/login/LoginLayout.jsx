import * as React from 'react';
import {LoginForm} from '../../containers-redux/login/LoginForm.js';
import * as routes from '../../constants/routes';
import {HeadInHelmet} from "../../containers-redux/shared/HeadInHelmet";
import {Loader} from "../../containers-redux/shared/Loader";
import {Errors} from "../../containers-redux/shared/Errors";

const LoginLayout = ({from}) => {
    const originalLocation = from || {pathname: routes.ROOT};

    return [
        <HeadInHelmet key="head"/>,
        <div className="panel panel-warning" key="cookies">
            <div className="panel-heading text-center">
                <h5>
                    Disclaimer:&nbsp;
                    <span className="small text-capitalize">
                        We use no cookies!
                    </span>
                </h5>
            </div>
        </div>,
        <div className="container" key="form">
            <div className="row">
                <div
                    className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
                    <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                        <h2>Messaging app</h2>
                        <div>
                            <LoginForm from={originalLocation} email=""/>
                        </div>
                    </Loader>
                </div>
            </div>
            <div className="row">
                <div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
                    <Errors key="errors" />
                </div>
            </div>
        </div>,
    ];
};

export {LoginLayout};