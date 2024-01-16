"use client";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="border border-blue-600 py-2 px-4 rounded-xl w-1/2 my-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className=" border-none flex justify-between font-semibold text-lg"
        >
          Can education flashcards be used for all age groups?
        </AccordionHeader>
        <AccordionBody className="font-medium text-base">
          Yes, education flashcards can be tailored to different age groups and
          learning levels. There are flashcards designed for preschoolers,
          elementary school students, high school students, and even for
          college-level and adult learners.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="border border-blue-600 py-2 px-4 rounded-xl w-1/2 my-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className=" border-none flex justify-between font-semibold text-lg"
        >
          How do education flashcards work?
        </AccordionHeader>
        <AccordionBody className="font-medium text-base">
          Education flashcards work by presenting a question or prompt on one
          side and the corresponding answer or information on the other. Users
          can review the cards repeatedly, reinforcing their memory and
          enhancing learning through repetition.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="border border-blue-600 py-2 px-4 rounded-xl w-1/2 my-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className=" border-none flex justify-between font-semibold text-lg"
        >
          Can education flashcards be used for test preparation?
        </AccordionHeader>
        <AccordionBody className="font-medium text-base">
          Absolutely. Flashcards are an excellent tool for test preparation,
          allowing students to review key concepts, terms, and facts. They
          provide a quick and focused way to reinforce knowledge before exams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
