import React, { useContext, createContext, useState } from 'react';

const ToggleContent = createContext();

export default function Accordion ({ children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
};

Accordion.Frame = function AccordionFrame({ children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
};

Accordion.Item = function AccordionItem({ children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps}) {
    const { toggleShow, setToggleShow } = useContext(ToggleContent);

    return (<Header onClick={() => setToggle()} {...restProps}>
        {children}
    </Header>
    );
}