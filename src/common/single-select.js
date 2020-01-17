import React, { Component } from "react";
import matchSorter from "match-sorter";
import Downshift from "downshift";
import {
  Label,
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon
} from "./shared.js";
import { css } from "@emotion/core";

const getItems = (items, filter) => {
  return filter
    ? matchSorter(items, filter, {
        keys: ["name"]
      })
    : items;
};

const itemToString = i => (i ? i.name : "");

const Container = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;

      .input-container {
        width: 50%;
      }
      .set-positon-relative {
        position: relative;
      }
    `}
  >
    {props.children}
  </div>
);

/*
 props {
   items - list of items in dropdown must have name as key(or modify items to string function)
   label - label to display
   placeholder - input placeholder
   handler - function that will run and pass what the user selected or cleared
 }
*/
class SingleSelect extends Component {
  state = {
    label: this.props.label,
    items: this.props.items,
    placeholder: this.props.placeholder,
    customHandler: this.props.customHandler
  };

  render() {
    const { items, label, placeholder, customHandler } = this.state;
    return (
      <Container>
        <Downshift
          onChange={selection =>
            selection
              ? customHandler(`You selected ${itemToString(selection)}`)
              : customHandler("selection cleared")
          }
          itemToString={itemToString}
        >
          {({
            getLabelProps,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            clearSelection,
            selectedItem,
            inputValue,
            highlightedIndex
          }) => (
            <div className="input-container">
              <Label {...getLabelProps()}>{label}</Label>
              <div className="set-positon-relative">
                <Input
                  css={css`
                    ::placeholder {
                      /* Chrome, Firefox, Opera, Safari 10.1+ */
                      color: darkgray;
                      font-weight: 300;
                      opacity: 1; /* Firefox */
                    }

                    :-ms-input-placeholder {
                      /* Internet Explorer 10-11 */
                      color: darkgray;
                      font-weight: 300;
                    }

                    ::-ms-input-placeholder {
                      /* Microsoft Edge */
                      color: darkgray;
                      font-weight: 300;
                    }
                  `}
                  {...getInputProps({
                    isOpen,
                    placeholder: `${placeholder}`
                  })}
                />
                {selectedItem ? (
                  <ControllerButton
                    onClick={clearSelection}
                    aria-label="clear selection"
                  >
                    <XIcon />
                  </ControllerButton>
                ) : (
                  <ControllerButton {...getToggleButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>
                )}
              </div>
              <div className="set-positon-relative">
                <Menu {...getMenuProps({ isOpen })}>
                  {isOpen
                    ? getItems(items, inputValue).map((item, index) => (
                        <Item
                          key={index}
                          {...getItemProps({
                            item,
                            index,
                            isActive: highlightedIndex === index,
                            isSelected: selectedItem === item
                          })}
                        >
                          {itemToString(item)}
                        </Item>
                      ))
                    : null}
                </Menu>
              </div>
            </div>
          )}
        </Downshift>
      </Container>
    );
  }
}

export default SingleSelect;
