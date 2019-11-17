import yup from 'yup';

export default {
    mapPropsToValues: (props) => {
        return {
            firstName: props.firstName || '',
            lastName: props.lastName
        }
    },

    validationSchema: yup.object().shape({
        password: yup.string().required('Gelieve dit veld in te vullen'),
        passwordConfirm: yup
            .string()
            .test('passwordsAreEqual', 'Wachtwoorden zijn niet hetzelfde', function (value) {
                const { password } = this.parent;
                return password === value;
            }).required('Gelieve dit veld in te vullen')
    }),

    handleSubmit: (values, { setSubmitting, props }) => {
        setSubmitting(true);
        props.savePassword(values.password);
    },
}