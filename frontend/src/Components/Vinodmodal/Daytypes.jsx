import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

export const Daytypes = () => {
  return (
    <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
  )
}
