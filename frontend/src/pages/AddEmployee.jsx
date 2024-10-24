import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Center,
  VStack,
  Badge,
  Text,
} from '@chakra-ui/react'

const AddEmployee = () => {
  return (
    <>
      <Center>
        <Badge
          variant="subtle"
          colorScheme="blue"
          fontSize="32px"
          fontWeight="bold"
          paddingX="3rem"
          borderRadius="10px"
          marginY="1rem"
          color="black"
        >
          Add Employee
        </Badge>
      </Center>
      <Center maxW="100vw">
        <VStack width="50vw">
          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Name</FormLabel>
            <Input
              type="text"
              width="35rem"
            />
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Department</FormLabel>
            <Input
              type="text"
              width="35rem"
            />
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Date of Birth</FormLabel>
            <Input
              type="date"
              width="35rem"
            />
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Email Address</FormLabel>
            <Input
              type="email"
              width="35rem"
            />
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Contact Number</FormLabel>
            <Input
              type="phone"
              width="35rem"
            />
          </FormControl>

          <FormControl
            display="flex"
            flexDirection="column"
            isRequired
          >
            {/* <FormLabel>Gender</FormLabel> */}
            <RadioGroup>
              <Stack
                direction="row"
                display="flex"
              >
                <Text fontWeight="bold">Gender</Text>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Aadhar Card</FormLabel>
            <Input
              type="number"
              width="35rem"
            />
          </FormControl>

          <FormControl
            maxW="50rem"
            display="flex"
            justifyContent="space-between"
            isRequired
          >
            <FormLabel fontWeight="bold">Department</FormLabel>
            <Input
              type="text"
              width="35rem"
            />
          </FormControl>

          <Button
            colorScheme="blue"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </Center>
      <Card>
        <CardBody
          maxW="100vw"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <CardHeader>
            <Box
              border="1px"
              borderColor="gray.400"
              width="70vw"
              height="30rem"
            >
              Employee Webcam
            </Box>
          </CardHeader>
          <Button colorScheme="blue">Add Employee</Button>
        </CardBody>
      </Card>
    </>
  )
}

export default AddEmployee
