import React from 'react'
import { useParams } from 'react-router-dom'
import MyBuckets from '../components/MyBuckets'
import Layout from '../Layout'
import HistoryPage from './HistoryPage'

function TabPage() {
  const {tab} = useParams()

  return (
    <>
      {tab === "mybuckets" && <MyBuckets />}
      {tab === "history" && <HistoryPage />}
    </>
  )
}

export default Layout(TabPage)