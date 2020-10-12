import React from "react";

export const requiredField = (value) => { //обязательное поле
    if (value) {
        return undefined;
    } else {
        return 'error message поле обязательное';
    }
};

export const maxLenghtValidator = (maxLenght) => (value) => {
    if (value.length <= maxLenght) return undefined;
    return `максимальная длинна превышает ${maxLenght}`
};