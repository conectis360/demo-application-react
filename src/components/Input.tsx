import { forwardRef, ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">; // isso irá adicionar todos attributos de um elemento 'input' do html

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;

//é um wrapper-component, onde queremos pegar algo simples e deixar ele no estilo para o nosso projeto
