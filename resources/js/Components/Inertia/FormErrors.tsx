import { Callout } from '@/Components/UI/Callout';
import { RiErrorWarningFill } from '@remixicon/react';

export function InertiaFormErrors({ errors }: { errors: Record<string, string> }) {
  const errorField = (Object.keys(errors) as Array<keyof typeof errors>).find(key => errors[key]);

  return (
    errorField && (
      <Callout variant="error" title="Authentication Error" icon={RiErrorWarningFill}>
        {errors[errorField]}
      </Callout>
    )
  );
}