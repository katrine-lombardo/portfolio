import React from "react";
import CertificationCard from "./CertificationCard";
import "../styles/Logos.css";

const ListCertifications = () => {
  const certifications = [
    {
      year: "2023",
      title: "Software Engineering Bootcamp",
      organization: "Hack Reactor",
      link: "https://www.galvanize.com/hack-reactor/beginner/full-time-bootcamp/",
      description:
        "In this intensive, 5-month full-time Beginners Coding Bootcamp I learned full stack development including React, JavaScript, Python, Django, HTML, CSS, and more.",
      imageUrl: "/logos/icons8-development-64.png",
    },
    {
      year: "2022",
      title: "Coaching for Engagement & Performance",
      organization: "Human Capital Institute",
      link: "https://www.hci.org/CEP",
      description:
        "During my CEP certification I learned how to influence workplace culture, implement coaching approaches, and improve organisational results through coaching.",
      imageUrl: "/logos/icons8-coach-64.png",
    },
    {
      year: "2018",
      title: "HR Workforce Analytics",
      organization: "New York University",
      link: "https://www.sps.nyu.edu/professional-pathways.html",
      description:
        "In this course I learned how to analyse metrics that analyze historical data, measure current issues, and predict future trends in order to provide actionable analytics reporting.",
      imageUrl: "/logos/icons8-web-analytics-64.png",
    },
    {
      year: "2014",
      title: "Bachelor of Science, Communications",
      organization: "New York University",
      link: "https://steinhardt.nyu.edu/",
      description:
        "As an undergrad I majored in Media, Culture, and Communication from the Steinhardt School of Culture, Education, and Human Development, with a minor in Italian.",
      imageUrl: "/logos/icons8-collaboration-64.png",
    },
  ];

  return (
    <div className='flex overflow-x-auto space-x-5'>
      {certifications.map((certification, index) => (
        <CertificationCard key={index} certification={certification} />
      ))}
    </div>
  );
};

export default ListCertifications;
