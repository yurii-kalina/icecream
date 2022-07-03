import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import classes from "classnames";
import classNames from "classnames";

import styles from './index.module.scss';
import {setAccountModalData} from "../../state/appReducer/actions/modalActions";
import useTombFinance from "../../hooks/useTombFinance";
import useTokenBalance from "../../hooks/useTokenBalance";
import {getDisplayBalance} from "../../utils/formatBalance";
import TokenSymbol from "../TokenSymbol";
import styled from "styled-components";

const AccountModal = () => {
    const tombFinance = useTombFinance();

    const tombBalance = useTokenBalance(tombFinance.TOMB);
    const displayTombBalance = useMemo(() => getDisplayBalance(tombBalance), [tombBalance]);

    const tshareBalance = useTokenBalance(tombFinance.TSHARE);
    const displayTshareBalance = useMemo(() => getDisplayBalance(tshareBalance), [tshareBalance]);

    const tbondBalance = useTokenBalance(tombFinance.TBOND);
    const displayTbondBalance = useMemo(() => getDisplayBalance(tbondBalance), [tbondBalance]);


    const dispatch = useDispatch()
    const {accountModal} = useSelector(state => state.rootReducer.modalReducer)
    const {mode} = useSelector(state => state.rootReducer.modeReducer)

    const handleClick = (e) => {
        const action = e.target.getAttribute('data-close')

        if (action) {
            dispatch(setAccountModalData(!accountModal))
        }
    }

    return (

        <div
            className={classes(styles.block, accountModal && styles.active)}
            data-close={true}
            onClick={(event) => {
                handleClick(event)
            }}
        >
            <div className={classes('gradient-background', styles.content)}>
                <h5 className={styles.title}>My Wallet</h5>
                <span
                    className={styles.close}
                    data-close={true}
                    onClick={(event) => {
                        handleClick(event)
                    }}
                />
                <div className={classNames(styles.content, styles[mode])}>
                    <Balances>
                        <StyledBalanceWrapper>
                            <TokenSymbol symbol="TOMB"/>
                            <StyledBalance>
                                <StyledValue>{displayTombBalance}</StyledValue>
                                <p className={classNames(styles.label, styles[mode])}>{"CREAM Available"}</p>
                            </StyledBalance>
                        </StyledBalanceWrapper>

                        <StyledBalanceWrapper>
                            <TokenSymbol symbol="TSHARE"/>
                            <StyledBalance>
                                <StyledValue>{displayTshareBalance}</StyledValue>
                                <p className={classNames(styles.label, styles[mode])}>{"CSHARE Available"}</p>
                            </StyledBalance>
                        </StyledBalanceWrapper>

                        <StyledBalanceWrapper>
                            <TokenSymbol symbol="CBOND"/>
                            <StyledBalance>
                                <StyledValue>{displayTbondBalance}</StyledValue>
                                <p className={classNames(styles.label, styles[mode])}>{"CBOND Available"}</p>
                            </StyledBalance>
                        </StyledBalanceWrapper>
                    </Balances>
                </div>
            </div>
        </div>
    );
}
const StyledValue = styled.div`
    font-size: 30px;
  font-weight: 700;
`;

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Balances = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export default AccountModal;
