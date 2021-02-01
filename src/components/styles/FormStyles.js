import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors, fontSizes } from '../../assets/styleGuide';

// Common Form Styles
const FormStyles = makeStyles(
    createStyles({
        pageContainer: {
            display: 'flex',
            height: '100vh'
        },
        container: {
            display: 'flex',
            width: 400,
            margin: '0 auto',
            alignSelf: 'center',
            justifyContent: 'center'
        },
        header: {
            textAlign: 'center'
        },
        card: {
            textAlign: 'center',
            width: '100%'
        },
        fieldContainer: {
            textAlign: 'left',
            margin: '0.5rem 0'
        },
        errorContainer: {
            marginLeft: '-1rem',
            display: 'flex',
            alignItems: 'center',
            marginTop: '0.25rem'
        },
        customErrorContainer: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '0.25rem',
            color: colors.error,
            fontSize: fontSizes.errorText
        },
        logo: {
            width: '50%'
        },
        title: {
            fontFamily: 'Inter SemiBold'
        },
        label: {
            padding: '1rem 0'
        },
        subTitleContainer: {
            padding: '0.5rem 1rem',
            fontSize: fontSizes.subtitleText
        },
        btn: {
            marginTop: '2rem',
            flexGrow: 1,
            width: '100%'
        },
        linkText: {
            color: colors.primary
        },
        disabledBtn: {
            backgroundColor: `${colors.primary} !important`,
            color: `${colors.white} !important`,
            opacity: 0.4
        },
        passwordIcon: {
            padding: 0,
            '&:hover': {
                backgroundColor: 'transparent !important'
            }
        }
    })
);

export default FormStyles;
