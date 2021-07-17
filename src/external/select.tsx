/* eslint-disable react/display-name */
/* Selfishly stolen from https://gist.github.com/bbovenzi/76a28701b7933420655925eefaa03dd5 */
import type { CSSWithMultiValues, RecursiveCSSObject } from '@chakra-ui/react';
import type { Props as SelectProps } from 'react-select';

import React from 'react';
import Select, { components as selectComponents } from 'react-select';
import {
    Box,
    Center,
    CloseButton,
    Divider,
    Flex,
    Portal,
    StylesProvider,
    Tag,
    TagCloseButton,
    TagLabel,
    useColorModeValue,
    useMultiStyleConfig,
    useStyles,
    useTheme,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const MultiSelect = ({
    name = '',
    styles = {},
    components = {},
    ...props
}: SelectProps): JSX.Element => {
    const chakraTheme = useTheme();

    const placeholderColor = useColorModeValue(
        chakraTheme.colors.gray[400],
        chakraTheme.colors.whiteAlpha[400],
    );

    const chakraStyles = {
        input: (provided: Record<string, unknown>) => ({
            ...provided,
            color: 'inherit',
            lineHeight: 1,
        }),
        menu: (provided: Record<string, unknown>) => ({
            ...provided,
            boxShadow: 'none',
        }),
        valueContainer: (provided: Record<string, unknown>) => ({
            ...provided,
            padding: '0.125rem 1rem',
        }),
    };

    return (
        <Select
            components={{
                ...{
                    ClearIndicator: ({ innerProps }) => (
                        <CloseButton {...innerProps} mx={2} size="sm" />
                    ),
                    Control: ({
                        children, innerRef, innerProps, isDisabled, isFocused,
                    }) => {
                        const inputStyles = useMultiStyleConfig('Input', {});
                        return (
                            <StylesProvider value={inputStyles}>
                                <Flex
                                    ref={innerRef}
                                    sx={{
                                        ...inputStyles.field,
                                        h: 'auto',
                                        minH: 10,
                                        overflow: 'hidden',
                                        p: 0,
                                    }}
                                    {...innerProps}
                                    {...(isFocused && { 'data-focus': true })}
                                    {...(isDisabled && { disabled: true })}
                                >
                                    {children}
                                </Flex>
                            </StylesProvider>
                        );
                    },
                    DropdownIndicator: ({ innerProps }) => {
                        const { addon } = useStyles();

                        return (
                            <Center
                                {...innerProps}
                                sx={{
                                    ...addon,
                                    borderRadius: 0,
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                    h: '100%',
                                    p: 0,
                                }}
                            >
                                <ChevronDownIcon h={5} w={5} />
                            </Center>
                        );
                    },
                    GroupHeading: ({ innerProps, children }) => {
                        const { groupTitle } = useStyles();
                        return (
                            <Box sx={groupTitle} {...innerProps}>
                                {children}
                            </Box>
                        );
                    },
                    IndicatorSeparator: ({ innerProps }) => (
                        <Divider
                            {...innerProps}
                            opacity="1"
                            orientation="vertical"
                        />
                    ),
                    Menu: ({ children, ...menuProps }) => {
                        const menuStyles = useMultiStyleConfig('Menu', {});
                        return (
                            <selectComponents.Menu {...menuProps}>
                                <StylesProvider value={menuStyles}>{children}</StylesProvider>
                            </selectComponents.Menu>
                        );
                    },
                    MenuList: ({
                        innerRef, children, maxHeight,
                    }) => {
                        const { list } = useStyles();
                        return (
                            <Box
                                ref={innerRef}
                                sx={{
                                    ...list,
                                    maxH: `${maxHeight}px`,
                                    overflowY: 'auto',
                                }}
                            >
                                {children}
                            </Box>
                        );
                    },
                    
                    // Menu components
                    MenuPortal: ({ children, ...portalProps }) => (
                        <Portal {...portalProps}>
                            {children}
                        </Portal>
                    ),
                    
                    MultiValueContainer: ({
                        children,
                        innerRef,
                        innerProps,
                        data: { isFixed },
                    }) => (
                        <Tag
                            ref={innerRef}
                            {...innerProps}
                            m="0.125rem"
                            variant={isFixed ? 'solid' : 'subtle'}
                        >
                            {children}
                        </Tag>
                    ),
                    
                    MultiValueLabel: ({ children, innerRef, innerProps }) => (
                        <TagLabel ref={innerRef} {...innerProps}>
                            {children}
                        </TagLabel>
                    ),
                    
                    MultiValueRemove: ({
                        children, innerRef, innerProps, data: { isFixed },
                    }) => {
                        if (isFixed) {
                            return null;
                        }

                        return (
                            <TagCloseButton ref={innerRef} {...innerProps}>
                                {children}
                            </TagCloseButton>
                        );
                    },
                    Option: ({
                        innerRef, innerProps, children, isFocused, isDisabled,
                    }) => {
                        const { item } = useStyles();
            interface ItemProps extends CSSWithMultiValues {
              _disabled: CSSWithMultiValues,
              _focus: CSSWithMultiValues,
            }
            return (
                <Box
                    ref={innerRef}
                    sx={{
                        ...item,
                        bg: isFocused ? (item as RecursiveCSSObject<ItemProps>)._focus.bg : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        w: '100%',
                        ...(isDisabled && (item as RecursiveCSSObject<ItemProps>)._disabled),
                    }}
                    {...innerProps}
                    {...(isDisabled && { disabled: true })}
                >
                    {children}
                </Box>
            );
                    },
                },
                ...components,
            }}
            name={name}
            styles={{
                ...chakraStyles,
                ...styles,
            }}
            theme={baseTheme => ({
                ...baseTheme,
                borderRadius: chakraTheme.radii.md,
                colors: {
                    ...baseTheme.colors,
                    // placeholder text color
                    neutral40: placeholderColor,
                    neutral50: placeholderColor, // noOptionsMessage color
                },
            })}
            {...props}
        />
    );
};

export default MultiSelect;
