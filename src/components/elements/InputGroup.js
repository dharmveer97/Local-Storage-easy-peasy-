import { Input, Label } from '../atoms';

const variants = {
  default: 'ring-1 ring-inset',
  secondary: '',
  borderless:
    'py-3 md:py-4 border-t-[0px] border-x-[0px] rounded-none outline-none',
  error: 'text-red-900 placeholder:text-red-300',
};

function InputGroup(props) {
  const {
    children,
    className,
    variant = 'default',
    label,
    error,
    id,
    type,
    ...rest
  } = props;

  const inputVariant = variants[variant];
  return (
    <div>
      {label && <Label id={type || ''}>{label}</Label>}
      <div className="relative rounded-md shadow-sm">
        <Input
          {...rest}
          id={type || id}
          className={`${className} ${inputVariant} ${error && variants.error}`}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            ICON
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default InputGroup;
