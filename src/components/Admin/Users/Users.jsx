import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'

const Users = () => {
  return (
    <Grid css={{
        cursor: `url(${Cursor}),default` 
    }} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>

        <Box></Box>
        <Sidebar />
    </Grid>

  )
}

export default Users