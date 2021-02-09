import { makeStyles } from '@material-ui/core/styles';

const ProductFormStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '2rem',
        padding: '2rem',
        marginLeft: '-2rem !important'
    },
    arrow: {
        marginTop: '1rem',
        marginLeft: '-3.5rem !important',
        marginBottom: '-10rem',
        padding: '0 3.5rem',
        width: '100%',
        fontWeight: 'bold',
        color: '#8c8c8c',
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    createLabel: {
        textAlign: 'left',
        marginTop: '.3rem',
        marginBottom: '.7rem'
    },
    addNewBtn: {
        marginTop: '2rem',
        flexGrow: 1,
        float: 'right',
        height: '2.2rem'
    },
    removeBtn: {
        marginTop: '3rem',
        cursor: 'pointer',
        position: 'absolute',
        right: '13em'
    },
    addBtn: {
        margin: '0 1rem',
        width: '50%',
        float: 'right'
    },
    renderErrorMessage: {
        marginRight: '0.25em'
    }
}));
export default ProductFormStyles;
