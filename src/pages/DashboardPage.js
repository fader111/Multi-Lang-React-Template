import React from 'react'
import Container from '@material-ui/core/Container';

import CustomProgressBar from '../../components/CustomProgressBar'
import HorizontalGridList from '../../components/HorizontalGridList'
import { messagesData } from '../../constants/historyDashboard'

export default function HomeDashboard() {
  return (
    <Container>
      <div>
        <CustomProgressBar label="Incomplete Profile" value={20} />
      </div>
      <div>
        <CustomProgressBar label="Very Active" value={100} />
      </div>
      <Container>
        <h2>My Posts</h2>
        <HorizontalGridList size={10} tileData={messagesData} />
      </Container>
      <Container>
        <h2>Messages</h2>
        <HorizontalGridList size={10} tileData={messagesData} />
      </Container>
    </Container>
    
  )
}