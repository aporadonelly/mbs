import React from 'react';
import { InputLabel, FormControl, Select as MuiSelect, MenuItem } from '@material-ui/core';

export default function Select(props) {
    const { name, label, value, onChange, options } = props;

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect displayEmpty name={name} label={label} value={value} onChange={onChange}>
                <MenuItem value="" disabled style={{ color: 'grey !important' }}>
                    Select Product Type...
                </MenuItem>
                {options.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.label}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}
