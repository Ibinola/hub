import * as Yup from 'yup'

export const initialValues = {
    newHubUser: {
        fullName: '',
        subscriptionType: '',
        spaceAllocated: '',
        phoneNumber: '',
        email: '',
        referralCode: '',
        howDidYouHear: '',
    }
}

export const Schemas = {
    newHubUserSchema: Yup.object().shape({
        fullName: Yup.string().trim()
            .min(2, 'Name must be at least 2 characters')
            .required('Please enter your full name'),
        subscriptionType: Yup.string().required('Please select a subscription type'),
        spaceAllocated: Yup.string().required('Please select a space'),
        phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must only contain digits')
            .min(10, 'Phone number must be at least 10 digits')
            .required('Please enter your phone number'),
        email: Yup.string()
            .trim()
            .email('Please enter a valid email address').lowercase().required('Email is required'),
        referralCode: Yup.string()
            .optional(),
        howDidYouHear: Yup.string()
            .required('Please tell us how you heard about us')
    })
}
