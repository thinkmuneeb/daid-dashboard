
import styled from '@emotion/styled'

import { Col, Spacer, Seperator, Flex } from '../../components/Elements'
import DashboardOverview from '../Dashboard/Overview'
import Page from '../../components/Page'

import Stats from '../../components/Stats'
import SupplyPanel from './SupplyPanel'
import LiquidityPanel from './LiquidityPanel'
//import AdvanceEpoch from '../AdvanceEpoch'
import { mq } from '../../styles'
import {DAID, DAIDS, UNI, DAI} from "../../constants/tokens";
import {getLegacyPoolAddress, getPoolAddress} from "../../utils/pool";
import {toTokenUnitsBN} from "../../utils/number";
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import BigNumber from "bignumber.js";
import {
  getPoolTotalClaimable,
  getPoolTotalRewarded,
  getTokenBalance,
  getTokenTotalSupply,
  getTotalBonded,
  getTotalRedeemable,
  getTotalStaged
} from "../../utils/infura";




function epochformatted() {
  const epochStart = 1610114400;
  const epochPeriod = 2 * 60 * 60;
  const hour = 60 * 60;
  const minute = 60;
  const unixTimeSec = Math.floor(Date.now() / 1000);

  let epochRemainder = unixTimeSec - epochStart
  const epoch = Math.floor(epochRemainder / epochPeriod);
  epochRemainder -= epoch * epochPeriod;
  const epochHour = Math.floor(epochRemainder / hour);
  epochRemainder -= epochHour * hour;
  const epochMinute = Math.floor(epochRemainder / minute);
  epochRemainder -= epochMinute * minute;
  return `${epoch}-0${epochHour}:${epochMinute > 9 ? epochMinute : "0" + epochMinute.toString()}:${epochRemainder > 9 ? epochRemainder : "0" + epochRemainder.toString()}`;
}



const TwoCol = styled(Flex)`
  ${mq.mobile} {
    flex-wrap: wrap;
  }
`

const Dashboard = () => {


  const history = useHistory();
  const [pairBalanceDAID, setPairBalanceDAID] = useState(new BigNumber(0));
  const [pairBalanceDAI, setPairBalanceDAI] = useState(new BigNumber(0));
  const [totalSupply, setTotalSupply] = useState(new BigNumber(0));
  const [totalBonded, setTotalBonded] = useState(new BigNumber(0));
  const [totalStaged, setTotalStaged] = useState(new BigNumber(0));
  const [totalRedeemable, setTotalRedeemable] = useState(new BigNumber(0));
  const [poolLiquidity, setPoolLiquidity] = useState(new BigNumber(0));
  const [poolTotalRewarded, setPoolTotalRewarded] = useState(new BigNumber(0));
  const [poolTotalClaimable, setPoolTotalClaimable] = useState(new BigNumber(0));
  const [epochTime, setEpochTime] = useState("0-00:00:00");

  useEffect(() => {
    let isCancelled = false;

    async function updateUserInfo() {
      const poolAddress = await getPoolAddress();
      const legacyPoolAddress = getLegacyPoolAddress(poolAddress);

      const [
        pairBalanceDAIDStr,
        pairBalanceDAIStr,
        totalSupplyStr,
        totalBondedStr,
        totalStagedStr,
        totalRedeemableStr,
        poolLiquidityStr,
        poolTotalRewardedStr,
        poolTotalClaimableStr,
      ] = await Promise.all([
        getTokenBalance(DAID.addr, UNI.addr),
        getTokenBalance(DAI.addr, UNI.addr),

        getTokenTotalSupply(DAID.addr),
        getTotalBonded(DAIDS.addr),
        getTotalStaged(DAIDS.addr),
        getTotalRedeemable(DAIDS.addr),

        getTokenBalance(DAID.addr, UNI.addr),
        getPoolTotalRewarded(poolAddress),
        getPoolTotalClaimable(poolAddress),

        getPoolTotalRewarded(legacyPoolAddress),
        getPoolTotalClaimable(legacyPoolAddress),

      ]);

      if (!isCancelled) {
        setPairBalanceDAID(toTokenUnitsBN(pairBalanceDAIDStr, DAID.decimals));
        setPairBalanceDAI(toTokenUnitsBN(pairBalanceDAIStr, DAI.decimals));

        setTotalSupply(toTokenUnitsBN(totalSupplyStr, DAID.decimals));
        setTotalBonded(toTokenUnitsBN(totalBondedStr, DAID.decimals));
        setTotalStaged(toTokenUnitsBN(totalStagedStr, DAID.decimals));
        setTotalRedeemable(toTokenUnitsBN(totalRedeemableStr, DAID.decimals));

        setPoolLiquidity(toTokenUnitsBN(poolLiquidityStr, DAID.decimals));
        setPoolTotalRewarded(toTokenUnitsBN(poolTotalRewardedStr, DAID.decimals));
        setPoolTotalClaimable(toTokenUnitsBN(poolTotalClaimableStr, DAID.decimals));

      }
    }

    async function updateTime() {
      if (!isCancelled) {
        setEpochTime(epochformatted())
      }
    }

    updateUserInfo();
    const time = setInterval(updateTime, 1000);
    return () => {
      isCancelled = true;
      clearInterval(time);

    };
  }, []);



  return (
    <Page>
    <DashboardOverview  pairBalanceDAID={pairBalanceDAID} pairBalanceDAI={pairBalanceDAI}  uniswapPair={UNI.addr} />
      <TwoCol>
        <Col>
          <SupplyPanel totalSupply={totalSupply} totalBonded={totalBonded} DAIDLPBonded={pairBalanceDAID}   />
        </Col>
        <Spacer col size={30} />
        <Col>
          <LiquidityPanel totalSupply={totalSupply} totalBonded={totalBonded} DAIDLPBonded={pairBalanceDAID} />
        </Col>
      </TwoCol>
      <Spacer size={30} />
      <Stats    pairBalanceDAID={pairBalanceDAID} pairBalanceDAI={pairBalanceDAI}  uniswapPair={UNI.addr} />

    </Page>
  )
}

export default Dashboard
