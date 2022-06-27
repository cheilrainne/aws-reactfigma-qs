/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Registration } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, SelectField, TextField } from "@aws-amplify/ui-react";
export default function SamsungRegistrationForm(props) {
  const { formRegistrationSimple, overrides, ...rest } = props;
  const [inpFullnameValue, setInpFullnameValue] = useStateMutationAction("");
  const [inpEmailValue, setInpEmailValue] = useStateMutationAction("");
  const [inpMobileValue, setInpMobileValue] = useStateMutationAction("");
  const btnRegisterOnClick = useDataStoreCreateAction({
    fields: {
      fullname: inpFullnameValue,
      email: inpEmailValue,
      mobile: inpMobileValue,
    },
    model: Registration,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SamsungRegistrationForm")}
    >
      <Flex
        gap="40px"
        direction="column"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="28px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="John Doe"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={inpFullnameValue}
            onChange={(event) => {
              setInpFullnameValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "InpFullname")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Email"
            placeholder="john.doe@awsamplify.com"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={inpEmailValue}
            onChange={(event) => {
              setInpEmailValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "InpEmail")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Mobile No."
            placeholder="+971 058 555 1234"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={inpMobileValue}
            onChange={(event) => {
              setInpMobileValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "InpMobile")}
          ></TextField>
          <SelectField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Label"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="60px"
          padding="7px 63px 7px 63px"
          size="default"
          isDisabled={false}
          variation="primary"
          children="REGISTER"
          onClick={() => {
            btnRegisterOnClick();
          }}
          {...getOverrideProps(overrides, "BtnRegister")}
        ></Button>
      </Flex>
    </Flex>
  );
}
