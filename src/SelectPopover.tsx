/* eslint-disable react/display-name */
import type { CSSWithMultiValues, RecursiveCSSObject } from '@chakra-ui/react';
import type { ReactElement, ReactNode } from 'react';
import type { Props as SelectProps } from 'react-select';

import React from 'react';
import ReactSelect, { components as selectComponents } from 'react-select';
import { useDisclosure } from '@chakra-ui/react';
import {
    Box,
    Button,
    ButtonGroup,
    Center,
    CloseButton,
    Flex,
    IconButton,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Portal,
    StylesProvider,
    useColorModeValue,
    useMultiStyleConfig,
    useStyles,
    useTheme,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type PopoverProps = SelectProps<{ label: string, value: string }, boolean> & {
    menuHeight?: number,
}

type SecondyAction = {
    label: string,
    action: () => void,
    icon: ReactElement,
}

type Props = PopoverProps & {
    children: ReactNode[] | ReactNode | null,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
    actions?: SecondyAction[],
}

function SelectionPopoverContent({
    autoFocus = true,
    styles = {},
    components = {},
    menuIsOpen = true,
    isClearable = false,
    backspaceRemovesValue = false,
    controlShouldRenderValue = false,
    hideSelectedOptions = false,
    isMulti = true,
    closeMenuOnSelect = false,
    menuHeight = 250,
    ...props
}: PopoverProps) {
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
        <ReactSelect
            autoFocus={autoFocus}
            backspaceRemovesValue={backspaceRemovesValue}
            blurInputOnSelect={false}
            closeMenuOnSelect={closeMenuOnSelect}
            components={{
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
                                    maxH: 20,
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
                DropdownIndicator() {
                    return (
                        <Center paddingRight={4}>
                            <SearchIcon h={4} w={4}/>
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
                IndicatorSeparator: null,
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
                MenuPortal: ({ children, ...portalProps }) => (
                    <Portal {...portalProps}>
                        {children}
                    </Portal>
                ),
                Option: ({
                    innerRef, innerProps, children, isFocused, isDisabled, isSelected,
                }) => {
                    interface ItemProps extends CSSWithMultiValues {
                        _disabled: CSSWithMultiValues,
                        _focus: CSSWithMultiValues,
                        _active: CSSWithMultiValues,
                    }

                    const { item } = useStyles();
                    const recursive = (item as RecursiveCSSObject<ItemProps>);
                    const bg = isSelected ? recursive._active.bg : isFocused ? recursive._focus.bg : 'transparent';

                    return (
                        <Box
                            ref={innerRef}
                            sx={{
                                ...item,
                                bg: bg,
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
                ...components,
            }}
            controlShouldRenderValue={controlShouldRenderValue}
            hideSelectedOptions={hideSelectedOptions}
            isClearable={isClearable}
            isMulti={isMulti}
            maxMenuHeight={menuHeight}
            menuIsOpen={menuIsOpen}
            minMenuHeight={menuHeight}
            styles={{
                ...chakraStyles,
                ...styles,
            }}
            theme={baseTheme => ({
                ...baseTheme,
                borderRadius: chakraTheme.radii.md,
                colors: {
                    ...baseTheme.colors,
                    neutral40: placeholderColor,
                    neutral50: placeholderColor,
                },
            })}
            {...props}
        />
    );
}

function SelectPopover(props: Props) {
    const {
        children,
        actions = [],
        isOpen: defaultIsOpen,
        onClose: defaultOnClose,
        onOpen: defaultOnOpen,
        ...rest
    } = props;

    const { onOpen, onClose, isOpen } = useDisclosure({
        isOpen: defaultIsOpen,
        onClose: defaultOnClose,
        onOpen: defaultOnOpen,
    });

    return (
        <Popover
            closeOnBlur
            closeOnEsc
            isLazy
            isOpen={isOpen}
            lazyBehavior="unmount"
            matchWidth
            onClose={onClose}
            onOpen={onOpen}
            returnFocusOnClose={false}
        >
            <ButtonGroup isAttached size="sm" variant="outline">
                <PopoverTrigger>
                    <Button mr="-px">
                        {children}
                    </Button>
                </PopoverTrigger>
                {
                    actions.map(({ icon, label, action }, index) => {
                        return (
                            <IconButton
                                aria-label={label}
                                icon={icon}
                                key={`action_${index}`}
                                onClick={() => action()}
                            />
                        );
                    })
                }
                
            </ButtonGroup>
            <PopoverContent>
                <SelectionPopoverContent {...rest}/>
            </PopoverContent>
        </Popover>
    );
}

export default SelectPopover;
