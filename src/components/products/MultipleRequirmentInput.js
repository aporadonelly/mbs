import React, { useState } from 'react';
import ProductReq from './ProductReq';

const MultipleRequirmentInput = () => {
    const [requirements, setRequirements] = useState([]);

    const onRequestUpdate = (index, data) => {
        console.log(index, data);
        const reqs = [...requirements];
        reqs[index] = data;
        setRequirements(reqs);
    };

    const onDelete = index => {
        console.log(index);
        const newReqs = requirements.filter((req, i) => i !== index);
        setRequirements(newReqs);
    };

    return (
        <>
            {requirements.map((req, index) => (
                <ProductReq
                    key={req.id}
                    name={req.requirementName}
                    quillValue={req.requirement}
                    index={index}
                    onUpdate={onRequestUpdate}
                    onDelete={onDelete}
                    canDelete
                />
            ))}

            <ProductReq
                name=""
                quillValue=""
                onAdd={req => setRequirements([...requirements, req])}
            />
        </>
    );
};
export default MultipleRequirmentInput;
