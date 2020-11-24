import React from 'react'
import Container from '@material-ui/core/Container';
import HorizontalGridList from '../../components/HorizontalGridList'
import { messagesData, recentViewedData } from '../../constants/historyDashboard'

export default function HistoryDashboard() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>History</h1>
    </Container>
  )
}