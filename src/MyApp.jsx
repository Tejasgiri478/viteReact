import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp() {
    return (
        <>
            <div className="InputGroup">
                <label htmlFor="name" className="w-100, p-2,mt-2">Enter your name:</label>
                <input type="text" className="w-50, p-2, ms-2 bg-danger" name="name" placeholder="Name *" required />
            </div>

        </>
    );
}

export default MyApp;
