/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import BigNumber from 'bignumber.js'

import { Text, Cell, Spacer, TwoCol, LabelHeading } from '../../components/Elements'
import Figure, { FigurePercent } from '../Figure'
import {
  Section,
  Heading,
  ColumnFigure,
  TableRow,
  AddressLink,
  StatsWrapper,
} from './components'
import styled from '@emotion/styled'
import { Themed } from '../../components/Theme'
import { transparentize } from 'polished'
import {
  useEpoch,
  usePrices,
  useTokenData,
  useUserData,
  useUserPoolData,
} from '../../hooks'
import { POOL, UNI, DAID, DAIDS } from '../../constants/tokens'
import { formatBN } from '../../utils/number'

import Panel, {
  PanelBody,
  PanelHeader,
  PanelHeading,
} from '../../components/Panel'
import { LiquidityThemeProvider } from '../../components/Theme'


const CoolPanel = styled(PanelBody)<Themed>`
  background-image: linear-gradient(
    to bottom,
    ${(props) => transparentize(0.97, props.theme.colorPairs[0].start)},
    ${(props) => transparentize(0.99, props.theme.colorPairs[0].end)}
  );
`

const Stats = ({pairBalanceDAID, pairBalanceDAI, uniswapPair}) => {
  const { twapPrice, spotPrice } = usePrices()
  const price = pairBalanceDAI.dividedBy(pairBalanceDAID);
  console.log(price)
  const { epochTime } = useEpoch()
  const { balance, bonded, staged, epochYield, cycleYield } = useUserData()
  const {
    uniBalance,
    bonded: poolBonded,
    staged: poolStaged,
    rewarded,
    claimable,
    epochYield: poolEpochYield,
    cycleYield: poolCycleYield,
  } = useUserPoolData()
  const {
    epoch,
    totalTokens,
    totalNet,
    coupons,
    totalDebt,

    totalBonded,
    totalStaged,
    poolTotalSupply,
    poolTotalBonded,
    poolTotalStaged,
    // poolTotalRewarded,
    // poolTotalClaimable,
    // pairBalanceDai,
    pairBalanceDaid,
  } = useTokenData()

  const poolUserTotal =
    uniBalance?.plus(poolBonded)?.plus(poolStaged) ?? new BigNumber(0)

  let percentOfPool = new BigNumber(0)
  let bondedPercentOfPool = new BigNumber(0)
  let stagedPercentOfPool = new BigNumber(0)
  if (!poolTotalSupply.isZero()) {
    percentOfPool = poolUserTotal?.div(poolTotalSupply)
    bondedPercentOfPool = poolTotalBonded?.div(poolTotalSupply)
    stagedPercentOfPool = poolTotalStaged?.div(poolTotalSupply)
  }

  const userLPDaid = percentOfPool?.times(pairBalanceDaid)
  const poolBondedDaid = bondedPercentOfPool.times(pairBalanceDaid)
  const poolStagedDaid = stagedPercentOfPool.times(pairBalanceDaid)

  const supplyText =
    twapPrice.gt(1) || true
      ? 'total supply will expand by'
      : 'protocol debt will increase by'

  return (
        <LiquidityThemeProvider>
      <Panel>
       <PanelHeader>
          <PanelHeading>Statistics</PanelHeading>

        </PanelHeader>
  <CoolPanel>

            <TwoCol
              css={css`
                justify-content: space-between;
              `}
            >
              <Cell
                css={css`
                  flex-direction: row;
                  justify-content: space-between;
                `}
              >
                <ColumnFigure heading="Next Epoch" value={epochTime} />
                <ColumnFigure
                  right
                  heading="Spot Price"
                  value={<Figure num={spotPrice} unit="DAI" />}
                />
                <ColumnFigure
                  right
                  heading="TWAP Price"
                  value={<Figure num={twapPrice} unit="DAI" />}
                />
                <ColumnFigure right heading="Epoch" value={epoch} />
              </Cell>
            </TwoCol>
              <Spacer />
               <LabelHeading>Network</LabelHeading>
            <Text
              css={css`
                font-size: var(--text-size);
                opacity: 0.5;
              `}
            >
              Next epoch, {supplyText} <Figure num={totalTokens.times(0.01)} />.
            </Text>
             <Spacer />
            <TwoCol
              css={css`
                justify-content: space-between;
              `}
            >
              <Cell>
                <LabelHeading>Token Supply</LabelHeading>
                <TableRow left="Tokens:" right={<Figure num={totalTokens} />} />
                <TableRow left="Coupons:" right={<Figure num={coupons} />} />
                <TableRow left="Total Supply:" right={<Figure num={totalNet} />} />
                <TableRow left="Debt:" right={<Figure num={totalDebt} />} />
              </Cell>
              <Cell>
                <LabelHeading>Token Distribution</LabelHeading>
                <TableRow left="DAO Staged:" right={<Figure num={totalStaged} />} />
                <TableRow left="DAO Bonded:" right={<Figure num={totalBonded} />} />
                <TableRow
                  left="LP Staged:"
                  right={
                    <Figure
                      num={poolTotalStaged}
                      unit="UNI-LP"
                      tooltip={`${formatBN(poolStagedDaid, 2)} DAID`}
                    />
                  }
                />
                <TableRow
                  left="LP Bonded:"
                  right={
                    <Figure
                      num={poolTotalBonded}
                      unit="UNI-LP"
                      tooltip={`${formatBN(poolBondedDaid, 2)} DAID`}
                    />
                  }
                />
                {/* <TableRow
                  left="LP Rewarded:"
                  right={<Figure num={poolTotalRewarded} unit="DAID" />}
                />
                <TableRow
                  left="LP Claimable:"
                  right={<Figure num={poolTotalClaimable} unit="DAID" />}
                /> */}
                {/* <TableRow
                  left="LP Total:"
                  right={<Figure num={poolTotalSupply} unit="UNI-LP" />}
                />

                <TableRow
                  left="LP Claimable:"
                  right={<Figure num={poolTotalClaimable} unit="DAID" />}
                />
                <TableRow
                  left="DAID in LP:"
                  right={<Figure num={pairBalanceDaid} unit="DAID" />}
                />
                <TableRow
                  left="Dai in LP:"
                  right={<Figure num={pairBalanceDai} unit="DAI" />}
                /> */}

                {/* <TableRow
                  left="Total DAO:"
                  right={
                    <FigurePercent
                      value={totalStaged
                        ?.plus(totalBonded)
                        ?.div(totalTokens)
                        ?.times(100)}
                    />
                  }
                />
                <TableRow
                  left="Total LP:"
                  right={
                    <FigurePercent
                      value={poolTotalBonded?.div(totalTokens)?.times(100)}
                    />
                  }
                /> */}
              </Cell>
            </TwoCol>
           <Spacer />
            <Spacer />
            <TwoCol
              css={css`
                justify-content: space-between;
              `}
            >
              <Cell>
                <LabelHeading>Your DAID Account</LabelHeading>

                <TableRow left="Wallet:" right={<Figure num={balance} />} />
                <TableRow left="Staged:" right={<Figure num={staged} />} />
                <TableRow left="Bonded:" right={<Figure num={bonded} />} />
                <TableRow left="LP Pool:" right={<Figure num={userLPDaid} />} />
                <TableRow left="LP Claimable:" right={<Figure num={claimable} />} />
                <TableRow left="LP Rewarded:" right={<Figure num={rewarded} />} />
                <TableRow
                  left="Total:"
                  right={
                    <Figure
                      num={balance
                        ?.plus(staged)
                        ?.plus(bonded)
                        ?.plus(userLPDaid)
                        ?.plus(claimable)
                        ?.plus(rewarded)}
                    />
                  }
                />
              </Cell>
              <Cell>
                <LabelHeading>Your DAID-DAI LP Account</LabelHeading>

                <TableRow
                  left="Wallet:"
                  right={<Figure num={uniBalance} unit="UNI-LP" />}
                />
                <TableRow
                  left="Staged:"
                  right={<Figure num={poolStaged} unit="UNI-LP" />}
                />
                <TableRow
                  left="Bonded:"
                  right={<Figure num={poolBonded} unit="UNI-LP" />}
                />
                <TableRow
                  left="Total:"
                  right={
                    <Figure
                      num={uniBalance?.plus(poolStaged)?.plus(poolBonded)}
                      unit="UNI-LP"
                    />
                  }
                />
              </Cell>
            </TwoCol>

          <Spacer size={40} />
 </CoolPanel>

          </Panel>
    </LiquidityThemeProvider>
  )
}

export default Stats
