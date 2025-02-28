import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaPencilAlt, FaHistory } from "react-icons/fa";
import ProfileLectureHistory from "../../components/student/ProfileLectureHistory";
// import TeacherUpdateMyInfo from "../../components/teacher/TeacherUpdateMyInfo";
import { useNavigate } from "react-router-dom";
import TeacherMyInfo from "../../components/teacher/teacherMyInfo/TeacherMyInfo";
import TeacherMyCurricula from "../../components/teacher/teacherMyLecture/TeacherMyCurricula";

// 선생님 페이지
const TeacherProfilePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();
  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };
  return (
    <Box flex="3" className="p-2 bg-Beige shadow relative">
      <Tabs orientation="vertical">
        <Flex>
          <TabList
            className="w-52 border-r-2 font-semibold flex flex-col align-middle items-center p-5 min-h-screen"
            sx={{ borderRight: "2px solid #D4BDAC" }}
          >
            <Tab
              className={`my-2 text-lg p-3 sticky top-[4rem] ${
                selectedTab === 0
                  ? "bg-orange-200 text-white rounded-3xl"
                  : "text-lightNavy hover:text-hoverNavy"
              } flex-col`}
              onClick={() => handleTabClick(0)}
            >
              <FaPencilAlt className="size-8 my-2" />
              <h2>내 커리큘럼</h2>
            </Tab>
            <Tab
              className={`my-2 text-lg p-3 sticky top-[11rem] ${
                selectedTab === 1
                  ? "bg-orange-200 text-white rounded-3xl"
                  : "text-lightNavy hover:text-hoverNavy"
              } flex-col`}
              onClick={() => handleTabClick(1)}
            >
              <FaHistory className="size-8 my-2" />
              <h2>강의 히스토리</h2>
            </Tab>
            <Tab
              className={`my-2 text-lg p-3 sticky top-[18rem] ${
                selectedTab === 2
                  ? "bg-orange-200 text-white rounded-3xl"
                  : "text-lightNavy hover:text-hoverNavy"
              } flex-col`}
              onClick={() => handleTabClick(2)}
            >
              <CgProfile className="size-8 my-2" />
              <h2>내 정보</h2>
            </Tab>
            <Tab className="my-2 text-lg p-3 sticky top-[25rem] flex-col">
              <Button
                onClick={() => {
                  navigate("/lecture/signup");
                }}
                className="p-3 bg-red-200 rounded-md shadow-md text-white hover:bg-red-300"
              >
                커리큘럼 생성
              </Button>
            </Tab>
          </TabList>

          <TabPanels className="p-3">
            <TabPanel>
              <TeacherMyCurricula />
            </TabPanel>
            <TabPanel>
              <ProfileLectureHistory />
            </TabPanel>
            <TabPanel>
              <TeacherMyInfo />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default TeacherProfilePage;
