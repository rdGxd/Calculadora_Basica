interface IInputValue {
  value?: string;
}

export const InputValue = ({ value }: IInputValue) => {
  return (
    <input
      type="text"
      value={value}
      defaultValue={""}
      className="border  border-black bg-white p-4 "
    />
  );
};
