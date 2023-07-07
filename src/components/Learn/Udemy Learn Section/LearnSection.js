import Breadcrumb from '@/components/Breadcrumb'
import ConditionalButton from '@/components/spec-comp/AdminSpecsComp/Admin-cocktails-detail-page/ConditionalButton'
import React, { useEffect, useState } from 'react'
import UdemyLiberaryBanner from '@/utils/Cards/Learnsection/UdemyLiberaryBanner'
import UdemyLiberaryCourseInfoSection from '@/utils/Cards/Learnsection/UdemyLiberaryCourseInfoSection'
import Image from 'next/image'
import Accordiansection from './Accordiansection'
import LiberaryStartScrreen from './LiberaryStartScrreen'
import ChapterAccordian from '@/utils/Accordian/New Accordian/ChapterAccordian'
import { useDispatch, useSelector } from 'react-redux'
import { emptycourses, getCoursesDetail } from '@/store/slices/learnslice'

function LearnSection({ courseId }) {
    const { courseDetail } = useSelector((state) => state.learn)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoursesDetail(courseId))
        return () => {
            dispatch(emptycourses())
        }
    }, [])
    // const items = [
    //     {
    //         title: 'Introduction and basics of bar ',
    //         // content: 'Content for Item 1',
    //         type: 'chapter',
    //         totaldocuments: 4,
    //         videoTime: '06.35',
    //         items: [
    //             {
    //                 title: 'Module Item 1',
    //                 type: 'module',
    //                 totaldocuments: 4,
    //                 videoTime: '06.35',
    //                 // content: 'Content for Nested Item 1',
    //                 items: [
    //                     {
    //                         title: 'Nested Video',
    //                         type: 'video',
    //                         videoTime: '06.35',
    //                         content: 'Content for Module Item 1 Video', //video url
    //                     },
    //                     {
    //                         title: 'Nested content',
    //                         type: 'content',
    //                         content: 'Content for  Module Item 1 Content', // html string
    //                     },
    //                     {
    //                         title: 'Nested Content 2',
    //                         type: 'content',
    //                         content: 'Content for Nested Nested Item 2',
    //                     },
    //                     {
    //                         title: 'Nested Quiz',
    //                         type: 'quiz',
    //                         content: 'Content for Nested Nested Item 2 QUIZ', // quiz array
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: 'Module Item 2',
    //                 type: 'module',
    //                 content: 'Content for Nested Item 2',
    //             },
    //         ],
    //     },
    //     {
    //         title: 'Ingredients Mixup',
    //         content: 'Content for Item 2',
    //         type: 'chapter',
    //     },
    //     {
    //         title: 'Item 3',
    //         // content: 'Content for Item 3',
    //         totaldocuments: 4,
    //         videoTime: '06.35',
    //         type: 'chapter',
    //         items: [
    //             {
    //                 title: 'Nested Item 3',
    //                 content: 'Content for Nested Item 3',
    //                 type: 'module',
    //                 items: [
    //                     {
    //                         title: 'Nested Nested Item 1',
    //                         type: 'video',
    //                         videoTime: '06.35',
    //                         // content: 'Content for Nested Nested Item 1',
    //                     },
    //                     {
    //                         title: 'Nested Nested Item 2',
    //                         type: 'content',
    //                         // content: 'Content for Nested Nested Item 2',
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ]
    // const courseDetail = {
    //     course_id: 1,
    //     name: "Psychology of Hospitality",
    //     description: "",
    //     image: "",
    //     instructor_name: null,
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
    //                             modules_questions: []
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


    const [isStartLearning, setStartLearning] = useState(false)
    return (
        <div className='h-full w-full'>
            {/* Banner */}
            {
                !isStartLearning &&

                <>
                    <UdemyLiberaryBanner data={courseDetail} startLearncClick={() => { setStartLearning(true) }} />
                    <UdemyLiberaryCourseInfoSection content={courseDetail?.contents ? courseDetail.contents : []} />
                    <div className='courseIncludes w-full mt-[20px]'>
                        <p className='text-[24px] font-Inter text-white font-semibold bg-transparent mb-[10px]'>
                            This course Includes:
                        </p>
                        <div className=' w-full grid grid-cols-3'>
                            {courseDetail?.count?.chapter &&
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {courseDetail?.count?.chapter} Chapters
                                    </p>
                                </div>
                            }
                            {courseDetail?.count?.module &&
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {courseDetail?.count?.module} Modules
                                    </p>
                                </div>
                            }
                            {courseDetail?.count?.pages &&
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {courseDetail?.count?.pages} Documents
                                    </p>
                                </div>
                            }
                            {courseDetail?.count?.videos &&
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {courseDetail?.count?.videos} Videos
                                    </p>
                                </div>
                            }
                            {courseDetail?.count?.question &&
                                <div className='w-full flex '>
                                    <span>
                                        <Image src={'/asset/tickicon.svg'} height={22} width={18} className='mr-[8px]' />
                                    </span>
                                    <p className='text-white'>
                                        {courseDetail?.count?.question} Questions
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                    {/* <Accordiansection arrayItems={items} /> */}
                    <ChapterAccordian chapters={courseDetail?.chapters ? courseDetail.chapters : []} />
                </>
            }
            {isStartLearning &&

                <LiberaryStartScrreen itemsArray={courseDetail?.chapters} isLearn={true} />

            }
        </div>
    )
}

export default LearnSection