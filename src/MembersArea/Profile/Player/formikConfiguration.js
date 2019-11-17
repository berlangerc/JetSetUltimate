import { isTypeAlias } from 'babel-types';

var yup = require('yup');

export default {
    mapPropsToValues: ({ ...props }) => {
        const playerInfo = props.user.playerInfo;
        return {
            jerseyNumber: playerInfo.jerseyNumber || '',
            team1: playerInfo.team1 || '',
            team2: playerInfo.team2 || ''
        }
    },

    validationSchema: yup.object().shape({
        jerseyNumber: yup.number()
            .typeError('Nummer is een getal')
            .required('Nummer is verplicht')
            .positive('Enkel positieve nummers toegelaten')
            .integer('Enkel afgeronde nummers')
            .lessThan(100, 'Nummer kleiner dan ${less}'),
        team1: yup.string().required('Team1 is verplicht'),
        team2: yup.string()
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
        props.updatePlayerInfo(values);
        setSubmitting(false);
    }
}