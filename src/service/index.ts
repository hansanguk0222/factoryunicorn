import { IClothes, IService } from "@/type";
import axios from "axios";

export const service: IService = {
  async getSize() {
    const { data }: { data: IClothes[] } = await axios.get(
      "https://asia-northeast3-fu-webapp-dev.cloudfunctions.net/api/test"
    );
    return data;
  },
};
