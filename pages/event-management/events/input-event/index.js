import styles from "../../../../styles/Home.module.css";
import custom from "../../../../styles/custom/custom.module.css";
import acco from "../../../../styles/custom/accordion-override.module.css";
import {
  BannerSection,
  FooterSection,
  HeaderSection,
  ScheduleSection,
  SpeakerSection,
  SponsorSection,
  TicketSection,
  VenueSection,
} from "../../../../src/components/input_events/FormSects";
import { AboutSectionX } from "../../../../src/components/input_events/AboutSection";
import { BannerSectionX } from "../../../../src/components/input_events/BannerSection";
import { SpeakerSectionX } from "../../../../src/components/input_events/SpeakerSection";
import {
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
} from "@coreui/react";
import { CustomCAccordionHeader } from "../../../../src/components/input_events/CustomCHeader";
import {
  Dongle,
  SwitchBtn,
} from "../../../../src/components/input_events/CustomCHeaderMicros";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const FLEXIBLE_FORM_DATA = [
  {
    itemId: "DND-1",
    itemTitle: "Banner Section",
    itemContent: <BannerSectionX />,
  },
  {
    itemId: "DND-2",
    itemTitle: "About Section",
    itemContent: <AboutSectionX />,
  },
  {
    itemId: "DND-3",
    itemTitle: "Speaker Section",
    itemContent: <SpeakerSectionX accordionClass={acco.accordionOverride} />,
  },
  {
    itemId: "DND-4",
    itemTitle: "Schedule Section",
    itemContent: <ScheduleSection accordionClass={acco.accordionOverride} />,
  },
  {
    itemId: "DND-5",
    itemTitle: "Ticket Section",
    itemContent: <TicketSection accordionClass={acco.accordionOverride} />,
  },
  {
    itemId: "DND-6",
    itemTitle: "Venue Section",
    itemContent: <VenueSection />,
  },
  {
    itemId: "DND-7",
    itemTitle: "Sponsor Section",
    itemContent: <SponsorSection accordionClass={acco.accordionOverride} />,
  },
];

export default function InputEvent() {
  const [formContents, setFormContents] = useState(FLEXIBLE_FORM_DATA);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedFormContents = [...formContents];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedFormContent] = reorderedFormContents.splice(sourceIndex, 1);
      reorderedFormContents.splice(destinationIndex, 0, removedFormContent);

      return setFormContents(reorderedFormContents);
    }
  };

  return (
    <div className={styles.container}>
      <CCard>
        <CCardHeader>
          <strong>Create new events</strong>
        </CCardHeader>
        <CCardBody className="px-4">
          <CFormInput
            type="text"
            id="title_general"
            className="w-50 mb-3"
            label="Event Title"
            placeholder="Input Event title here.."
          />
          <HeaderSection />
          {/*DnD Section*/}
          <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="FORM_BASE" type="group">
              {(provided) => (
                <CAccordion
                  activeItemKey={formContents[0].itemId}
                  className={`${acco.accordionOverride}`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {formContents.map((formContent, index) => (
                    <Draggable
                      draggableId={formContent.itemId}
                      key={formContent.itemId}
                      index={index}
                    >
                      {(provided) => (
                        <CAccordionItem
                          itemKey={formContent.itemId}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <CustomCAccordionHeader
                            title={formContent.itemTitle}
                            switchfrm={<SwitchBtn />}
                            dongle={<Dongle {...provided.dragHandleProps} />}
                          />
                          <CAccordionBody>
                            {formContent.itemContent}
                          </CAccordionBody>
                        </CAccordionItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </CAccordion>
              )}
            </Droppable>
          </DragDropContext>
          {/*DnD Section END*/}
          <FooterSection />
        </CCardBody>
      </CCard>
    </div>
  );
}
