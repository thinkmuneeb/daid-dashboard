/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { rem, transparentize } from 'polished'
import BigNumber from 'bignumber.js'
import {useHistory} from 'react-router-dom';
import {
  Form,
  Spacer,
  TableRow,
  Seperator,
  LinkButton,
  LabelHeading,
  Text,
} from '../../components/Elements'
import Panel, {
  PanelBody,
  PanelHeader,
  PanelHeading,
} from '../../components/Panel'

import { Themed } from '../../components/Theme'

import StatusBar from '../../components/StatusBar'

import { useHasWeb3, useUser, useUserData } from '../../hooks'
import { SupplyThemeProvider } from '../../components/Theme'
import Figure, { FigurePercent } from '../../components/Figure'

const CoolPanel = styled(PanelBody)<Themed>`
  background-image: linear-gradient(
    to bottom,
    ${(props) => transparentize(0.97, props.theme.colorPairs[0].start)},
    ${(props) => transparentize(0.99, props.theme.colorPairs[0].end)}
  );
`


const SupplyPanel = ({totalSupply, totalBonded, DAIDLPBonded}) => {
  const history = useHistory();
  const DAIDLpBonded =DAIDLPBonded.toNumber() * 2;
  const dao = (((((totalSupply.toNumber() * 4) / 100) * 60) / 100 + totalBonded.toNumber()) / totalBonded.toNumber());
  const lpHourly = ((((totalSupply.toNumber() * 4) / 100) * 40) / 100 + DAIDLpBonded) / DAIDLpBonded;
  const lpDaily = (((((totalSupply.toNumber() * 4) / 100) * 40) / 100) * 24 + DAIDLpBonded) / DAIDLpBonded;
  const lpWeekly = (((((totalSupply.toNumber() * 4) / 100) * 40) / 100) * 168 + DAIDLpBonded) / DAIDLpBonded;

  const hourlyText = ((dao - 1) * 100).toFixed(2) +'%'
  const dailyText = ((dao - 1) * 100 * 24).toFixed(2)+'%'
  const weeklyText = ((dao - 1) * 100 * 168).toFixed(2)+'%'



  const hasWeb3 = useHasWeb3()
  const user = useUser()
  const {
    balance,
    staged,
    bonded,
    status,
    fluidUntil,
    epochYield,
    cycleYield,
  } = useUserData()

  return (
    <SupplyThemeProvider>
      <Panel>
        <PanelHeader>
          <PanelHeading>Supply</PanelHeading>
          {user && <StatusBar status={status} fluidUntil={fluidUntil} />}
        </PanelHeader>

        {hasWeb3 ? (
          <CoolPanel>
            <LabelHeading>DAO</LabelHeading>
         <TableRow
              left="Hourly Yield"
              right={hourlyText}
            />
            <TableRow
              left="Daily Yield"
              right={ dailyText }
            />
            <TableRow
              left="Weekly Yield"
              right={ weeklyText }
            />

            <Spacer />

            <TableRow
              left={
                <React.Fragment>
                  Wallet{' '}
                  <span
                    css={css`
                      font-size: ${rem(12)};
                    `}
                  >
                    (
                    <a
                      href="https://info.uniswap.org/pair/0x323e054a6dd8762011d60993f51e23e2096b221f"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trade Daid
                    </a>
                    )
                  </span>
                </React.Fragment>
              }
              right={<Figure num={balance} round={2} />}
            />
            <TableRow left="Staged" right={<Figure num={staged} round={2} />} />
            <TableRow left="Bonded" right={<Figure num={bonded} round={2} />} />
            <Spacer />
            <Form>
              <LinkButton as={Link} to="/dashboard/dao">
                Manage DAO
              </LinkButton>
            </Form>

            <Spacer />
            <Spacer />
            <Seperator />
            <Spacer />
            <Spacer />

            <LabelHeading>Coupons</LabelHeading>

            <TableRow
              left="Purchased"
              right={<Figure num={new BigNumber(0)} round={2} />}
            />
            <TableRow
              left="Redeemable"
              right={<Figure num={new BigNumber(0)} round={2} />}
            />
            <Spacer />
            <Form>
              <LinkButton as={Link} to="/dashboard/coupons">
                Manage Coupons
              </LinkButton>
            </Form>
          </CoolPanel>
        ) : (
          <CoolPanel>
            <Text>No web3 detected</Text>
          </CoolPanel>
        )}
      </Panel>
    </SupplyThemeProvider>
  )
}

export default SupplyPanel
