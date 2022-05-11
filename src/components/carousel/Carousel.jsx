import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import chartData from "./charts.js";

export default function CarouselFunc() {
  const [oneDay, setOneDay] = useState(false);
  const [sevenDays, setSevenDays] = useState(false);
  const [fifteenDays, setFifteenDays] = useState(false);
  const [thirtyOneDays, setThirtyOneDays] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 0.5,
    },
  };
  return (
    <>
      <Center p={4} display={"flex"} flexDirection={"column"}>
        <Heading size="md">Emissões</Heading>
        <Text color="gray.500" isTruncated fontSize={16}>
          Quantidade de pedidos: 250 / Quantidade de volumes: 250
        </Text>
      </Center>

      <Box w={{ base: "none", md: "400px", lg: "500px" }}>
        <Carousel
          showStatus={false}
          showArrows={true}
          focusOnSelect={true}
          centerMode={true}
          centerSlidePercentage={100}
          responsive={responsive}
          //afterChange={function (previousSlide, _ref) {}}
          slidesToSlide={1}
          minWidth={500}
        >
          {chartData.map((item) => {
            return (
              <BarChart
                width={500}
                height={300}
                data={item}
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Legend />
                <Bar
                  type="monotone"
                  name="Quantidade"
                  dataKey="quantidade"
                  fill="blue"
                />
                <Bar
                  name="Quantidade de volumes"
                  dataKey="quantidade_de_volumes"
                  fill="#ADD8E6"
                />
                <Bar
                  name="Quantidade de pedidos recebidos"
                  dataKey="quantidade_de_volumes_recebidos"
                  fill="#ff66be"
                />
                <Bar
                  name="Quantidade de volumes recebidos"
                  dataKey="quantidade_de_volumes_recebidos"
                  fill="pink"
                />
              </BarChart>
            );
          })}
        </Carousel>
      </Box>

      <Box
        marginLeft={[0, -16]}
        width={800}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexWrap= {['wrap', 'wrap', 'nowrap']}
      >
        <Text w={[80, 16]} fontSize={16}>
          Gráfico :{" "}
        </Text>
        <Select w={[800, 140]} marginRight={4} size={"xs"} placeholder="Emitidos">
          <option value="option1">Recebidos</option>
          <option value="option2">Quantidade</option>
          <option value="option3">Volumes</option>
        </Select>
        <Text w={[80, 16]} fontSize={16}>
          Intervalo :{" "}
        </Text>
        <Select w={[800, 150]} marginRight={4} size={"xs"} placeholder="10 segundos">
          <option value="option1">20 segundos</option>
          <option value="option2">30 segundos</option>
          <option value="option3">1 segundo</option>
        </Select>
        <Text w={[80, 16]} fontSize={16}>
          Período :
        </Text>
        <ButtonGroup size={"xs"} isAttached variant="outline">
          <Button
            bgColor={oneDay ? "#ADD8E6" : "white"}
            onClick={() => {
              setThirtyOneDays(false);
              setOneDay(true);
              setFifteenDays(false);
              setSevenDays(false);
            }}
            mr="-px"
          >
            1 dia
          </Button>
          <Button
            bgColor={sevenDays ? "#ADD8E6" : "white"}
            onClick={() => {
              setSevenDays(true);
              setOneDay(false);
              setFifteenDays(false);
              setThirtyOneDays(false);
            }}
            mr="-px"
          >
            7 dias
          </Button>
          <Button
            bgColor={fifteenDays ? "#ADD8E6" : "white"}
            onClick={() => {
              setThirtyOneDays(false);
              setOneDay(false);
              setFifteenDays(true);
              setSevenDays(false);
            }}
            mr="-px"
          >
            15 dias
          </Button>
          <Button
            bgColor={thirtyOneDays ? "#ADD8E6" : "white"}
            onClick={() => {
              setSevenDays(false);
              setOneDay(false);
              setFifteenDays(false);
              setThirtyOneDays(true);
            }}
            mr="-px"
          >
            31 dias
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
