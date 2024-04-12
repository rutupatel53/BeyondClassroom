import React from "react";
import { Box, List, ListItem, Text } from "@chakra-ui/react";

const AnnouncementList = ({ announcements }) => (
  <Box className="rounded-md border-[#5C2310] border-[8px] h-[300px] mr-1 ml-1  md:border-[16px] mt-5 mb-5 md:ml-48 md:mr-48 md:h-[500px] bg-[#158366]">
    <div className="flex items-center justify-center h-full">
      <List className=" text-white text-xl md:text-4xl">
        {announcements.map((announcement, index) => (
          <ListItem key={index} mb="2" pl="4">
            <p>{announcement}</p>
          </ListItem>
        ))}
      </List>
    </div>
  </Box>
);

export default AnnouncementList;
