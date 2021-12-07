import React, { useState, useEffect } from "react";

import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

export type shopCart = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

const App: React.FC = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const url = "https://fakestoreapi.com/products";

    const fetchData = async (): Promise<any> => {
        setLoading(true);
        const response = await fetch(url);
        try {
            if (response.ok) {
                const data = await response.json();
                setData(data);
                setLoading(false);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <ShoppingCart data={data} setData={setData} loading={loading} />
        </div>
    );
};

export default App;
