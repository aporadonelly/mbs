import { createMuiTheme } from '@material-ui/core/styles';

const ProductFormOverrideStyles = createMuiTheme({
    palette: {
        primary: {
            main: '#6cf'
        },
        secondary: {
            main: '#fff'
        }
    },
    overrides: {
        MuiOutlinedInput: {
            input: {
                padding: '0.65rem !important'
            }
        }
    }
});

export default ProductFormOverrideStyles;
