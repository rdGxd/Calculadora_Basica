interface IInputValue {
  value?: string;
}

export const InputValue = ({ value }: IInputValue) => {
  return <input value={value} className="border  border-black bg-white p-4 " />;
};
