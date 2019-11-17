import moment from 'moment';

export function formatDate(date) {
    moment.locale('fr');
    const momentDate = moment(date);

    if (!momentDate.isValid())
        return '';

    return momentDate.format('D/MM/YYYY');

}

export function formatDateTime(dateTime) {
    moment.locale('fr');
    const momentDate = moment(dateTime);

    if (!momentDate.isValid())
        return '';

    return momentDate.format('D/MM/YYYY HH:mm');

}

export const defineAttributesForField = ({ errors, touched, values, handleChange, handleBlur, disabled }, fieldName, label, placeholder) => {
    return {
        name: fieldName,
        label: label || fieldName,
        error: errors[fieldName],
        touched: touched[fieldName],
        value: values[fieldName],
        onChange: handleChange,
        onBlur: handleBlur,
        placeholder,
        disabled
    };
}
