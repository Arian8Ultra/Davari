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
const ViewForm = () => {
  const { formId, fromType } = useParams<{
    formId: string;
    fromType: string;
  }>();
  const [data, setData] = React.useState<any>();
  const [getCompalintForm] = useLazyQuery(GET_COMPLAINT_FORM, {
    variables: {
      id: formId && parseInt(formId),
    },
    onCompleted(data) {
      console.log(data);
      setData(data);
    },
  });

  const [getCompalintResponseForm] = useLazyQuery(
    GET_COMPLAINT_ANSWER_FORM,
    {
      variables: {
        id: formId && parseInt(formId),
      },
      onCompleted(data) {
        console.log(data);
        setData(data);
      },
    }
  );

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
  }, [fromType, formId, getCompalintForm, getCompalintResponseForm]);

  return (
    <React.Fragment>
      <div className="main_grid">
        {fromType === "complaint" &&
          data?.complaintForm_getComplaintForm?.result?.formObjectComplaintResponseForms?.map(
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

        {fromType === "response" &&
            data?.complaintForm_getComplaintAnswerForm?.result?.formObjectComplaintResponseForms?.map(
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
