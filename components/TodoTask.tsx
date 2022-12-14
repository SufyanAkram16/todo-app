import React from "react";
import {
  IconButton,
  Stack,
  Box,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { taskType } from "./TodoCard";

 export interface todoProps {
  task: taskType;
  deleteTask(task: taskType): void;
  onUpdateHandler(item: taskType): void;
  completeHandler(item: taskType): void;
}

export default function TodoTask({
  task,
  deleteTask,
  onUpdateHandler,
  completeHandler,
}: todoProps) {
  return (
    <>
      <Stack mt={"4"} spacing={"3"} bg={"white"} rounded={"md"} w={"100%"}>
        <Box>
          <Flex alignItems={"center"} justifyContent="center">
            <Text h="8" fontSize="2xl" m={2}>
              {task.name}
            </Text>
            <Spacer />
            <Spacer />
            <IconButton
              bg={"blue1.400"}
              alignSelf={"end"}
              rounded="2xl"
              size={"sm"}
              aria-label="check-icon"
              m={2}
              p={1}
              icon={<CheckIcon color={"blue"} />}
              onClick={() => {
                completeHandler(task);
              }}
            />

            <IconButton
              bg={"blue1.400"}
              alignSelf={"end"}
              rounded="3xl"
              size={"sm"}
              aria-label="check-icon"
              m={2}
              p={1}
              icon={<CloseIcon color={"blue"} />}
              onClick={() => {
                deleteTask(task);
              }}
            />

            <IconButton
              bg={"blue1.400"}
              alignSelf={"end"}
              rounded="3xl"
              size={"xsm"}
              aria-label="check-icon"
              m={2}
              p={2}
              icon={
                <EditIcon
                  boxSize={"4"}
                  color={"blue"}
                  onClick={() => onUpdateHandler(task)}
                />
              }
            />
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
