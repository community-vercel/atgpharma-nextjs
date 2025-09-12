const data = [
  {
    span: "2",
    label: "2. What does ATG Pharma Technical Support do well?",
    name: "praise",
    inputType: "Text",
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    span: "2",
    label: "3. How could ATG Pharma Technical Support improve?",
    name: "improvement",
    inputType: "Text",
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    span: "2",
    label: "4. How long have you been an ATG Pharma customer?",
    name: "duration",
    inputType: "radio",
    options: [
      {
        label: "Less than six months",
      },
      {
        label: "Six months to a year",
      },
      {
        label: "1 - 2 years",
      },
      {
        label: "More than 2 years",
      },
    ],
    requirement: {
      required: "A Selection is required.",
    },
  },
  {
    span: "2",
    label:
      "5. Which of the following services/products have you purchased from ATG Pharma in the past? (Please select all that apply.)",
    name: "products",
    inputType: "checkBox",
    options: [
      {
        label: "In faculty training",
      },
      {
        label: "RoboCAP Filling Machine",
      },
      {
        label: "Packaging machine",
      },
      {
        label: "Capper",
      },
    ],
    requirement: {
      required: "A Selection is required.",
    },
  },
];

const scoreRange = [
  {
    value: 1,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 2,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 3,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 4,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 5,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 6,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 7,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 8,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 9,
    requirement: {
      required: "An Input is required.",
    },
  },
  {
    value: 10,
    requirement: {
      required: "An Input is required.",
    },
  },
];
export default { data, scoreRange };
