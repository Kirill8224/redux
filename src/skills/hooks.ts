import { useSelector } from "react-redux";
import type { StoreType, Dispathtype } from "./store";
import { useDispatch } from "react-redux";
export const useAppDispatch= useDispatch.withTypes<Dispathtype>()
export const useAppSelector= useSelector.withTypes<StoreType>()