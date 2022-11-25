import React from 'react';
import Advertised from '../../Pages/Home/Advertised';
import Categories from '../../Pages/Home/Categories';
import Machineries from '../../Pages/Home/Machineries';
import MachineriesHighlight from '../../Pages/Home/MacineriesHigjlight';
import Slider from '../../Pages/Home/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <MachineriesHighlight />
            <Advertised />
            <Categories />
            <Machineries />
        </div>
    );
};

export default Home;