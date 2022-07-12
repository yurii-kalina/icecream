import React from "react";
import classes from "classnames";

import styles from './index.module.scss';

import Card from "./Card";

import Tooltip from "../../../components/Tooltip";
import Info from "../../../components/Info";
import useBanks from "../../../hooks/useBanks";


const toltip = [
    "Pool 1 is a liquidity pair consisting 50% of the peg-token $CREAM and 50% of the target-token $AVAX. Investing in this pool promotes the liquidity of the peg-token while earning the share token as emissions. It can also create a positive price impact on the peg-token.",
    "Pool 2 is a liquidity pair consisting 50% of the share-token $CSHARE and 50% of the target-token $AVAX. Investing in this pool promotes liquidity of the share-token while earning the share token as emissions. It also can create a positive price impact on the share-token.",
    "Pool 4 is a single stake of the peg-token $CREAM. Forming a liquidity pair is unnecessary for this pool. It creates utility and positive price impact for the peg-token of the protocol. The emissions are paid is the share-token $CSHARE. Done with an auto-compounder this pool can promote heavy buy pressure on the peg-token at the cost of sell pressure on the share-token. ",
    "Pool 3 is a liquidity pair consisting 50% of the peg-token $CREAM and 50% of the share-token $CSHARE. This creates positive price impact for both tokens. It can be beneficial in the circumstances where the investor does not want to pair more of the target token $AVAX."
]


const Tokens = () => {
    const [banks] = useBanks();
    const activeBanks = banks.filter((bank) => !bank.finished);


    return (
        <section className={classes("section", styles.section)}>
            <div className={classes("container-fluid", styles.fluid)}>
                <div className={classes("container", styles.container)}>
                    <div className={classes("row", styles.row)}>
                        <div className={classes("col", "col-12", "col-padding-vertical", styles.col)}>
                            <Info
                                text={'CSHARE rewards start Jan 29th 2022 @7:30 PM PST and will conitnue running for 370 days.'}/>
                        </div>
                        {activeBanks
                            .filter((bank) => bank.sectionInUI === 2)
                            .map((bank, index) => (
                                <div key={bank.name}
                                     className={classes("col", "col-12", "col-md-6", "col-xl-4", "col-padding-vertical", styles.col)}>
                                    <div className={styles.tooltip}>
                                        <Tooltip
                                            text={toltip[index]}
                                        />
                                    </div>
                                    <Card bank={bank} src={'/img/icon/home_cream.png'} title={bank.depositTokenName}/>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tokens;
