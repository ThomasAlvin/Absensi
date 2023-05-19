import { Flex, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RLogin() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  function inputHandler(input) {
    const { value, id } = input.target;
    const tempobject = { ...loginInput };
    tempobject[id] = value;
    setLoginInput(tempobject);
    console.log(tempobject);
  }

  async function login() {
    await axios
      .get("http://localhost:3500/users/login", {
        params: { email: loginInput.email, password: loginInput.password },
      })
      .then((res) => {
        if (res.data) {
          alert("login berhasil");
          console.log(res.data);
          nav("/rdashboard");
        } else {
          alert("email atau password salah");
        }
      });
  }
  return (
    <>
      <Flex w={"100vw"} h={"100vh"} justifyContent={"center"} bg={"#F0F3FB"}>
        <Flex className="container">
          <Flex className="head">
            <Flex className="h-1"></Flex>
            <Flex className="h-2">Sign In</Flex>
            <Flex className="h-3">to clock-in and clock-out</Flex>
          </Flex>
          <Flex className="body" h={"25%"}>
            <FormControl>
              <FormLabel>Username / Email</FormLabel>
              <Input type="text" onChange={inputHandler} id="email" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="text" onChange={inputHandler} id="password" />
            </FormControl>
          </Flex>
          <Flex className="end">
            <Button colorScheme="cyan" onClick={login}>
              Login
            </Button>
            <span className="center">or</span>
            <Button colorScheme="gray" onClick={() => nav("/rregister")}>
              Register
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
