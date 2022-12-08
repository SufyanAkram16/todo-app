import React from "react";
import {
  IconButton,
  Stack,
  Box,
  Flex,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {taskType} from './TodoCard'
import TodoCard from "./TodoCard";

interface todoProps {
  task: taskType;
  deleteTask(id:number): void;
  onUpdateHandler(item:taskType): void
}

export default function TodoTask({ task, deleteTask, onUpdateHandler }: todoProps) {
  return (
    <>
      <Stack mt={"4"} spacing={"3"} bg={"white"} >
        <Box>
          <Flex alignItems={"center"} justifyContent="center" w={"100%"}>
            <Text h="8" fontSize="2xl" w="100%" m={2}>
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
              onClick={()=>{
                deleteTask(task.id)
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
              icon={<EditIcon boxSize={"4"} color={"blue"} onClick={()=>onUpdateHandler(task)} />}
            />
          </Flex>
        </Box>
      </Stack>
    </>
  );
}
