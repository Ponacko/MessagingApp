import * as React from 'react';
import { Route } from 'react-router-dom';
import { Content } from './Content.jsx';

const ContentLayout = () => (
    <div className="row form-group">
        <Content />
    </div>
);

export { ContentLayout };