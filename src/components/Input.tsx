import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>; // isso irá adicionar todos attributos de um elemento 'input' do html

export default function Input({label, id, ...props}: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </p>
    )
}

//é um wrapper-component, onde queremos pegar algo simples e deixar ele no estilo para o nosso projeto