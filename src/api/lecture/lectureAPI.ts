import axios from "axios";
import { Lecture, PatchLecture } from "../../interface/Curriculainterface";
import { BASE_URL } from "../BASE_URL";

// 토큰 가져오기
const userData = localStorage.getItem("auth");
const token = userData ? JSON.parse(userData).token : null;

// 강의 상세 조회
export const getLectureDetailApi = async (lectureId: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/lectures/${lectureId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data: Lecture = {
    lecture_id: response.data.lecture_id,
    lecture_title: response.data.lecture_title,
    lecture_order: response.data.lecture_order,
    lecture_start_time: response.data.lecture_start_time,
  };

  return data;
};

// 강의 상세 업데이트
export const patchLectureDetailApi = async (lectureData: PatchLecture) => {
  // 강의 id 추출
  const lectureId = lectureData.lecture_id;

  // 강의 수정 폼
  const updateLectureData = {
    lecture_title: lectureData.lecture_title,
    lecture_start_time: lectureData.lecture_start_time,
  };
  const response = await axios.patch(
    `${BASE_URL}/api/v1/lectures/${lectureId}`,
    updateLectureData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// 강의 시작하기
export const startLecture = async (lectureId: number) => {
  const response = await axios.patch(
    `${BASE_URL}/api/v1/lectures/start/${lectureId}`
  );
  return response.data;
};

// Fetch final lecture details
export const fetchFinalLectureDetails = async (lectureId: number) => {
  const response = await axios.get(
    `${BASE_URL}/api/v1/lectures/final/${lectureId}`
  );
  return response.data;
};

// Check if student attended the lecture
export const checkLectureAttendance = async (lectureId: number) => {
  const response = await axios.get(
    `${BASE_URL}/api/v1/lectures/check/${lectureId}`
  );
  return response.data;
};
