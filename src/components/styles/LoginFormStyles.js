import { createStyles, makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/styleGuide';

const LoginFormStyles = makeStyles(theme =>
    createStyles({
        pageContainer: {
            display: 'flex',
            height: '100vh'
        },
        container: {
            display: 'flex',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: colors.primary,
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(5)
        },
        subText: {
            textAlign: 'center',
            marginTop: theme.spacing(5)
        },
        linkText: {
            color: colors.primary
        }
    })
);

export default LoginFormStyles;
