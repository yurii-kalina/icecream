import React from "react";
import {ReactTitle} from 'react-meta-tags';

import Footer from "../../layouts/Footer";
import JoinUs from "../../Modules/JoinUs";
import Description from "../../Modules/Description";
import Numbers from "../../Modules/Numbers";
import Tokens from "./Tokens";
import Banners from "./Banners";
import Unlock from "../Unlock";
import {useWallet} from "use-wallet";


const Boardrooms = () => {
    const {account} = useWallet();
    const numbers = [
        {
            title: "Purchase or Claim",
            text: "PURCHASE OR CLAIM. Either purchase share-tokens ($CSHARE) from traderjoe or claim rewards from the farms.",
            icon: 'purchase'
        },
        {
            title: "Deposit Tokens",
            text: "Deposit the tokens into the boardroom above on the card to the right. There will be a 36 hour lock-up period prior to being able withdraw the provided share token.",
            icon: 'deposit'
        },
        {
            title: "Claim Rewards",
            text: "Collect the emissions in the form of the peg-token. There will be a 18 hour time period before being able to redeem rewards.",
            icon: 'claim'
        }
    ]

    return (
        <>
            {!!account ? (
                <main className={'inner'}>
                    <ReactTitle title={'IceCream | Boardroom'}/>
                    <Description
                        title={'Boardroom'}
                        text={'Earn the protocols peg-token ($cream) by single staking the protocols share-token ($cshare). You do not have to create any liquidity pairs to stake in the boardroom. The boardroom has a lockup period of 36 hours on deposits and 18 hours on rewards.' +
                            ' Annual percentage yield is dependent on the total value locked and protocol expansion rate.'}
                        page={'boardrooms'}
                    />
                    <Banners/>
                    <Tokens/>
                    <Numbers
                        title={'How It Works'}
                        description={'The boardroom utilizes the share-token as a single stake in the protocol to emit the governance (peg) token at the scheduled expansion rate that is dependent on the circulating supply.'}
                        info={numbers}
                        page={'boardrooms'}
                    />
                    <JoinUs
                        isLast={true}
                    />
                </main>
            ) : (
                <Unlock/>
            )}
            <Footer alt={true}/>
        </>
    );
}

export default Boardrooms;
