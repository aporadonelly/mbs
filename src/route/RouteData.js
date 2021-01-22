/**
 * @Name RouteData
 * @Description Orginizes the url path, sidebar name, logo and their own component
 * @Returns {object} of each data and automatically renders it based on their own route
 * @Author RJ
 * @UpdatedBy RJ
 */
import React from 'react';

// Logo
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as BankDetailsIcon } from '../assets/icons/bankdetails.svg';
import { ReactComponent as ThemeManagerIcon } from '../assets/icons/thememanager.svg';
import { ReactComponent as BranchesIcon } from '../assets/icons/branches.svg';
import { ReactComponent as ATMsIcon } from '../assets/icons/atms.svg';
import { ReactComponent as PromosIcon } from '../assets/icons/promos.svg';
import { ReactComponent as ProductsIcon } from '../assets/icons/products.svg';
import { ReactComponent as InquiriesIcon } from '../assets/icons/inquiries.svg';
import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg';

// styles
import { colors } from '../assets/styleGuide';

// Container / Pages
import BankDetails from '../pages/BankDetails';
import Dashboard from '../pages/Dashboard';
import ThemeManager from '../pages/ThemeManager';
import Branches from '../pages/Branches';
import ATM from '../pages/ATM';
import Promos from '../pages/Promos';
import Products from '../pages/Products';
import Inquiries from '../pages/Inquiries';
import Shop from '../pages/Shop';

const Main = [
    {
        path: '/dashboard',
        sidebar: 'Dashboard',
        logo: (
            <DashboardIcon
                width={'1.2rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Dashboard />
    },
    {
        path: '/bank-details',
        sidebar: 'Bank Details',
        logo: (
            <BankDetailsIcon
                width={'1.3rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <BankDetails />
    },
    {
        path: '/theme-manager',
        sidebar: 'Theme Manager',
        logo: (
            <ThemeManagerIcon
                width={'1.3rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <ThemeManager />
    }
];
const PageManager = [
    {
        path: '/branches',
        sidebar: 'Branches',
        logo: (
            <BranchesIcon
                width={'1.3rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Branches />
    },
    {
        path: '/atms',
        sidebar: 'ATMs',
        logo: (
            <ATMsIcon
                width={'1.5rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <ATM />
    },
    {
        path: '/promos',
        sidebar: 'Promos',
        logo: (
            <PromosIcon
                width={'1.4rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Promos />
    },
    {
        path: '/products',
        sidebar: 'Products',
        logo: (
            <ProductsIcon
                width={'1.4rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Products />
    },
    {
        path: '/inquiries',
        sidebar: 'Inquiries',
        logo: (
            <InquiriesIcon
                width={'1.4rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Inquiries />
    },
    {
        path: '/shop',
        sidebar: 'Shop',
        logo: (
            <ShopIcon
                width={'1.4rem'}
                height={'1.2rem'}
                fill={colors.iconColor}
                className={'icon-color'}
            />
        ),
        main: () => <Shop />
    }
];
export { PageManager, Main };
