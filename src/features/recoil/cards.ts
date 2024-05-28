import { atom } from "recoil";
import { ICardRes } from "../../models/Card";
import { IChargeRes } from "../../models/Charge";

const creditCardsState = atom<ICardRes[]>({
    key: "creditCards",
    default: []
  });

  const chargeState = atom<IChargeRes|null>({
    key: "charges",
    default: null
  });

export {creditCardsState,chargeState}