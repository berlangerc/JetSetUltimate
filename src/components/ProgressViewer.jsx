import React, { Fragment } from 'react'
import Loader from './Loader/Loader';

export default function ProgressViewer({ status = {}, children }) {
    const { error, loading, success } = status;

    if (loading)
        return <Loader />

    if (success) {
        return <Fragment>
            <div>{children}</div>
            <div>success</div>
        </Fragment>;
    }

    if (error) {
        return <Fragment>
            {children}
            error
        </Fragment>;
    }
    return children;
}
