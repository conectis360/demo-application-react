import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    el: 'anchor';
}& ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
    if(props.el === 'anchor') {
        return <a href=""></a>
    }

    if(props.el === 'button') {
        return <button></button>
    }
}