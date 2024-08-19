import { useEffect, useState } from "react";

export default function useFormLogic(url, initDataSet) {
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
