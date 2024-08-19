import {
  CButton,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CForm,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function TestFormComponent() {
  const { modalVisibility, toggleModal } = useModalTrigger();
  return (
    <CModal visible={modalVisibility}>
      <CHeader>
        <CModalTitle>{props.title}</CModalTitle>
      </CHeader>
      <CModalBody>
        <CForm onSubmit={handleSubmit(onSubmit)}>
          {React.Children.map(children, (child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name,
                  },
                })
              : child;
          })}
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" form={props.title} onClick={toggleModal}>
          Close
        </CButton>
        <CButton color="primary" form={props.title} onClick={[props.save]}>
          Save
        </CButton>
      </CModalFooter>
    </CModal>
  );
}

function useModalTrigger() {
  const [modalVisibility, setModalVisibility] = useState(false);
  function toggleModal() {
    setModalVisibility(!modalVisibility);
  }
  return { modalVisibility, toggleModal };
}

//Required variables: url
//Optional variables: id
export function FormWrapper({id, onSubmit}) {
  //Data retrieval variables
  let method = { method: "POST" };
  let data;
  if (!!props.id) {
    data = fetch(props.url + id);
  }
  const isCreateMode = !data;
  if (!isCreateMode) {
    method.method = "PATCH";
    Array.prototype.push.apply(data, method);
  }
  return (
    <CForm onSubmit={onSubmit}></CForm>
  );
}

function SmartFormWrapper({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </CForm>
  );
}

// export function Input({ register, name, ...rest }) {
//   return <CFormInput {...register(name)} {...rest} />;
// }

// export function Select({ register, options, name, ...rest }) {
//   return (
//     <CFormSelect {...register(name)} {...rest}>
//       {options.map((value) => (
//         <option key={value} value={value}>
//           {value}
//         </option>
//       ))}
//     </CFormSelect>
//   );
// }

export function useFormLogic(url, initDataSet) {
  const [formData, setFormData] = useState(initDataSet);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const onChange = (event) => {
    const { name, value, type, checked, options } = event.target;
    if (type == "checkbox") {
      if (!!options) {
        const selectedOptions = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value);
        setFormData({ ...formData, [name]: selectedOptions });
      } else {
        if (checked) {
          setFormData({ ...formData, [name]: true });
        } else {
          setFormData({ ...formData, [name]: false });
        }
      }
    } else if (type === "radio" && checked) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  async function onSubmit(event) {
    event.preventDefault();
    const method = formData.method;
    setFormLoading(true);
    setFormError(null);

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      setFormData(initDataSet);
    } catch (error) {
      setFormError(error.message);
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  }

  return {
    formError,
    formLoading,
    onChange,
    onSubmit,
    formData,
  };
}
