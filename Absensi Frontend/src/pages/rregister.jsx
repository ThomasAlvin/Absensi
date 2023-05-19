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
import axios from "axios";
export default function RRegister() {
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      password: "",
      name: "",
      company: "",
    },
    onSubmit: async () => {
      const { email, address, password, name, company } = formik.values;
      const account = {
        email,
        password,
        fullname: name,
        company_id: company,
        address,
      };
      console.log(account);
      const checkemail = await axios
        .get("http://localhost:3500/users/email", {
          params: { Email: account.email },
        })
        .then((res) => {
          if (res.data) {
            // console.log(res.data);
            return true;
          } else {
            // console.log(res.data);
            return false;
          }
        });
      if (checkemail) {
        alert("email has been used");
      } else {
        await axios.post("http://localhost:3500/users", account).then(() => {
          alert("account created succesfully");
          nav("/rlogin");
        });
      }
    },
  });
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
            <Button colorScheme="cyan" onClick={formik.handleSubmit}>
              Register
            </Button>
            <span className="center">or</span>
            <Button colorScheme="gray">Login</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
