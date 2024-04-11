import React from "react";
import { Box, List, ListItem, Text } from "@chakra-ui/react";

const AnnouncementList = ({ announcements }) => (
  <Box className="rounded-md border-[#5C2310]  border-[16px] mt-5 mb-5 ml-48 mr-48 h-[500px] bg-[#158366]">
    <List className="text-center items-center justify-center text-white text-4xl mt-32  gap-2">
      {announcements.map((announcement, index) => (
        <ListItem key={index} mb="2" pl="4">
          <p>{announcement}</p>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default AnnouncementList;
