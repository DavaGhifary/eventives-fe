import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSwitch,
} from "@coreui/react";
import useFormLogic from "../../../src/hooks/useFormLogic";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useSWR from "swr";

let url = "/api/event-management/event-categories/";
const initFormData = {
  method: "POST",
  id: "",
  categoryName: "",
  status: false,
};
let preloadedValues = { ...initFormData };
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EventCategoryForm(props) {
  const router = useRouter();
  //Penentu antara form edit dan create
  const { data, error } = useSWR(
    !props.isCreateMode ? url + router.query.id : null,
    fetcher
  );
  if (!props.isCreateMode) {
    preloadedValues = { ...data, method: "PATCH" };
  } else {
    preloadedValues = { ...initFormData };
  }
  //
  const { register, handleSubmit, control, reset, formState } = useForm({
    defaultValues: preloadedValues,
  });
  const { errors } = formState;
  useEffect(() => {
    reset(data);
  }, [reset, data]);

  async function onSubmit(data, event) {
    event.preventDefault();
    const { id } = router.query;
    if (!id) {
      try {
        const response = await fetch(url, {
          method: preloadedValues.method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the data. Please try again.");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await fetch(url + id, {
          method: preloadedValues.method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the data. Please try again.");
        }
      } catch (error) {
        console.error(error);
      }
    }
    try {
      const response = await fetch(url, {
        method: preloadedValues.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CForm onSubmit={handleSubmit(onSubmit)} className="row g-3">
      <CCol xs={12}>
        <Controller
          name="categoryName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <CFormInput {...field} label="Category Name" type="text" />
          )}
        ></Controller>
      </CCol>
      <CCol xs={12}>
        <Controller
          name="status"
          control={control}
          render={({ field: { value, onChange } }) => (
            <CFormSwitch
              label="Status"
              defaultChecked={value}
              onChange={onChange}
            />
          )}
        ></Controller>
      </CCol>
      <CCol xs={12}>
        <Controller
          name="displayValue"
          control={control}
          render={({ field }) => (
            <CFormLabel>Test: {JSON.stringify(preloadedValues)}</CFormLabel>
          )}
        ></Controller>
      </CCol>
      <CButton type="submit" color="primary">
        Submit
      </CButton>
    </CForm>
  );
}
