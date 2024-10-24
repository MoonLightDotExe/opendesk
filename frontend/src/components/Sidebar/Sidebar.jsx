import './Sidebar.css'

import {
  Container,
  List,
  ListItem,
  Text,
  Link,
  Divider,
  Center,
  Icon,
} from '@chakra-ui/react'

import { AddIcon, SunIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import { MdOutlinePerson, MdOutlineLogin } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container>
        <Center
          fontSize="2.5rem"
          fontWeight="700"
          padding="1rem 0"
        >
          Trackify
        </Center>

        <List>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
              href="admin-dashboard"
            >
              <Icon as={MdOutlineLogin} />
              Dashboard
            </Link>
          </ListItem>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
              href="login"
            >
              <Icon as={MdOutlinePerson} />
              Login
            </Link>
          </ListItem>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
              href="register"
            >
              <Icon as={MdOutlineLogin} />
              Register
            </Link>
          </ListItem>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
              href="/"
            >
              <Icon as={MdOutlinePerson} />
              Profile
            </Link>
          </ListItem>
        </List>

        <Divider
          borderColor="grey"
          margin="1rem 0"
        />

        <Center
          margin="0.5rem 0"
          padding="1rem 0"
          borderRadius="5px"
          backgroundColor="rgba(0,0,0,0.2)"
          _hover={{ background: 'rgba(0,0,0,0.4)' }}
          cursor="pointer"
          display="flex"
          gap="1rem"
          fontSize="1.2rem"
        >
          <AddIcon
            boxSize={4}
            margin="0.1rem 0 0"
          />
          New Employee
        </Center>

        <Divider
          borderColor="grey"
          margin="1rem 0"
        />

        <Text
          fontSize="1.3rem"
          fontWeight="700"
          margin="1rem 0"
        >
          Settings
        </Text>

        <List>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
            >
              <SunIcon />
              Light Mode
            </Link>
          </ListItem>
          <ListItem className="sidebar-listitem">
            <Link
              className="sidebar-link"
              _hover={{ textDecor: 'none' }}
            >
              <ExternalLinkIcon />
              Logout
            </Link>
          </ListItem>
        </List>

        <Divider
          borderColor="grey"
          margin="1rem 0"
        />
      </Container>
    </div>
  )
}

export default Sidebar
