import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
const Template3 = ({data}) => {

  let res;
  if(data.iframesrc) {
    let a = data.iframesrc;
    let b= "embed/"
  
    res = a.substr(0, 24) + b + a.substr(24);
  }


  return (
    <Box className="main">
      <Box className="head">
        <Box className="head-div">
          <Box display="flex" justifyContent="center">
            <Image
              display="block"
              boxSize="100px"
              objectFit="cover"
              borderRadius="50%"
              src={data.image1src}
              alt="main logo"
            />
          </Box>
          <Heading color="white">{data.heading1content}</Heading>
          <Text color="white">{data.text1content}</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
      <a target={"_blank"} href={data.button1link}>
        <Button
          colorScheme="orange"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button1content}
        </Button>
        </a>
      </Box>
      <Box className="description1">
        <Text>
          {data.descriptioncontent}
        </Text>
      </Box>
      <Box width="380px" margin="auto">
        <Image
          src={data.image2src}
          alt="mid"
          borderRadius="10px"
        />
      </Box>
      <Box>
      <a target={"_blank"} href={data.button2link}>
        <Button
          colorScheme="orange"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button2content}
        </Button>
        </a>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src={data.image3src}
          alt="mid"
          borderRadius="10px"
        />
        <Text>{data.text3content}</Text>
      </Box>
      <Box className="description1">
        <Text>
          {data.description2content}
        </Text>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src={data.image4src}
          alt="mid"
          borderRadius="10px"
        />
        <Text>{data.text4content}</Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={res}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
};

export default Template3;
