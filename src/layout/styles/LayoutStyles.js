import { makeStyles } from '@material-ui/core/styles';
import { colors, fontSizes } from '../../assets/styleGuide';

const drawerWidth = 250;
const LayoutStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up(1025)]: {
            width: drawerWidth
        }
    },
    appBar: {
        [theme.breakpoints.up(1025)]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        height: '5rem'
    },
    menuButton: {
        [theme.breakpoints.up(1025)]: {
            display: 'none'
        }
    },
    sidebar: {
        [theme.breakpoints.down(1025)]: {
            display: 'none'
        }
    },
    mobileSidebar: {
        [theme.breakpoints.up(1025)]: {
            display: 'none'
        }
    },
    // necessary for content to be below app bar
    toolbar:
        (theme.mixins.toolbar,
        {
            textAlign: 'center'
        }),
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: colors.navColor
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    linkContent: {
        textDecoration: 'none',
        color: colors.navLinkColor
    },
    divider: {
        backgroundColor: colors.divider,
        opacity: '0.1',
        margin: '2rem 0'
    },
    navTitle: {
        color: colors.navTitleColor,
        marginLeft: '1rem',
        fontSize: fontSizes.navTitles,
        textTransform: 'uppercase',
        marginBottom: '0.5rem'
    },
    selected: {
        color: colors.white,
        '& li': {
            backgroundColor: 'rgb(255, 255, 255, 0.10) !important',
            borderLeftStyle: 'solid',
            borderLeftColor: colors.primary,
            borderLeftWidth: '0.2rem',
            paddingLeft: '0.8rem'
        },
        '& .icon-color': {
            fill: colors.white
        }
    },
    pearlPayLogo: {
        width: '45%',
        margin: '1rem 0'
    }
}));

export default LayoutStyles;
