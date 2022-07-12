import React from "react";
import {ReactTitle} from 'react-meta-tags';

import JoinUs from "../../Modules/JoinUs";
import Numbers from "../../Modules/Numbers";
import Description from "../../Modules/Description";

import Team from "./Team";
import Community from "./Community";
import Innovative from "./Innovative";
import Tokens from "./Tokens";
import Roadmap from "./Roadmap";
import Banner from "./Banner";
import CTA from "./CTA";
import Footer from "../../layouts/Footer";

const numbers = [
    {
        title: "3.1 Daily Volume",
        text: "Quantifying the buying and selling of the last 24 hours.",
        icon: 'daily'
    },
    {
        title: "XX.XX Treasury Value",
        text: "Accumulation of protocol owned liquitity and protocol generated revenue.",
        icon: 'treasury'
    },
    {
        title: "XX.XX Transactions",
        text: "Total amount of transactions accumulated to date.",
        icon: 'transactions'
    }
]
const Main = () => {

    return (
        <>
            <main>
                <ReactTitle title={'IceCream | Home'}/>
                <Banner/>
                <Description
                    title={'Taste The Growth'}
                    text={'$cream a next-generation algo stable is pegged 1:1 with $avax and serves as the "governance token" of the protocol. $cshare is the share token of the protocol that can be earned from the yield farms and staked into the boardroom to earn more annual percentage revenue. Tombforks consist of 3 main investment methods, by combining them you can maximize your gains with a variety of different strategies.'}
                    page={'home'}
                />
                <Tokens/>
                <Numbers
                    title={'Numbers Speak for Themselves'}
                    description={'An ever-growing ecosystem built with success for our investors in mind. Check out our launch statistics since January that showscases our trajectory.'}
                    info={numbers}
                    page={'home'}
                />
                <Community/>
                <Team/>
                <JoinUs/>
                <Innovative/>
                <Roadmap/>
                <CTA/>
            </main>
            <Footer/>
        </>
    );
}

export default Main;
