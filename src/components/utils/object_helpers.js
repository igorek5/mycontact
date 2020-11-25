
export const updateObjectInArray = (items, opjPropName, itemId, newObjProps) => {
    return items.map(u => {
        if (u[opjPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}; // универсальная функция которая заменит, вернет новый массив если заметит совподения