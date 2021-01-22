import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../../assets/styleGuide';

// Style for Login Component
const LoginFormStyles = makeStyles(
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
        loginBtn: {
            marginTop: '4rem',
            flexGrow: 1,
            width: '100%'
        },
        header: {
            textAlign: 'center'
        },
        logo: {
            width: 145,
            height: 95
        },
        card: {
            textAlign: 'center',
            width: '100%'
        },
        fieldContainer: {
            textAlign: 'left',
            margin: '0.5rem 0'
        },
        subText: {
            textAlign: 'center',
            marginTop: '4rem'
        },
        linkText: {
            color: colors.primary
        },
        label: {
            padding: '1rem 0'
        }
    })
);

export default LoginFormStyles;
