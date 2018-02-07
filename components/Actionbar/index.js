import React from 'react'
import styled from 'styled-components'

import RotateIcon from './icons/rotate.svg'
import CodeIcon from './icons/code.svg'
import AddIcon from './icons/add.svg'
import DownloadIcon from './icons/download.svg'

const ActionbarContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const ActionItem = styled.li`
  margin: 0 10px;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  position: relative;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eceaea;
  }

  &:last-child {
    margin-right: 0;
  }

  &:not(:first-child):before {
    content: "|";
    margin-left: 10px;
    position: absolute;
    left: -23px;
    top: 5px;
    color: #eaeaea;
  }
`

const Actionbar = (props) => {
  return (
    <ActionbarContainer>
      <ActionItem>
        <RotateIcon width='16' height='16' />
      </ActionItem>
      <ActionItem>
        <CodeIcon width='16' height='16' />
      </ActionItem>
      <ActionItem>
        <AddIcon width='16' height='16' />
      </ActionItem>
      <ActionItem>
        <DownloadIcon width='16' height='16' />
      </ActionItem>
    </ActionbarContainer>
  )
}

export default Actionbar
