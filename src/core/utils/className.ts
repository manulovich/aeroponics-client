interface ClassNameWithModifiers {
    className: string,
    modifiers: [string, boolean][];
}
const getClassNameWithModifiers = ({
    className,
    modifiers
}: ClassNameWithModifiers): string => {
    let resultClassName = className;

    for (let [modifier, status] of modifiers) {
        if (status) resultClassName += ` ${modifier}`;
    }

    return resultClassName
};

export {
    getClassNameWithModifiers,
}