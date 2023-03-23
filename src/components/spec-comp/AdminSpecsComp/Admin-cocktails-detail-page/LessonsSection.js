import useMediaQuery from '@/Hooks/useMediaQuery';
import { RectangularCard } from '@/utils/SpecCards';
import React from 'react'
import ButtonCombo from './ButtonCombo';

function LessonsSection({ lesson }) {
    const isMobile = useMediaQuery("(max-width: 414px)");
    const isTablet = useMediaQuery("(max-width: 786px)");
    return (
        <div className="lessons-container mb-[32px]">
            <div className="sub-heading-container mb-[21px] flex items-center justify-between">
                <h4 className="text-white text-[20px] leading-[32px] font-semibold">
                    Lessons
                </h4>
                {/* <ButtonCombo /> */}

            </div>
            <div className="grid grid-cols-2 gap-x-[73px] gap-y-[16px] lessons-details-container">
                {lesson.map((lesson, i) => {
                    return (
                        <div className={`${!isTablet ? "col-span-1" : "col-span-2"}`}>
                            <RectangularCard
                                image={lesson.img}
                                title={lesson.title}
                                subtitle={lesson.subtitle}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default LessonsSection