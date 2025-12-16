import { IconSupport, IconFlashlight, IconSignal } from "@/components";
import { IFeaturesData } from "../types";

export const FeaturesData: IFeaturesData[] = [
  {
    icon: <IconSupport />,
    title: "Servicio constante",
    description:
      "Asistencia técnica disponible las 24 horas, todos los días del año.",
  },
  {
    icon: <IconFlashlight />,
    title: "Máximo Desempeño",
    description: "Conéctate sin interrupciones y navega a máxima velocidad.",
  },
  {
    icon: <IconSignal />,
    title: "Última Tecnología",
    description:
      "Usamos la mejor tecnología para ofrecerte internet estable y rápido.",
  },
];
