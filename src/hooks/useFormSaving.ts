import { UseFormReturnType } from '@mantine/form';
import { useEffect } from 'react';

export const useFormSaving = <IInitialFormValues>(
  form: UseFormReturnType<
    IInitialFormValues,
    (values: IInitialFormValues) => IInitialFormValues
  >,
  key: string
) => {
  //* getting values if exist
  useEffect(() => {
    const storedValue = window.sessionStorage.getItem(key);
    if (storedValue) {
      try {
        form.setValues(
          JSON.parse(window.sessionStorage.getItem(key) as string)
        );
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* saving when value change
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(form.values));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values]);
};
