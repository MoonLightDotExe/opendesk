import {
  Card,
  CardBody,
  Text,
  Stack,
  Divider,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Center,
  FormControl,
  Input,
  Link,
} from '@chakra-ui/react'

import { AddIcon, EmailIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false)

  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
    console.log(viewPassword)
  }

  return (
    <Center padding="auto auto">
      <Card
        width="lg"
        padding="1.5rem 2rem"
      >
        <CardBody>
          <Stack
            mt="6"
            spacing="3"
          >
            <Heading size="md">SignIn</Heading>

            <ButtonGroup
              display="flex"
              justifyContent="space-between"
            >
              <Button width="12.5rem">Admin</Button>
              <Button width="12.5rem">Employee</Button>
            </ButtonGroup>

            <FormControl
              border="1px solid #E2E8F0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              isRequired
            >
              <EmailIcon
                boxSize={5}
                margin="0 1rem"
              />
              <Input
                placeholder="Email ID"
                border="none"
              />
            </FormControl>
            <FormControl
              border="1px solid #E2E8F0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              isRequired
            >
              <EmailIcon
                boxSize={5}
                margin="0 1rem"
              />
              <Input
                placeholder="Password"
                border="none"
              />
              <Button
                background="inherit"
                onClick={handleViewPassword}
              >
                <ViewOffIcon boxSize={5} />
              </Button>
            </FormControl>

            <Button
              background="inherit"
              display="flex"
              justifyContent="flex-end"
              fontSize="1rem"
              height="1rem"
              textAlign="left"
              color="#2B6EB2"
              _hover={{ bg: 'inherit', color: '#1E4D7D' }}
            >
              Forgot Password?
            </Button>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            width="lg"
          >
            Sign In
          </Button>
        </CardFooter>
        <Text
          display="flex"
          justifyContent="center"
        >
          Do not have an account?
          <Link
            color="#3182CE"
            href="/register"
            fontWeight="600"
            _hover={{ textDecor: 'none', color: '#1E4D7D' }}
          >
            Register
          </Link>
        </Text>
      </Card>
    </Center>
  )
}

export default Login
