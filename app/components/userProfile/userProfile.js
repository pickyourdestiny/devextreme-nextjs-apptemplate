"use client";

import React, { useRef, useState, useCallback } from "react";
import "./userProfile.scss";
import { Form, SimpleItem, Label, EmptyItem } from "devextreme-react/form";
import LabelTemplate from "./labelTemplate";
import Image from "next/image";
import "devextreme-react/text-area";
import { useScreenSize } from "../utils/media-query";
import { ScrollView } from "devextreme-react";

export default function UserProfile() {
  const [bio, setBio] = useState(notes);
  const employeeRef = useRef(initialEmployeeData);

  const { isXSmall, isMedium, isLarge } = useScreenSize();

  const onFieldDataChanged = useCallback((e) => {
    const newFormData = e.component.option("formData");
    employeeRef.current = newFormData;
    const { dataField, value } = e;
    if (dataField === "notes") {
      setBio(value);
    }
  }, []);

  return (
    <React.Fragment>
      {!isXSmall && <h2 className={"content-block"}>Profile</h2>}
      <ScrollView id={"profile-page-scroll"} className={"content-block"}>
        <div className={"dx-card responsive-paddings mb-8"}>
          <div className={"form-avatar"}>
            <Image
              alt={""}
              height={120}
              width={120}
              src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${initialEmployeeData.picture}`}
            />
          </div>
          <span>{bio}</span>
        </div>

        <div className={"dx-card responsive-paddings"}>
          <Form
            id={"form"}
            formData={employeeRef.current}
            onFieldDataChanged={onFieldDataChanged}
            colCountByScreen={colCountByScreen}
          >
            <SimpleItem
              dataField="id"
              editorType="dxTextBox"
              editorOptions={idEditorOptions}
            >
              <Label render={LabelTemplate("info")} />
            </SimpleItem>
            <SimpleItem
              dataField="prefix"
              editorType="dxTextBox"
              editorOptions={idEditorOptions}
            >
              <Label render={LabelTemplate("user")} />
            </SimpleItem>
            <SimpleItem dataField="firstName" editorType="dxTextBox">
              <Label render={LabelTemplate("user")} />
            </SimpleItem>
            <SimpleItem dataField="lastName" editorType="dxTextBox">
              <Label render={LabelTemplate("user")} />
            </SimpleItem>

            <SimpleItem dataField="position" editorType="dxTextBox">
              <Label render={LabelTemplate("info")} />
            </SimpleItem>
            <SimpleItem dataField="birthDate" editorType="dxDateBox">
              <Label render={LabelTemplate("event")} />
            </SimpleItem>
            <SimpleItem dataField="hireDate" editorType="dxDateBox">
              <Label render={LabelTemplate("event")} />
            </SimpleItem>
            <SimpleItem dataField="address" editorType="dxTextBox">
              <Label render={LabelTemplate("home")} />
            </SimpleItem>
            {(isMedium || isLarge) && <EmptyItem />}
            <SimpleItem
              colSpan={2}
              dataField="notes"
              editorType="dxTextArea"
              editorOptions={notesEditorOptions}
            >
              <Label render={LabelTemplate("textdocument")} />
            </SimpleItem>
          </Form>
        </div>
      </ScrollView>
    </React.Fragment>
  );
}

const notes =
  "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you haven't met her, be certain to say hi.\r\n\r\n Sandra also has 2 daughters both of whom are accomplished gymnasts.";

const initialEmployeeData = {
  id: 137354,
  firstName: "Sandra",
  lastName: "Johnson",
  prefix: "Mrs.",
  position: "Controller",
  picture: "images/employees/06.png",
  birthDate: new Date("1974/11/5"),
  hireDate: new Date("2005/05/11"),
  notes,
  address: "4600 N Virginia Rd.",
};

const idEditorOptions = { readOnly: true };
const notesEditorOptions = { height: 100, maxLength: 300 };
const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
};
