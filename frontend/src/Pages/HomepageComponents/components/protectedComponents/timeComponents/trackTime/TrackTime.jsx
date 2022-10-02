import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { getTimeAPI, postTimeAPI } from "../../../../store/timeReducer/time.action";

export const TrackTime = ({dateData}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const {timeData} = useSelector((state)=> state.time);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  
  const onhandleSubmit = (e) => {
    e.preventDefault();
    // console.log({...data, ...dateData});
    dispatch(postTimeAPI({...data, ...dateData}));
    onClose();
  };

  useEffect(()=> {
    dispatch(getTimeAPI());
  }, [dispatch]);

  return (
    <>
      <Button
        onClick={onOpen}
        fontSize="45"
        p="8"
        marginLeft="-20"
        variant="green"
        bgColor="green"
        color="#fff"
      >
        <IoMdAdd />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center' fontSize='15'>New time entry for Sunday,28 Aug</ModalHeader>
          

          <ModalBody>
            <form onSubmit={onhandleSubmit}>
              <Text>Project / Task</Text>
              <Select onChange={handleChange} name='client' placeholder="Example Client" mb='2'>
                {timeData.map((el)=> (
                  <option key={el.id} value={`${el.client}`} >{el.client}</option>
                ))}               
              </Select>

              <Select onChange={handleChange} name='design' placeholder="Design" mb='2'>               
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Programming">Programming</option>                
                <option value="Project Managment">Project Managment</option>                
                <option value="Business Development">Business Development</option>                
              </Select>

              <Flex justify="space-between" align='center'>
                <textarea onChange={handleChange} name="optionaldata" cols="30" rows="3" placeholder="Notes (optional)" ></textarea>
                <Input onChange={handleChange} name='stoptime' fontSize='4xl' w='25%' h='20' textAlign='right' type="number" placeholder="0:00" />
              </Flex>
           

            <Flex justify="space-between" align="center" p='2'>
              <Box>
                <Button type='submit' ml='-2' mr='2' variant='green' color='#fff' bgColor='green'>Start timer</Button>
                <Button variant='outline' onClick={onClose}>Cancel</Button>
              </Box>
              <Link color='blue'>Pull in a calendar event</Link>
            </Flex>

            </form>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};
