import { source } from "../../data/contact/forminputs"
const inputs = {
  contact: {
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
  source: { ...source, name: "source"},
  // source: {
  //   header: 'How did you hear about ATG?',
  //   input: [
  //     {
  //       label: 'Google',
  //     },
  //     {
  //       label: 'YouTube',
  //     },
  //     {
  //       label: 'Social Media',
  //     },
  //     {
  //       label: 'Trade Show ',
  //     },
  //     {
  //       label: 'Referral',
  //     },
  //     {
  //       label: 'E-Blast ',
  //     },
  //     {
  //       label: 'Online Publication',
  //     },
  //   ],
  // },
};

export default inputs;
