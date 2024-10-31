import React from "react";
import { Select } from "@chakra-ui/react";

interface Mealkit {
  name: string;
  price: number;
}

interface MealkitProps {
  handleClick: (price: number, name: string) => void;
}

export default function({ handleClick }: MealkitProps) {
  const mealkits: Mealkit[] = [
    { name: "Classic Italian Pasta", price: 12.99 },
    { name: "Korean BBQ Set", price: 18.5 },
    { name: "Buddha Bowl", price: 9.5 },
    { name: "Chicken Wrap", price: 14.0 },
    { name: "Mexican Taco", price: 11.25 },
    { name: "Sushi Roll", price: 22.0 },
    { name: "Vegetable Stir Fry", price: 10.5 },
    { name: "BBQ Ribs", price: 19.99 },
    { name: "Quinoa Salad", price: 8.75 },
    { name: "Seafood Paella", price: 24.0 },
  ];

  const handleChange = (e) => {
    const selectedKit = mealkits.find((kit) => kit.name === e.target.value);
    if (selectedKit) {
      handleClick(selectedKit.price, selectedKit.name);
    }
  };

  return (
    <Select placeholder="Select meal kit" onChange={handleChange} w="13rem">
      {mealkits.map((item, index) => (
        <option value={item.name} key={index}>
          {item.name}
        </option>
      ))}
    </Select>
  );
}

// className은 tailwind   w= 로 주게되면 Chakra ui의 크기를 직접 바꿈
