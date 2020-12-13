import React, { useState } from "react";
import axios from "./axios.js";
import SmallMap from "./SmallMap";

export default function NeedyForm() {
    const [form, setForm] = useState({
        category: "",
        description: "",
        latitude: "",
        longitude: "",
    });

    // const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(form);
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios
            .post("/api/needs", form)
            .then(() => {
                location.replace("/");
            })
            .catch(() => {
                console.log(e);
                // setError(true);
            });
        console.log(form);
    };

    return (
        <div className="needs-part">
            <h2>Need Details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="category"
                    placeholder="Product Category"
                    onChange={handleChange}
                    value={form.category}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    onChange={handleChange}
                    value={form.description}
                />
                <SmallMap
                    handleClick={(latitude, longitude) => {
                        setForm({ ...form, latitude, longitude });
                    }}
                />
                <button className="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
