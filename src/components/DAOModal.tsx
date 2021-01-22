/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import BigNumber from 'bignumber.js'

import { Spacer, BigButton, TableRow, LabelHeading, Flex } from './Elements'
import TabGroup, { tabStateAtom } from './TabGroup'
import Modal, {
  EnableTout,
  ModalColorRush,
  ModalContentWrap,
  ModalHeader,
  ModalHeading,
  ModalTransaction,
} from './Modal'
import { useTransaction, useUserData } from '../hooks'
import { MAX_UINT256 } from '../constants/values'
import {
  approve,
  bond,
  deposit,
  unbondUnderlying,
  withdraw,
} from '../utils/web3'
import { DAID, DAIDS } from '../constants/tokens'
import { useRecoilValue } from 'recoil'
import { toBaseUnitBN } from '../utils/number'
import { frozenOrLocked } from '../utils'

import {
  formInputAtomFamily,
  optionStateAtomFamily,
  FigureInput,
  ActionLabel,
  TwoWaySwitch,
  HelpText,
} from './Forms'
import Figure, { FigurePercent } from './Figure'

const TAB_GROUP_NAME = 'bondingModal'

enum DAOStages {
  Stage = 'Stage',
  Bond = 'Bond',
}

const DAOModal = () => {
  const {
    balance,
    allowance,
    staged,
    bonded,
    status,
    epochYield,
    cycleYield,
  } = useUserData()

  const isEnabled = allowance.comparedTo(MAX_UINT256) === 0
  const isFluid = !frozenOrLocked(status)

  const currentTab =
    useRecoilValue(tabStateAtom(TAB_GROUP_NAME)) || DAOStages.Stage

  const formName = `${TAB_GROUP_NAME}/${currentTab}`
  const currentOptionIdx = useRecoilValue(optionStateAtomFamily(formName))
  const formValue = useRecoilValue(formInputAtomFamily(formName))

  const [sendTransaction, blocked, txHash] = useTransaction()

  const tabMap = {
    [DAOStages.Stage]: {
      options: [
        {
          max: balance,
          label: 'Deposit',
          action: (value: BigNumber) =>
            sendTransaction((cb) =>
              deposit(DAIDS.addr, toBaseUnitBN(value, DAID.decimals), cb),
            ),
        },
        {
          max: staged,
          label: 'Withdraw',
          action: (value: BigNumber) =>
            sendTransaction((cb) =>
              withdraw(DAIDS.addr, toBaseUnitBN(value, DAID.decimals), cb),
            ),
        },
      ],
      helpText:
        'Depositing or withdrawing Daid requires you to be unlocked in the DAO',
    },

    [DAOStages.Bond]: {
      options: [
        {
          label: 'Bond',
          max: staged,
          action: (value: BigNumber) =>
            sendTransaction((cb) =>
              bond(DAIDS.addr, toBaseUnitBN(value, DAID.decimals), cb),
            ),
        },
        {
          label: 'Unbond',
          max: bonded,
          action: (value: BigNumber) =>
            sendTransaction((cb) =>
              unbondUnderlying(
                DAIDS.addr,
                toBaseUnitBN(value, DAID.decimals),
                cb,
              ),
            ),
        },
      ],
      helpText:
        'Bonding or unbonding Daid will reset your locked timer in the DAO to 1 epoch',
    },
  }

  const { options, helpText } = tabMap[currentTab]
  const { max, label, action } = options[currentOptionIdx]

  const valueOk =
    formValue &&
    new BigNumber(formValue).lte(max) &&
    new BigNumber(formValue).gt(0)

  const locked = isFluid && currentTab !== DAOStages.Bond

  return (
    <Modal>
      <ModalColorRush>
        <ModalHeader>
          <ModalHeading>Manage DAO</ModalHeading>
        </ModalHeader>

        <ModalContentWrap>
          {txHash ? (
            <ModalTransaction text="Confirming Transaction" txHash={txHash} />
          ) : isEnabled ? (
            <React.Fragment>
              <FigureInput
                disabled={isFluid && currentTab !== DAOStages.Bond}
                name={formName}
                max={max || new BigNumber(0)}
                unit="DAID"
              />
              <Spacer size={16} />
              <TwoWaySwitch
                name={formName}
                options={options.map((o) => o.label)}
              />
              <Spacer size={24} />
            </React.Fragment>
          ) : (
            <EnableTout copy="To Bond or Unbond DAID, you need to enable it first." />
          )}
        </ModalContentWrap>

        <TabGroup
          tabs={[DAOStages.Stage, DAOStages.Bond]}
          name={TAB_GROUP_NAME}
        />
      </ModalColorRush>

      <ModalContentWrap>

        {isEnabled ? (
          <BigButton
            css={css`
              width: 100%;
            `}
            disabled={blocked || !valueOk || locked}
            invalid={(blocked || !valueOk) && !locked}
            onClick={() => {
              action(formValue)
            }}
          >
            <ActionLabel label={label} value={formValue} locked={locked} />
          </BigButton>
        ) : (
          <BigButton
            css={css`
              width: 100%;
            `}
            disabled={blocked || isEnabled}
            onClick={() => sendTransaction(() => approve(DAID.addr, DAIDS.addr))}
          >
            Enable
          </BigButton>
        )}

        <Spacer size={6} />
        <Flex
          css={css`
            justify-content: center;
            text-align: center;
          `}
        >
          <HelpText>{helpText}</HelpText>
        </Flex>

        <Spacer />

        <TableRow left="Wallet" right={<Figure num={balance} round={2} />} />
        <TableRow left="Staged" right={<Figure num={staged} round={2} />} />
        <TableRow left="Bonded" right={<Figure num={bonded} round={2} />} />
      </ModalContentWrap>
    </Modal>
  )
}

export default DAOModal
