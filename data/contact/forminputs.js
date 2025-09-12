export const source = {
  header: 'How did you hear about ATG?',
  name: "Source",
  input: [
    {
      label: 'Google',
    },
    {
      label: 'YouTube',
    },
    {
      label: 'Social Media',
    },
    {
      label: 'Trade Show ',
    },
    {
      label: 'Referral',
    },
    {
      label: 'E-Blast ',
    },
    {
      label: 'Online Publication',
    },
  ],
};

const inputs = {
  contact: {
    header: ' 1. Contact Information',
    input: [
      {
        span: '1',
        label: 'First name',
        name: 'firstName',
        type: 'given-name',
        requirement: {
          required: 'A First Name is required.',
        },
      },
      {
        span: '1',
        label: 'Last name',
        name: 'lastName',
        type: 'family-name',
        requirement: {
          required: 'A First Name is required.',
        },
      },
      {
        span: '2',
        label: 'Email address',
        name: 'email',
        type: 'email',
        requirement: {
          required: 'An Email is required.',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid Email Address',
          },
        },
      },
      {
        span: '2',
        label: 'Phone Number',
        name: 'phone',
        type: 'tel',
        requirement: {
          required: 'A phone number is required.',
          minLength: {
            value: 9,
            message: 'Invalid Phone Number',
          },
        },
      },
      {
        span: '2',
        label: 'Company Name',
        name: 'company',
        type: 'organization',
        requirement: {
          required: 'A Company Name is required.',
        },
      },
    ],
  },
  // products: {
  //   header: '2. How Can ATG Help You?',
  //   input: [
  //     {
  //       label: 'Manual Filling',
  //       name: 'manual',
  //     },
  //     {
  //       label: 'Automatic Filling',
  //       name: 'automatic',
  //     },
  //     {
  //       label: 'Packaging',
  //       name: 'packaging',
  //     },
  //     {
  //       label: 'Co-Packaging',
  //       name: 'coPackaging',
  //     },
  //   ],
  // },
  products: {
    header: '2. What product(s) do you work with?',
    input: [
      {
        label: 'Balms',
        name: 'Balms',
      },
      {
        label: 'Bottles',
        name: 'Bottles',
      },
      {
        label: 'Capsules',
        name: 'Capsules',
      },
      {
        label: 'Cartridges',
        name: 'Cartridges',
      },
      {
        label: 'Creams',
        name: 'Creams',
      },
      {
        label: 'Gummies',
        name: 'Gummies',
      },
    ],
  },
  request: {
    name: "helpRequired",
    header: '3. How can ATG help you?',
    placeHolder: 'Type Something...',
    requirement: {
      required: 'Please provide your requirement',
    },
  },
  source: {
    ...source,
    header: `4. How did you hear about ATG?`,
    // requirement: {
    //   required: 'A source is required.',
    // },
    name: "source"
  }
};

export default inputs;

