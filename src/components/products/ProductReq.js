/**
 * @Name: CreateProductForm
 * @Description: component for adding new product
 * @Props:
 *      onSubmit: function when submitting the form
 *      onChange/onHandleChangeReqDesc: function for updating text fields
 * @Return: View
 * @Author: Nelly
 * @Last Update By: Nelly
 */

import React, { useState, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, FormControl, Button } from '@material-ui/core';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Info } from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { FormStyles } from '../styles';
import Select from './Select';
import ProductFormOverrideStyles from '../styles/ProductFormOverride';
import { createNewProduct } from '../../actions/ProductActions';
import ProductsList from './ProductsList';
import WysiwygField from './WysiwygField';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    div: {
        padding: theme.spacing(1),
        textAlign: 'left',
        marginLeft: '-7px',
        color: theme.palette.text.secondary
    }
}));

const initialValues = {
    name: '',
    description: '',
    productCategory: '',
    productRequirements: []
};

const CreateProduct = props => {
    const { category } = props;
    const dispatch = useDispatch();
    const classes = { ...useStyles(), ...FormStyles() };

    const [hideProductForm, toggleHideProductForm] = useState(false);

    const [formData, setFormData] = useState(initialValues);
    const { name, description, productCategory, productRequirements } = formData;

    const [quillValue, setQuillValue] = useState(props.quillValue);
    const [requirementName, setRequirementName] = useState(props.name);

    // const onChange = (e, i) => {
    //     const values = [...productRequirements];
    //     values[i][e.target.name] = e.target.value;
    //     setProductRequirements(values);
    // };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderErrorMessage = message => (
        <span className={classes.errorContainer}>
            <Info
                color="error"
                className={classes.renderErrorMessage}
                fontSize="small"
                style={{ marginLeft: '-3px' }}
            />{' '}
            {message}
        </span>
    );

    // const handleAdd = () => {
    //   setRequirements([
    //         ...productRequirements,
    //         { id: uuidv4(), name: '', description: '' }
    //     ]);
    // };

    const handleAdd = () => {
        const newRequirement = {
            name,
            requirement: quillValue
        };
        props.onAdd(newRequirement);
        console.log(newRequirement, 'handleAdd');
        setRequirementName('');
        setQuillValue('');
    };

    // const handleRemoveField = id => {
    //     // const values = [...productRequirements];
    //     // values.splice(i, 1);
    //     // setProductRequirements(values);

    //     const values = [...productRequirements];
    //     values.splice(
    //         values.findIndex(value => value.id === id),
    //         1
    //     );
    //     setProductRequirements(values);
    //     console.log(values, 'removed');
    // };

    const hasError = !formData;

    const onSubmit = e => {
        console.log(props.onAdd, 'onAdd');
        e.preventDefault();
        const items = [...productRequirements];
        items.push({
            name: requirementName,
            description: quillValue
        });
        const finalData = { ...formData, productRequirements: items };
        dispatch(createNewProduct(finalData));
        console.log(finalData, 'finalData');
    };

    // For requirement name and description
    const onNameChange = event => {
        setRequirementName(event.target.value);
    };

    const onChange = newHTML => {
        setQuillValue(newHTML);
    };

    return (
        <div className={classes.root}>
            <ArrowBackIcon
                style={{
                    display: hideProductForm ? 'none' : 'show',
                    marginTop: '15px'
                }}
                onClick={() => toggleHideProductForm(!hideProductForm)}
            />
            {hideProductForm ? (
                <ProductsList />
            ) : (
                <Fragment>
                    <h3>Create New Product</h3>
                    <ValidatorForm onSubmit={e => onSubmit(e)}>
                        <Grid container spacing={3} item xs={12}>
                            <div
                                className={classes.root}
                                onSubmit={e => onSubmit(e)}
                                style={{ display: 'flex' }}>
                                <Grid item xs={12} sm={5} style={{ padding: '10px' }}>
                                    <div className={classes.div}>Name</div>
                                    <TextValidator
                                        fullWidth
                                        inputProps={{ minLength: 1 }}
                                        error={hasError}
                                        variant="outlined"
                                        onChange={e => handleChange(e)}
                                        name="name"
                                        type="text"
                                        placeholder="Enter Product Name"
                                        validators={['required']}
                                        errorMessages={[
                                            renderErrorMessage('Product Name is required.')
                                        ]}
                                        value={name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={5} style={{ padding: '10px' }}>
                                    <div className={classes.div}>Product Type</div>
                                    <FormControl
                                        className={classes.margin}
                                        style={{ display: 'flex' }}>
                                        <ThemeProvider theme={ProductFormOverrideStyles}>
                                            <Select
                                                variant="outlined"
                                                name="productCategory"
                                                value={productCategory}
                                                onChange={e => handleChange(e)}
                                                options={category}
                                            />
                                        </ThemeProvider>
                                    </FormControl>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid container spacing={3} item xs={10}>
                            <div className={classes.root} style={{ display: 'flex' }}>
                                <Grid item xs={12} sm={12} style={{ padding: '10px' }}>
                                    <div className={classes.div}>Description</div>
                                    <FormControl
                                        className={classes.margin}
                                        style={{ display: 'flex' }}>
                                        <ThemeProvider theme={ProductFormOverrideStyles}>
                                            <TextValidator
                                                inputProps={{ minLength: 1 }}
                                                variant="outlined"
                                                placeholder="Write description here..."
                                                multiline
                                                rows={5}
                                                rowsMax={10}
                                                name="description"
                                                value={description}
                                                error={hasError}
                                                fullWidth
                                                onChange={e => handleChange(e)}
                                                type="text"
                                                validators={['required']}
                                                errorMessages={[
                                                    renderErrorMessage('Description is required.')
                                                ]}
                                            />
                                        </ThemeProvider>
                                    </FormControl>
                                </Grid>
                            </div>
                        </Grid>

                        {/* Requirement Name and Description */}
                        <div style={{ marginTop: '3rem' }}>
                            <Grid container direction="row" spacing={3} item xs={12}>
                                <div className={classes.root} style={{ display: 'flex' }}>
                                    <Grid item xs={12} sm={5} style={{ padding: '10px' }}>
                                        <div className={classes.div}>Requirement Name</div>
                                        <TextValidator
                                            variant="outlined"
                                            placeholder="Enter Requirement Name"
                                            name="requirementName"
                                            error={hasError}
                                            fullWidth
                                            onChange={onNameChange}
                                            type="text"
                                            validators={['required']}
                                            errorMessages={[
                                                renderErrorMessage('Requirement Name is required.')
                                            ]}
                                            value={requirementName}
                                        />
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid container spacing={3} item xs={10}>
                                <div className={classes.root} style={{ display: 'flex' }}>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        style={{ padding: '10px', marginTop: '1em' }}>
                                        <div className={classes.div}>Requirement Description</div>
                                        <FormControl
                                            className={classes.margin}
                                            style={{ display: 'flex' }}>
                                            <ThemeProvider theme={ProductFormOverrideStyles}>
                                                <WysiwygField
                                                    value={quillValue || ''}
                                                    onChange={onChange}
                                                    defaultValue={props.quillValue}
                                                />
                                            </ThemeProvider>
                                        </FormControl>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                        {props.onAdd && (
                            <Grid
                                onClick={() => handleAdd()}
                                container
                                spacing={3}
                                item
                                xs={10}
                                style={{
                                    marginTop: '1em',
                                    marginLeft: '-.8em',
                                    cursor: 'pointer'
                                }}>
                                <AddCircleOutlineIcon className={classes.div} />
                                <div
                                    className={classes.div}
                                    style={{ marginTop: '.2em', marginLeft: '-.8em' }}>
                                    Add another requirement
                                </div>
                            </Grid>
                        )}

                        <Grid item xs={10}>
                            <div
                                className={classes.addNewBtn}
                                style={{ position: 'absolute', right: '15.9em', marginTop: '2em' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    value="Save"
                                    style={{ width: '150px', marginRight: '2em' }}>
                                    SAVE
                                </Button>
                                <Button
                                    onClick={() => {
                                        setFormData(initialValues);
                                    }}
                                    style={{ marginRight: '1.5em', width: '150px' }}
                                    variant="contained"
                                    color="default"
                                    value="Cancel">
                                    Cancel
                                </Button>
                            </div>
                        </Grid>
                    </ValidatorForm>
                </Fragment>
            )}
        </div>
    );
};
export default connect(null, { createNewProduct })(CreateProduct);
