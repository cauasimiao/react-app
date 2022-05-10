import "./App.css";
import WithAction from "./components/Navbar";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsTruck } from "react-icons/bs";
import { GiChart, GiDatabase } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Carousel } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as React from "react";
import CarouselFunc from "./components/Carousel";

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      {/* NAVBAR */}

      <WithAction />

      {/* ACTIONS */}

      <HStack spacing={20}>
        <VStack marginLeft={10} marginTop={30}>
          <HStack spacing={7}>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon marginTop={4} h={70} boxSize={50} as={BsTruck}></Icon>
              <Text h={70} fontSize={18}>
                Operações
              </Text>
            </VStack>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon marginTop={4} h={70} boxSize={50} as={GiChart}></Icon>
              <Text h={70} fontSize={18}>
                Gestão
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={7}>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon
                marginTop={4}
                h={70}
                boxSize={50}
                as={MdOutlineAttachMoney}
              ></Icon>
              <Text h={70} fontSize={18}>
                Financeiro
              </Text>
            </VStack>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon marginTop={4} h={70} boxSize={50} as={VscTools}></Icon>
              <Text h={70} fontSize={18}>
                Ferramentas
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={7}>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon marginTop={4} h={70} boxSize={50} as={GiDatabase}></Icon>
              <Text h={70} fontSize={18}>
                Integrações
              </Text>
            </VStack>
            <VStack
              _hover={{ bg: useColorModeValue("gray.100") }}
              as={"button"}
              spacing={4}
              shadow={"lg"}
              h={140}
              w={190}
            >
              <Icon marginTop={4} h={70} boxSize={50} as={FiSettings}></Icon>
              <Text h={70} fontSize={18}>
                Configurações
              </Text>
            </VStack>
          </HStack>
        </VStack>{" "}
        {/* CHART */}
        <Box w={'40%'}>
          <CarouselFunc />
        </Box>
        {/* <Box>
          <Center>
            <Text fontSize={32}>Emissões</Text>
          </Center>

          <Center paddingBottom={4}>
            <Text fontSize={16}>
              Quantidade de pedidos: 250 / Quantidade de volumes: 250
            </Text>
          </Center>

          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="quantidade" fill="gray" />
            <Bar dataKey="volumes" fill="blue" />
            <Bar dataKey="pedidos" fill="pink" />
            <Bar dataKey="produtos" fill="green" />
          </BarChart>
        </Box> */}
      </HStack>
    </>
  );
}

export default App;
