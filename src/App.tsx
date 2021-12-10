import React, { useState, useEffect } from "react";

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
    const [newdata, setNewData] = useState<any>([]);
    const [searchItem, setSearchItem] = useState<String>("");
    const [loading, setLoading] = useState<boolean>(false);

    const url = "https://fakestoreapi.com/products";

    const fetchData = async (): Promise<any> => {
        setLoading(true);
        const response = await fetch(url);
        try {
            if (response.ok) {
                const data = await response.json();
                setDatas(data);
                setNewData(data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const search = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = e.currentTarget.value;
        setSearchItem(newValue);
        console.log(setSearchItem, "is working")
    };

    return (
        <div>
            <Header search={search} setSearchItem={setSearchItem} />
            <ShoppingCart datas={datas} setDatas={setDatas} loading={loading} />
        </div>
    );
};

export default App;
