

const bookDiscoveryInputs = {
    contact: {
        header: 'Contact Information: ',
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
    products: {
        name: "products",
        header: 'Products You Would Like To See A Demo Of:',
        placeHolder: 'Type Something...',
        requirement: {
            required: 'Please provide at least one product',
        }
    },
    preferredDay: {
        name: "preferredDay",
        header: "Preferred Day:",
        requirement: {
            required: 'Please select a day',
        },
        input: [
            {
                label: 'Monday',
                name: 'Monday',
            },
            {
                label: 'Tuesday',
                name: 'Tuesday',
            },
            {
                label: 'Wednesday',
                name: 'Wednesday',
            },
            {
                label: 'Thursday',
                name: 'Thursday',
            },
            {
                label: 'Friday',
                name: 'Friday',
            }
        ]
    },
    preferredTime: {
        name: "preferredTime",
        header: "Preferred Timeframe (EST):",
        input: [
            {
                label: '9 AM - 11 AM',
                name: '9 AM - 11AM',
            },
            {
                label: '1 PM - 3 PM',
                name: '1 PM - 3 PM',
            },
            {
                label: '1 PM - 3 PM',
                name: '1 PM - 3 PM',
            },
        ],
        requirement: {
            required: 'A timeframe is required',
        },
    },
    additionalNotes: {
        name: "additionalNotes",
        header: 'Any Additional Notes',
        placeHolder: 'Type Something...',
    },
};

export default bookDiscoveryInputs;