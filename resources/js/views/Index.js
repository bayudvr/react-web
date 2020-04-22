import React from 'react';
import ReactDOM from 'react-dom';

function Landing() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">This is the landing page</div>

                        <div className="card-body">Landing Page</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('landing-page')) {
    ReactDOM.render(<Landing />, document.getElementById('landing-page'));
}
