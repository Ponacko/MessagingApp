import * as React from 'react';
import {LoginForm} from '../../containers-redux/login/LoginForm.js';
import * as routes from '../../constants/routes';
import {HeadInHelmet} from "../../containers-redux/shared/HeadInHelmet";

const LoginLayout = ({ from }) => {
    const originalLocation = from || { pathname: routes.ROOT };

    return [
        <HeadInHelmet key="head" />,
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
                <div className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
                    <h1>PV247</h1>
                    <p>2017</p>
                    <div>
                        <LoginForm from={originalLocation} />
                    </div>
                </div>
            </div>
        </div>,
    ];
};

export { LoginLayout };