import { useGaleriaConPrecios } from '../../shared/Config/HooksArray';

const precios = [
    ["", "35000"],
    ["", "35000"],
    ["", "35000"],
];

export const sacos = useGaleriaConPrecios('sacos', precios);