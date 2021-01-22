import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors, fontSizes } from '../../assets/styleGuide';

// Common Form Styles
const FormStyles = makeStyles(
    createStyles({
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
        }
    })
);

export default FormStyles;
