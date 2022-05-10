import { ReactNode, useState } from "react";
import * as React from "react";
import { BsSticky } from "react-icons/bs";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Divider,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  ChevronDownIcon,
  SearchIcon,
  CalendarIcon,
  BellIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

const codes = ["Codigo", "Codigo Dois", "Codigo Tres"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [codeChange, setCodeChange] = useState('');
  const navbarHeight = 12;

  return (
    <>
      <Box shadow={"lg"} bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex
          h={navbarHeight}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={'100%'}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <HStack display={{ base: "none", md: "flex" }} spacing={8} alignItems={"center"}>
              <Image
                src="https://englobasistemas.com.br/assets/images/photos/logoEngloba.png"
                alt="Logo"
                h={19}
              />

              {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Text>oioioioi</Text>
            </HStack> */}
              <Divider h={navbarHeight} orientation="vertical" />
            </HStack>
            <HStack spacing={0} alignItems={"center"}>
              <Menu>
                <MenuButton
                  p={6}
                  h={navbarHeight}
                  variant={"outlined"}
                  as={Button}
                >
                  <HamburgerIcon boxSize={8} />
                </MenuButton>
                <MenuList>
                  <MenuItem>faça isso</MenuItem>
                  <MenuItem>faça aquilo</MenuItem>
                  <MenuItem>faça outra coisa</MenuItem>
                </MenuList>
              </Menu>
              <Divider h={navbarHeight} orientation="vertical" />
            </HStack>
            <Box p={6} display={{ base: "none", md: "flex" }} flexDirection={"row"}>
              <Menu>
                <MenuButton
                  borderRightRadius="0"
                  h={navbarHeight - 4}
                  as={Button}
                  variant="outlined"
                  rightIcon={<ChevronDownIcon color={"grey"} />}
                  border="1px solid grey"
                >
                  <Text color={"grey"} fontSize="xs">
                    {codeChange == '' ? codes[0] : codeChange}
                  </Text>
                </MenuButton>
                <MenuList>
                  {codes.map((code) => (
                    <MenuItem onClick={() => setCodeChange(code)}>{code}</MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <InputGroup w={300} size={"sm"}>
                <Input
                  borderLeftRadius="0"
                  borderRadius={10}
                  focusBorderColor={"grey"}
                  placeholder="Pesquisar..."
                />
                <InputRightElement children={<SearchIcon color={"grey"} />} />
              </InputGroup>
            </Box>
          </Box>

          <HStack>
            <HStack marginRight={4} spacing={4}>
              <IconButton
                variant={"ghost"}
                aria-label="calendario"
                icon={<CalendarIcon boxSize={7} />}
              />
              <IconButton
                variant={"ghost"}
                aria-label="notas"
                icon={<Icon boxSize={7} as={BsSticky} />}
              />
              <IconButton
                variant={"ghost"}
                aria-label="notificacoes"
                icon={<BellIcon boxSize={7} />}
              />
              <IconButton
                variant={"ghost"}
                aria-label="ajuda"
                icon={<QuestionIcon boxSize={7} />}
              />
            </HStack>

            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  rightIcon={<ChevronDownIcon />}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://media.istockphoto.com/photos/platypus-ornithorhynchus-anatinus-close-up-of-beak-australia-picture-id1254528575?s=612x612"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>opção 1</MenuItem>
                  <MenuItem>opção 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>deslogar</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
