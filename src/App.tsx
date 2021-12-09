import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import ShoppingCart from "./components/ShoppingCart";
import Header from "./components/header/Header";
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
    const [datas, setDatas] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const url = "https://fakestoreapi.com/products";

    const fetchData = async (): Promise<any> => {
        setLoading(true);
        const response = await fetch(url);
        try {
            if (response.ok) {
                const data = await response.json();
                setDatas(data);
                setLoading(false);
                console.log(datas);
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
            <Header />
            <ShoppingCart datas={datas} setDatas={setDatas} loading={loading} />
        </div>
    );
};

export default App;
