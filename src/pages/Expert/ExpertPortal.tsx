import React from 'react'
import ComplaintsList from '../../components/Complaints/ComplaintsList'
import { useUserStore } from '../../Context/UserStore'

const ExpertPortal = () => {
  const user = useUserStore((state) => state.user)
  return (
    <div>
      <ComplaintsList userId={user.id} type='juryExpert'/>
    </div>
  )
}

export default ExpertPortal