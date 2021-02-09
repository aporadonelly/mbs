import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Button, Grid, Typography, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
// import CreateProductForm from '../components/products/CreateProductForm';
import { getCategory } from '../actions/ProductActions';
import ProductsList from '../components/products/ProductsList';
import ProductReq from '../components/products/ProductReq';

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginTop: '1rem',
        marginLeft: '5rem !important',
        marginBottom: '-10rem',
        padding: '0 3.5rem',
        width: '100%',
        fontWeight: 'bold',
        color: '#8c8c8c',
        flexGrow: 1
    },
    productLabel: {
        color: 'primary',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    addNewBtn: {
        float: 'right',
        width: 'auto',
        height: '2.2rem',
        '&:hover': {
            backgroundColor: '#6cf',
            borderColor: '#6cf'
        }
    },
    textColor: {
        color: theme.palette.text.secondary
    }
}));

const ProductPage = ({ products: { category } }) => {
    const classes = useStyles();
    const [showAddProductForm, toggleAddProductForm] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory());
    }, []);

    return (
        <>
            <h1>Products</h1>
            <Grid container item direction="row" xs={12}>
                <Grid item xs={6} sm={6}>
                    <Typography className={classes.textColor}>
                        Create and View your banks Products on your mobile app.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Button
                        style={{
                            display: showAddProductForm ? 'none' : 'show'
                        }}
                        className={classes.addNewBtn}
                        onClick={() => toggleAddProductForm(!showAddProductForm)}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        value="Submit">
                        <AddIcon /> Add New Product
                    </Button>
                </Grid>
            </Grid>

            <Grid container item direction="row" xs={12}>
                {showAddProductForm ? (
                    // <CreateProductForm a={showAddProductForm} category={category} />
                    <ProductReq a={showAddProductForm} category={category} />
                ) : (
                    <ProductsList h={showAddProductForm} />
                )}
            </Grid>
        </>
    );
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, { getCategory })(ProductPage);
