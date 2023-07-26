
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
const Layout = ({ children }) => {
    return <>{children}</>
}
export default function CalendarPage() {
    const eventRender = (event, element) => {
        element.style.backgroundColor = event.color;
        element.style.color = 'white';
    };

    return (
        <Layout>
            <div className='calendar-container bg-white h-screen' >
                <FullCalendar
                    plugins={[

                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin
                    ]}

                    height={"100%"}
                    dayCellClassNames="text-white"
                    slotLabelClassNames="text-white slot-grid "
                    dayHeaderClassNames="text-white bg-red-500"
                    resourceGroupLaneClassNames={"text-white"}
                    moreLinkClassNames={"text-white"}
                    resourceAreaHeaderClassNames={"text-white"}
                    resourceGroupLabelClassNames={"text-white"}
                    resourceLabelClassNames="text-white"
                    slotDuration={`01:00:00`}
                    slotLaneClassNames={"text-white  "}
                    nowIndicatorClassNames={"text-white bg-white"}
                    resourceLaneClassNames={"text-white"}
                    eventTextColor='rgba(241, 155, 108, 1)'


                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'dayGridMonth,timeGridWeek',
                        right: 'title'
                    }}
                    initialView='timeGridWeek'
                    nowIndicator={true}
                    eventRender={eventRender}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    resources={[
                        { id: 'a', title: 'Auditorium A' },
                        { id: 'b', title: 'Auditorium B', eventColor: 'green' },
                        { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
                    ]}
                    initialEvents={[
                        { title: 'nice event', start: new Date(), resourceId: 'a' },
                        { title: 'nicegsdfgsdf event', start: new Date(), resourceId: 'a' }
                    ]}
                />
            </div>
        </Layout>
    )
}