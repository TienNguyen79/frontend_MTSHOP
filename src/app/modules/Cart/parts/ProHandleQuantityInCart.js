import { Minus, Plus } from "lucide-react";
import React from "react";
import { useController, useForm } from "react-hook-form";

const ProHandleQuantityInCart = ({
  control,
  name,
  quantity = 1,
  id,
  allow = false,
  onQuantityChange,
  className = "p-1 max-w-[170px] ",
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: quantity,
  });

  const handleIncrease = () => {
    // Lấy giá trị hiện tại của trường nhập liệu thông qua field
    const currentQuantity = field.value;
    const newQuantity = parseInt(currentQuantity, 10) + 1;
    field.onChange(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleDecrease = () => {
    const currentQuantity = field.value;
    if (currentQuantity > 1) {
      const newQuantity = parseInt(currentQuantity, 10) - 1;
      field.onChange(newQuantity);
      onQuantityChange(id, newQuantity);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-x-2  border-[2px] max-w-[170px] rounded-md ${className}`}
    >
      <span className="block    cursor-pointer" onClick={handleDecrease}>
        <Minus size={"14px"}></Minus>
      </span>
      <input
        value={field.value}
        className="w-[40px] text-center border-none outline-none"
        onChange={field.onChange}
        {...field}
      ></input>
      <span className="block    cursor-pointer" onClick={handleIncrease}>
        <Plus size={"14px"}></Plus>
      </span>
    </div>
  );
};

export default ProHandleQuantityInCart;
