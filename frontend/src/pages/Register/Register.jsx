import './Register.css'
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

import {
  EmailIcon,
  ViewOffIcon,
  PhoneIcon,
  CalendarIcon,
  DragHandleIcon,
  LockIcon,
} from '@chakra-ui/icons'

const Register = () => {
  return (
    <Center>
      <Card
        width="lg"
        padding="1.5rem 2rem"
      >
        <CardBody>
          <Stack
            mt="6"
            spacing="3"
          >
            <Heading size="md">Regsiter</Heading>

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
              <PhoneIcon
                boxSize={4}
                margin="0 1rem"
              />
              <Input
                placeholder="Contact Number"
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
              <DragHandleIcon
                boxSize={4}
                margin="0 1rem"
              />
              <Input
                placeholder="Department"
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
              <CalendarIcon
                boxSize={4}
                margin="0 1rem"
              />
              <Input
                placeholder="Joining Date"
                type="date"
                border="none"
                classname="calendar-icon"
              />
            </FormControl>

            <FormControl
              border="1px solid #E2E8F0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              isRequired
            >
              <LockIcon
                boxSize={5}
                margin="0 1rem"
              />
              <Input
                placeholder="Password"
                border="none"
              />
              <Button background="inherit">
                <ViewOffIcon boxSize={5} />
              </Button>
            </FormControl>

            <FormControl
              border="1px solid #E2E8F0"
              borderRadius="5px"
              display="flex"
              alignItems="center"
              isRequired
            >
              <LockIcon
                boxSize={5}
                margin="0 1rem"
              />
              <Input
                placeholder="Re Enter Password"
                border="none"
              />
              <Button background="inherit">
                <ViewOffIcon boxSize={5} />
              </Button>
            </FormControl>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            width="lg"
          >
            Register
          </Button>
        </CardFooter>
        <Text
          display="flex"
          justifyContent="center"
        >
          Already have an account?
          <Link
            color="#3182CE"
            href="/login"
            fontWeight="600"
            _hover={{ textDecor: 'none', color: '#1E4D7D' }}
          >
            Login
          </Link>
        </Text>
      </Card>
    </Center>
  )
}

export default Register
