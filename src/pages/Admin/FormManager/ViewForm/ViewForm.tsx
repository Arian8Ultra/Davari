/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import "./ViewForm.css";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GET_COMPLAINT_ANSWER_FORM,
  GET_COMPLAINT_FORM,
} from "../../../../GraphQL/Form/Queries";
import {
  FormObj,
  FormObjComplete,
  GET_FORM_OBJ,
} from "../../../../GraphQL/FormObj/Queries";
import FormObjPreview from "../../../../components/FormObj/FormObjPreview";
import { primary } from "../../../../theme/color";
import FormObjPreviewWithQuery from "../../../../components/FormObj/FormObjPreviewWithQuery";
import BackButton from "../../../../components/BackButton";
import { FormTitle } from "../../../../GraphQL/Form/Titles/Queies";
import Title from "../../../../components/Forms/Title/Title";
const ViewForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();

  const [getCompalintForm, { data: complaintData }] = useLazyQuery(
    GET_COMPLAINT_FORM,
    {
      variables: {
        id: formId && parseInt(formId),
      },
      onCompleted(data) {
        console.log(data);
        data.complaintForm_getComplaintForm.result.formObjectComplaintForms.map(
          (item: {
            formObjectId: number;
            gridColumn: number;
            gridRow: number;
            gridColumnStart: number;
          }) => {
            console.log(item);
          }
        );
      },
    }
  );

  const [getCompalintResponseForm, { data: responseData }] =
    useLazyQuery(GET_COMPLAINT_ANSWER_FORM, {
      variables: {
        id: formId && parseInt(formId),
      },
      onCompleted(data) {
        console.log(data);
      },
    });

  const [getFormObj, { data: formObjByIdData }] = useLazyQuery(
    GET_FORM_OBJ,
    {
      onCompleted(data) {
        console.log("data", data);
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  React.useEffect(() => {
    if (fromType === "complaint") {
      void getCompalintForm();
    } else if (fromType === "response") {
      void getCompalintResponseForm();
    }
  }, [fromType, getCompalintForm, getCompalintResponseForm]);

  return (
    <React.Fragment>
      <BackButton to="/admin/formanager" />
      <div className="main_grid_view">
        {fromType === "complaint" &&
          complaintData?.complaintForm_getComplaintForm?.result?.formTitles?.map(
            (item: FormTitle, index: number) => {
              return (
                <Title
                  key={index}
                  id={item.id}
                  row={index + 1}
                  // setValue={setValue}
                  // value={value}
                  />
                // <FormObjPreviewWithQuery
                //   key={index}
                //   formObjectId={item.formObjectId}
                //   gridColumn={item.gridColumn}
                //   gridRow={item.gridRow}
                //   girdColumnStart={item.gridColumnStart}
                // />
              );
            }
          )}

        {fromType === "response" &&
          responseData?.complaintForm_getComplaintAnswerForm?.result?.formObjectComplaintResponseForms?.map(
            (item: FormObjComplete, index: number) => {
              void getFormObj({
                variables: {
                  id: item.id,
                },
                onCompleted(data) {
                  return (
                    <FormObjPreview
                      key={index}
                      id={item.id}
                      formObjectType={item.formObjectType}
                      gridColumn={item.gridColumn}
                      gridRow={item.gridRow}
                      girdColumnStart={item.gridColumnStart}
                      label={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.label
                      }
                      name={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.name
                      }
                      unit={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.unit
                      }
                      stickyText={
                        formObjByIdData?.formObject_getFormObject
                          ?.result?.stickyText
                      }
                      color={primary}
                    />
                  );
                },
              });
            }
          )}
      </div>
    </React.Fragment>
  );
};

export default ViewForm;
