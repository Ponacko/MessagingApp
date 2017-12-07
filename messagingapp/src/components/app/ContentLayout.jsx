import * as React from 'react';
import {Route} from 'react-router-dom';
import {Content} from './Content.jsx';
import {HeadInHelmet} from "../../containers-redux/shared/HeadInHelmet";

const ContentLayout = () => (
<div className>
    <HeadInHelmet />
    <Content />
</div>
);

export { ContentLayout };