import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "/home/crocolisco/Documentos/projetos/react-app-teste/src/styles/carousel.css";

export default function CarouselFunc() {
  const data = [
    {
      date: "27/04",
      quantidade: 400,
      volumes: 600,
      pedidos: 800,
      produtos: 1000,
    },
    {
      date: "28/04",
      quantidade: 600,
      volumes: 600,
      pedidos: 800,
      produtos: 1000,
    },
    {
      date: "29/04",
      quantidade: 200,
      volumes: 100,
      pedidos: 500,
      produtos: 345,
    },
    {
      date: "30/04",
      quantidade: 100,
      volumes: 400,
      pedidos: 500,
      produtos: 445,
    },
  ];
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
    <Carousel
      showStatus={false}
      showArrows={true}
      focusOnSelect={true}
      centerMode={true}
      responsive={responsive}
      //afterChange={function (previousSlide, _ref) {}}
      slidesToSlide={2}
      thumbWidth={100}
    >
      {data.map((item) => {
        return (
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 70,
              left: 70,
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
        );
      })}
    </Carousel>
  );
}
