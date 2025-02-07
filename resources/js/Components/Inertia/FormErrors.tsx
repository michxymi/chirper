import { Callout } from '@/Components/UI/Callout';
import { RiErrorWarningFill } from '@remixicon/react';

export interface InertiaFormErrorsProps { 
  title: string,
  errors: Record<string, string>
}
export function InertiaFormErrors({ title, errors }: InertiaFormErrorsProps) {
  const errorField = (Object.keys(errors) as Array<keyof typeof errors>).find(key => errors[key]);

  return (
    errorField && (
      <Callout variant="error" title={title} icon={RiErrorWarningFill}>
        {errors[errorField]}
      </Callout>
    )
  );
}