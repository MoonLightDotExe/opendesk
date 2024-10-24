import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Link,
} from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
            >
              <Link href="/add_employee">Add Employee</Link>
            </Button>
          </ButtonGroup>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th class="">Sr No</Th>
                  <Th class="">Employee Name</Th>
                  <Th class="">Employee ID</Th>
                  <Th class="">Department</Th>
                  <Th class="">Present</Th>
                  <Th class="">Remove Employee</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td class="">1</Td>
                  <Td class="">Jigisha Ghanekar</Td>
                  <Td class="">030</Td>
                  <Td class="">Computer Science</Td>
                  <Td class="">Yes</Td>
                  <Td class="">
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      marginLeft="1.5rem"
                    >
                      <Link href="/register">Remove Employee</Link>
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td class="">2</Td>
                  <Td class="">Samruddhi Jadkar</Td>
                  <Td class="">039</Td>
                  <Td class="">Computer Science</Td>
                  <Td class="">No</Td>
                  <Td>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                    >
                      <Link href="/register">Remove Employee</Link>
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td class="">3</Td>
                  <Td class="">Rushiraj Chaudhari</Td>
                  <Td class="">014</Td>
                  <Td class="">Computer Science</Td>
                  <Td class="">No</Td>
                  <Td>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                    >
                      <Link href="/register">Remove Employee</Link>
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td class="">4</Td>
                  <Td class="">Om Amonkar</Td>
                  <Td class="">017</Td>
                  <Td class="">Computer Science</Td>
                  <Td class="">Yes</Td>
                  <Td>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                    >
                      <Link href="/register">Remove Employee</Link>
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  )
}

export default Dashboard
