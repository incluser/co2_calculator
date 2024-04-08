import { Input } from "@chakra-ui/react";

const CustomInput = (props: { span: string }) => {
  return (
    <div>
      <span>{props.span}</span>
      <Input placeholder="&#x20b8;" />
    </div>
  );
};

export default CustomInput;
