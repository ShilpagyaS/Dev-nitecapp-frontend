import Breadcrumb from '@/components/Breadcrumb'
import LiberaryStartScrreen from '@/components/Learn/Udemy Learn Section/LiberaryStartScrreen'
import { EditorModuleContentPreview } from '@/components/modal/editorModal'
import { AddChapter, AddContentEditor, AddDetails, AddModule, AddModuleContent, EditChapter, EditCourse, EditCourseUploadCourseDetail, EditDetails, EditModule, EditModuleContent, VideoPreview } from '@/components/modal/LearnModals'
import { AddOneQuestion, EditOneQuestion } from '@/components/modal/Quizmodal'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import { emptycourses, getCoursesDetail } from '@/store/slices/learnslice'
import AdminAcordion from '@/utils/Accordian/AdminAcordion'
import NewChapterAccordiam from '@/utils/Accordian/New Accordian/NewChapterAccordiam'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const items = [
    {
        title: 'Introduction and basics of bar ',
        // content: 'Content for Item 1',
        type: 'chapter',
        totaldocuments: 4,
        videoTime: '06.35',
        items: [
            {
                title: 'Module Item 1',
                type: 'module',
                totaldocuments: 4,
                videoTime: '06.35',
                // content: 'Content for Nested Item 1',
                items: [
                    {
                        title: 'Nested Video',
                        type: 'video',
                        videoTime: '06.35',
                        content: 'Content for Module Item 1 Video',
                    },
                    {
                        title: 'Nested content',
                        type: 'content',
                        content: 'Content for  Module Item 1 Content',
                    },
                    {
                        title: 'Nested Content 2',
                        type: 'content',
                        content: 'Content for Nested Nested Item 2',
                    },
                    {
                        title: 'Nested Quiz',
                        type: 'quiz',
                        content: 'Content for Nested Nested Item 2 QUIZ', // quiz array
                    },
                ],
            },
            {
                title: 'Module Item 2',
                type: 'module',
                content: 'Content for Nested Item 2',
            },
        ],
    },
    {
        title: 'Ingredients Mixup',
        content: 'Content for Item 2',
        type: 'chapter',
    },
    {
        title: 'Item 3',
        // content: 'Content for Item 3',
        totaldocuments: 4,
        videoTime: '06.35',
        type: 'chapter',
        items: [
            {
                title: 'Nested Item 3',
                content: 'Content for Nested Item 3',
                type: 'module',
                items: [
                    {
                        title: 'Nested Nested Item 1',
                        type: 'video',
                        videoTime: '06.35',
                        // content: 'Content for Nested Nested Item 1',
                    },
                    {
                        title: 'Nested Nested Item 2',
                        type: 'content',
                        // content: 'Content for Nested Nested Item 2',
                    },
                ],
            },
        ],
    },
]
// const courseDetail = {
//     course_id: 1,
//     name: "Psychology of Hospitality",
//     description: "demo image",
//     image: "",
//     instructor_name: 'mac',
//     time_estimate: 32767,
//     course_tags: "",
//     points_awarded: 0,
//     brand_id: 1,
//     isActive: true,
//     createdAt: "2023-05-15T09:28:07.000Z",
//     updatedAt: "2023-05-15T09:28:07.000Z",
//     contents: [
//         {
//             course_content_id: 2,
//             course_id: 1,
//             content: "testing dev...",
//             isActive: false,
//             createdAt: "2023-06-28T07:27:12.000Z",
//             updatedAt: "2023-07-05T13:19:28.000Z"
//         },
//         {
//             course_content_id: 2,
//             course_id: 1,
//             content: "testing dev...",
//             isActive: false,
//             createdAt: "2023-06-28T07:27:12.000Z",
//             updatedAt: "2023-07-05T13:19:28.000Z"
//         },
//         {
//             course_content_id: 2,
//             course_id: 1,
//             content: "testing dev...",
//             isActive: false,
//             createdAt: "2023-06-28T07:27:12.000Z",
//             updatedAt: "2023-07-05T13:19:28.000Z"
//         },
//         {
//             course_content_id: 2,
//             course_id: 1,
//             content: "testing dev...",
//             isActive: false,
//             createdAt: "2023-06-28T07:27:12.000Z",
//             updatedAt: "2023-07-05T13:19:28.000Z"
//         },
//         {
//             course_content_id: 2,
//             course_id: 1,
//             content: "testing dev...",
//             isActive: false,
//             createdAt: "2023-06-28T07:27:12.000Z",
//             updatedAt: "2023-07-05T13:19:28.000Z"
//         },
//     ],
//     chapters: [
//         {
//             courseChapter_id: 19,
//             name: "UI chapter edit",
//             image:
//                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1685996752338-beach1.png.webp",
//             order: 0,
//             description: "desc\nfrom ui\ne",
//             isActive: true,
//             createdAt: "2023-06-05T16:17:12.000Z",
//             modules: [
//                 {
//                     courseModule_id: 9,
//                     name: "Module from Ui1",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-06-05T16:38:19.000Z",
//                     modules_questions: [],
//                     page_and_video_list: [
//                         {
//                             course_module_page_id: 5,
//                             title: "New Page",
//                             description: "DESC",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1686059263349-sales.png.webp",
//                             isActive: true,
//                             createdAt: "2023-06-06T13:47:43.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 5,
//                                     type_id: 3,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...3",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:36.000Z",
//                                     updatedAt: "2023-06-29T09:45:36.000Z"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             courseChapter_id: 2,
//             name: "Building Foundations",
//             image: "",
//             order: 0,
//             description: "testing ...2",
//             isActive: true,
//             createdAt: "2023-05-15T10:26:16.000Z",
//             modules: [
//                 {
//                     courseModule_id: 4,
//                     name: "What makes a good experience?",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-05-16T12:59:50.000Z",
//                     modules_questions: [],
//                     page_and_video_list: []
//                 },
//                 {
//                     courseModule_id: 3,
//                     name: "How to execute a good experience ",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-05-16T12:59:02.000Z",
//                     modules_questions: [],
//                     page_and_video_list: [
//                         {
//                             course_module_videos_id: 2,
//                             video_url: "https://www.youtube.com/watch?v=jCGMoNCtPx0&feature=youtu.be",
//                             title: "testing--Video",
//                             isActive: true,
//                             createdAt: "2023-05-31T09:09:48.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 4,
//                                     type_id: 2,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...3",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:24.000Z",
//                                     updatedAt: "2023-06-29T09:45:24.000Z"
//                                 },
//                                 {
//                                     module_question_id: 3,
//                                     type_id: 2,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...1",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:18.000Z",
//                                     updatedAt: "2023-06-29T09:45:18.000Z"
//                                 }
//                             ]
//                         },
//                         {
//                             course_module_page_id: 1,
//                             title: "........testing0........Page",
//                             description: "testing Devenloper",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1685564801172-1681286922907-kukku-01.png",
//                             isActive: true,
//                             createdAt: "2023-05-31T20:29:56.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 6,
//                                     type_id: 1,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "....testing ....page ...question",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-30T11:50:20.000Z",
//                                     updatedAt: "2023-06-30T11:50:20.000Z"
//                                 },
//                                 {
//                                     module_question_id: 2,
//                                     type_id: 1,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...1",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:00.000Z",
//                                     updatedAt: "2023-06-29T09:45:00.000Z"
//                                 }
//                             ]
//                         },
//                         {
//                             course_module_page_id: 3,
//                             title: "Module Page from Ui",
//                             description: "desc",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1686037847612-sales.png.webp",
//                             isActive: true,
//                             createdAt: "2023-06-06T07:50:48.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 5,
//                                     type_id: 3,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...3",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:36.000Z",
//                                     updatedAt: "2023-06-29T09:45:36.000Z"
//                                 }
//                             ]
//                         },
//                         {
//                             course_module_page_id: 9,
//                             title: "......1......1.......",
//                             description: "........",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1685564801172-1681286922907-kukku-01.png",
//                             isActive: true,
//                             createdAt: "2023-07-06T12:16:34.000Z",
//                             modules_questions: []
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             courseChapter_id: 1,
//             name: "Understanding Customers",
//             image: "",
//             order: 0,
//             description: "testing ...1",
//             isActive: true,
//             createdAt: "2023-05-15T10:25:58.000Z",
//             modules: [
//                 {
//                     courseModule_id: 10,
//                     name: "New Module title",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-06-06T14:42:37.000Z",
//                     modules_questions: [],
//                     page_and_video_list: []
//                 },
//                 {
//                     courseModule_id: 8,
//                     name: "Module from Ui",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-06-05T16:38:04.000Z",
//                     modules_questions: [],
//                     page_and_video_list: [
//                         {
//                             course_module_page_id: 4,
//                             title: "New Module Page",
//                             description: "desc from ui edit",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1686039147023-beach2.png.webp",
//                             isActive: true,
//                             createdAt: "2023-06-06T08:06:08.000Z",
//                             modules_questions: []
//                         },
//                         {
//                             course_module_page_id: 6,
//                             title: "new demo page",
//                             description: "edsc",
//                             image: "",
//                             isActive: true,
//                             createdAt: "2023-06-06T14:42:17.000Z",
//                             modules_questions: []
//                         }
//                     ]
//                 },
//                 {
//                     courseModule_id: 2,
//                     name: "Who is our target customer?",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-05-16T12:54:07.000Z",
//                     modules_questions: [
//                         {
//                             module_question_id: 7,
//                             type_id: 8,
//                             module_id: 2,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "....testing ....page ...question",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-07-04T06:33:15.000Z",
//                             updatedAt: "2023-07-04T06:33:15.000Z"
//                         }
//                     ],
//                     page_and_video_list: [
//                         {
//                             course_module_page_id: 8,
//                             title: "........2........",
//                             description: "........",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1685564801172-1681286922907-kukku-01.png",
//                             isActive: true,
//                             createdAt: "2023-07-04T06:30:49.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 7,
//                                     type_id: 8,
//                                     module_id: 2,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "....testing ....page ...question",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-07-04T06:33:15.000Z",
//                                     updatedAt: "2023-07-04T06:33:15.000Z"
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     courseModule_id: 1,
//                     name: "Why should you care?",
//                     order: 0,
//                     image: "",
//                     points_awarded: 0,
//                     isActive: true,
//                     createdAt: "2023-05-16T12:47:38.000Z",
//                     modules_questions: [
//                         {
//                             module_question_id: 6,
//                             type_id: 1,
//                             module_id: 1,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "....testing ....page ...question",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-06-30T11:50:20.000Z",
//                             updatedAt: "2023-06-30T11:50:20.000Z"
//                         },
//                         {
//                             module_question_id: 5,
//                             type_id: 3,
//                             module_id: 1,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "testing page question...3",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:45:36.000Z",
//                             updatedAt: "2023-06-29T09:45:36.000Z"
//                         },
//                         {
//                             module_question_id: 4,
//                             type_id: 2,
//                             module_id: 1,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "testing page question...3",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:45:24.000Z",
//                             updatedAt: "2023-06-29T09:45:24.000Z"
//                         },
//                         {
//                             module_question_id: 3,
//                             type_id: 2,
//                             module_id: 1,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "testing page question...1",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:45:18.000Z",
//                             updatedAt: "2023-06-29T09:45:18.000Z"
//                         },
//                         {
//                             module_question_id: 2,
//                             type_id: 1,
//                             module_id: 1,
//                             type: "page",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                             question: "testing page question...1",
//                             option1: "testing option...1",
//                             option2: "testing option...2",
//                             option3: "testing option...3",
//                             option4: "testing option...4",
//                             answer: "testing option...3",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:45:00.000Z",
//                             updatedAt: "2023-06-29T09:45:00.000Z"
//                         }
//                     ],
//                     page_and_video_list: [
//                         {
//                             course_module_page_id: 7,
//                             title: "........",
//                             description: "........",
//                             image:
//                                 "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1685564801172-1681286922907-kukku-01.png",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:51:13.000Z",
//                             modules_questions: []
//                         },
//                         {
//                             course_module_videos_id: 3,
//                             video_url: "testing Vodeo  1",
//                             title: "Vedio testing 1",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:59:46.000Z",
//                             modules_questions: [
//                                 {
//                                     module_question_id: 5,
//                                     type_id: 3,
//                                     module_id: 1,
//                                     type: "page",
//                                     image:
//                                         "https://nitecapp-us-east-1-598437249266.s3.amazonaws.com/1682921359757-Daiquiri.webp",
//                                     question: "testing page question...3",
//                                     option1: "testing option...1",
//                                     option2: "testing option...2",
//                                     option3: "testing option...3",
//                                     option4: "testing option...4",
//                                     answer: "testing option...3",
//                                     isActive: true,
//                                     createdAt: "2023-06-29T09:45:36.000Z",
//                                     updatedAt: "2023-06-29T09:45:36.000Z"
//                                 }
//                             ]
//                         },
//                         {
//                             course_module_videos_id: 4,
//                             video_url: "testing Vodeo  2",
//                             title: "Testing Dev",
//                             isActive: true,
//                             createdAt: "2023-06-29T09:59:51.000Z",
//                             modules_questions: []
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     count: {
//         chapter: 4,
//         module: 7,
//         pages: 8,
//         videos: 3,
//         question: 6
//     }
// };

function LiberaryUserUdemyDetailPage({ courseId }) {
    const [addDetail, setAddDetails] = useState(false)
    const [editDetail, setEditDetail] = useState(false)
    const [addChapter, setAddChapter] = useState(false)
    const [addModule, setAddModule] = useState(false)
    const [addContent, setAddContent] = useState(false)
    const [editCourse, seteditCourse] = useState(false)
    const [editChapter, seteditChapter] = useState(false)
    const [editModule, seteditModule] = useState(false)
    const [editContent, seteditContent] = useState(false)
    const [videoPreview, setVideoPreviewModal] = useState(false)
    const [pagePreview, setPagePreview] = useState(false)
    const [isQuiz, setisQuiz] = useState(false);
    const [editQuizmodal, seteditQuizmodal] = useState(false);
    const [globalData, setGlobalData] = useState({})
    const [isStartLearning, setStartLearning] = useState(false)
    const { courseDetail } = useSelector((state) => state.learn)
    const [points, setpoints] = useState([])
    const [x, setx] = useState(0)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoursesDetail(courseId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    useEffect(() => {
        console.log(courseDetail);
        if (courseDetail?.contents && courseDetail?.contents.length) {
            setpoints(courseDetail.contents)

        }
    }, [courseDetail])
    useEffect(() => {
        setx(Math.ceil(points.length / 2))
    }, [points])
    function addDetailssunction(item) {
        console.log('Add DEtails');
        setAddDetails(true)
    }
    function editDetailsFunction(item) {
        console.log('Add DEtails');
        setEditDetail(true)
    }
    function editCourseFunction(data) {
        setGlobalData(data)
        console.log('editing course');
        seteditCourse(true)
    }
    function addChapterFunction(item) {
        console.log('adding chapter');
        setAddChapter(true)
    }
    function editChapterFunction(e, item) {
        setGlobalData(item)
        e.stopPropagation();
        console.log('editing chapter');
        seteditChapter(true)
    }
    function addModuleFunction(e, item) {
        e.stopPropagation();
        console.log(item);
        setGlobalData(item)
        console.log('adding Module');
        setAddModule(true)
    }
    function editModuleFunction(e, item) {
        setGlobalData({ ...item, course_id: courseId })
        e.stopPropagation();
        console.log('editing Module');
        seteditModule(true)
    }
    function AddContentFunction(e, item) {
        e.stopPropagation();
        setGlobalData(item)
        console.log('adding Content');
        setAddContent(true)
    }
    function EditContentFunction(e, item) {
        e.stopPropagation();
        console.log(item);
        setGlobalData(item)
        console.log('editing Content');
        seteditContent(true)
    }
    function pagePreviewFunction(e, item) {
        e.stopPropagation();
        setGlobalData({ htmlData: item })
        setPagePreview(true)
    }
    function videoPreviewFunctoin(e, item) {
        e.stopPropagation();
        setGlobalData({ video_url: item })
        setVideoPreviewModal(true)
    }
    function editaQuiz(e, item) {
        e.stopPropagation();
        setGlobalData(item)
        seteditQuizmodal(true)
    }
    function addNewQuiztoContent(e, item) {
        e.stopPropagation();
        setGlobalData(item)
        setisQuiz(true)
    }
    return (
        <>
            {editCourse &&
                <EditCourseUploadCourseDetail
                    isModalOpen={editCourse}
                    onClickCancel={() => { seteditCourse(false) }}
                    title={'Course'}
                    onSave={(data) => { }}
                    data={globalData}
                />
            }
            {addChapter &&
                <AddChapter
                    isModalOpen={addChapter}
                    onClickCancel={() => { setAddChapter(false) }}
                    title={'Chapter'}
                    courseId={courseId}
                    onSave={() => { }}
                />
            }
            {editChapter &&
                <EditChapter
                    isModalOpen={editChapter}
                    onClickCancel={() => { seteditChapter(false) }}
                    title={'Chapter'}
                    onSave={() => { }}
                    data={globalData}
                    courseId={courseId}

                />
            }
            {addModule &&
                <AddModule
                    isModalOpen={addModule}
                    onClickCancel={() => { setAddModule(false) }}
                    courseChapter_id={globalData?.courseChapter_id}
                    courseId={courseId}
                    title={'Module'}
                    onSave={() => { }}
                />
            }
            {editModule &&
                <EditModule
                    isModalOpen={editModule}
                    onClickCancel={() => { seteditModule(false) }}
                    title={'Module'}
                    data={globalData}
                    onSave={() => { }}
                />
            }
            {addContent &&
                <AddModuleContent
                    isModalOpen={addContent}
                    onClickCancel={() => { setAddContent(false) }}
                    title={'Module Content'}
                    data={globalData}
                    courseId={courseId}
                    onSave={() => {

                    }}
                />
            }
            {editContent &&
                <EditModuleContent
                    isModalOpen={editContent}
                    onClickCancel={() => { seteditContent(false) }}
                    title={'Module Content'}
                    data={globalData}
                    courseId={courseId}
                    onSave={() => {

                    }}
                />
            }
            {addDetail &&
                <AddDetails
                    isModalOpen={addDetail}
                    onClickCancel={() => { setAddDetails(false) }}
                    title={'Course Details'}
                    courseId={courseDetail?.course_id}
                    onSave={() => {

                    }}
                />
            }
            {editDetail &&
                <EditDetails
                    isModalOpen={editDetail}
                    onClickCancel={() => { setEditDetail(false) }}
                    title={'Course Details'}
                    courseId={courseDetail?.course_id}
                    data={courseDetail?.contents}
                    onSave={() => {

                    }}
                />
            }
            {videoPreview &&
                <VideoPreview
                    isModalOpen={videoPreview}
                    onClickCancel={() => { setVideoPreviewModal(false) }}
                    title={'Module Content'}
                    data={globalData.video_url}
                    onSave={() => {

                    }}
                />
            }
            {pagePreview &&
                <EditorModuleContentPreview
                    isModalOpen={pagePreview}
                    onClickCancel={() => setPagePreview(false)}
                    data={globalData?.htmlData}
                />
            }
            {
                isQuiz &&
                <AddOneQuestion
                    isModalOpen={isQuiz}
                    onClickCancel={() => setisQuiz(false)}
                    otherdata={globalData}
                    courseId={courseId}
                    onSave={() => { }}
                />
            }
            {
                editQuizmodal &&
                <EditOneQuestion
                    isModalOpen={editQuizmodal}
                    onClickCancel={() => seteditQuizmodal(false)}
                    otherdata={globalData.other}
                    qna={globalData.qna}
                    courseId={courseId}
                />
            }
            {/* {addContent &&
                <AddContentEditor
                    isModalOpen={addContent}
                    onClickCancel={() => { setAddContent(false) }}
                    title={'Module Content'}
                    onSave={() => {

                    }}
                />
            } */}
            <div>
                {/* Banner  */}
                {
                    !isStartLearning &&

                    <>
                        <div className='w-full h-full flex flex-col relative '>
                            <div className=' min-h-[250px] h-full w-full relative '>
                                {
                                    courseDetail?.image ? <>
                                        <Image src={courseDetail?.image} fill className='h-full w-full object-cover' />
                                        <div className='absolute w-full h-full  bg-[#00000087]'>

                                        </div>
                                    </>
                                        :
                                        <Image src={'/asset/nitecappdefault.png'} fill className='h-full w-full object-cover' />
                                }                                {/* <Image src={'/asset/BannerLearnCourse.png'} fill className='h-full w-full object-cover' /> */}
                            </div>
                            <div className='absolute w-full h-full flex flex-col justify-between top-0 bg-transparent p-[20px] pt-[2px]'>
                                <div className='bg-transparent'>

                                    <Breadcrumb />
                                    <p className='text-[22px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                        {courseDetail?.name}
                                    </p>
                                    <p className='text-[16px] text-white font-thin bg-transparent '>
                                        {courseDetail?.description}
                                    </p>
                                </div>
                                <p className='text-[14px] font-Inter text-white font-normal bg-transparent my-[10px]'>
                                    Created By : <span className='text-primary-base bg-transparent'>{courseDetail?.instructor_name}</span>
                                </p>
                                <button
                                    type={'button'}
                                    className={` bg-primary-base text-black h-[40px] flex items-center justify-center rounded-full font-semibold font-Inter  text-[16px] w-[150px]`}
                                    onClick={() => { setStartLearning(true) }}
                                >
                                    Preview
                                </button>
                            </div>
                            <div className="editbutton cursor-pointer flex items-center justify-center bg-primary-base p-2 rounded-full w-fit absolute bottom-0 right-1 " onClick={() => { editCourseFunction({ id: courseDetail?.course_id, name: courseDetail?.name, instructor_name: courseDetail?.instructor_name, desc: courseDetail?.description, img: courseDetail?.image }) }}>
                                <svg width="18" height="18" viewBox="0 0 18 18" className="bg-transparent" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.47275 15.4172H17.25V17.2506H0.75V13.3611L9.825 4.28615L13.7135 8.17648L6.47183 15.4172H6.47275ZM11.1202 2.9909L13.0654 1.04573C13.2373 0.873883 13.4704 0.777344 13.7135 0.777344C13.9566 0.777344 14.1897 0.873883 14.3616 1.04573L16.9548 3.63898C17.1267 3.81088 17.2232 4.044 17.2232 4.28706C17.2232 4.53013 17.1267 4.76325 16.9548 4.93515L15.0097 6.8794L11.1212 2.9909H11.1202Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        {/* What youll learn   */}
                        <div className='min-h-[10px] flex flex-col w-full border border-[#5C5C5C] mt-[20px] p-[25px]'>
                            <div className='flex w-full items-center justify-between'>

                                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                    What you'll learn
                                </p>
                                {/* <ConditionalButton label={'Add / Edit Details'} condition={true} onClickHandler={() => { }} /> */}
                                <div className='flex items-center cursor-pointer' onClick={() => { if (courseDetail?.contents.length > 0) { editDetailsFunction() } else addDetailssunction() }}>

                                    <span className={`bg-transparent mr-[3px]`}>
                                        {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                            <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                        </svg>

                                    </span>
                                    <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add / Edit Details</p>
                                </div>

                            </div>
                            <div className='bulletsPoints grid grid-cols-2'>
                                <div className='w-full flex flex-col'>
                                    {courseDetail?.contents && courseDetail?.contents.length > 0 &&
                                        <>

                                            {
                                                points.slice(0, x).map((bullet) =>
                                                    <div className='w-full flex '>
                                                        <span>
                                                            <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                                        </span>
                                                        <p className='text-white'>
                                                            {bullet.content}
                                                        </p>
                                                    </div>

                                                )
                                            }
                                        </>
                                    }

                                </div>
                                <div className='w-full flex flex-col'>
                                    {courseDetail?.contents && courseDetail?.contents.length > 0 &&
                                        <>
                                            {
                                                points.slice(x).map((bullet) =>
                                                    <div className='w-full flex '>
                                                        <span>
                                                            <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                                        </span>
                                                        <p className='text-white'>
                                                            {bullet.content}
                                                        </p>
                                                    </div>

                                                )
                                            }
                                        </>
                                    }
                                </div>

                            </div>
                        </div>
                        {/* this course include  */}
                        {/* <div className='courseIncludes w-full mt-[20px]'>
                            <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                This course Includes:
                            </p>
                            <div className=' w-full grid grid-cols-3'>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        65.5 hours on-demand video
                                    </p>
                                </div>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        65.5 hours on-demand video
                                    </p>
                                </div>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        65.5 hours on-demand video
                                    </p>
                                </div>
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        65.5 hours on-demand video
                                    </p>
                                </div>

                            </div>
                        </div> */}
                        {/* Accordian */}
                        <div className='w-full mt-[25px] '>
                            <div className='w-full flex items-center justify-between'>

                                <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                                    Course Content
                                </p>
                                <div className='flex items-center cursor-pointer' onClick={() => { addChapterFunction() }}>

                                    <span className={`bg-transparent mr-[3px]`}>
                                        {/* <Image src={'/asset/smallplus.svg'} height={22} width={18} className='bg-transparent' /> */}
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-primary-base'>
                                            <path d="M8.55469 8.70312V5.53646H10.138V8.70312H13.3047V10.2865H10.138V13.4531H8.55469V10.2865H5.38802V8.70312H8.55469ZM9.34635 17.4115C4.97398 17.4115 1.42969 13.8672 1.42969 9.49479C1.42969 5.12242 4.97398 1.57812 9.34635 1.57812C13.7187 1.57812 17.263 5.12242 17.263 9.49479C17.263 13.8672 13.7187 17.4115 9.34635 17.4115ZM9.34635 15.8281C11.0261 15.8281 12.637 15.1609 13.8247 13.9731C15.0124 12.7854 15.6797 11.1745 15.6797 9.49479C15.6797 7.81509 15.0124 6.20418 13.8247 5.01645C12.637 3.82872 11.0261 3.16146 9.34635 3.16146C7.66665 3.16146 6.05574 3.82872 4.86801 5.01645C3.68028 6.20418 3.01302 7.81509 3.01302 9.49479C3.01302 11.1745 3.68028 12.7854 4.86801 13.9731C6.05574 15.1609 7.66665 15.8281 9.34635 15.8281Z" />
                                        </svg>

                                    </span>
                                    <p className='text-[14px] text-primary-base not-italic font-semibold mr-[10px] '>Add chapter</p>
                                </div>
                            </div>
                            {/* <div className='w-full border border-[#404040] '>
                                <AdminAcordion
                                    onEditChapter={(e) => { editChapterFunction(e) }}
                                    onaddContent={(e) => { AddContentFunction(e) }}
                                    onAddmodule={(e) => { addModuleFunction(e) }}
                                    onEditmodule={(e) => { editModuleFunction(e) }}
                                    onEditContent={(e) => { EditContentFunction(e) }}
                                    videoPreviewClick={() => { setVideoPreviewModal(true) }}
                                    addquiz={() => { setisQuiz(true) }}
                                    items={items} />
                            </div> */}
                            <NewChapterAccordiam chapters={courseDetail?.chapters ? courseDetail.chapters : []}
                                onAddmodule={(e, data) => { addModuleFunction(e, data) }}
                                onEditChapter={(e, data) => { editChapterFunction(e, data) }}
                                onEditmodule={(e, data) => { editModuleFunction(e, data) }}
                                onaddContent={(e, data) => { AddContentFunction(e, data) }}
                                onEditContent={(e, data) => { EditContentFunction(e, data) }}
                                videoPreviewClick={(e, data) => { videoPreviewFunctoin(e, data) }}
                                pagePreviewClick={(e, data) => { pagePreviewFunction(e, data) }}
                                addquiz={(e, data) => { addNewQuiztoContent(e, data) }}
                                editaQuiz={(e, data) => { editaQuiz(e, data) }}
                            />


                        </div>
                    </>
                }
                {isStartLearning &&

                    <LiberaryStartScrreen itemsArray={courseDetail?.chapters} isLearn={true} isPreview={true}
                        onCancelClick={() => { setStartLearning(false) }} data={courseDetail} />

                }
            </div>
        </>
    )
}

export default LiberaryUserUdemyDetailPage