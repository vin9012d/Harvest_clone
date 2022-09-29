import { Button,  Select } from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'

export const Daytypes = ({ w }) => {
    console.log(w,'props')
    const [time, setTime] = useState("Week")
    const handleSelect = (e) => {
        console.log(e.target.value, 'value')
        setTime(e.target.value)
    }
  return (
<Select value={time} onChange={handleSelect} placeholder={time} w={w}>
  <option value='Week'>Week</option>
  <option value='Semimonth'>Semimonth</option>
  <option value='Month'>Month</option>
  <option value='Quarter'>Quarter</option>
  <option value='Year'>Year</option>
  <option value='Alltime'>Alltime</option>
  <option value='Custom'>Custom</option>
</Select>
  )
}
