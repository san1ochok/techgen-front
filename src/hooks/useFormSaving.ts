/* eslint-disable react-hooks/exhaustive-deps */
import { UseFormReturnType } from '@mantine/form';
import { useEffect, useState } from 'react';

export const useFormSaving = <IInitialFormValues>(
  form: UseFormReturnType<
    IInitialFormValues,
    (values: IInitialFormValues) => IInitialFormValues
  >,
  key: string
): () => void => {
  const [needReset, setNeedReset] = useState<boolean>(false)

  //* getting values if exist
  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      try {
        form.setValues(
          JSON.parse(sessionStorage.getItem(key) as string)
        );
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  //* saving when value change
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(form.values));
  }, [form.values]);

  //* reset fields
  const resetFields = (): void => setNeedReset(true)

  const reset = (): void => {
    sessionStorage.removeItem(key)
    setNeedReset(false)
  }

  //* reset
  useEffect(() => {
    needReset && reset()
  }, [needReset])

  return resetFields
};
