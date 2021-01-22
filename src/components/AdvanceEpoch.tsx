/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { advance } from '../utils/web3'
import { DAIDS } from '../constants/tokens'
import { useEpoch, useUser, useDaidData } from '../hooks'
import Panel, { PanelBody, PanelHeading } from './Panel'
import { Flex, Button, Spacer } from './Elements'

function AdvanceEpoch() {
  const user = useUser()
  const { epoch } = useEpoch()
  const { epoch: chainEpoch } = useDaidData()

  return (
    <Panel>
      <PanelBody>
        <Flex
          css={css`
            align-items: center;
            justify-content: space-between;
          `}
        >
          <PanelHeading>Advance Epoch</PanelHeading>
          <Spacer />

          <Button
            onClick={() => {
              advance(DAIDS.addr)
            }}
            disabled={!user || chainEpoch >= epoch}
          >
            Advance to {epoch}
          </Button>
        </Flex>
      </PanelBody>
    </Panel>
  )
}

export default AdvanceEpoch
