
import * as React from 'react';
import { View } from 'react-native';
import { Input, Text } from '../atom';

interface FormFieldProps extends React.ComponentPropsWithoutRef<typeof Input> {
  label: string;
  error?: string;
}

const FormField = React.forwardRef<
  React.ElementRef<typeof Input>,
  FormFieldProps
>(({ label, error, ...props }, ref) => {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-base font-medium text-foreground">{label}</Text>
      <Input ref={ref} {...props} />
      {error && <Text className="mt-1 text-sm text-destructive">{error}</Text>}
    </View>
  );
});
FormField.displayName = 'FormField';

export { FormField };
