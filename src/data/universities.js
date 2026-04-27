export const universities = {
  1: [ // USA
    {
      id: 101,
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, MA",
      ranking: "#1 QS World",
      tuition: "$53,000 - $55,000/year",
      acceptance: "4%",
      programs: ["Computer Science", "Engineering", "Business", "Data Science"],
      requirements: {
        gpa: "3.9+",
        sat: "1500+",
        toefl: "100+",
        ielts: "7.5+"
      },
      applicationDeadline: "January 1",
      website: "https://www.mit.edu"
    },
    {
      id: 102,
      name: "Stanford University",
      location: "Stanford, CA",
      ranking: "#2 QS World",
      tuition: "$56,000 - $58,000/year",
      acceptance: "4%",
      programs: ["Computer Science", "Engineering", "Business", "AI"],
      requirements: {
        gpa: "3.9+",
        sat: "1480+",
        toefl: "100+",
        ielts: "7.0+"
      },
      applicationDeadline: "January 5",
      website: "https://www.stanford.edu"
    },
    {
      id: 103,
      name: "Harvard University",
      location: "Cambridge, MA",
      ranking: "#3 QS World",
      tuition: "$54,000 - $56,000/year",
      acceptance: "3%",
      programs: ["Business", "Law", "Medicine", "Computer Science"],
      requirements: {
        gpa: "3.9+",
        sat: "1500+",
        toefl: "100+",
        ielts: "7.5+"
      },
      applicationDeadline: "January 1",
      website: "https://www.harvard.edu"
    },
    {
      id: 104,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      ranking: "#52 QS World",
      tuition: "$59,000 - $61,000/year",
      acceptance: "17%",
      programs: ["Computer Science", "Robotics", "AI", "Engineering"],
      requirements: {
        gpa: "3.8+",
        sat: "1460+",
        toefl: "102+",
        ielts: "7.5+"
      },
      applicationDeadline: "January 3",
      website: "https://www.cmu.edu"
    },
    {
      id: 105,
      name: "University of California, Berkeley",
      location: "Berkeley, CA",
      ranking: "#27 QS World",
      tuition: "$44,000 - $46,000/year",
      acceptance: "17%",
      programs: ["Computer Science", "Engineering", "Business", "Data Science"],
      requirements: {
        gpa: "3.8+",
        sat: "1400+",
        toefl: "90+",
        ielts: "7.0+"
      },
      applicationDeadline: "November 30",
      website: "https://www.berkeley.edu"
    },
    {
      id: 106,
      name: "University of Michigan",
      location: "Ann Arbor, MI",
      ranking: "#33 QS World",
      tuition: "$52,000 - $54,000/year",
      acceptance: "23%",
      programs: ["Engineering", "Business", "Computer Science", "Medicine"],
      requirements: {
        gpa: "3.7+",
        sat: "1380+",
        toefl: "88+",
        ielts: "6.5+"
      },
      applicationDeadline: "February 1",
      website: "https://www.umich.edu"
    }
  ],
  2: [ // Germany
    {
      id: 201,
      name: "Technical University of Munich (TUM)",
      location: "Munich",
      ranking: "#37 QS World",
      tuition: "€0 (Public) + €150 semester fee",
      acceptance: "8%",
      programs: ["Engineering", "Computer Science", "Physics", "Business"],
      requirements: {
        gpa: "Good grades",
        testdaf: "TDN 4",
        ielts: "6.5+ (English programs)"
      },
      applicationDeadline: "May 31 (Winter), November 30 (Summer)",
      website: "https://www.tum.de"
    },
    {
      id: 202,
      name: "Ludwig Maximilian University (LMU)",
      location: "Munich",
      ranking: "#54 QS World",
      tuition: "€0 (Public) + €150 semester fee",
      acceptance: "10%",
      programs: ["Medicine", "Law", "Business", "Natural Sciences"],
      requirements: {
        gpa: "Good grades",
        testdaf: "TDN 4",
        dsh: "DSH-2"
      },
      applicationDeadline: "July 15 (Winter), January 15 (Summer)",
      website: "https://www.lmu.de"
    },
    {
      id: 203,
      name: "Heidelberg University",
      location: "Heidelberg",
      ranking: "#87 QS World",
      tuition: "€0 (Public) + €175 semester fee",
      acceptance: "12%",
      programs: ["Medicine", "Law", "Natural Sciences", "Humanities"],
      requirements: {
        gpa: "Good grades",
        testdaf: "TDN 4",
        ielts: "6.5+"
      },
      applicationDeadline: "July 15 (Winter), January 15 (Summer)",
      website: "https://www.uni-heidelberg.de"
    },
    {
      id: 204,
      name: "RWTH Aachen University",
      location: "Aachen",
      ranking: "#106 QS World",
      tuition: "€0 (Public) + €300 semester fee",
      acceptance: "10%",
      programs: ["Engineering", "Computer Science", "Physics", "Business"],
      requirements: {
        gpa: "Good grades",
        testdaf: "TDN 4",
        ielts: "6.5+"
      },
      applicationDeadline: "July 15 (Winter), January 15 (Summer)",
      website: "https://www.rwth-aachen.de"
    },
    {
      id: 205,
      name: "Free University of Berlin",
      location: "Berlin",
      ranking: "#118 QS World",
      tuition: "€0 (Public) + €315 semester fee",
      acceptance: "15%",
      programs: ["Humanities", "Social Sciences", "Natural Sciences", "Medicine"],
      requirements: {
        gpa: "Good grades",
        testdaf: "TDN 4",
        ielts: "6.5+"
      },
      applicationDeadline: "July 15 (Winter), January 15 (Summer)",
      website: "https://www.fu-berlin.de"
    }
  ],
  3: [ // Canada
    {
      id: 301,
      name: "University of Toronto",
      location: "Toronto, ON",
      ranking: "#21 QS World",
      tuition: "CAD 45,000 - 58,000/year",
      acceptance: "43%",
      programs: ["Computer Science", "Engineering", "Business", "Medicine"],
      requirements: {
        gpa: "3.7+",
        ielts: "6.5+",
        toefl: "100+"
      },
      applicationDeadline: "January 15",
      website: "https://www.utoronto.ca"
    },
    {
      id: 302,
      name: "University of British Columbia",
      location: "Vancouver, BC",
      ranking: "#34 QS World",
      tuition: "CAD 40,000 - 50,000/year",
      acceptance: "52%",
      programs: ["Computer Science", "Engineering", "Business", "Environmental Science"],
      requirements: {
        gpa: "3.5+",
        ielts: "6.5+",
        toefl: "90+"
      },
      applicationDeadline: "January 15",
      website: "https://www.ubc.ca"
    },
    {
      id: 303,
      name: "McGill University",
      location: "Montreal, QC",
      ranking: "#31 QS World",
      tuition: "CAD 20,000 - 45,000/year",
      acceptance: "46%",
      programs: ["Medicine", "Law", "Engineering", "Business"],
      requirements: {
        gpa: "3.6+",
        ielts: "6.5+",
        toefl: "90+"
      },
      applicationDeadline: "January 15",
      website: "https://www.mcgill.ca"
    },
    {
      id: 304,
      name: "University of Waterloo",
      location: "Waterloo, ON",
      ranking: "#112 QS World",
      tuition: "CAD 45,000 - 55,000/year",
      acceptance: "53%",
      programs: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs"],
      requirements: {
        gpa: "3.5+",
        ielts: "6.5+",
        toefl: "90+"
      },
      applicationDeadline: "February 1",
      website: "https://uwaterloo.ca"
    },
    {
      id: 305,
      name: "University of Alberta",
      location: "Edmonton, AB",
      ranking: "#111 QS World",
      tuition: "CAD 25,000 - 35,000/year",
      acceptance: "58%",
      programs: ["Engineering", "Business", "Medicine", "Computer Science"],
      requirements: {
        gpa: "3.3+",
        ielts: "6.5+",
        toefl: "90+"
      },
      applicationDeadline: "March 1",
      website: "https://www.ualberta.ca"
    }
  ],
  4: [ // UK
    {
      id: 401,
      name: "University of Oxford",
      location: "Oxford",
      ranking: "#2 QS World",
      tuition: "£28,000 - £39,000/year",
      acceptance: "17%",
      programs: ["Law", "Medicine", "PPE", "Computer Science"],
      requirements: {
        gpa: "3.8+",
        ielts: "7.5+",
        toefl: "110+"
      },
      applicationDeadline: "October 15 (UCAS)",
      website: "https://www.ox.ac.uk"
    },
    {
      id: 402,
      name: "University of Cambridge",
      location: "Cambridge",
      ranking: "#3 QS World",
      tuition: "£24,000 - £37,000/year",
      acceptance: "21%",
      programs: ["Engineering", "Natural Sciences", "Computer Science", "Medicine"],
      requirements: {
        gpa: "3.8+",
        ielts: "7.5+",
        toefl: "110+"
      },
      applicationDeadline: "October 15 (UCAS)",
      website: "https://www.cam.ac.uk"
    },
    {
      id: 403,
      name: "Imperial College London",
      location: "London",
      ranking: "#6 QS World",
      tuition: "£32,000 - £36,000/year",
      acceptance: "14%",
      programs: ["Engineering", "Medicine", "Business", "Computer Science"],
      requirements: {
        gpa: "3.7+",
        ielts: "7.0+",
        toefl: "100+"
      },
      applicationDeadline: "January 25 (UCAS)",
      website: "https://www.imperial.ac.uk"
    },
    {
      id: 404,
      name: "University College London (UCL)",
      location: "London",
      ranking: "#9 QS World",
      tuition: "£24,000 - £34,000/year",
      acceptance: "48%",
      programs: ["Architecture", "Engineering", "Computer Science", "Medicine"],
      requirements: {
        gpa: "3.6+",
        ielts: "6.5+",
        toefl: "92+"
      },
      applicationDeadline: "January 25 (UCAS)",
      website: "https://www.ucl.ac.uk"
    },
    {
      id: 405,
      name: "University of Edinburgh",
      location: "Edinburgh",
      ranking: "#22 QS World",
      tuition: "£23,000 - £32,000/year",
      acceptance: "40%",
      programs: ["Medicine", "Engineering", "Business", "AI"],
      requirements: {
        gpa: "3.5+",
        ielts: "6.5+",
        toefl: "92+"
      },
      applicationDeadline: "January 25 (UCAS)",
      website: "https://www.ed.ac.uk"
    }
  ],
  5: [ // Australia
    {
      id: 501,
      name: "Australian National University (ANU)",
      location: "Canberra, ACT",
      ranking: "#30 QS World",
      tuition: "AUD 45,000 - 50,000/year",
      acceptance: "35%",
      programs: ["Computer Science", "Engineering", "Business", "International Relations"],
      requirements: {
        gpa: "3.5+",
        ielts: "6.5+",
        toefl: "80+"
      },
      applicationDeadline: "December 15",
      website: "https://www.anu.edu.au"
    },
    {
      id: 502,
      name: "University of Melbourne",
      location: "Melbourne, VIC",
      ranking: "#14 QS World",
      tuition: "AUD 40,000 - 48,000/year",
      acceptance: "70%",
      programs: ["Medicine", "Law", "Engineering", "Business"],
      requirements: {
        gpa: "3.5+",
        ielts: "6.5+",
        toefl: "79+"
      },
      applicationDeadline: "October 31",
      website: "https://www.unimelb.edu.au"
    },
    {
      id: 503,
      name: "University of Sydney",
      location: "Sydney, NSW",
      ranking: "#19 QS World",
      tuition: "AUD 42,000 - 50,000/year",
      acceptance: "30%",
      programs: ["Engineering", "Business", "Medicine", "Law"],
      requirements: {
        gpa: "3.4+",
        ielts: "6.5+",
        toefl: "85+"
      },
      applicationDeadline: "January 31",
      website: "https://www.sydney.edu.au"
    },
    {
      id: 504,
      name: "University of New South Wales (UNSW)",
      location: "Sydney, NSW",
      ranking: "#43 QS World",
      tuition: "AUD 43,000 - 48,000/year",
      acceptance: "50%",
      programs: ["Engineering", "Computer Science", "Business", "Law"],
      requirements: {
        gpa: "3.3+",
        ielts: "6.5+",
        toefl: "90+"
      },
      applicationDeadline: "November 30",
      website: "https://www.unsw.edu.au"
    },
    {
      id: 505,
      name: "University of Queensland",
      location: "Brisbane, QLD",
      ranking: "#43 QS World",
      tuition: "AUD 38,000 - 45,000/year",
      acceptance: "55%",
      programs: ["Medicine", "Engineering", "Business", "Environmental Science"],
      requirements: {
        gpa: "3.2+",
        ielts: "6.5+",
        toefl: "87+"
      },
      applicationDeadline: "November 30",
      website: "https://www.uq.edu.au"
    }
  ]
};
