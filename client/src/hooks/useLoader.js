import { useContext } from "react";
import LoaderContext from "../contexts/LoaderContext";

export default function useLoader() {
    return useContext(LoaderContext);
}