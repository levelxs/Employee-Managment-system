import React from 'react'
import { Link } from 'react-router-dom'

const FallbackPage = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-4">Page Not Found</p>
                    <p className="text-muted mb-4">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <Link to="/" className="btn btn-dark">
                        Go to Dashboard
                    </Link>
                </div>
            </div>


            export default NotFound;

        </>
    )
}

export default FallbackPage