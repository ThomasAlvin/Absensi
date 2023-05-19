import {
  Flex,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { TbHistory } from "react-icons/tb";
import moment from "moment";
export default function RHistory() {
  const [history, setHistory] = useState([]);
  async function fetchHistory(page) {
    await axios.get("http://localhost:3500/main").then((res) => {
      console.log(res.data);
      setHistory(res.data);
    });
  }
  useEffect(() => {
    fetchHistory();
    console.log("lol");
  }, []);
  return (
    <>
      <Flex
        w={"100vw"}
        h={"100vh"}
        justifyContent={"center"}
        bg={"#F0F3FB"}
        overflow={"hidden"}
      >
        <Flex className="container" bg={"#F8F9FD"}>
          <Flex className="top">
            <Flex>Select month:</Flex>
            <Input placeholder="Select Month" type="month" colorScheme="teal" />
          </Flex>
          <Flex className="mid" overflow={"hidden"}>
            <TableContainer>
              <Table variant="simple" colorScheme="black">
                <TableCaption>records are rendered on server time</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th isNumeric>CLOCK-IN</Th>
                    <Th isNumeric>CLOCK-OUT</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {history?.map((val) => {
                    return (
                      <>
                        <Tr>
                          <Td>{moment(val.createdAt).format("L")}</Td>
                          <Td>{val.clockIn}</Td>
                          <Td>{val.clockOut ? val.clockOut : "Not Yet"}</Td>
                        </Tr>
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
          <Flex className="bot">
            <Flex className="nav">
              <Flex className="nav-child">
                <Icon as={RxDashboard} w={10} h={10} color="white" />
              </Flex>
              <Flex className="nav-child">
                <Icon as={TbHistory} w={10} h={10} color="white" />
              </Flex>
              <Flex className="nav-child">
                <Icon as={FiLogOut} w={10} h={10} color="white" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
