var yup = require('yup');

export default {
    initialValues: { firstName: '' },
    mapPropsToValues: ({ ...props }) => {
        const user = props.user;
        return {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            phoneNumber: user.phoneNumber || '',
            gender: user.gender,
            birthDay: user.birthDay,
            streetName: user.streetName || '',
            number: user.number || '',
            postalCode: user.postalCode || '',
            city: user.city || '',
            nationality: user.nationality
        }
    },

    validationSchema: yup.object().shape({
        firstName: yup.string().required('Voornaam is verplicht'),
        lastName: yup.string().required('Achternaam is verplicht'),
        phoneNumber: yup.string(),
        gender: yup.string().oneOf(['male', 'female']),
        birthDay: yup.date().required('Geboorte datum is verplicht'),
        streetName: yup.string().required('Straatnaam is verplicht'),
        number: yup.string().required('Nummer is verplicht'),
        postalCode: yup.string().required('Postcode is verplicht'),
        city: yup.string().required('Stad is verplicht')
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
        props.updateBasicInfo(values);
        setSubmitting(false);
    }
}