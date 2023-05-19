import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
export default function RRegister() {
  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      password: "",
      name: "",
      company: "",
    },
  });
  const navigate = useNavigate();
  function inputHandler(event) {
    const { value, id } = event.target;
    console.log(value);
    formik.setFieldValue(id, value);
  }
  return (
    <>
      <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} bg={"#F0F3FB"}>
        <Flex className="container">
          <Flex className="head">
            <Flex className="h-1"></Flex>
            <Flex className="h-2">Sign Up</Flex>
            <Flex className="h-3">to clock-in and clock-out</Flex>
          </Flex>
          <Flex className="body">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" id="name" onChange={inputHandler} />
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="text" id="address" onChange={inputHandler} />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" id="email" onChange={inputHandler} />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="text" id="password" onChange={inputHandler} />
            </FormControl>

            <FormControl>
              <FormLabel>Company</FormLabel>
              <Select
                placeholder="Select company"
                id="company"
                onChange={inputHandler}
              >
                <option value={"1"}>Purwadhika</option>
                <option value={"2"}>Hacktiv8</option>
                <option value={"3"}>Dicoding</option>
                <option value={"4"}>Binar Academy</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex className="end">
            <Button colorScheme="cyan">Register</Button>
            <span className="center">or</span>
            <Button colorScheme="gray">Login</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
