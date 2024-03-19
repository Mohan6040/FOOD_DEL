import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
    // State to manage the selected category
    const [category, setCategory] = useState("All");

    return (
        <div>
            {/* Header component */}
            <Header />

            {/* ExploreMenu component for selecting food category */}
            <ExploreMenu category={category} setCategory={setCategory} />

            {/* FoodDisplay component to display food items based on selected category */}
            <FoodDisplay category={category} />
            <AppDownload />

        </div>
    );
}

export default Home;
