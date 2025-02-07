import { Callout } from '@/Components/UI/Callout';

export interface InertiaFormErrorsProps { 
  title: string,
  errors: Record<string, string>,
  icon?: React.ElementType | React.ReactElement

}

export function InertiaFormErrors({ title, errors, icon }: InertiaFormErrorsProps) {
  const errorField = (Object.keys(errors) as Array<keyof typeof errors>).find(key => errors[key]);

  return (
    errorField && (
      <Callout variant="error" title={title} icon={icon}>
        {errors[errorField]}
      </Callout>
    )
  );
}