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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { TbHistory } from "react-icons/tb";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
export default function RDashboard() {
  const moment = require("moment");
  <script src="moment.js"></script>;
  const date = new Date();
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentTime, setCurrentTime] = useState(date);
  function getCurrentTime() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(setCurrentTime(new Date()));
      }, 1000);
    });
  }
  useEffect(() => {
    getCurrentTime();
  }, [currentTime]);

  return (
    <>
      <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} bg={"#F0F3FB"}>
        <Flex className="container">
          <Flex className="atas">
            <Flex className="atas-1">
              <Flex>Live Attendance</Flex>
              <br />
              <Flex fontSize={"55px"} fontWeight={"bold"} color={"black"}>
                {currentTime.getHours().toString() > 9
                  ? currentTime.getHours().toString()
                  : "0" + currentTime.getHours().toString()}
                :
                {currentTime.getMinutes().toString() > 9
                  ? currentTime.getMinutes().toString()
                  : "0" + currentTime.getMinutes().toString()}
              </Flex>
              <Flex>
                {day[currentTime.getDay().toString()]},&nbsp;
                {currentTime.getDate().toString()}&nbsp;
                {month[currentTime.getMonth().toString()]}{" "}
                {currentTime.getFullYear().toString()}
              </Flex>
            </Flex>
            <Flex className="atas-2">
              <Flex className="detail">
                <Flex className="detail-1">
                  <Stat w={"100%"}>
                    <StatLabel textAlign={"center"}>Working Hour</StatLabel>
                    <StatNumber textAlign={"center"}>09:00 - 17:00</StatNumber>
                    <StatHelpText textAlign={"center"}>
                      Western Indonesian Time
                    </StatHelpText>
                  </Stat>
                </Flex>
                <Flex className="detail-2">
                  <Flex className="opsi-cont">
                    <Flex
                      className="opsi"
                      bg={"green.100"}
                      borderColor={"green.200"}
                      color={"green.500"}
                    >
                      {" "}
                      <Icon as={AiOutlineUserAdd} w={10} h={10} />
                      <Flex>Clock-In</Flex>
                    </Flex>
                  </Flex>
                  <Flex className="opsi-cont">
                    <Flex
                      className="opsi"
                      bg={"orange.100"}
                      borderColor={"orange.200"}
                      color={"orange.500"}
                    >
                      {" "}
                      <Icon as={AiOutlineUserDelete} w={10} h={10} />
                      <Flex>Clock-Out</Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="tengah">
            Attendance Log:
            <TableContainer>
              <Table variant="simple" colorScheme="blackAlpha">
                <TableCaption>records are rendered on server time</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th isNumeric>TIME LOG</Th>
                    <Th isNumeric>ACTIVITY</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>26 Apr</Td>
                    <Td isNumeric>09:00</Td>
                    <Td isNumeric>CLOCK-IN</Td>
                  </Tr>
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
