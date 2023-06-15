import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { AiFillFileImage, AiFillInstagram } from "react-icons/ai";

const Schedule = ({ text, img, id, date, month, year }) => {
  return (
    <Box w="50%">
      <Tooltip
        hasArrow
        label={
          <Box>
            <Image
              ml="20px"
              w="200px"
              h="160px"
              mb="50px"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              borderRadius="5px"
              src={img}
              alt=""
            />
          </Box>
        }
        placement="right"
        bg="white"
        textAlign="center"
        borderRadius="10px"
        px="20px"
        py="30px"
        w="300px"
      >
        <Flex
          mt="3px"
          h="30px"
          pt="5px"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius="10px"
          alignItems="center"
          justifyContent="center"
        >
          <AiFillFileImage size="20px" />
          <Text fontSize="10px" fontWeight="bold" ml="5px">
            12:00 PM
          </Text>
          <AiFillInstagram size="20px" />
        </Flex>
      </Tooltip>
    </Box>
  );
};

export default Schedule;
