import { makeStyles } from '@material-ui/core/styles';
import { colors, fontSizes } from '../../assets/styleGuide';

const drawerWidth = 212;
const MainNavBarStyles = makeStyles(theme => ({
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
        backgroundColor: colors.white,
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
    toolbar: theme.mixins.toolbar,
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
        color: colors.white
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
        textTransform: 'uppercase'
    },
    selected: {
        '& li': {
            backgroundColor: 'rgb(255, 255, 255, 0.2) !important',
            borderLeft: 'solid',
            borderColor: colors.primary
        },
        '& .icon-color': {
            fill: colors.white
        }
    },
    pearlPayLogo: {
        width: '45%',
        margin: '1rem 3.1rem'
    }
}));

export default MainNavBarStyles;
